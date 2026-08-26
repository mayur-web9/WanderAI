export interface Destination {
  id: string;
  name: string;
  district: string;
  state?: string;
  category: 'waterfall' | 'temple' | 'wildlife' | 'tribal' | 'historical' | 'park' | 'nature' | 'heritage' | 'beach' | 'hill';
  description: string;
  short_description: string;
  latitude?: number;
  longitude?: number;
  best_time?: string;
  entry_fee?: number;
  is_featured: boolean;
  famous_things?: string[];
  nearby_markets?: string[];
  local_festivals?: string[];
  transit_info?: string;
  rating?: number;
  created_at?: string;
  images?: string[];
  image?: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  category: 'festival' | 'fair' | 'cultural' | 'sports';
  date_start: string;
  date_end: string;
  location: string;
  state?: string;
  rituals?: string[];
  famous_for?: string[];
  nearby_markets?: string[];
  how_to_reach?: string;
  best_viewing_tips?: string;
  traditional_foods?: string[];
  created_at?: string;
  image_url?: string;
}

export interface Marketplace {
  id: string;
  name: string;
  description: string;
  location: string;
  state?: string;
  tags: string[];
  famous_items?: string[];
  best_time_to_visit?: string;
  timings?: string;
  nearby_eateries?: string[];
  shopping_tips?: string[];
  created_at?: string;
  image?: string;
}

export interface Review {
  id: string;
  user_id: string;
  user_name?: string;
  location?: string;
  rating: number;
  comment?: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  target_type?: 'destination';
  target_id?: string;
  created_at: string;
}

export interface Feedback {
  id: string;
  user_id?: string;
  user_email: string;
  user_name: string;
  message: string;
  category: 'bug' | 'suggestion' | 'praise' | 'other';
  rating?: number;
  created_at: string;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  username?: string;
  bio?: string;
  role: 'tourist' | 'guide';
  phone?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  full_name: string | null;
  username: string | null;
  email: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

export interface Chat {
  id: string;
  user_id: string;
  title: string;
  is_pinned: boolean;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  chat_id: string;
  user_id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  model: string;
  tokens_used: number;
  created_at: string;
}

export interface UserSettings {
  id: string;
  user_id: string;
  theme: string;
  enter_to_send: boolean;
  streaming_enabled: boolean;
  markdown_enabled: boolean;
  selected_model: string;
  created_at: string;
  updated_at: string;
}

export interface DailyActivity {
  id: string;
  user_id: string;
  activity_date: string;
  message_count: number;
  chat_count: number;
  created_at: string;
  updated_at: string;
}

export interface Bookmark {
  id: string;
  user_id: string;
  message_id: string;
  created_at: string;
}

export interface ItineraryRecord {
  id: string;
  user_id?: string;
  session_id?: string;
  days: string;
  interest: string;
  budget: string;
  city: string;
  destination: string;
  itinerary_text: string;
  place_notes?: string;
  created_at: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatHistory {
  id: string;
  session_id: string;
  user_email?: string;
  messages: ChatMessage[];
  created_at: string;
}

export interface TripPlan {
  id: string;
  session_id: string;
  user_email?: string;
  request_info: Record<string, unknown>;
  response_text: string;
  created_at: string;
}
