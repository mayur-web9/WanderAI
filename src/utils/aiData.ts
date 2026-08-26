export interface AiDestination {
  id: string;
  name: string;
  emoji: string;
  tag: string;
  desc: string;
  location: string;
  image: string;
}

export const AI_DESTINATIONS: AiDestination[] = [
  {
    "id": "taj-mahal",
    "name": "Taj Mahal",
    "emoji": "🏛️",
    "tag": "Historical",
    "desc": "Agra's iconic ivory-white marble mausoleum, a symbol of eternal love and a UNESCO World Heritage site standing gracefully beside the Yamuna River.",
    "location": "Agra, Uttar Pradesh",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "varanasi-ghats",
    "name": "Varanasi Ghats",
    "emoji": "🕉️",
    "tag": "Spiritual",
    "desc": "Experience the spiritual soul of India along the sacred riverfront steps of the Ganges, famous for ancient temples and evening Maha Ganga Aarti.",
    "location": "Varanasi, Uttar Pradesh",
    "image": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "kerala-backwaters",
    "name": "Kerala Backwaters",
    "emoji": "🛶",
    "tag": "Nature",
    "desc": "A serene labyrinth of interconnected palm-fringed canals, lagoons, and lakes, best explored on a traditional luxury Kettuvallam houseboat.",
    "location": "Alleppey, Kerala",
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "hampi-ruins",
    "name": "Hampi Ruins",
    "emoji": "🗿",
    "tag": "Heritage",
    "desc": "The monumental boulder-strewn landscape of Hampi, home to the UNESCO-listed stone chariot, grand monolithic temples, and Vijayanagara ruins.",
    "location": "Hampi, Karnataka",
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "leh-ladakh",
    "name": "Leh Ladakh & Pangong Tso",
    "emoji": "🏔️",
    "tag": "Adventure",
    "desc": "High-altitude Himalayan desert renowned for dramatic mountain passes, Tibetan Buddhist monasteries, and the pristine cobalt-blue Pangong Tso lake.",
    "location": "Leh, Ladakh",
    "image": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "golden-temple",
    "name": "Golden Temple (Harmandir Sahib)",
    "emoji": "🛕",
    "tag": "Spiritual",
    "desc": "The spiritual heart of Sikhism, adorned with gold leaf and surrounded by the sacred Amrit Sarovar lake, hosting the world's largest community kitchen.",
    "location": "Amritsar, Punjab",
    "image": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "munnar-tea-gardens",
    "name": "Munnar Tea Gardens",
    "emoji": "🍃",
    "tag": "Nature",
    "desc": "Breathtaking rolling hills covered in manicured organic tea plantations, misty mountain viewpoints, and exotic flora in the Western Ghats.",
    "location": "Munnar, Kerala",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "mysore-palace",
    "name": "Mysore Palace",
    "emoji": "🏰",
    "tag": "Heritage",
    "desc": "Grand Indo-Saracenic royal palace of the Wadiyar dynasty, renowned for opulent durbar halls, carved mahogany ceilings, and 100,000 festival lights.",
    "location": "Mysore, Karnataka",
    "image": "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "amer-fort",
    "name": "Amer Fort & Palace",
    "emoji": "🏯",
    "tag": "Heritage",
    "desc": "Magnificent hilltop fort showcasing Rajput architecture, mirror palace (Sheesh Mahal), and sweeping valley views.",
    "location": "Jaipur, Rajasthan",
    "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "konark-sun-temple",
    "name": "Konark Sun Temple",
    "emoji": "☀️",
    "tag": "Heritage",
    "desc": "A 13th-century UNESCO marvel sculpted as a colossal 24-wheeled chariot of Surya Dev, celebrated for monumental stone carvings and sundials.",
    "location": "Konark, Odisha",
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "ranthambore",
    "name": "Ranthambore Tiger Reserve",
    "emoji": "🐅",
    "tag": "Wildlife",
    "desc": "Famed national park where royal Bengal tigers roam freely among ancient 10th-century fort ruins, lakes, and deciduous forests.",
    "location": "Sawai Madhopur, Rajasthan",
    "image": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "victoria-memorial",
    "name": "Victoria Memorial Hall",
    "emoji": "🏛️",
    "tag": "Historical",
    "desc": "Magnificent white Makrana marble monument with 64 acres of landscaped gardens, housing rare Raj-era paintings, manuscripts, and sculptures.",
    "location": "Kolkata, West Bengal",
    "image": "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "ajanta-ellora",
    "name": "Ajanta & Ellora Caves",
    "emoji": "🗿",
    "tag": "Heritage",
    "desc": "Rock-cut cave temples spanning ancient Buddhist, Hindu, and Jain heritage, featuring the monolithic Kailash Temple carved from a single cliff.",
    "location": "Aurangabad, Maharashtra",
    "image": "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "meenakshi-temple",
    "name": "Meenakshi Amman Temple",
    "emoji": "🛕",
    "tag": "Spiritual",
    "desc": "Historic Hindu temple on the southern bank of Vaigai River, famed for 14 towering gopurams encrusted with thousands of colorful mythological sculptures.",
    "location": "Madurai, Tamil Nadu",
    "image": "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "qutub-minar",
    "name": "Qutub Minar & Mehrauli Complex",
    "emoji": "🗼",
    "tag": "Historical",
    "desc": "A 73-meter-tall victory minaret of fluted red sandstone, built in 1192 and surrounded by ancient Mughal and Delhi Sultanate ruins.",
    "location": "New Delhi",
    "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "sundarbans",
    "name": "Sundarbans Biosphere Reserve",
    "emoji": "🌿",
    "tag": "Wildlife",
    "desc": "World's largest halophytic mangrove forest and UNESCO site, spanning the Ganges delta and home to royal Bengal tigers and saltwater crocodiles.",
    "location": "South 24 Parganas, West Bengal",
    "image": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "rishikesh-ganga",
    "name": "Rishikesh & Laxman Jhula",
    "emoji": "🧘",
    "tag": "Spiritual",
    "desc": "The Yoga Capital of the World along the emerald-green upper Ganges, celebrated for river rafting, Parmarth Niketan Ganga Aarti, and Himalayan ashrams.",
    "location": "Rishikesh, Uttarakhand",
    "image": "https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "cherrapunji-bridges",
    "name": "Living Root Bridges",
    "emoji": "🌉",
    "tag": "Nature",
    "desc": "Bio-engineering wonders handcrafted by the Khasi and Jaintia tribes from aerial roots of rubber fig trees across rushing jungle streams.",
    "location": "Cherrapunji, Meghalaya",
    "image": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "jaisalmer-fort",
    "name": "Jaisalmer Golden Fort & Thar Desert",
    "emoji": "🏜️",
    "tag": "Heritage",
    "desc": "A living yellow sandstone fort rising out of the golden Thar Desert sand dunes, with carved havelis, Jain temples, and sunset camel safaris.",
    "location": "Jaisalmer, Rajasthan",
    "image": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "kaziranga-park",
    "name": "Kaziranga National Park",
    "emoji": "🦏",
    "tag": "Wildlife",
    "desc": "UNESCO World Heritage sanctuary in Assam hosting two-thirds of the world's great one-horned rhinoceroses among Brahmaputra floodplain grasslands.",
    "location": "Golaghat, Assam",
    "image": "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "goa-coastal",
    "name": "Goa Coast & Chapora Fort",
    "emoji": "🏖️",
    "tag": "Beach",
    "desc": "Golden sandy palm-fringed coastlines, Portuguese baroque heritage churches, seafood shacks, and historic hilltop forts overlooking the Arabian Sea.",
    "location": "Goa Coast",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "valley-of-flowers",
    "name": "Valley of Flowers National Park",
    "emoji": "🌸",
    "tag": "Nature",
    "desc": "Himalayan alpine valley carpeted in hundreds of species of vibrant wild flora during monsoon, set against glaciers and towering mountain peaks.",
    "location": "Chamoli, Uttarakhand",
    "image": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "jonha-falls",
    "name": "Jonha & Hundru Waterfalls",
    "emoji": "🌊",
    "tag": "Nature",
    "desc": "Breathtaking multi-tiered cascade where the Kanchi and Subarnarekha rivers plummet over rocky plateaus surrounded by pristine Sal forests.",
    "location": "Ranchi, Jharkhand",
    "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "betla-national-park",
    "name": "Betla National Park",
    "emoji": "🐘",
    "tag": "Wildlife",
    "desc": "One of India's earliest tiger sanctuaries, featuring dense Sal canopy, wild elephant herds, sloth bears, and 16th-century Chero dynasty fort ruins.",
    "location": "Latehar, Jharkhand",
    "image": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "baidyanath-dham",
    "name": "Baidyanath Dham Temple",
    "emoji": "🛕",
    "tag": "Spiritual",
    "desc": "One of the twelve revered Jyotirlinga shrines in India, a celebrated pilgrimage destination attracting devotees worldwide during the holy Shravan Mela.",
    "location": "Deoghar, Jharkhand",
    "image": "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "netarhat-hills",
    "name": "Netarhat – Queen of Chotanagpur",
    "emoji": "🌄",
    "tag": "Nature",
    "desc": "A tranquil hill station perched at 3,700 feet, famous for spectacular sunrise and sunset vistas at Magnolia Point, pine forests, and cool mountain breezes.",
    "location": "Latehar, Jharkhand",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "ranchi-lake",
    "name": "Ranchi Lake & Tagore Hill",
    "emoji": "⛵",
    "tag": "Nature",
    "desc": "Historic urban lake dug in 1842 by British Colonel Ouseley, overlooked by the scenic Tagore Hill where Rabindranath Tagore's brother Jyotirindranath once stayed.",
    "location": "Ranchi, Jharkhand",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop"
  }
];

export const QUICK_PROMPTS = [
  "Plan a 3-day India eco-tour",
  "Best beaches in South India",
  "Historical sites in North India",
  "Adventure trips in the Himalayas",
  "Discover unseen gems in India",
];

export const SYSTEM_PROMPT = `You are WanderAI, an expert AI travel guide for India. You specialize in destinations across all states: hill stations, wildlife sanctuaries, beaches, historical sites, spiritual places, adventure sports, cultural experiences, and rare/less-visited hidden gems. Respond warmly, helpfully, and concisely. When planning itineraries, format them clearly with Day-by-Day breakdown. Add relevant emojis. Keep responses under 300 words unless a detailed itinerary is requested. Always celebrate India's diverse identity and promote responsible, sustainable tourism.`;

export const DESTINATIONS = AI_DESTINATIONS;

