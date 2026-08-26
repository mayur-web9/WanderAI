import { DESTINATION_IMAGE_MAP } from '../utils/imageService';
import { supabase } from '../utils/supabaseClient';
import { 
  Event, 
  Marketplace, 
  Feedback, 
  Chat, 
  Message, 
  UserSettings, 
  ItineraryRecord, 
  Profile 
} from '../types';
import { DESTINATIONS, AiDestination } from '../utils/aiData';
import { mockEvents, DEFAULT_MARKETPLACES } from '../utils/mockData';

/**
 * PROFILES & USER SETTINGS (Safe non-destructive interaction with shared public.profiles)
 */
export async function getProfile(userId: string): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export async function upsertProfile(profile: Partial<Profile> & { id: string }): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({
        ...profile,
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export async function getUserSettings(userId: string): Promise<UserSettings | null> {
  try {
    const { data, error } = await supabase
      .from('user_settings')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

/**
 * DEDICATED TRAVEL CHATS & MESSAGES (travel_chats, travel_messages)
 * Isolated so it does not interfere with other AI chatbot projects
 */
export async function getOrCreateActiveChat(userId: string, title = 'WanderAI Travel Plan'): Promise<Chat | null> {
  try {
    // Check travel_chats table first
    const { data: existingChats, error: fetchErr } = await supabase
      .from('travel_chats')
      .select('*')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false })
      .limit(1);

    if (!fetchErr && existingChats && existingChats.length > 0) {
      return existingChats[0];
    }

    const { data: newChat, error: insertErr } = await supabase
      .from('travel_chats')
      .insert({
        user_id: userId,
        title,
        is_pinned: false
      })
      .select()
      .single();

    if (!insertErr && newChat) {
      return newChat;
    }
  } catch {
    console.warn('travel_chats query fallback:');
  }

  // Fallback to legacy chats table if travel_chats is not yet migrated
  try {
    const { data: legacyChat } = await supabase
      .from('chats')
      .select('*')
      .eq('user_id', userId)
      .limit(1);
    if (legacyChat && legacyChat.length > 0) return legacyChat[0];
  } catch {
    // Silently fallback on missing table/column
  }

  return null;
}

export async function fetchChatMessages(chatId: string): Promise<Message[]> {
  try {
    const { data, error } = await supabase
      .from('travel_messages')
      .select('*')
      .eq('chat_id', chatId)
      .order('created_at', { ascending: true });

    if (!error && data) {
      return data;
    }
  } catch {
    console.warn('travel_messages query fallback:');
  }

  // Fallback to legacy messages table if needed
  try {
    const { data: legacyMsgs } = await supabase
      .from('messages')
      .select('*')
      .eq('chat_id', chatId)
      .order('created_at', { ascending: true });
    if (legacyMsgs) return legacyMsgs;
  } catch {
    // Silently fallback on missing table/column
  }

  return [];
}

export async function saveMessageToSupabase(
  chatId: string, 
  userId: string, 
  role: 'user' | 'assistant' | 'system', 
  content: string,
  model = 'gemini-3.6-flash'
): Promise<Message | null> {
  try {
    const { data, error } = await supabase
      .from('travel_messages')
      .insert({
        chat_id: chatId,
        user_id: userId,
        role,
        content,
        model,
        tokens_used: content.length / 4 | 0
      })
      .select()
      .single();

    if (!error && data) {
      // Touch travel_chats updated_at
      await supabase.from('travel_chats').update({ updated_at: new Date().toISOString() }).eq('id', chatId);
      return data;
    }
  } catch {
    console.warn('saveMessage travel_messages fallback:');
  }

  // Fallback attempt to messages table
  try {
    const { data } = await supabase
      .from('messages')
      .insert({
        chat_id: chatId,
        user_id: userId,
        role,
        content,
        model,
        tokens_used: content.length / 4 | 0
      })
      .select()
      .single();
    return data;
  } catch {
    // Silently fallback on missing table/column
  }

  return null;
}

/**
 * DEDICATED TRAVEL DESTINATIONS (travel_destinations)
 */
export async function getDbDestinations(): Promise<AiDestination[]> {
  try {
    // Query travel_destinations first
    const { data, error } = await supabase
      .from('travel_destinations')
      .select('*')
      .order('name', { ascending: true });

    if (!error && data && data.length > 0) {
      return (data as Array<Record<string, unknown>>).map((d) => ({
        id: typeof d.id === 'string' ? d.id : String(d.id || ''),
        name: typeof d.name === 'string' ? d.name : 'Destination',
        emoji: typeof d.emoji === 'string' ? d.emoji : 'ðŸ“',
        tag: typeof d.tag === 'string' ? d.tag : (typeof d.category === 'string' ? d.category : 'Historical'),
        desc: typeof d.desc === 'string' ? d.desc : (typeof d.description === 'string' ? d.description : (typeof d.short_description === 'string' ? d.short_description : '')),
        location: typeof d.location === 'string' ? d.location : (typeof d.district === 'string' ? `${d.district}, India` : 'India'),
        image: (typeof d.image === 'string' && d.image.startsWith('http')) ? d.image : (DESTINATION_IMAGE_MAP[typeof d.id === 'string' ? d.id : ''] || DESTINATION_IMAGE_MAP[typeof d.name === 'string' ? d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''] || 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80&auto=format&fit=crop')
      }));
    }
  } catch {
    console.warn('travel_destinations query fallback');
  }

  // Fallback to local data
  return DESTINATIONS;
}

export async function saveDbDestination(dest: AiDestination): Promise<AiDestination> {
  try {
    const payload = {
      name: dest.name,
      emoji: dest.emoji || 'ðŸ“',
      tag: dest.tag,
      desc: dest.desc,
      location: dest.location,
      image: dest.image,
      is_featured: true,
      category: dest.tag?.toLowerCase() || 'historical',
      description: dest.desc,
      short_description: dest.desc,
      images: [dest.image],
      entry_fee: 0
    };

    if (dest.id && dest.id.includes('-')) {
      const { data, error } = await supabase
        .from('travel_destinations')
        .update(payload)
        .eq('id', dest.id)
        .select()
        .single();
      if (!error && data) return dest;
    } else {
      const { data, error } = await supabase
        .from('travel_destinations')
        .insert(payload)
        .select()
        .single();
      if (!error && data) return { ...dest, id: data.id };
    }
  } catch {
    console.warn('saveDbDestination error:');
  }
  return dest;
}

export async function deleteDbDestination(idOrName: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('travel_destinations')
      .delete()
      .or(`id.eq.${idOrName},name.eq.${idOrName}`);
    return !error;
  } catch {
    return false;
  }
}

/**
 * DEDICATED TRAVEL EVENTS (travel_events)
 */
export async function getDbEvents(): Promise<Event[]> {
  try {
    const { data, error } = await supabase
      .from('travel_events')
      .select('*')
      .order('date_start', { ascending: true });

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch {
    console.warn('travel_events query fallback:');
  }
  return mockEvents;
}

export async function saveDbEvent(event: Event): Promise<Event> {
  try {
    const payload = {
      name: event.name,
      description: event.description,
      category: event.category,
      date_start: event.date_start,
      date_end: event.date_end,
      location: event.location,
      image_url: event.image_url
    };

    if (event.id && event.id.includes('-')) {
      const { data, error } = await supabase
        .from('travel_events')
        .update(payload)
        .eq('id', event.id)
        .select()
        .single();
      if (!error && data) return data;
    } else {
      const { data, error } = await supabase
        .from('travel_events')
        .insert(payload)
        .select()
        .single();
      if (!error && data) return data;
    }
  } catch {
    console.warn('saveDbEvent error:');
  }
  return event;
}

export async function deleteDbEvent(id: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('travel_events').delete().eq('id', id);
    return !error;
  } catch {
    return false;
  }
}

/**
 * DEDICATED TRAVEL MARKETPLACES (travel_marketplaces)
 */
export async function getDbMarketplaces(): Promise<Marketplace[]> {
  try {
    const { data, error } = await supabase
      .from('travel_marketplaces')
      .select('*')
      .order('name', { ascending: true });

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch {
    console.warn('travel_marketplaces query fallback:');
  }
  return DEFAULT_MARKETPLACES as unknown as Marketplace[];
}

export async function saveDbMarketplace(market: Marketplace): Promise<Marketplace> {
  try {
    const payload = {
      name: market.name,
      description: market.description,
      location: market.location,
      image: market.image,
      tags: market.tags
    };

    if (market.id && market.id.includes('-')) {
      const { data, error } = await supabase
        .from('travel_marketplaces')
        .update(payload)
        .eq('id', market.id)
        .select()
        .single();
      if (!error && data) return data;
    } else {
      const { data, error } = await supabase
        .from('travel_marketplaces')
        .insert(payload)
        .select()
        .single();
      if (!error && data) return data;
    }
  } catch {
    console.warn('saveDbMarketplace error:');
  }
  return market;
}

export async function deleteDbMarketplace(id: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('travel_marketplaces').delete().eq('id', id);
    return !error;
  } catch {
    return false;
  }
}

/**
 * DEDICATED TRAVEL FEEDBACK (travel_feedback)
 */
export async function getDbFeedback(): Promise<Feedback[]> {
  try {
    const { data, error } = await supabase
      .from('travel_feedback')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      return data;
    }
  } catch {
    console.warn('travel_feedback query fallback:');
  }
  return [];
}

export async function submitDbFeedback(feedback: Omit<Feedback, 'id' | 'created_at'>): Promise<Feedback | null> {
  try {
    const { data, error } = await supabase
      .from('travel_feedback')
      .insert(feedback)
      .select()
      .single();

    if (!error && data) {
      return data;
    }
  } catch {
    console.warn('submitDbFeedback error:');
  }
  return null;
}

export async function deleteDbFeedback(id: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('travel_feedback').delete().eq('id', id);
    return !error;
  } catch {
    return false;
  }
}

/**
 * DEDICATED TRAVEL ITINERARIES (travel_itineraries)
 */
export async function saveDbItinerary(plan: {
  user_id?: string;
  session_id?: string;
  days: string;
  interest: string;
  budget: string;
  city: string;
  destination: string;
  itinerary_text: string;
  place_notes?: string;
}): Promise<ItineraryRecord | null> {
  try {
    const { data, error } = await supabase
      .from('travel_itineraries')
      .insert(plan)
      .select()
      .single();

    if (!error && data) {
      return data;
    }
  } catch {
    console.warn('saveDbItinerary error:');
  }
  return null;
}

export async function getDbItineraries(userId?: string): Promise<ItineraryRecord[]> {
  try {
    let query = supabase.from('travel_itineraries').select('*').order('created_at', { ascending: false });
    if (userId) {
      query = query.eq('user_id', userId);
    }
    const { data, error } = await query;
    if (!error && data) {
      return data;
    }
  } catch {
    console.warn('getDbItineraries error:');
  }
  return [];
}




