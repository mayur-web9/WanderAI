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
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80&auto=format&fit=crop",
    tags: ["Jewelry", "Textiles", "Heritage"]
  },
  {
    id: "4",
    name: "Anjuna Flea Market, Goa",
    description: "A vibrant Wednesday market that captures Goa's bohemian spirit. You can find everything from beachwear and hammocks to local spices and handmade jewelry.",
    location: "Anjuna, Goa",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80&auto=format&fit=crop",
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
    tags: ["Ethnic", "Kiosks", "Budget"]
  },
  {
    id: "9",
    name: "Pondy Bazaar, Chennai",
    description: "One of the busiest shopping areas in Chennai, offering everything from silk sarees and traditional footwear to modern electronics and local accessories.",
    location: "T. Nagar, Chennai",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80&auto=format&fit=crop",
    tags: ["Silk Sarees", "Footwear", "Tradition"]
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
    image_url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80&auto=format&fit=crop',
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
    image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80&auto=format&fit=crop',
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
    image_url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Chhath Puja',
    description: 'An ancient Hindu festival dedicated to the Sun God, celebrated with devotion and rituals on the banks of rivers and ponds.',
    category: 'festival',
    date_start: '2026-11-06',
    date_end: '2026-11-09',
    location: 'River Banks across India',
    image_url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Rohini Festival',
    description: 'The first festival of Jharkhand, Rohini marks the commencement of sowing seeds in the fields. It is a symbolic celebration of the beginning of the agricultural cycle.',
    category: 'festival',
    date_start: '2026-05-25',
    date_end: '2026-05-26',
    location: 'Jharkhand Agricultural Belts',
    image_url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Bandna Festival',
    description: 'A vibrant festival celebrated during the black moon of Kartik month. It is dedicated to the well-being of animals, particularly cows and bulls, which are crucial for farming.',
    category: 'cultural',
    date_start: '2026-11-10',
    date_end: '2026-11-12',
    location: 'Rural Tribal Districts',
    image_url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Mysore Dussehra',
    description: 'The state festival of Karnataka, celebrated with a grand procession of decorated elephants and the magnificent illumination of Mysore Palace.',
    category: 'festival',
    date_start: '2026-10-12',
    date_end: '2026-10-22',
    location: 'Mysore, Karnataka',
    image_url: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Pushkar Camel Fair',
    description: "One of the world's largest camel fairs, where thousands of camels, horses, and cattle are traded amidst vibrant cultural performances and competitions.",
    category: 'cultural',
    date_start: '2026-11-18',
    date_end: '2026-11-26',
    location: 'Pushkar, Rajasthan',
    image_url: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    name: 'Hornbill Festival',
    description: 'Known as the Festival of Festivals, it showcases the rich traditional heritage and 16 tribes of Nagaland through music, dance, and food.',
    category: 'cultural',
    date_start: '2026-12-01',
    date_end: '2026-12-10',
    location: 'Kisama, Nagaland',
    image_url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80&auto=format&fit=crop',
    created_at: new Date().toISOString()
  }
];

export const mockReviews: (Review & { user_name: string; location: string })[] = [
  {
    id: '1',
    user_id: 'u1',
    target_id: 'taj-mahal',
    rating: 5,
    comment: 'WanderAI gave us the perfect sunrise photography timing for Taj Mahal and avoided all crowd rush! Truly unforgettable experience.',
    created_at: '2026-08-20T10:00:00Z',
    user_name: 'Amit Sharma',
    location: 'Mumbai, Maharashtra'
  },
  {
    id: '2',
    user_id: 'u2',
    target_id: 'kerala-backwaters',
    rating: 5,
    comment: 'The 4-day Alleppey & Munnar circuit recommendation was flawless. The local Toddy shop food tips were 10/10 delicious!',
    created_at: '2026-08-21T14:30:00Z',
    user_name: 'Priya Patel',
    location: 'Ahmedabad, Gujarat'
  },
  {
    id: '3',
    user_id: 'u3',
    target_id: 'varanasi-ghats',
    rating: 5,
    comment: 'Subah-e-Banaras sunrise boat ride and the evening Dashashwamedh Aarti guidance helped us navigate Varanasi with total peace of mind.',
    created_at: '2026-08-22T08:15:00Z',
    user_name: 'Rahul Verma',
    location: 'New Delhi'
  },
  {
    id: '4',
    user_id: 'u4',
    target_id: 'hampi-ruins',
    rating: 5,
    comment: 'The heritage notes for the stone chariot and boulder sunsets across Tungabhadra river made me feel like an ancient explorer.',
    created_at: '2026-08-23T11:45:00Z',
    user_name: 'Anjali Gupta',
    location: 'Kolkata, West Bengal'
  },
  {
    id: '5',
    user_id: 'u5',
    target_id: 'leh-ladakh',
    rating: 5,
    comment: 'The acclimatization advice and Pangong Tso homestay recommendations made our high-altitude bike ride super safe and magical.',
    created_at: '2026-08-24T16:20:00Z',
    user_name: 'Suresh Iyer',
    location: 'Chennai, Tamil Nadu'
  },
  {
    id: '6',
    user_id: 'u6',
    target_id: 'golden-temple',
    rating: 5,
    comment: 'Langhar timing and midnight Palki Sahib seva tips were incredibly accurate and deeply moving. Best Indian travel AI by far.',
    created_at: '2026-08-24T19:10:00Z',
    user_name: 'Meera Deshmukh',
    location: 'Pune, Maharashtra'
  },
  {
    id: '7',
    user_id: 'u7',
    target_id: 'amer-fort',
    rating: 5,
    comment: 'Explored Jaipur with the instant chat feature in Hindi! It recommended the best Pyaaz Kachori near Johari Bazaar.',
    created_at: '2026-08-25T09:00:00Z',
    user_name: 'Vikram Singh',
    location: 'Jaipur, Rajasthan'
  },
  {
    id: '8',
    user_id: 'u8',
    target_id: 'cherrapunji-bridges',
    rating: 5,
    comment: 'Nongriat double decker root bridge trek plan was spot on with exact step counts, guide contacts, and rain gear prep.',
    created_at: '2026-08-25T12:00:00Z',
    user_name: 'Kavita Nair',
    location: 'Kochi, Kerala'
  },
  {
    id: '9',
    user_id: 'u9',
    target_id: 'goa-coastal',
    rating: 5,
    comment: 'Showed us unexplored peaceful beaches in South Goa away from commercial party spots. Exactly the getaway we needed!',
    created_at: '2026-08-25T15:30:00Z',
    user_name: 'Arjun Reddy',
    location: 'Hyderabad, Telangana'
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
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80&auto=format&fit=crop"
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
    "longitude": 83.0062,
    "images": [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.669Z"
  },
  {
    "id": "kerala-backwaters",
    "name": "Kerala Backwaters",
    "district": "Alleppey",
    "category": "park",
    "description": "A tranquil labyrinth of palm-fringed canals, lagoons, and lakes, best explored aboard a traditional luxury Kettuvallam wooden houseboat.",
    "short_description": "Serene network of emerald lagoons and traditional luxury houseboats.",
    "latitude": 9.4981,
    "longitude": 76.3388,
    "images": [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "September to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.670Z"
  },
  {
    "id": "hampi-ruins",
    "name": "Hampi Ruins",
    "district": "Hampi",
    "category": "historical",
    "description": "UNESCO World Heritage Site with monumental stone chariot, ancient Vijayanagara temples, and dramatic boulder-strewn landscapes.",
    "short_description": "Ancient Vijayanagara empire capital and iconic stone chariot ruins.",
    "latitude": 15.335,
    "longitude": 76.46,
    "images": [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "November to February",
    "entry_fee": 40,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.670Z"
  },
  {
    "id": "leh-ladakh",
    "name": "Leh Ladakh & Pangong Tso",
    "district": "Leh",
    "category": "park",
    "description": "High-altitude Himalayan desert renowned for dramatic mountain passes, Tibetan Buddhist monasteries, and the pristine cobalt-blue Pangong Tso lake.",
    "short_description": "High-altitude Himalayan passes, Tibetan monasteries, and azure alpine lakes.",
    "latitude": 34.1526,
    "longitude": 77.5771,
    "images": [
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "May to September",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.671Z"
  },
  {
    "id": "golden-temple",
    "name": "Golden Temple (Harmandir Sahib)",
    "district": "Amritsar",
    "category": "temple",
    "description": "The spiritual heart of Sikhism, adorned with gold leaf and surrounded by the sacred Amrit Sarovar lake, hosting the world's largest community kitchen.",
    "short_description": "Spiritual Sikh holy shrine with gleaming gold dome and sacred Amrit Sarovar.",
    "latitude": 31.62,
    "longitude": 74.8765,
    "images": [
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.671Z"
  },
  {
    "id": "munnar-tea-gardens",
    "name": "Munnar Tea Gardens",
    "district": "Munnar",
    "category": "park",
    "description": "Breathtaking rolling hills covered in manicured organic tea plantations, misty mountain viewpoints, and exotic flora in the Western Ghats.",
    "short_description": "Rolling emerald hills, manicured tea estates, and misty mountain viewpoints.",
    "latitude": 10.0889,
    "longitude": 77.0595,
    "images": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "September to May",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.672Z"
  },
  {
    "id": "mysore-palace",
    "name": "Mysore Palace",
    "district": "Mysore",
    "category": "historical",
    "description": "Grand Indo-Saracenic royal palace of the Wadiyar dynasty, renowned for opulent durbar halls, carved mahogany ceilings, and 100,000 festival lights.",
    "short_description": "Opulent royal palace illuminated with over 100,000 festival lights.",
    "latitude": 12.3051,
    "longitude": 76.6551,
    "images": [
      "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 100,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.672Z"
  },
  {
    "id": "amer-fort",
    "name": "Amer Fort & Palace",
    "district": "Jaipur",
    "category": "historical",
    "description": "Magnificent hilltop fort showcasing Rajput architecture, mirror palace (Sheesh Mahal), and sweeping valley views.",
    "short_description": "Hilltop fort showcasing Rajput architecture, courtyards, and mirror palaces.",
    "latitude": 26.9855,
    "longitude": 75.8513,
    "images": [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 100,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.673Z"
  },
  {
    "id": "konark-sun-temple",
    "name": "Konark Sun Temple",
    "district": "Konark",
    "category": "historical",
    "description": "A 13th-century UNESCO marvel sculpted as a colossal 24-wheeled chariot of Surya Dev, celebrated for monumental stone carvings and sundials.",
    "short_description": "13th-century UNESCO marvel sculpted as a colossal 24-wheeled Sun chariot.",
    "latitude": 19.8876,
    "longitude": 86.0945,
    "images": [
      "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 40,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.673Z"
  },
  {
    "id": "ranthambore",
    "name": "Ranthambore Tiger Reserve",
    "district": "Sawai Madhopur",
    "category": "wildlife",
    "description": "Famed national park where royal Bengal tigers roam freely among ancient 10th-century fort ruins, lakes, and deciduous forests.",
    "short_description": "Premier tiger sanctuary featuring wilderness safaris and historic fort ruins.",
    "latitude": 26.0173,
    "longitude": 76.5026,
    "images": [
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to April",
    "entry_fee": 1200,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.674Z"
  },
  {
    "id": "victoria-memorial",
    "name": "Victoria Memorial Hall",
    "district": "Kolkata",
    "category": "historical",
    "description": "Magnificent white Makrana marble monument with 64 acres of landscaped gardens, housing rare Raj-era paintings, manuscripts, and sculptures.",
    "short_description": "Stately white Makrana marble palace surrounded by sprawling gardens.",
    "latitude": 22.5448,
    "longitude": 88.3426,
    "images": [
      "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 50,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.674Z"
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
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80&auto=format&fit=crop"
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
    "description": "Historic Hindu temple on the southern bank of Vaigai River, famed for 14 towering gopurams encrusted with thousands of colorful mythological sculptures.",
    "short_description": "Dravidian architectural masterpiece with 14 vibrant sculpted gopurams.",
    "latitude": 9.9195,
    "longitude": 78.1193,
    "images": [
      "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.675Z"
  },
  {
    "id": "qutub-minar",
    "name": "Qutub Minar & Mehrauli Complex",
    "district": "Delhi",
    "category": "historical",
    "description": "A 73-meter-tall victory minaret of fluted red sandstone, built in 1192 and surrounded by ancient Mughal and Delhi Sultanate ruins including the rust-resistant Iron Pillar.",
    "short_description": "World's tallest brick minaret standing inside a historic 12th-century monument complex.",
    "latitude": 28.5244,
    "longitude": 77.1855,
    "images": [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 40,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.676Z"
  },
  {
    "id": "sundarbans",
    "name": "Sundarbans Biosphere Reserve",
    "district": "South 24 Parganas",
    "category": "wildlife",
    "description": "World's largest halophytic mangrove forest and UNESCO site, spanning the Ganges delta and home to royal Bengal tigers and saltwater crocodiles.",
    "short_description": "Vast mangrove delta crisscrossed by tidal waterways, tigers, and biodiversity.",
    "latitude": 21.9497,
    "longitude": 89.1833,
    "images": [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "September to March",
    "entry_fee": 100,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.676Z"
  },
  {
    "id": "rishikesh-ganga",
    "name": "Rishikesh & Laxman Jhula",
    "district": "Rishikesh",
    "category": "temple",
    "description": "The Yoga Capital of the World along the emerald-green upper Ganges, celebrated for river rafting, Parmarth Niketan Ganga Aarti, and Himalayan foothill ashrams.",
    "short_description": "Yoga capital on the emerald Ganges with iconic suspension bridges and river rafting.",
    "latitude": 30.0869,
    "longitude": 78.2676,
    "images": [
      "https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "September to April",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.677Z"
  },
  {
    "id": "cherrapunji-bridges",
    "name": "Living Root Bridges",
    "district": "Cherrapunji",
    "category": "park",
    "description": "Bio-engineering wonders handcrafted by the Khasi and Jaintia tribes from aerial roots of rubber fig trees across rushing jungle streams.",
    "short_description": "Centuries-old living bio-engineered bridges grown from tree roots across jungle streams.",
    "latitude": 25.2702,
    "longitude": 91.7323,
    "images": [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to April",
    "entry_fee": 50,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.678Z"
  },
  {
    "id": "jaisalmer-fort",
    "name": "Jaisalmer Golden Fort & Thar Desert",
    "district": "Jaisalmer",
    "category": "historical",
    "description": "A living yellow sandstone fort rising out of the golden Thar Desert sand dunes, with carved havelis, Jain temples, and sunset camel safaris.",
    "short_description": "Living golden fort rising dramatically over the Thar Desert dunes.",
    "latitude": 26.9124,
    "longitude": 70.916,
    "images": [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 50,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.678Z"
  },
  {
    "id": "kaziranga-park",
    "name": "Kaziranga National Park",
    "district": "Golaghat",
    "category": "wildlife",
    "description": "UNESCO World Heritage sanctuary in Assam hosting two-thirds of the world's great one-horned rhinoceroses among Brahmaputra floodplain grasslands.",
    "short_description": "World-famous sanctuary of the Indian one-horned rhinoceros and Brahmaputra wetlands.",
    "latitude": 26.5775,
    "longitude": 93.1711,
    "images": [
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "November to April",
    "entry_fee": 100,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.679Z"
  },
  {
    "id": "goa-coastal",
    "name": "Goa Coast & Chapora Fort",
    "district": "North & South Goa",
    "category": "park",
    "description": "Golden sandy palm-fringed coastlines, Portuguese baroque heritage churches, seafood shacks, and historic hilltop forts overlooking the Arabian Sea.",
    "short_description": "Sun-kissed Arabian Sea beaches, colonial heritage churches, and coastal forts.",
    "latitude": 15.2993,
    "longitude": 74.124,
    "images": [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "November to February",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.679Z"
  },
  {
    "id": "valley-of-flowers",
    "name": "Valley of Flowers National Park",
    "district": "Chamoli",
    "category": "park",
    "description": "Himalayan alpine valley carpeted in hundreds of species of vibrant wild flora during monsoon, set against glaciers and towering mountain peaks.",
    "short_description": "High-altitude alpine valley blossoming with hundreds of endemic mountain wildflowers.",
    "latitude": 30.728,
    "longitude": 79.6053,
    "images": [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "July to September",
    "entry_fee": 150,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.680Z"
  },
  {
    "id": "jonha-falls",
    "name": "Jonha & Hundru Waterfalls",
    "district": "Ranchi",
    "category": "park",
    "description": "Breathtaking multi-tiered cascade where the Kanchi and Subarnarekha rivers plummet over rocky plateaus surrounded by pristine Sal forests.",
    "short_description": "Spectacular cascade surrounded by dense green Sal forests of Chotanagpur.",
    "latitude": 23.3441,
    "longitude": 85.6074,
    "images": [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "September to February",
    "entry_fee": 10,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.680Z"
  },
  {
    "id": "betla-national-park",
    "name": "Betla National Park",
    "district": "Latehar",
    "category": "wildlife",
    "description": "One of India's earliest tiger sanctuaries, featuring dense Sal canopy, wild elephant herds, sloth bears, and 16th-century Chero dynasty fort ruins.",
    "short_description": "Sanctuary known for wild elephant herds, tigers, and historic 16th-century Chero fort ruins.",
    "latitude": 23.8833,
    "longitude": 84.1833,
    "images": [
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "November to April",
    "entry_fee": 50,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.681Z"
  },
  {
    "id": "baidyanath-dham",
    "name": "Baidyanath Dham Temple",
    "district": "Deoghar",
    "category": "temple",
    "description": "One of the twelve revered Jyotirlinga shrines in India, a celebrated pilgrimage destination attracting devotees worldwide during the holy Shravan Mela.",
    "short_description": "Sacred Jyotirlinga pilgrimage temple attracting devotees across the subcontinent.",
    "latitude": 24.4925,
    "longitude": 86.7001,
    "images": [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.681Z"
  },
  {
    "id": "netarhat-hills",
    "name": "Netarhat – Queen of Chotanagpur",
    "district": "Latehar",
    "category": "park",
    "description": "A tranquil hill station perched at 3,700 feet, famous for spectacular sunrise and sunset vistas at Magnolia Point, pine forests, and cool mountain breezes.",
    "short_description": "Serene hill station famed for misty sunsets at Magnolia Point and dense pine forests.",
    "latitude": 23.4833,
    "longitude": 84.2667,
    "images": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to April",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.682Z"
  },
  {
    "id": "ranchi-lake",
    "name": "Ranchi Lake & Tagore Hill",
    "district": "Ranchi",
    "category": "park",
    "description": "Historic urban lake dug in 1842 by British Colonel Ouseley, overlooked by the scenic Tagore Hill where Rabindranath Tagore's brother Jyotirindranath once stayed.",
    "short_description": "Scenic lake and historic hilltop viewpoint with panoramic city vistas.",
    "latitude": 23.3644,
    "longitude": 85.3216,
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop"
    ],
    "best_time": "October to March",
    "entry_fee": 0,
    "is_featured": true,
    "created_at": "2026-08-25T16:49:23.682Z"
  }
];


