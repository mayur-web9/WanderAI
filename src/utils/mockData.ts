import { Destination, Event, Review, Marketplace } from '../types';

export const DEFAULT_MARKETPLACES: Marketplace[] = [
  {
    id: "1",
    name: "Dilli Haat, Delhi",
    description: "An open-air food plaza and craft bazaar that offers a taste of India's cultural diversity. Artisans from across the country sell traditional handicrafts and handlooms.",
    location: "INA, New Delhi",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80&auto=format&fit=crop",
    tags: ["Crafts", "Food", "Culture"]
  },
  {
    id: "2",
    name: "Colaba Causeway, Mumbai",
    description: "The shopping soul of Mumbai. From trendy accessories and clothing to antique clocks and vintage collectibles, this market has it all.",
    location: "Colaba, Mumbai",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    tags: ["Antiques", "Fashion", "Street Food"]
  },
  {
    id: "3",
    name: "Johari Bazaar, Jaipur",
    description: "Famous for its stunning collection of precious and semi-precious gemstones, traditional jewelry, and authentic Rajasthani textiles.",
    location: "Pink City, Jaipur",
    image: "https://images.unsplash.com/photo-1519058082350-fd9d1fe91489?w=800&q=80&auto=format&fit=crop",
    tags: ["Jewelry", "Textiles", "Heritage"]
  },
  {
    id: "4",
    name: "Anjuna Flea Market, Goa",
    description: "A vibrant Wednesday market that captures Goa's bohemian spirit. You can find everything from beachwear and hammocks to local spices and handmade jewelry.",
    location: "Anjuna, Goa",
    image: "https://images.unsplash.com/photo-1533050228-dc88c74e91ca?w=800&q=80&auto=format&fit=crop",
    tags: ["Bohemian", "Music", "Spices"]
  },
  {
    id: "5",
    name: "Laad Bazaar, Hyderabad",
    description: "Located near the Charminar, this historic market is world-famous for its exquisite lacquer bangles encrusted with stones.",
    location: "Charminar, Hyderabad",
    image: "https://images.unsplash.com/photo-1612528442702-28c6a0abb6f4?w=800&q=80&auto=format&fit=crop",
    tags: ["Bangles", "Lacquer", "Historic"]
  },
  {
    id: "6",
    name: "Floating Vegetable Market, Srinagar",
    description: "A unique early morning experience where vendors sell fresh produce from their traditional wooden boats (shikaras) on the serene Dal Lake.",
    location: "Dal Lake, Srinagar",
    image: "https://images.unsplash.com/photo-1587502536263-c9b7ac76c3bc?w=800&q=80&auto=format&fit=crop",
    tags: ["Nature", "Local", "Unique"]
  },
  {
    id: "7",
    name: "Police Bazar, Shillong",
    description: "The commercial hub of Shillong. A perfect mix of traditional and modern, where you can find exquisite Meghalayan handlooms, bamboo crafts, and amazing local street food.",
    location: "Khyndailad, Shillong",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe96?w=800&q=80&auto=format&fit=crop",
    tags: ["Handlooms", "Bamboo", "Street Food"]
  },
  {
    id: "8",
    name: "Janpath Market, Delhi",
    description: "A popular boutique market known for its long line of small kiosks selling ethnic clothing, silver jewelry, and handicrafts from across India and Tibet.",
    location: "Connaught Place, New Delhi",
    image: "https://images.unsplash.com/photo-1575101600-7da29a27cb7b?w=800&q=80&auto=format&fit=crop",
    tags: ["Jewelry", "Handicrafts", "Bargain"]
  },
  {
    id: "9",
    name: "Pondy Bazaar, Chennai",
    description: "One of the busiest shopping areas in Chennai, offering everything from silk sarees and traditional footwear to modern electronics and local accessories.",
    location: "T. Nagar, Chennai",
    image: "https://images.unsplash.com/photo-1583391265427-83c9d9250f37?w=800&q=80&auto=format&fit=crop",
    tags: ["Sarees", "Footwear", "Busy"]
  }
];

export const mockDestinations: Destination[] = [
  {
    "id": "taj-mahal",
    "name": "Taj Mahal",
    "district": "Agra",
    "category": "historical",
    "description": "Agra's iconic ivory-white marble mausoleum, a symbol of eternal love and a UNESCO World Heritage site standing gracefully beside the Yamuna River.",
    "short_description": "UNESCO World Heritage white marble monument and symbol of eternal love.",
    "latitude": 27.1751,
    "longitude": 78.0421,
    "images": [
      "https://images.unsplash.com/photo-1548013146-59c1e67e02a4?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 50,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.668Z"
  },
  {
    "id": "varanasi-ghats",
    "name": "Varanasi Ghats",
    "district": "Varanasi",
    "category": "temple",
    "description": "Experience the spiritual soul of India along the sacred riverfront steps of the Ganges, famous for ancient temples and evening Maha Ganga Aarti.",
    "short_description": "Sacred riverfront ghats and evening Ganga Aarti along the holy Ganges.",
    "latitude": 25.3176,
    "longitude": 82.9739,
    "images": [
      "https://images.unsplash.com/photo-1587922547015-8ae2b155d6d2?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "kerala-backwaters",
    "name": "Kerala Backwaters",
    "district": "Alleppey",
    "category": "park",
    "description": "A serene labyrinth of interconnected palm-fringed canals, lagoons, and lakes, best explored on a traditional luxury Kettuvallam houseboat.",
    "short_description": "Tranquil network of canals, lagoons, and luxury houseboats.",
    "latitude": 9.4981,
    "longitude": 76.3388,
    "images": [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "September to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "hampi-ruins",
    "name": "Hampi Ruins",
    "district": "Vijayanagara",
    "category": "historical",
    "description": "The monumental boulder-strewn landscape of Hampi, home to the UNESCO-listed stone chariot, grand monolithic temples, and Vijayanagara ruins.",
    "short_description": "UNESCO World Heritage stone chariot and ancient Vijayanagara ruins.",
    "latitude": 15.335,
    "longitude": 76.46,
    "images": [
      "https://images.unsplash.com/photo-1564507592333-04cd2a2f359a?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to February",
    "entry_fee": 40,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "leh-ladakh",
    "name": "Leh Ladakh & Pangong Tso",
    "district": "Leh",
    "category": "historical",
    "description": "A high-altitude desert known for breathtaking Himalayan mountain passes, Tibetan Buddhist gompas, and the azure Pangong Tso lake.",
    "short_description": "High-altitude mountain passes, ancient monasteries, and turquoise lakes.",
    "latitude": 34.1526,
    "longitude": 77.5771,
    "images": [
      "https://images.unsplash.com/photo-1621786030484-4b5f5de4a788?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "May to September",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "golden-temple",
    "name": "Golden Temple (Harmandir Sahib)",
    "district": "Amritsar",
    "category": "temple",
    "description": "The spiritual heart of Sikhism, adorned with gold leaf and surrounded by the sacred Amrit Sarovar lake, hosting the world's largest community kitchen.",
    "short_description": "Gilded spiritual sanctum of Sikhism with sacred Amrit Sarovar.",
    "latitude": 31.62,
    "longitude": 74.8765,
    "images": [
      "https://images.unsplash.com/photo-1585136917625-b29f83aa3174?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "munnar-tea-gardens",
    "name": "Munnar Tea Gardens",
    "district": "Idukki",
    "category": "park",
    "description": "Endless rolling green hills blanketed with manicured tea plantations, misty mountain trails, and the endangered Nilgiri Tahr sanctuary.",
    "short_description": "Misty rolling green hills, spice estates, and sprawling tea plantations.",
    "latitude": 10.0889,
    "longitude": 77.0595,
    "images": [
      "https://images.unsplash.com/photo-1571068316344-75bc3048de5e?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "September to April",
    "entry_fee": 25,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "mysore-palace",
    "name": "Mysore Palace",
    "district": "Mysuru",
    "category": "historical",
    "description": "A grand Indo-Saracenic royal palace of the Wadiyar dynasty, renowned worldwide for its ornate durbar halls and 100,000 glowing evening lights.",
    "short_description": "Ornate Indo-Saracenic royal palace illuminated with 100,000 bulbs.",
    "latitude": 12.3051,
    "longitude": 76.6551,
    "images": [
      "https://images.unsplash.com/photo-1598091383021-15ddea64c8b0?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 100,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "amer-fort",
    "name": "Amer Fort & Palace",
    "district": "Jaipur",
    "category": "historical",
    "description": "A magnificent hilltop Rajput citadel overlooking Maota Lake, famous for its dazzling Sheesh Mahal (Mirror Palace) and royal courtyards.",
    "short_description": "Hilltop Rajput fortress famous for the Sheesh Mahal mirror palace.",
    "latitude": 26.9855,
    "longitude": 75.8513,
    "images": [
      "https://images.unsplash.com/photo-1524492412435-32cd049bde7d?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 100,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "konark-sun-temple",
    "name": "Konark Sun Temple",
    "district": "Puri",
    "category": "temple",
    "description": "A 13th-century UNESCO marvel sculpted as a colossal 24-wheeled chariot of Surya Dev, celebrated for monumental stone carvings and sundials.",
    "short_description": "13th-century UNESCO monumental stone chariot temple of the Sun God.",
    "latitude": 19.8876,
    "longitude": 86.0945,
    "images": [
      "https://images.unsplash.com/photo-1600100397608-f010f443b221?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "November to February",
    "entry_fee": 40,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "ranthambore",
    "name": "Ranthambore Tiger Reserve",
    "district": "Sawai Madhopur",
    "category": "wildlife",
    "description": "One of India's premier tiger reserves where Royal Bengal tigers roam freely amidst 1,000-year-old fort ruins, lakes, and deciduous forests.",
    "short_description": "Premier Royal Bengal tiger habitat set against 10th-century fort ruins.",
    "latitude": 26.0173,
    "longitude": 76.5026,
    "images": [
      "https://images.unsplash.com/photo-1615279867456-1e2f5e9e2291?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to April",
    "entry_fee": 600,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "victoria-memorial",
    "name": "Victoria Memorial Hall",
    "district": "Kolkata",
    "category": "historical",
    "description": "An imposing British-era white Makrana marble monument set in 64 acres of landscaped gardens, housing rare national art galleries and archives.",
    "short_description": "White Makrana marble monument and national museum in Kolkata.",
    "latitude": 22.5448,
    "longitude": 88.3426,
    "images": [
      "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 50,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "ajanta-ellora",
    "name": "Ajanta & Ellora Caves",
    "district": "Aurangabad",
    "category": "historical",
    "description": "Rock-cut cave temples spanning ancient Buddhist, Hindu, and Jain heritage, featuring the monolithic Kailash Temple carved from a single cliff.",
    "short_description": "Ancient rock-cut cave monuments and the monolithic Kailash Temple.",
    "latitude": 20.0268,
    "longitude": 75.178,
    "images": [
      "https://images.unsplash.com/photo-1600100397608-f010f443b221?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 40,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "meenakshi-temple",
    "name": "Meenakshi Amman Temple",
    "district": "Madurai",
    "category": "temple",
    "description": "Historic Dravidian temple complex on the Vaigai River with 14 towering gopurams decorated with thousands of colorful mythological sculptures.",
    "short_description": "Towering Dravidian temple complex with 14 sculpted gopuram gateways.",
    "latitude": 9.9195,
    "longitude": 78.1193,
    "images": [
      "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "qutub-minar",
    "name": "Qutub Minar & Mehrauli Complex",
    "district": "New Delhi",
    "category": "historical",
    "description": "A 73-meter red sandstone minaret built in 1192, surrounded by ancient monuments including the rust-resistant 4th-century Iron Pillar of Chandragupta II.",
    "short_description": "World's tallest brick minaret and ancient Delhi Sultanate monuments.",
    "latitude": 28.5244,
    "longitude": 77.1855,
    "images": [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 50,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "sundarbans",
    "name": "Sundarbans Biosphere Reserve",
    "district": "South 24 Parganas",
    "category": "wildlife",
    "description": "The world's largest mangrove forest, home to swimming Royal Bengal tigers, estuarine crocodiles, and rare Gangetic dolphins across tidal waterways.",
    "short_description": "World's largest mangrove delta and swimming Bengal tiger sanctuary.",
    "latitude": 21.9497,
    "longitude": 89.1833,
    "images": [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "November to March",
    "entry_fee": 100,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "rishikesh-ganga",
    "name": "Rishikesh & Laxman Jhula",
    "district": "Dehradun",
    "category": "temple",
    "description": "The world capital of Yoga situated along the pristine emerald waters of the Ganges, offering white-water rafting, ashrams, and Triveni Ghat aarti.",
    "short_description": "Yoga capital, white-water rafting hub, and Himalayan river ashrams.",
    "latitude": 30.0869,
    "longitude": 78.2676,
    "images": [
      "https://images.unsplash.com/photo-1598890777032-bde13fbe34c9?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "September to November & March to May",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "cherrapunji-bridges",
    "name": "Living Root Bridges",
    "district": "East Khasi Hills",
    "category": "park",
    "description": "Bio-engineered botanical wonders hand-woven by the indigenous Khasi tribe across centuries from the aerial roots of Ficus elastica trees.",
    "short_description": "Living bio-engineered double-decker root bridges in Khasi hills.",
    "latitude": 25.2702,
    "longitude": 91.7323,
    "images": [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "October to April",
    "entry_fee": 30,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "jaisalmer-fort",
    "name": "Jaisalmer Golden Fort & Thar Desert",
    "district": "Jaisalmer",
    "category": "historical",
    "description": "The majestic golden sandstone living fort rising from the Thar Desert dunes, known for havelis, Jain temples, and sunset camel safaris at Sam Dunes.",
    "short_description": "Living golden sandstone desert fort and Thar dune camel safaris.",
    "latitude": 26.9124,
    "longitude": 70.9126,
    "images": [
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 50,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "kaziranga-park",
    "name": "Kaziranga National Park",
    "district": "Golaghat",
    "category": "wildlife",
    "description": "UNESCO World Heritage sanctuary harboring two-thirds of the planet's great one-horned rhinoceros population in the fertile Brahmaputra floodplains.",
    "short_description": "World's premier habitat for the great Indian one-horned rhinoceros.",
    "latitude": 26.5775,
    "longitude": 93.1711,
    "images": [
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "November to April",
    "entry_fee": 100,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "goa-coastal",
    "name": "Goa Coast & Chapora Fort",
    "district": "North Goa",
    "category": "park",
    "description": "Golden sandy palm-fringed coastlines, Portuguese baroque heritage churches, seafood shacks, and historic hilltop forts overlooking the Arabian Sea.",
    "short_description": "Golden palm beaches, oceanfront forts, and Portuguese colonial churches.",
    "latitude": 15.6062,
    "longitude": 73.738,
    "images": [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "November to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "valley-of-flowers",
    "name": "Valley of Flowers National Park",
    "district": "Chamoli",
    "category": "park",
    "description": "A UNESCO high-altitude alpine meadow nestled in West Himalaya, blooming with hundreds of rare wild alpine flowers and medicinal herbs each monsoon.",
    "short_description": "UNESCO high-altitude Himalayan valley carpeted in endemic alpine blooms.",
    "latitude": 30.728,
    "longitude": 79.6053,
    "images": [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "July to September",
    "entry_fee": 150,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "jonha-falls",
    "name": "Jonha & Hundru Waterfalls",
    "district": "Ranchi",
    "category": "waterfall",
    "description": "Scenic multi-tiered waterfalls cascading from heights over 98 meters amidst rocky plateaus and verdant Sal tree forests in Chotanagpur.",
    "short_description": "Spectacular rocky cascades and green Sal forests in the Chotanagpur plateau.",
    "latitude": 23.3058,
    "longitude": 85.4425,
    "images": [
      "https://images.unsplash.com/photo-1530879064-4cad9f7be6ec?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "July to December",
    "entry_fee": 30,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "betla-national-park",
    "name": "Betla National Park",
    "district": "Latehar",
    "category": "wildlife",
    "description": "One of India's earliest tiger sanctuaries, featuring dense Sal canopy, wild elephant herds, sloth bears, and 16th-century Chero dynasty fort ruins.",
    "short_description": "Historic tiger reserve with wild elephants and 16th-century fort ruins.",
    "latitude": 23.8667,
    "longitude": 84.1833,
    "images": [
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "October to April",
    "entry_fee": 100,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "baidyanath-dham",
    "name": "Baidyanath Dham Temple",
    "district": "Deoghar",
    "category": "temple",
    "description": "One of the twelve revered Jyotirlinga shrines in India, a celebrated pilgrimage destination attracting devotees worldwide during the holy Shravani Mela.",
    "short_description": "One of the 12 sacred Jyotirlinga temples and major pilgrimage center.",
    "latitude": 24.4844,
    "longitude": 86.6993,
    "images": [
      "https://images.unsplash.com/photo-1627894006066-b45786537123?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "netarhat-hills",
    "name": "Netarhat â€” Queen of Chotanagpur",
    "district": "Latehar",
    "category": "park",
    "description": "A tranquil hill station at 3,700 ft known for cool pine forests, pear orchards, Magnolia Sunset Point, and Lower Ghaghri waterfall trails.",
    "short_description": "Serene pine-forested hill station famous for Magnolia Sunset Point.",
    "latitude": 23.4795,
    "longitude": 84.269,
    "images": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop"
    ],
    "best_time": "October to April",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "ranchi-lake",
    "name": "Ranchi Lake & Tagore Hill",
    "district": "Ranchi",
    "category": "park",
    "description": "An 1842 historic lake nestled beneath Ranchi Hill alongside Tagore Hill, where Nobel laureate Rabindranath Tagore composed celebrated literary works.",
    "short_description": "Scenic boating lake and historic hill associated with Rabindranath Tagore.",
    "latitude": 23.3643,
    "longitude": 85.3365,
    "images": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "Year-round",
    "entry_fee": 10,
    "is_featured": false,
    "created_at": "2026-08-25T16:49:23.675Z"
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Sarhul Festival',
    description: 'A spring festival celebrated by the tribal communities of India, marking the worship of nature and the blossoming of Sal trees.',
    category: 'festival',
    date_start: '2026-03-25',
    date_end: '2026-03-27',
    location: 'Across India',
    image_url: 'https://images.unsplash.com/photo-1533104858776-4a00e0f44e63?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Karma Festival',
    description: 'A harvest festival celebrated with traditional dance, music, and rituals to worship the Karma deity for good harvest and prosperity.',
    category: 'cultural',
    date_start: '2026-09-15',
    date_end: '2026-09-16',
    location: 'Tribal Villages',
    image_url: 'https://images.unsplash.com/photo-1567337710282-87b0e0e5e1c5?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Tusu Parab',
    description: 'A festival dedicated to Goddess Tusu, celebrated during Makar Sankranti with colorful processions and folk songs.',
    category: 'festival',
    date_start: '2026-01-14',
    date_end: '2026-01-15',
    location: 'Purulia, Dhanbad',
    image_url: 'https://images.unsplash.com/photo-1519817298949-0e2a6e97c13f?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Chhath Puja',
    description: 'An ancient Hindu festival dedicated to the Sun God, celebrated with devotion and rituals on the banks of rivers and ponds.',
    category: 'festival',
    date_start: '2026-11-10',
    date_end: '2026-11-13',
    location: 'Riverbanks across India',
    image_url: 'https://images.unsplash.com/photo-1604313741082-56d9c3a5e05e?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Rohini Festival',
    description: 'The first festival of Jharkhand, Rohini marks the commencement of sowing seeds in the fields. It is a symbolic celebration of the beginning of the agricultural cycle.',
    category: 'cultural',
    date_start: '2026-06-05',
    date_end: '2026-06-06',
    location: 'Rural Jharkhand',
    image_url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Bandna Festival',
    description: 'A vibrant festival celebrated during the black moon of Kartik month. It is dedicated to the well-being of animals, particularly cows and bulls, which are crucial for farming.',
    category: 'festival',
    date_start: '2026-11-15',
    date_end: '2026-11-17',
    location: 'Santhal Pargana',
    image_url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {    id: '7',
    name: 'Mysore Dussehra',
    description: 'The state festival of Karnataka, celebrated with a grand procession of decorated elephants and the magnificent illumination of Mysore Palace.',
    category: 'cultural',
    date_start: '2026-10-13',
    date_end: '2026-10-22',
    location: 'Mysore, Karnataka',
    image_url: 'https://images.unsplash.com/photo-1568454537842-d933259e7f6f?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {    id: '8',
    name: 'Pushkar Camel Fair',
    description: "One of the world's largest camel fairs, where thousands of camels, horses, and cattle are traded amidst vibrant cultural performances and competitions.",
    category: 'fair',
    date_start: '2026-11-18',
    date_end: '2026-11-26',
    location: 'Pushkar, Rajasthan',
    image_url: 'https://images.unsplash.com/photo-1524749631380-db2f0b5dd9e2?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {    id: '9',
    name: 'Hornbill Festival',
    description: 'Known as the Festival of Festivals, it showcases the rich traditional heritage and 16 tribes of Nagaland through music, dance, and food.',
    category: 'cultural',
    date_start: '2026-12-01',
    date_end: '2026-12-10',
    location: 'Kisama, Nagaland',
    image_url: 'https://images.unsplash.com/photo-1577644545636-f08b87f7736c?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  }
];

export const mockReviews: (Review & { user_name: string; location: string })[] = [
  {
    id: '1',
    user_id: 'user1',
    user_name: 'Amit Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    comment: 'The Hundru Falls in Jharkhand are absolutely breathtaking during the monsoon! The power of the water is something you have to see to believe.',
    sentiment: 'positive',
    target_type: 'destination',
    target_id: '1',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    user_id: 'user2',
    user_name: 'Priya Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    comment: 'The Taj Mahal in Agra is a spiritual and architectural haven. Seeing it at sunrise was a life-changing experience!',
    sentiment: 'positive',
    target_type: 'destination',
    target_id: '3',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    user_id: 'user3',
    user_name: 'Rahul Verma',
    location: 'New Delhi',
    rating: 5,
    comment: 'Leh Ladakh is like another planet. The high-altitude passes and the crystal clear lakes of Pangong are purely magical. Must visit!',
    sentiment: 'positive',
    target_type: 'destination',
    target_id: '2',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    user_id: 'user4',
    user_name: 'Anjali Gupta',
    location: 'Kolkata, West Bengal',
    rating: 5,
    comment: 'Kerala Backwaters on a houseboat was the most peaceful experience. The greenery and the local food were just incredible.',
    sentiment: 'positive',
    target_type: 'destination',
    target_id: '6',
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    user_id: 'user5',
    user_name: 'Suresh Iyer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    comment: 'The ruins of Hampi in Karnataka are a testament to our rich heritage. The stone chariot and the Virupaksha temple left me in awe.',
    sentiment: 'positive',
    target_type: 'destination',
    target_id: '4',
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    user_id: 'user6',
    user_name: 'Meera Deshmukh',
    location: 'Pune, Maharashtra',
    rating: 5,
    comment: 'The Golden Temple in Amritsar is so serene. The community kitchen (Langar) and the spiritual vibe are something everyone should experience.',
    sentiment: 'positive',
    target_type: 'destination',
    target_id: '5',
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    user_id: 'user7',
    user_name: 'Vikram Singh',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    comment: 'The Amer Fort in Jaipur is a majestic masterpiece. The Sheesh Mahal is absolutely stunning, and the history here is so well preserved.',
    sentiment: 'positive',
    target_type: 'destination',
    target_id: '7',
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    user_id: 'user8',
    user_name: 'Kavita Nair',
    location: 'Kochi, Kerala',
    rating: 5,
    comment: 'Munnar Tea Gardens in Kerala are a paradise for nature lovers. The rolling hills and the fresh air were so rejuvenating for our family.',
    sentiment: 'positive',
    target_type: 'destination',
    target_id: '8',
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    user_id: 'user9',
    user_name: 'Arjun Reddy',
    location: 'Hyderabad, Telangana',
    rating: 5,
    comment: 'The Konark Sun Temple in Odisha is an architectural marvel. The stone carvings and the scientific design are mind-blowing!',
    sentiment: 'positive',
    target_type: 'destination',
    target_id: '9',
    created_at: new Date().toISOString()
  }
];

