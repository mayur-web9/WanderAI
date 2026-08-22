-- ==============================================================================
-- WanderAI Travel Platform - Safe Co-existence Database Script
-- ==============================================================================
-- NOTE: This script creates dedicated 'travel_*' tables within your Supabase project
-- so it runs SAFELY alongside other projects (such as your aichatbot project)
-- without modifying, dropping, or conflicting with any existing tables!
--
-- Run this script in the Supabase SQL Editor:
-- (Project URL: https://xowroyukhnemfukrrruq.supabase.co)
-- ==============================================================================

-- 1. Enable UUID Extension (Idempotent)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. DEDICATED TRAVEL AI CHATS & MESSAGES
-- (Completely separated from other chatbot projects)
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.travel_chats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title text NOT NULL DEFAULT 'WanderAI Travel Plan',
  is_pinned boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.travel_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chat_id uuid NOT NULL REFERENCES public.travel_chats(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content text NOT NULL,
  model text DEFAULT 'gemini-3.6-flash',
  tokens_used integer DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- ==============================================================================
-- 3. DEDICATED TOURISM TABLES
-- ==============================================================================

-- 3.1 Travel Destinations Directory
CREATE TABLE IF NOT EXISTS public.travel_destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  emoji text DEFAULT '📍',
  tag text DEFAULT 'Historical',
  "desc" text,
  description text,
  short_description text,
  location text NOT NULL,
  district text,
  image text NOT NULL,
  images text[] DEFAULT '{}',
  category text DEFAULT 'historical',
  entry_fee integer DEFAULT 0,
  is_featured boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- 3.2 Cultural Events & Festivals Calendar
CREATE TABLE IF NOT EXISTS public.travel_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  category text DEFAULT 'festival',
  date_start text,
  date_end text,
  location text,
  image_url text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- 3.3 Traditional Bazaars & Marketplaces
CREATE TABLE IF NOT EXISTS public.travel_marketplaces (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  location text,
  image text,
  tags text[] DEFAULT '{}',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- 3.4 Traveler Feedback & Ratings
CREATE TABLE IF NOT EXISTS public.travel_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  user_name text NOT NULL,
  user_email text NOT NULL,
  category text DEFAULT 'suggestion',
  message text NOT NULL,
  rating integer DEFAULT 5,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- 3.5 AI Saved Itineraries
CREATE TABLE IF NOT EXISTS public.travel_itineraries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  days text NOT NULL,
  interest text NOT NULL,
  budget text NOT NULL,
  city text NOT NULL,
  destination text NOT NULL,
  itinerary_text text NOT NULL,
  place_notes text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- ==============================================================================
-- 4. ROW LEVEL SECURITY (RLS) POLICIES FOR TRAVEL TABLES
-- ==============================================================================

ALTER TABLE public.travel_chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_marketplaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_itineraries ENABLE ROW LEVEL SECURITY;

-- Travel Chats & Messages
DROP POLICY IF EXISTS "travel_chats_all" ON public.travel_chats;
CREATE POLICY "travel_chats_all" ON public.travel_chats FOR ALL USING (true);

DROP POLICY IF EXISTS "travel_messages_all" ON public.travel_messages;
CREATE POLICY "travel_messages_all" ON public.travel_messages FOR ALL USING (true);

-- Tourism Content (Public read & manage)
DROP POLICY IF EXISTS "travel_destinations_all" ON public.travel_destinations;
CREATE POLICY "travel_destinations_all" ON public.travel_destinations FOR ALL USING (true);

DROP POLICY IF EXISTS "travel_events_all" ON public.travel_events;
CREATE POLICY "travel_events_all" ON public.travel_events FOR ALL USING (true);

DROP POLICY IF EXISTS "travel_marketplaces_all" ON public.travel_marketplaces;
CREATE POLICY "travel_marketplaces_all" ON public.travel_marketplaces FOR ALL USING (true);

DROP POLICY IF EXISTS "travel_feedback_all" ON public.travel_feedback;
CREATE POLICY "travel_feedback_all" ON public.travel_feedback FOR ALL USING (true);

DROP POLICY IF EXISTS "travel_itineraries_all" ON public.travel_itineraries;
CREATE POLICY "travel_itineraries_all" ON public.travel_itineraries FOR ALL USING (true);

-- ==============================================================================
-- 5. INITIAL SEED DATA FOR TRAVEL TABLES
-- ==============================================================================

INSERT INTO public.travel_destinations (name, emoji, tag, "desc", location, image, is_featured)
VALUES 
  ('Taj Mahal', '🕌', 'Historical', 'Iconic ivory-white marble mausoleum on the right bank of the river Yamuna in Agra.', 'Agra, Uttar Pradesh', '/assets/destinations/Taj_mahal.jpg', true),
  ('Varanasi Ghats', '🛕', 'Spiritual', 'Ancient spiritual capital of India along the sacred River Ganga, famous for mesmerizing evening Ganga Aarti.', 'Varanasi, Uttar Pradesh', '/assets/destinations/varanasi.jpg', true),
  ('Jaipur Amer Fort', '🏰', 'Historical', 'Magnificent hilltop fort showcasing Rajput architecture, mirror palace (Sheesh Mahal), and sweeping valley views.', 'Jaipur, Rajasthan', '/assets/destinations/amer_fort.jpg', true),
  ('Kerala Backwaters', '🌴', 'Eco & Nature', 'A serene network of tranquil lagoons, palm-fringed canals, and traditional luxury houseboats in Alleppey.', 'Alleppey, Kerala', '/assets/destinations/kerala_backwaters.jpg', true),
  ('Pangong Tso Lake', '⛰️', 'Adventure', 'A breathtaking high-altitude endorheic lake in the Himalayas changing colors from turquoise to emerald blue.', 'Leh Ladakh', '/assets/destinations/pangong_lake.jpg', true),
  ('Hampi Ruins', '🏛️', 'Historical', 'UNESCO World Heritage Site with monumental stone chariot, ancient Vijayanagara temples, and boulder landscapes.', 'Hampi, Karnataka', '/assets/destinations/hampi.jpg', true),
  ('Ranchi & Hundru Falls', '🌊', 'Eco & Nature', 'Majestic 320-foot waterfall cascading over rocky cliffs on the Subarnarekha River.', 'Ranchi, Jharkhand', '/assets/destinations/hundru_fall.jpg', true),
  ('Netarhat Queen of Chotanagpur', '🌲', 'Eco & Nature', 'Peaceful hill retreat famous for cool pine forests, magnolias, and sunrise/sunset points.', 'Latehar, Jharkhand', '/assets/destinations/netarhat.jpg', true),
  ('Baidyanath Dham', '🛕', 'Spiritual', 'One of the twelve sacred Jyotirlingas in India, attracting millions of devotees during Shravani Mela.', 'Deoghar, Jharkhand', '/assets/destinations/baidynath_dham.jpg', true)
ON CONFLICT (name) DO NOTHING;

INSERT INTO public.travel_events (name, description, category, date_start, date_end, location, image_url)
VALUES 
  ('Pushkar Camel Fair', 'One of the world’s largest camel and cultural fairs with folk music, dance, and desert celebrations.', 'festival', '2026-11-18', '2026-11-26', 'Pushkar, Rajasthan', '/assets/events/pushkar_fair.jpg'),
  ('Hornbill Festival', 'Celebration of Naga tribal heritage featuring traditional dances, folk music, crafts, and food stalls.', 'cultural', '2026-12-01', '2026-12-10', 'Kohima, Nagaland', '/assets/events/hornbill_fest.jpg'),
  ('Sarhul Spring Festival', 'Traditional tribal celebration worshipping Sal trees and the onset of new floral blooms.', 'festival', '2026-04-05', '2026-04-07', 'Ranchi, Jharkhand', '/assets/events/sarhul_fest1.jpg'),
  ('Karma Tribal Festival', 'Harvest and brotherhood festival celebrated with tribal drum rhythms and traditional Karma dance.', 'cultural', '2026-09-22', '2026-09-23', 'Jharkhand & Odisha', '/assets/events/karma_fest.jpg'),
  ('Chhath Puja Mahaparv', 'Ancient Vedic festival dedicated to Surya Dev and Chhathi Maiya with sacred river offerings.', 'festival', '2026-10-30', '2026-11-02', 'Bihar & Jharkhand', '/assets/events/Chhat_fest.jpg')
ON CONFLICT DO NOTHING;

INSERT INTO public.travel_marketplaces (name, description, location, image, tags)
VALUES 
  ('Dilli Haat', 'Open-air craft bazaar showcasing regional rural food stalls, authentic state handlooms, and folk artisans.', 'INA, New Delhi', '/assets/marketplaces/dilli_haat.jpg', ARRAY['Crafts', 'Textiles', 'Food']),
  ('Johari Bazaar', 'Historic marketplace famous for Rajasthani Kundan jewelry, gemstones, traditional lehengas, and Jaipuri quilts.', 'Jaipur, Rajasthan', '/assets/marketplaces/johari_bazaar.jpg', ARRAY['Jewelry', 'Textiles', 'Antiques']),
  ('Devaraja Market', 'Century-old heritage market bustling with fragrant sandalwood, spices, jasmine flowers, and Mysore silk.', 'Mysuru, Karnataka', '/assets/marketplaces/devaraja_market.jpg', ARRAY['Spices', 'Crafts', 'Textiles']),
  ('Anjuna Flea Market', 'Vibrant coastal market with handcrafted bohemian accessories, beachwear, Tibetan crafts, and live music.', 'Anjuna Beach, Goa', '/assets/marketplaces/anjuna_market.jpg', ARRAY['Crafts', 'Jewelry', 'Food']),
  ('Tribal Haat Khunti', 'Weekly rural bazaar famous for organic forest produce, dokra metal crafts, lac bangles, and tribal textiles.', 'Khunti, Jharkhand', '/assets/marketplaces/tribal_haat.jpg', ARRAY['Crafts', 'Spices', 'Textiles'])
ON CONFLICT DO NOTHING;
