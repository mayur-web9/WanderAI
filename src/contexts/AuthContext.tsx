import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import type { User } from '@supabase/supabase-js';
import type { UserProfile } from '../types';
import { getProfile, upsertProfile, getUserSettings } from '../services/supabaseService';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signIn: (opts: { email: string; password: string }) => Promise<UserProfile>;
  signUp: (opts: { email: string; password: string; full_name: string }) => Promise<UserProfile>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Sync Supabase Auth User to UserProfile
  const syncSupabaseUser = async (sbUser: User): Promise<UserProfile> => {
    const profile = await getProfile(sbUser.id);
    const fullName = profile?.full_name || sbUser.user_metadata?.full_name || sbUser.email?.split('@')[0] || 'Traveler';
    const isAdmin = sbUser.email?.toLowerCase().includes('admin') || sbUser.email === 'admin@wanderai.com';
    const role = isAdmin ? 'admin' : ((profile?.bio?.includes('admin') ? 'admin' : 'tourist') as 'tourist' | 'admin');

    const appUser: UserProfile = {
      id: sbUser.id,
      email: sbUser.email || '',
      full_name: fullName,
      username: profile?.username || undefined,
      bio: profile?.bio || undefined,
      role,
      created_at: sbUser.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Ensure profile row exists in public.profiles
    if (!profile) {
      await upsertProfile({
        id: sbUser.id,
        full_name: fullName,
        email: sbUser.email,
        username: sbUser.email?.split('@')[0]
      });
    }

    // Ensure user settings exist
    await getUserSettings(sbUser.id);

    return appUser;
  };

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        
        if (session?.user) {
          const appUser = await syncSupabaseUser(session.user);
          setUser(appUser);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.warn('Supabase getSession error:', err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const appUser = await syncSupabaseUser(session.user);
        setUser(appUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      // If user doesn't exist or credentials failed, provide clear message
      throw new Error(error.message || 'Invalid email or password.');
    }

    if (!data.user) {
      throw new Error('Sign in failed. No user returned.');
    }

    const appUser = await syncSupabaseUser(data.user);
    setUser(appUser);
    return appUser;
  };

  const signUp = async ({ email, password, full_name }: { email: string; password: string; full_name: string }) => {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: {
          full_name,
        },
      },
    });

    if (error) {
      throw new Error(error.message || 'Registration failed.');
    }

    if (!data.user) {
      throw new Error('Registration failed. Please check your email.');
    }

    // Upsert into public.profiles
    await upsertProfile({
      id: data.user.id,
      full_name,
      email: data.user.email,
      username: email.split('@')[0],
    });

    const appUser = await syncSupabaseUser(data.user);
    setUser(appUser);
    return appUser;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
