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
    "emoji": "ðŸ•Œ",
    "tag": "Historical",
    "desc": "Agra's iconic ivory-white marble mausoleum, a symbol of eternal love and a UNESCO World Heritage site standing gracefully beside the Yamuna River.",
    "location": "Agra, Uttar Pradesh",
    "image": "https://images.unsplash.com/photo-1548013146-59c1e67e02a4?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "varanasi-ghats",
    "name": "Varanasi Ghats",
    "emoji": "ðŸ›•",
    "tag": "Spiritual",
    "desc": "Experience the spiritual soul of India along the sacred riverfront steps of the Ganges, famous for ancient temples and evening Maha Ganga Aarti.",
    "location": "Varanasi, Uttar Pradesh",
    "image": "https://images.unsplash.com/photo-1587922547015-8ae2b155d6d2?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "kerala-backwaters",
    "name": "Kerala Backwaters",
    "emoji": "ðŸš£",
    "tag": "Nature",
    "desc": "A serene labyrinth of interconnected palm-fringed canals, lagoons, and lakes, best explored on a traditional luxury Kettuvallam houseboat.",
    "location": "Alleppey, Kerala",
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "hampi-ruins",
    "name": "Hampi Ruins",
    "emoji": "ðŸ›ï¸",
    "tag": "Heritage",
    "desc": "The monumental boulder-strewn landscape of Hampi, home to the UNESCO-listed stone chariot, grand monolithic temples, and Vijayanagara ruins.",
    "location": "Hampi, Karnataka",
    "image": "https://images.unsplash.com/photo-1564507592333-04cd2a2f359a?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "leh-ladakh",
    "name": "Leh Ladakh & Pangong Tso",
    "emoji": "â›°ï¸",
    "tag": "Adventure",
    "desc": "A high-altitude desert known for breathtaking Himalayan mountain passes, Tibetan Buddhist gompas, and the azure Pangong Tso lake.",
    "location": "Leh, Ladakh",
    "image": "https://images.unsplash.com/photo-1621786030484-4b5f5de4a788?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "golden-temple",
    "name": "Golden Temple (Harmandir Sahib)",
    "emoji": "âœ¨",
    "tag": "Spiritual",
    "desc": "The spiritual heart of Sikhism, adorned with gold leaf and surrounded by the sacred Amrit Sarovar lake, hosting the world's largest community kitchen.",
    "location": "Amritsar, Punjab",
    "image": "https://images.unsplash.com/photo-1585136917625-b29f83aa3174?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "munnar-tea-gardens",
    "name": "Munnar Tea Gardens",
    "emoji": "ðŸŒ¿",
    "tag": "Nature",
    "desc": "Endless rolling green hills blanketed with manicured tea plantations, misty mountain trails, and the endangered Nilgiri Tahr sanctuary.",
    "location": "Munnar, Kerala",
    "image": "https://images.unsplash.com/photo-1571068316344-75bc3048de5e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "mysore-palace",
    "name": "Mysore Palace",
    "emoji": "ðŸ°",
    "tag": "Heritage",
    "desc": "A grand Indo-Saracenic royal palace of the Wadiyar dynasty, renowned worldwide for its ornate durbar halls and 100,000 glowing evening lights.",
    "location": "Mysore, Karnataka",
    "image": "https://images.unsplash.com/photo-1598091383021-15ddea64c8b0?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "amer-fort",
    "name": "Amer Fort & Palace",
    "emoji": "ðŸ¦",
    "tag": "Historical",
    "desc": "A magnificent hilltop Rajput citadel overlooking Maota Lake, famous for its dazzling Sheesh Mahal (Mirror Palace) and royal courtyards.",
    "location": "Jaipur, Rajasthan",
    "image": "https://images.unsplash.com/photo-1524492412435-32cd049bde7d?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "konark-sun-temple",
    "name": "Konark Sun Temple",
    "emoji": "â˜€ï¸",
    "tag": "Heritage",
    "desc": "A 13th-century UNESCO marvel sculpted as a colossal 24-wheeled chariot of Surya Dev, celebrated for monumental stone carvings and sundials.",
    "location": "Konark, Odisha",
    "image": "https://images.unsplash.com/photo-1600100397608-f010f443b221?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "ranthambore",
    "name": "Ranthambore Tiger Reserve",
    "emoji": "ðŸ…",
    "tag": "Wildlife",
    "desc": "One of India's premier tiger reserves where Royal Bengal tigers roam freely amidst 1,000-year-old fort ruins, lakes, and deciduous forests.",
    "location": "Sawai Madhopur, Rajasthan",
    "image": "https://images.unsplash.com/photo-1615279867456-1e2f5e9e2291?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "victoria-memorial",
    "name": "Victoria Memorial Hall",
    "emoji": "ðŸ›ï¸",
    "tag": "Historical",
    "desc": "An imposing British-era white Makrana marble monument set in 64 acres of landscaped gardens, housing rare national art galleries and archives.",
    "location": "Kolkata, West Bengal",
    "image": "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "ajanta-ellora",
    "name": "Ajanta & Ellora Caves",
    "emoji": "ðŸª¨",
    "tag": "Heritage",
    "desc": "Rock-cut cave temples spanning ancient Buddhist, Hindu, and Jain heritage, featuring the monolithic Kailash Temple carved from a single cliff.",
    "location": "Aurangabad, Maharashtra",
    "image": "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "meenakshi-temple",
    "name": "Meenakshi Amman Temple",
    "emoji": "ðŸ›•",
    "tag": "Spiritual",
    "desc": "Historic Dravidian temple complex on the Vaigai River with 14 towering gopurams decorated with thousands of colorful mythological sculptures.",
    "location": "Madurai, Tamil Nadu",
    "image": "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "qutub-minar",
    "name": "Qutub Minar & Mehrauli Complex",
    "emoji": "ðŸ—¼",
    "tag": "Historical",
    "desc": "A 73-meter red sandstone minaret built in 1192, surrounded by ancient monuments including the rust-resistant 4th-century Iron Pillar of Chandragupta II.",
    "location": "New Delhi, Delhi",
    "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "sundarbans",
    "name": "Sundarbans Biosphere Reserve",
    "emoji": "ðŸŠ",
    "tag": "Wildlife",
    "desc": "The world's largest mangrove forest, home to swimming Royal Bengal tigers, estuarine crocodiles, and rare Gangetic dolphins across tidal waterways.",
    "location": "Sundarbans, West Bengal",
    "image": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "rishikesh-ganga",
    "name": "Rishikesh & Laxman Jhula",
    "emoji": "ðŸ§˜",
    "tag": "Spiritual",
    "desc": "The world capital of Yoga situated along the pristine emerald waters of the Ganges, offering white-water rafting, ashrams, and Triveni Ghat aarti.",
    "location": "Rishikesh, Uttarakhand",
    "image": "https://images.unsplash.com/photo-1598890777032-bde13fbe34c9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "cherrapunji-bridges",
    "name": "Living Root Bridges",
    "emoji": "ðŸŒ±",
    "tag": "Nature",
    "desc": "Bio-engineered botanical wonders hand-woven by the indigenous Khasi tribe across centuries from the aerial roots of Ficus elastica trees.",
    "location": "Cherrapunji, Meghalaya",
    "image": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "jaisalmer-fort",
    "name": "Jaisalmer Golden Fort & Thar Desert",
    "emoji": "ðŸœï¸",
    "tag": "Heritage",
    "desc": "The majestic golden sandstone living fort rising from the Thar Desert dunes, known for havelis, Jain temples, and sunset camel safaris at Sam Dunes.",
    "location": "Jaisalmer, Rajasthan",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "kaziranga-park",
    "name": "Kaziranga National Park",
    "emoji": "ðŸ¦",
    "tag": "Wildlife",
    "desc": "UNESCO World Heritage sanctuary harboring two-thirds of the planet's great one-horned rhinoceros population in the fertile Brahmaputra floodplains.",
    "location": "Golaghat, Assam",
    "image": "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "goa-coastal",
    "name": "Goa Coast & Chapora Fort",
    "emoji": "ðŸ–ï¸",
    "tag": "Nature",
    "desc": "Golden sandy palm-fringed coastlines, Portuguese baroque heritage churches, seafood shacks, and historic hilltop forts overlooking the Arabian Sea.",
    "location": "Anjuna & Vagator, Goa",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "valley-of-flowers",
    "name": "Valley of Flowers National Park",
    "emoji": "ðŸŒ¸",
    "tag": "Nature",
    "desc": "A UNESCO high-altitude alpine meadow nestled in West Himalaya, blooming with hundreds of rare wild alpine flowers and medicinal herbs each monsoon.",
    "location": "Chamoli, Uttarakhand",
    "image": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "jonha-falls",
    "name": "Jonha & Hundru Waterfalls",
    "emoji": "ðŸŒŠ",
    "tag": "Nature",
    "desc": "Scenic multi-tiered waterfalls cascading from heights over 98 meters amidst rocky plateaus and verdant Sal tree forests in Chotanagpur.",
    "location": "Ranchi, Jharkhand",
    "image": "https://images.unsplash.com/photo-1530879064-4cad9f7be6ec?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "betla-national-park",
    "name": "Betla National Park",
    "emoji": "ðŸ˜",
    "tag": "Wildlife",
    "desc": "One of India's earliest tiger sanctuaries, featuring dense Sal canopy, wild elephant herds, sloth bears, and 16th-century Chero dynasty fort ruins.",
    "location": "Latehar, Jharkhand",
    "image": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "baidyanath-dham",
    "name": "Baidyanath Dham Temple",
    "emoji": "ðŸ›•",
    "tag": "Spiritual",
    "desc": "One of the twelve revered Jyotirlinga shrines in India, a celebrated pilgrimage destination attracting devotees worldwide during the holy Shravani Mela.",
    "location": "Deoghar, Jharkhand",
    "image": "https://images.unsplash.com/photo-1627894006066-b45786537123?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "netarhat-hills",
    "name": "Netarhat â€” Queen of Chotanagpur",
    "emoji": "ðŸŒ²",
    "tag": "Nature",
    "desc": "A tranquil hill station at 3,700 ft known for cool pine forests, pear orchards, Magnolia Sunset Point, and Lower Ghaghri waterfall trails.",
    "location": "Latehar, Jharkhand",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": "ranchi-lake",
    "name": "Ranchi Lake & Tagore Hill",
    "emoji": "ðŸ›¶",
    "tag": "Nature",
    "desc": "An 1842 historic lake nestled beneath Ranchi Hill alongside Tagore Hill, where Nobel laureate Rabindranath Tagore composed celebrated literary works.",
    "location": "Ranchi, Jharkhand",
    "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80&auto=format&fit=crop"
  }
];

export const FEATURES = [
  { icon: "ðŸ’¬", title: "Multilingual Chat", desc: "Get travel advice in 10+ Indian languages including Hindi, Marathi, Bengali, and Tamil." },
  { icon: "ðŸ—ºï¸", title: "Smart Planner", desc: "Generate custom day-by-day itineraries based on your interests, pace, and budget." },
  { icon: "ðŸ›ï¸", title: "Culture & Bazaars", desc: "Discover historic artisan craft haats, handloom markets, and living tribal harvest festivals." },
  { icon: "ðŸ›¡ï¸", title: "Safety Guide", desc: "Real-time updates on weather, safety protocols, and 24x7 tourist emergency contacts." },
  { icon: "ðŸŒ¿", title: "Eco-Tourism", desc: "Discover sustainable travel options that support local communities and pristine nature." },
  { icon: "ðŸ½ï¸", title: "Food Finder", desc: "Find the most authentic local eateries and hidden culinary specialties in any city." },
  { icon: "ðŸšŒ", title: "Transit & Route Guide", desc: "Smart transport advice for Indian Railways trains, cabs, scenic road trips, and bus routes." },
  { icon: "ðŸ“", title: "Destination Explorer", desc: "Browse 150+ handpicked Indian heritage and nature spots with instant Google Maps links." },
];

export const QUICK_PROMPTS = [
  "Plan a 3-day India eco-tour",
  "Best beaches in South India",
  "Historical sites in North India",
  "Adventure trips in the Himalayas",
  "Discover unseen gems in India",
];

export const SYSTEM_PROMPT = `You are WanderAI, an expert AI travel guide for India. You specialize in destinations across all states: hill stations, wildlife sanctuaries, beaches, historical sites, spiritual places, adventure sports, cultural experiences, and rare/less-visited hidden gems. Respond warmly, helpfully, and concisely. When planning itineraries, format them clearly with Day-by-Day breakdown. Add relevant emojis. Keep responses under 300 words unless a detailed itinerary is requested. Always celebrate India's diverse identity and promote responsible, sustainable tourism.`;

