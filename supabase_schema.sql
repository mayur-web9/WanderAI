-- ==============================================================================
-- WanderAI Travel Platform - 100% Conflict-Free Database Setup Script
-- ==============================================================================
-- GUARANTEE:
-- • ZERO modifications, drops, or locks on 'velox_*' tables (VeloxAI).
-- • ZERO modifications on 'chats', 'messages', 'bookmarks', 'daily_activity'.
-- • WanderAI uses dedicated 'travel_*' tables referencing 'auth.users(id)'.
-- • Robust against pre-existing tables & missing constraints.
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. DEDICATED WANDERAI PROFILES & USER SETTINGS
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.travel_profiles (
  id uuid NOT NULL,
  full_name text,
  username text,
  email text,
  bio text,
  avatar_url text,
  role text DEFAULT 'tourist',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT travel_profiles_pkey PRIMARY KEY (id),
  CONSTRAINT travel_profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.travel_user_settings (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE,
  theme text DEFAULT 'light',
  preferred_language text DEFAULT 'English',
  auto_save_itinerary boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT travel_user_settings_pkey PRIMARY KEY (id),
  CONSTRAINT travel_user_settings_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- ==============================================================================
-- 3. DEDICATED WANDERAI TRAVEL CHATS & MESSAGES
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.travel_chats (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  title text NOT NULL DEFAULT 'WanderAI Travel Plan',
  is_pinned boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT travel_chats_pkey PRIMARY KEY (id),
  CONSTRAINT travel_chats_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.travel_messages (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  chat_id uuid NOT NULL,
  user_id uuid NOT NULL,
  role text NOT NULL CHECK (role = ANY (ARRAY['user'::text, 'assistant'::text, 'system'::text])),
  content text NOT NULL,
  model text DEFAULT 'gemini-3.6-flash',
  tokens_used integer DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT travel_messages_pkey PRIMARY KEY (id),
  CONSTRAINT travel_messages_chat_id_fkey FOREIGN KEY (chat_id) REFERENCES public.travel_chats(id) ON DELETE CASCADE,
  CONSTRAINT travel_messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- ==============================================================================
-- 4. DEDICATED WANDERAI CATALOGUES (DESTINATIONS, FESTIVALS, BAZAARS, FEEDBACK)
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.travel_destinations (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  emoji text DEFAULT '📍',
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
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT travel_destinations_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.travel_events (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  category text DEFAULT 'festival',
  date_start text,
  date_end text,
  location text,
  image_url text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT travel_events_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.travel_marketplaces (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  location text,
  image text,
  tags text[] DEFAULT '{}',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT travel_marketplaces_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.travel_feedback (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  user_name text NOT NULL,
  user_email text NOT NULL,
  category text DEFAULT 'suggestion',
  message text NOT NULL,
  rating integer DEFAULT 5,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT travel_feedback_pkey PRIMARY KEY (id),
  CONSTRAINT travel_feedback_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS public.travel_itineraries (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  days text NOT NULL,
  interest text NOT NULL,
  budget text NOT NULL,
  city text NOT NULL,
  destination text NOT NULL,
  itinerary_text text NOT NULL,
  place_notes text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT travel_itineraries_pkey PRIMARY KEY (id),
  CONSTRAINT travel_itineraries_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL
);

-- ==============================================================================
-- 5. ENSURE UNIQUE CONSTRAINTS FOR ON CONFLICT HANDLING
-- (Guaranteed safe even if tables existed prior without unique keys)
-- ==============================================================================

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'travel_destinations_name_key'
  ) THEN
    ALTER TABLE public.travel_destinations ADD CONSTRAINT travel_destinations_name_key UNIQUE (name);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'travel_events_name_key'
  ) THEN
    ALTER TABLE public.travel_events ADD CONSTRAINT travel_events_name_key UNIQUE (name);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'travel_marketplaces_name_key'
  ) THEN
    ALTER TABLE public.travel_marketplaces ADD CONSTRAINT travel_marketplaces_name_key UNIQUE (name);
  END IF;
EXCEPTION WHEN OTHERS THEN
  NULL; -- Ignore if already unique
END $$;

-- ==============================================================================
-- 6. ROW LEVEL SECURITY (RLS) POLICIES FOR WANDERAI (travel_*)
-- ==============================================================================

ALTER TABLE public.travel_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_marketplaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.travel_itineraries ENABLE ROW LEVEL SECURITY;

-- 6.1 Travel Profiles Policies
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_profiles_select_all') THEN
    CREATE POLICY travel_profiles_select_all ON public.travel_profiles FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_profiles_manage_own') THEN
    CREATE POLICY travel_profiles_manage_own ON public.travel_profiles FOR ALL USING (auth.uid() = id);
  END IF;
END $$;

-- 6.2 Travel User Settings Policies
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_settings_manage_own') THEN
    CREATE POLICY travel_settings_manage_own ON public.travel_user_settings FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;

-- 6.3 Travel Chats & Messages Policies
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_chats_manage_own') THEN
    CREATE POLICY travel_chats_manage_own ON public.travel_chats FOR ALL USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_messages_manage_own') THEN
    CREATE POLICY travel_messages_manage_own ON public.travel_messages FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;

-- 6.4 Public Read Catalogues (Destinations, Events, Marketplaces)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_destinations_read_public') THEN
    CREATE POLICY travel_destinations_read_public ON public.travel_destinations FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_destinations_write_auth') THEN
    CREATE POLICY travel_destinations_write_auth ON public.travel_destinations FOR ALL USING (auth.uid() IS NOT NULL);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_events_read_public') THEN
    CREATE POLICY travel_events_read_public ON public.travel_events FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_events_write_auth') THEN
    CREATE POLICY travel_events_write_auth ON public.travel_events FOR ALL USING (auth.uid() IS NOT NULL);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_marketplaces_read_public') THEN
    CREATE POLICY travel_marketplaces_read_public ON public.travel_marketplaces FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_marketplaces_write_auth') THEN
    CREATE POLICY travel_marketplaces_write_auth ON public.travel_marketplaces FOR ALL USING (auth.uid() IS NOT NULL);
  END IF;
END $$;

-- 6.5 Travel Feedback & Saved Itineraries
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_feedback_insert_any') THEN
    CREATE POLICY travel_feedback_insert_any ON public.travel_feedback FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_feedback_select_all') THEN
    CREATE POLICY travel_feedback_select_all ON public.travel_feedback FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'travel_itineraries_all') THEN
    CREATE POLICY travel_itineraries_all ON public.travel_itineraries FOR ALL USING (true);
  END IF;
END $$;

-- ==============================================================================
-- 7. SEED INITIAL 27 DESTINATIONS, FESTIVALS & BAZAARS
-- ==============================================================================

INSERT INTO public.travel_destinations (name, emoji, tag, "desc", location, image, is_featured)
VALUES 
  ('Taj Mahal', '🕌', 'Historical', 'Agra''s iconic ivory-white marble mausoleum, a symbol of eternal love and a UNESCO World Heritage site standing gracefully beside the Yamuna River.', 'Agra, Uttar Pradesh', 'NULL', true),
  ('Varanasi Ghats', '🛕', 'Spiritual', 'Experience the spiritual soul of India along the sacred riverfront steps of the Ganges, famous for ancient temples and evening Maha Ganga Aarti.', 'Varanasi, Uttar Pradesh', 'NULL', true),
  ('Kerala Backwaters', '🚣', 'Nature', 'A serene labyrinth of interconnected palm-fringed canals, lagoons, and lakes, best explored on a traditional luxury Kettuvallam houseboat.', 'Alleppey, Kerala', 'NULL', true),
  ('Hampi Ruins', '🏛️', 'Heritage', 'The monumental boulder-strewn landscape of Hampi, home to the UNESCO-listed stone chariot, grand monolithic temples, and Vijayanagara ruins.', 'Hampi, Karnataka', 'NULL', true),
  ('Leh Ladakh & Pangong Tso', '⛰️', 'Adventure', 'A high-altitude desert known for breathtaking Himalayan mountain passes, Tibetan Buddhist gompas, and the azure Pangong Tso lake.', 'Leh, Ladakh', 'NULL', true),
  ('Golden Temple (Harmandir Sahib)', '✨', 'Spiritual', 'The spiritual heart of Sikhism, adorned with gold leaf and surrounded by the sacred Amrit Sarovar lake, hosting the world''s largest community kitchen.', 'Amritsar, Punjab', 'NULL', true),
  ('Munnar Tea Gardens', '🌿', 'Nature', 'Endless rolling green hills blanketed with manicured tea plantations, misty mountain trails, and the endangered Nilgiri Tahr sanctuary.', 'Munnar, Kerala', 'NULL', true),
  ('Mysore Palace', '🏰', 'Heritage', 'A grand Indo-Saracenic royal palace of the Wadiyar dynasty, renowned worldwide for its ornate durbar halls and 100,000 glowing evening lights.', 'Mysore, Karnataka', 'NULL', true),
  ('Amer Fort & Palace', '🦚', 'Historical', 'A magnificent hilltop Rajput citadel overlooking Maota Lake, famous for its dazzling Sheesh Mahal (Mirror Palace) and royal courtyards.', 'Jaipur, Rajasthan', 'NULL', true),
  ('Konark Sun Temple', '☀️', 'Heritage', 'A 13th-century UNESCO marvel sculpted as a colossal 24-wheeled chariot of Surya Dev, celebrated for monumental stone carvings and sundials.', 'Konark, Odisha', 'NULL', true),
  ('Ranthambore Tiger Reserve', '🐅', 'Wildlife', 'One of India''s premier tiger reserves where Royal Bengal tigers roam freely amidst 1,000-year-old fort ruins, lakes, and deciduous forests.', 'Sawai Madhopur, Rajasthan', 'NULL', true),
  ('Victoria Memorial Hall', '🏛️', 'Historical', 'An imposing British-era white Makrana marble monument set in 64 acres of landscaped gardens, housing rare national art galleries and archives.', 'Kolkata, West Bengal', 'NULL', true),
  ('Ajanta & Ellora Caves', '🪨', 'Heritage', 'Rock-cut cave temples spanning ancient Buddhist, Hindu, and Jain heritage, featuring the monolithic Kailash Temple carved from a single cliff.', 'Aurangabad, Maharashtra', 'NULL', true),
  ('Meenakshi Amman Temple', '🛕', 'Spiritual', 'Historic Dravidian temple complex on the Vaigai River with 14 towering gopurams decorated with thousands of colorful mythological sculptures.', 'Madurai, Tamil Nadu', 'NULL', true),
  ('Qutub Minar & Red Fort', '🗼', 'Historical', 'A 73-meter red sandstone minaret built in 1192, surrounded by ancient monuments including the rust-resistant 4th-century Iron Pillar of Chandragupta II.', 'New Delhi, Delhi', 'NULL', true),
  ('Sundarbans Biosphere Reserve', '🐊', 'Wildlife', 'The world''s largest mangrove forest, home to swimming Royal Bengal tigers, estuarine crocodiles, and rare Gangetic dolphins across tidal waterways.', 'Sundarbans, West Bengal', 'NULL', true),
  ('Rishikesh & Laxman Jhula', '🧘', 'Spiritual', 'The world capital of Yoga situated along the pristine emerald waters of the Ganges, offering white-water rafting, ashrams, and Triveni Ghat aarti.', 'Rishikesh, Uttarakhand', 'NULL', true),
  ('Living Root Bridges', '🌱', 'Nature', 'Bio-engineered botanical wonders hand-woven by the indigenous Khasi tribe across centuries from the aerial roots of Ficus elastica trees.', 'Cherrapunji, Meghalaya', 'NULL', true),
  ('Jaisalmer Golden Fort & Thar Desert', '🏜️', 'Heritage', 'The majestic golden sandstone living fort rising from the Thar Desert dunes, known for havelis, Jain temples, and sunset camel safaris at Sam Dunes.', 'Jaisalmer, Rajasthan', 'NULL', true),
  ('Kaziranga National Park', '🦚', 'Wildlife', 'UNESCO World Heritage sanctuary harboring two-thirds of the planet''s great one-horned rhinoceros population in the fertile Brahmaputra floodplains.', 'Golaghat, Assam', 'NULL', true),
  ('Goa Coast & Chapora Fort', '🏖️', 'Nature', 'Golden sandy palm-fringed coastlines, Portuguese baroque heritage churches, seafood shacks, and historic hilltop forts overlooking the Arabian Sea.', 'Anjuna & Vagator, Goa', 'NULL', true),
  ('Valley of Flowers National Park', '🌸', 'Nature', 'A UNESCO high-altitude alpine meadow nestled in West Himalaya, blooming with hundreds of rare wild alpine flowers and medicinal herbs each monsoon.', 'Chamoli, Uttarakhand', 'NULL', true),
  ('Jonha & Hundru Waterfalls', '🌊', 'Nature', 'Scenic multi-tiered waterfalls cascading from heights over 98 meters amidst rocky plateaus and verdant Sal tree forests in Chotanagpur.', 'Ranchi, Jharkhand', '/assets/destinations/jonha_falls.jpg', true),
  ('Betla National Park', '🐘', 'Wildlife', 'One of India''s earliest tiger sanctuaries, featuring dense Sal canopy, wild elephant herds, sloth bears, and 16th-century Chero dynasty fort ruins.', 'Latehar, Jharkhand', 'NULL', true),
  ('Baidyanath Dham Temple', '🛕', 'Spiritual', 'One of the twelve revered Jyotirlinga shrines in India, a celebrated pilgrimage destination attracting devotees worldwide during the holy Shravani Mela.', 'Deoghar, Jharkhand', 'NULL', true),
  ('Netarhat — Queen of Chotanagpur', '🌲', 'Nature', 'A tranquil hill station at 3,700 ft known for cool pine forests, pear orchards, Magnolia Sunset Point, and Lower Ghaghri waterfall trails.', 'Latehar, Jharkhand', 'NULL', true),
  ('Ranchi Lake & Tagore Hill', '🛶', 'Nature', 'An 1842 historic lake nestled beneath Ranchi Hill alongside Tagore Hill, where Nobel laureate Rabindranath Tagore composed celebrated literary works.', 'Ranchi, Jharkhand', '/assets/destinations/lake.jpg', false)
ON CONFLICT (name) DO NOTHING;

INSERT INTO public.travel_events (name, description, category, date_start, date_end, location, image_url)
VALUES 
  ('Pushkar Camel Fair', 'One of the world's largest camel and cultural fairs with folk music, dance, and desert celebrations.', 'festival', '2026-11-18', '2026-11-26', 'Pushkar, Rajasthan', 'NULL'),
  ('Hornbill Festival', 'Celebration of Naga tribal heritage featuring traditional dances, folk music, crafts, and food stalls.', 'cultural', '2026-12-01', '2026-12-10', 'Kohima, Nagaland', 'NULL'),
  ('Sarhul Spring Festival', 'Traditional tribal celebration worshipping Sal trees and the onset of new floral blooms.', 'festival', '2026-04-05', '2026-04-07', 'Ranchi, Jharkhand', 'NULL'),
  ('Karma Tribal Festival', 'Harvest and brotherhood festival celebrated with tribal drum rhythms and traditional Karma dance.', 'cultural', '2026-09-22', '2026-09-23', 'Jharkhand & Odisha', 'NULL'),
  ('Chhath Puja Mahaparv', 'Ancient Vedic festival dedicated to Surya Dev and Chhathi Maiya with sacred river offerings.', 'festival', '2026-10-30', '2026-11-02', 'Bihar & Jharkhand', '/assets/events/Chhat_fest.jpg')
ON CONFLICT (name) DO NOTHING;

INSERT INTO public.travel_marketplaces (name, description, location, image, tags)
VALUES 
  ('Dilli Haat', 'Open-air craft bazaar showcasing regional food stalls and handlooms from artisans across all Indian states.', 'INA, New Delhi', 'NULL', ARRAY['Crafts', 'Food', 'Culture']),
  ('Colaba Causeway', 'Vibrant Mumbai street bazaar famous for antique clocks, boho accessories, vintage coins, and street cuisine.', 'Colaba, Mumbai', 'NULL', ARRAY['Antiques', 'Fashion', 'Street Food']),
  ('Johari Bazaar', 'Iconic Pink City marketplace world-famous for Kundan gemstone jewelry, silver trinkets, and Bandhani sarees.', 'Pink City, Jaipur', 'NULL', ARRAY['Jewelry', 'Textiles', 'Heritage']),
  ('Anjuna Flea Market', 'Legendary coastal Wednesday market with bohemian apparel, handmade handicrafts, spices, and live music.', 'Anjuna, Goa', 'NULL', ARRAY['Boho', 'Handicrafts', 'Spices']),
  ('Laad Bazaar (Choodi Bazaar)', 'Historic bazaar near Charminar famous for lacquer bangles, pearls, zari embroidery, and attar perfumes.', 'Old City, Hyderabad', '/assets/marketplaces/laad_bazaar.jpg', ARRAY['Jewelry', 'Textiles', 'Heritage'])
ON CONFLICT (name) DO NOTHING;

