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
  loginAsDemo: () => Promise<UserProfile>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_TRAVELER: UserProfile = {
  id: '00000000-0000-0000-0000-000000000001',
  email: 'traveler@wanderai.com',
  full_name: 'Ananya Sharma',
  username: 'ananya_traveler',
  bio: 'Passionate explorer of unseen Indian heritage & nature trails.',
  role: 'tourist',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Sync Supabase Auth User to UserProfile
  const syncSupabaseUser = async (sbUser: User): Promise<UserProfile> => {
    const profile = await getProfile(sbUser.id);
    const fullName = profile?.full_name || sbUser.user_metadata?.full_name || sbUser.email?.split('@')[0] || 'Traveler';
    const role: 'tourist' = 'tourist';

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
          localStorage.removeItem('wanderai_demo_user');
        } else {
          // Check for saved demo session
          const savedDemo = localStorage.getItem('wanderai_demo_user');
          if (savedDemo) {
            try {
              setUser(JSON.parse(savedDemo));
            } catch {
              setUser(null);
            }
          } else {
            setUser(null);
          }
        }
      } catch (err) {
        console.warn('Supabase getSession note:', err);
        const savedDemo = localStorage.getItem('wanderai_demo_user');
        if (savedDemo) {
          try {
            setUser(JSON.parse(savedDemo));
          } catch {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const appUser = await syncSupabaseUser(session.user);
        setUser(appUser);
        localStorage.removeItem('wanderai_demo_user');
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loginAsDemo = async (): Promise<UserProfile> => {
    // Try to sign in or sign up demo account in Supabase
    try {
      const { data: signInData, error: signInErr } = await supabase.auth.signInWithPassword({
        email: 'traveler@wanderai.com',
        password: 'Traveler@12345'
      });

      if (!signInErr && signInData.user) {
        const appUser = await syncSupabaseUser(signInData.user);
        setUser(appUser);
        localStorage.removeItem('wanderai_demo_user');
        return appUser;
      }

      // If sign in fails, auto-sign up
      const { data: signUpData, error: signUpErr } = await supabase.auth.signUp({
        email: 'traveler@wanderai.com',
        password: 'Traveler@12345',
        options: {
          data: {
            full_name: 'Ananya Sharma',
          }
        }
      });

      if (!signUpErr && signUpData.user) {
        const appUser = await syncSupabaseUser(signUpData.user);
        setUser(appUser);
        localStorage.removeItem('wanderai_demo_user');
        return appUser;
      }
    } catch {
      // fallback to instant demo profile
    }

    // Instant local demo fallback
    setUser(DEMO_TRAVELER);
    localStorage.setItem('wanderai_demo_user', JSON.stringify(DEMO_TRAVELER));
    return DEMO_TRAVELER;
  };

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    const cleanEmail = email.trim().toLowerCase();

    // Check if demo email is requested
    if (cleanEmail === 'traveler@wanderai.com' || cleanEmail.includes('demo')) {
      return loginAsDemo();
    }

    let { data, error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password,
    });

    // Auto-create account if user doesn't exist yet on first sign-in attempt
    if (error && (error.message?.includes('Invalid login credentials') || error.message?.includes('Email not confirmed'))) {
      try {
        const { data: signUpData, error: signUpErr } = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: {
              full_name: cleanEmail.split('@')[0].replace(/[._]/g, ' ').replace(/^./, str => str.toUpperCase()) || 'Traveler',
            },
          },
        });

        if (!signUpErr && signUpData.user) {
          data = signUpData;
          error = null;
        }
      } catch {
        // continue to error handler
      }
    }

    if (error) {
      throw new Error(error.message || 'Invalid email or password. Please verify credentials or register.');
    }

    if (!data.user) {
      throw new Error('Sign in failed. Please check credentials.');
    }

    const appUser = await syncSupabaseUser(data.user);
    setUser(appUser);
    localStorage.removeItem('wanderai_demo_user');
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
    localStorage.removeItem('wanderai_demo_user');
    return appUser;
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      // ignore
    }
    localStorage.removeItem('wanderai_demo_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, loginAsDemo }}>
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
