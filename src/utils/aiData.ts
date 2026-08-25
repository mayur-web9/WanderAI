export interface AiDestination {
  id?: string;
  name: string;
  emoji: string;
  tag: string;
  desc: string;
  location: string;
  image: string;
}

export const DESTINATIONS: AiDestination[] = [
  {
    "id": "taj-mahal",
    "name": "Taj Mahal",
    "emoji": "🕌",
    "tag": "Historical",
    "desc": "Agra's iconic ivory-white marble mausoleum, a symbol of eternal love and a UNESCO World Heritage site standing gracefully beside the Yamuna River.",
    "location": "Agra, Uttar Pradesh",
    "image": "/assets/destinations/taj_mahal.jpg"
  },
  {
    "id": "varanasi-ghats",
    "name": "Varanasi Ghats",
    "emoji": "🛕",
    "tag": "Spiritual",
    "desc": "Experience the spiritual soul of India along the sacred riverfront steps of the Ganges, famous for ancient temples and evening Maha Ganga Aarti.",
    "location": "Varanasi, Uttar Pradesh",
    "image": "/assets/destinations/varanasi_ghats.jpg"
  },
  {
    "id": "kerala-backwaters",
    "name": "Kerala Backwaters",
    "emoji": "🚣",
    "tag": "Nature",
    "desc": "A serene labyrinth of interconnected palm-fringed canals, lagoons, and lakes, best explored on a traditional luxury Kettuvallam houseboat.",
    "location": "Alleppey, Kerala",
    "image": "/assets/destinations/kerala_backwaters.jpg"
  },
  {
    "id": "hampi-ruins",
    "name": "Hampi Ruins",
    "emoji": "🏛️",
    "tag": "Heritage",
    "desc": "The monumental boulder-strewn landscape of Hampi, home to the UNESCO-listed stone chariot, grand monolithic temples, and Vijayanagara ruins.",
    "location": "Hampi, Karnataka",
    "image": "/assets/destinations/hampi_ruins.jpg"
  },
  {
    "id": "leh-ladakh",
    "name": "Leh Ladakh & Pangong Tso",
    "emoji": "⛰️",
    "tag": "Adventure",
    "desc": "A high-altitude desert known for breathtaking Himalayan mountain passes, Tibetan Buddhist gompas, and the azure Pangong Tso lake.",
    "location": "Leh, Ladakh",
    "image": "/assets/destinations/leh_ladakh.jpg"
  },
  {
    "id": "golden-temple",
    "name": "Golden Temple (Harmandir Sahib)",
    "emoji": "✨",
    "tag": "Spiritual",
    "desc": "The spiritual heart of Sikhism, adorned with gold leaf and surrounded by the sacred Amrit Sarovar lake, hosting the world's largest community kitchen.",
    "location": "Amritsar, Punjab",
    "image": "/assets/destinations/golden_temple.jpg"
  },
  {
    "id": "munnar-tea-gardens",
    "name": "Munnar Tea Gardens",
    "emoji": "🌿",
    "tag": "Nature",
    "desc": "Endless rolling green hills blanketed with manicured tea plantations, misty mountain trails, and the endangered Nilgiri Tahr sanctuary.",
    "location": "Munnar, Kerala",
    "image": "/assets/destinations/munnar_tea_gardens.jpg"
  },
  {
    "id": "mysore-palace",
    "name": "Mysore Palace",
    "emoji": "🏰",
    "tag": "Heritage",
    "desc": "A grand Indo-Saracenic royal palace of the Wadiyar dynasty, renowned worldwide for its ornate durbar halls and 100,000 glowing evening lights.",
    "location": "Mysore, Karnataka",
    "image": "/assets/destinations/mysore_palace.jpg"
  },
  {
    "id": "amer-fort",
    "name": "Amer Fort & Palace",
    "emoji": "🦁",
    "tag": "Historical",
    "desc": "A magnificent hilltop Rajput citadel overlooking Maota Lake, famous for its dazzling Sheesh Mahal (Mirror Palace) and royal courtyards.",
    "location": "Jaipur, Rajasthan",
    "image": "/assets/destinations/amer_fort.jpg"
  },
  {
    "id": "konark-sun-temple",
    "name": "Konark Sun Temple",
    "emoji": "☀️",
    "tag": "Heritage",
    "desc": "A 13th-century UNESCO marvel sculpted as a colossal 24-wheeled chariot of Surya Dev, celebrated for monumental stone carvings and sundials.",
    "location": "Konark, Odisha",
    "image": "/assets/destinations/konark_sun_temple.jpg"
  },
  {
    "id": "ranthambore",
    "name": "Ranthambore Tiger Reserve",
    "emoji": "🐅",
    "tag": "Wildlife",
    "desc": "One of India's premier tiger reserves where Royal Bengal tigers roam freely amidst 1,000-year-old fort ruins, lakes, and deciduous forests.",
    "location": "Sawai Madhopur, Rajasthan",
    "image": "/assets/destinations/ranthambore.jpg"
  },
  {
    "id": "victoria-memorial",
    "name": "Victoria Memorial Hall",
    "emoji": "🏛️",
    "tag": "Historical",
    "desc": "An imposing British-era white Makrana marble monument set in 64 acres of landscaped gardens, housing rare national art galleries and archives.",
    "location": "Kolkata, West Bengal",
    "image": "/assets/destinations/victoria_memorial.jpg"
  },
  {
    "id": "ajanta-ellora",
    "name": "Ajanta & Ellora Caves",
    "emoji": "🪨",
    "tag": "Heritage",
    "desc": "Rock-cut cave temples spanning ancient Buddhist, Hindu, and Jain heritage, featuring the monolithic Kailash Temple carved from a single cliff.",
    "location": "Aurangabad, Maharashtra",
    "image": "https://images.unsplash.com/photo-1600100397608-f010f443b221?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "meenakshi-temple",
    "name": "Meenakshi Amman Temple",
    "emoji": "🛕",
    "tag": "Spiritual",
    "desc": "Historic Dravidian temple complex on the Vaigai River with 14 towering gopurams decorated with thousands of colorful mythological sculptures.",
    "location": "Madurai, Tamil Nadu",
    "image": "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "qutub-minar",
    "name": "Qutub Minar & Mehrauli Complex",
    "emoji": "🗼",
    "tag": "Historical",
    "desc": "A 73-meter red sandstone minaret built in 1192, surrounded by ancient monuments including the rust-resistant 4th-century Iron Pillar of Chandragupta II.",
    "location": "New Delhi, Delhi",
    "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "sundarbans",
    "name": "Sundarbans Biosphere Reserve",
    "emoji": "🐊",
    "tag": "Wildlife",
    "desc": "The world's largest mangrove forest, home to swimming Royal Bengal tigers, estuarine crocodiles, and rare Gangetic dolphins across tidal waterways.",
    "location": "Sundarbans, West Bengal",
    "image": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "rishikesh-ganga",
    "name": "Rishikesh & Laxman Jhula",
    "emoji": "🧘",
    "tag": "Spiritual",
    "desc": "The world capital of Yoga situated along the pristine emerald waters of the Ganges, offering white-water rafting, ashrams, and Triveni Ghat aarti.",
    "location": "Rishikesh, Uttarakhand",
    "image": "https://images.unsplash.com/photo-1598890777032-bde13fbe34c9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "cherrapunji-bridges",
    "name": "Living Root Bridges",
    "emoji": "🌱",
    "tag": "Nature",
    "desc": "Bio-engineered botanical wonders hand-woven by the indigenous Khasi tribe across centuries from the aerial roots of Ficus elastica trees.",
    "location": "Cherrapunji, Meghalaya",
    "image": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "jaisalmer-fort",
    "name": "Jaisalmer Golden Fort & Thar Desert",
    "emoji": "🏜️",
    "tag": "Heritage",
    "desc": "The majestic golden sandstone living fort rising from the Thar Desert dunes, known for havelis, Jain temples, and sunset camel safaris at Sam Dunes.",
    "location": "Jaisalmer, Rajasthan",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "kaziranga-park",
    "name": "Kaziranga National Park",
    "emoji": "🦏",
    "tag": "Wildlife",
    "desc": "UNESCO World Heritage sanctuary harboring two-thirds of the planet's great one-horned rhinoceros population in the fertile Brahmaputra floodplains.",
    "location": "Golaghat, Assam",
    "image": "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "goa-coastal",
    "name": "Goa Coast & Chapora Fort",
    "emoji": "🏖️",
    "tag": "Nature",
    "desc": "Golden sandy palm-fringed coastlines, Portuguese baroque heritage churches, seafood shacks, and historic hilltop forts overlooking the Arabian Sea.",
    "location": "Anjuna & Vagator, Goa",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "valley-of-flowers",
    "name": "Valley of Flowers National Park",
    "emoji": "🌸",
    "tag": "Nature",
    "desc": "A UNESCO high-altitude alpine meadow nestled in West Himalaya, blooming with hundreds of rare wild alpine flowers and medicinal herbs each monsoon.",
    "location": "Chamoli, Uttarakhand",
    "image": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "jonha-falls",
    "name": "Jonha & Hundru Waterfalls",
    "emoji": "🌊",
    "tag": "Nature",
    "desc": "Scenic multi-tiered waterfalls cascading from heights over 98 meters amidst rocky plateaus and verdant Sal tree forests in Chotanagpur.",
    "location": "Ranchi, Jharkhand",
    "image": "/assets/destinations/jonha_falls.jpg"
  },
  {
    "id": "betla-national-park",
    "name": "Betla National Park",
    "emoji": "🐘",
    "tag": "Wildlife",
    "desc": "One of India's earliest tiger sanctuaries, featuring dense Sal canopy, wild elephant herds, sloth bears, and 16th-century Chero dynasty fort ruins.",
    "location": "Latehar, Jharkhand",
    "image": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "baidyanath-dham",
    "name": "Baidyanath Dham Temple",
    "emoji": "🛕",
    "tag": "Spiritual",
    "desc": "One of the twelve revered Jyotirlinga shrines in India, a celebrated pilgrimage destination attracting devotees worldwide during the holy Shravani Mela.",
    "location": "Deoghar, Jharkhand",
    "image": "https://images.unsplash.com/photo-1627894006066-b45786537123?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "netarhat-hills",
    "name": "Netarhat — Queen of Chotanagpur",
    "emoji": "🌲",
    "tag": "Nature",
    "desc": "A tranquil hill station at 3,700 ft known for cool pine forests, pear orchards, Magnolia Sunset Point, and Lower Ghaghri waterfall trails.",
    "location": "Latehar, Jharkhand",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "ranchi-lake",
    "name": "Ranchi Lake & Tagore Hill",
    "emoji": "🛶",
    "tag": "Nature",
    "desc": "An 1842 historic lake nestled beneath Ranchi Hill alongside Tagore Hill, where Nobel laureate Rabindranath Tagore composed celebrated literary works.",
    "location": "Ranchi, Jharkhand",
    "image": "/assets/destinations/lake.jpg"
  }
];

export const FEATURES = [
  { icon: "💬", title: "Multilingual Chat", desc: "Get travel advice in 10+ Indian languages including Hindi, Marathi, Bengali, and Tamil." },
  { icon: "🗺️", title: "Smart Planner", desc: "Generate custom day-by-day itineraries based on your interests, pace, and budget." },
  { icon: "🛍️", title: "Culture & Bazaars", desc: "Discover historic artisan craft haats, handloom markets, and living tribal harvest festivals." },
  { icon: "🛡️", title: "Safety Guide", desc: "Real-time updates on weather, safety protocols, and 24x7 tourist emergency contacts." },
  { icon: "🌿", title: "Eco-Tourism", desc: "Discover sustainable travel options that support local communities and pristine nature." },
  { icon: "🍽️", title: "Food Finder", desc: "Find the most authentic local eateries and hidden culinary specialties in any city." },
  { icon: "🚌", title: "Transit & Route Guide", desc: "Smart transport advice for Indian Railways trains, cabs, scenic road trips, and bus routes." },
  { icon: "📍", title: "Destination Explorer", desc: "Browse 150+ handpicked Indian heritage and nature spots with instant Google Maps links." },
];

export const QUICK_PROMPTS = [
  "Plan a 3-day India eco-tour",
  "Best beaches in South India",
  "Historical sites in North India",
  "Adventure trips in the Himalayas",
  "Discover unseen gems in India",
];

export const SYSTEM_PROMPT = `You are WanderAI, an expert AI travel guide for India. You specialize in destinations across all states: hill stations, wildlife sanctuaries, beaches, historical sites, spiritual places, adventure sports, cultural experiences, and rare/less-visited hidden gems. Respond warmly, helpfully, and concisely. When planning itineraries, format them clearly with Day-by-Day breakdown. Add relevant emojis. Keep responses under 300 words unless a detailed itinerary is requested. Always celebrate India's diverse identity and promote responsible, sustainable tourism.`;
