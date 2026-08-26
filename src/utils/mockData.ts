import { Destination, Event, Review, Marketplace } from '../types';
import { ALL_1111_DESTINATIONS } from './destinations1111';

export const mockDestinations: Destination[] = ALL_1111_DESTINATIONS.map((d, i) => ({
  id: d.id || String(i + 1),
  name: d.name,
  district: (d.location || '').split(',')[0].trim() || 'Central',
  state: d.state || 'India',
  category: (d.category as any) || 'heritage',
  description: d.desc || '',
  short_description: d.desc || '',
  best_time: d.best_time || 'Oct - Mar',
  is_featured: true,
  famous_things: (d as any).famous_things || [d.tag || 'Sightseeing'],
  transit_info: (d as any).transit_info || 'Well connected by air, rail, and state highways.'
}));

export const mockReviews: Review[] = [];


export const DEFAULT_MARKETPLACES: Marketplace[] = [
  {
    "id": "1",
    "name": "Dilli Haat",
    "description": "A vibrant and bustling market in INA, New Delhi, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "INA, New Delhi",
    "state": "Delhi",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "2",
    "name": "Colaba Causeway",
    "description": "A vibrant and bustling market in Colaba, Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Colaba, Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "3",
    "name": "Johari Bazaar",
    "description": "A vibrant and bustling market in Jaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "4",
    "name": "Chor Bazaar",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic antique shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Antiques",
      "Vintage",
      "Decor"
    ],
    "famous_items": [
      "Vintage artifacts",
      "Old coins",
      "Gramophones",
      "Retro decor"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "5",
    "name": "Sarojini Nagar",
    "description": "A vibrant and bustling market in New Delhi, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "New Delhi",
    "state": "Delhi",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "6",
    "name": "Commercial Street",
    "description": "A vibrant and bustling market in Bengaluru, Karnataka. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Bengaluru",
    "state": "Karnataka",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "7",
    "name": "Janpath Market",
    "description": "A vibrant and bustling market in New Delhi, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "New Delhi",
    "state": "Delhi",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "8",
    "name": "New Market",
    "description": "A vibrant and bustling market in Kolkata, West Bengal. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Kolkata",
    "state": "West Bengal",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "9",
    "name": "Pondy Bazaar",
    "description": "A vibrant and bustling market in Chennai, Tamil Nadu. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Chennai",
    "state": "Tamil Nadu",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "10",
    "name": "Crawford Market",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "11",
    "name": "Laad Bazaar",
    "description": "A vibrant and bustling market in Hyderabad, Telangana. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Hyderabad",
    "state": "Telangana",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "12",
    "name": "Bapu Bazaar",
    "description": "A vibrant and bustling market in Jaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "13",
    "name": "Hazratganj",
    "description": "A vibrant and bustling market in Lucknow, Uttar Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Lucknow",
    "state": "Uttar Pradesh",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "14",
    "name": "Chandni Chowk",
    "description": "A vibrant and bustling market in Old Delhi, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Old Delhi",
    "state": "Delhi",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "15",
    "name": "FC Road",
    "description": "A vibrant and bustling market in Pune, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Pune",
    "state": "Maharashtra",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "16",
    "name": "Jew Town",
    "description": "A vibrant and bustling market in Kochi, Kerala. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic antique shopping.",
    "location": "Kochi",
    "state": "Kerala",
    "tags": [
      "Antiques",
      "Vintage",
      "Decor"
    ],
    "famous_items": [
      "Vintage artifacts",
      "Old coins",
      "Gramophones",
      "Retro decor"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "17",
    "name": "Anjuna Flea Market",
    "description": "A vibrant and bustling market in Anjuna, Goa. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic flea shopping.",
    "location": "Anjuna",
    "state": "Goa",
    "tags": [
      "Flea Market",
      "Bargains",
      "Boho"
    ],
    "famous_items": [
      "Bohemian clothing",
      "Junk jewelry",
      "Handicrafts",
      "Spices"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "18",
    "name": "Police Bazaar",
    "description": "A vibrant and bustling market in Shillong, Meghalaya. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Shillong",
    "state": "Meghalaya",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "19",
    "name": "Gariahat Market",
    "description": "A vibrant and bustling market in Kolkata, West Bengal. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Kolkata",
    "state": "West Bengal",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "20",
    "name": "Ima Keithel",
    "description": "A vibrant and bustling market in Imphal, Manipur. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Imphal",
    "state": "Manipur",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "21",
    "name": "Aminabad",
    "description": "A vibrant and bustling market in Lucknow, Uttar Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Lucknow",
    "state": "Uttar Pradesh",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "22",
    "name": "Sadar Bazaar",
    "description": "A vibrant and bustling market in Agra, Uttar Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Agra",
    "state": "Uttar Pradesh",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "23",
    "name": "Brigade Road",
    "description": "A vibrant and bustling market in Bengaluru, Karnataka. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Bengaluru",
    "state": "Karnataka",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "24",
    "name": "T. Nagar",
    "description": "A vibrant and bustling market in Chennai, Tamil Nadu. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Chennai",
    "state": "Tamil Nadu",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "25",
    "name": "Mall Road",
    "description": "A vibrant and bustling market in Shimla, Himachal Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Shimla",
    "state": "Himachal Pradesh",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "26",
    "name": "Lajpat Nagar",
    "description": "A vibrant and bustling market in New Delhi, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "New Delhi",
    "state": "Delhi",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "27",
    "name": "Mapusa Friday Market",
    "description": "A vibrant and bustling market in Mapusa, Goa. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic flea shopping.",
    "location": "Mapusa",
    "state": "Goa",
    "tags": [
      "Flea Market",
      "Bargains",
      "Boho"
    ],
    "famous_items": [
      "Bohemian clothing",
      "Junk jewelry",
      "Handicrafts",
      "Spices"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "28",
    "name": "Charminar Market",
    "description": "A vibrant and bustling market in Hyderabad, Telangana. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Hyderabad",
    "state": "Telangana",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "29",
    "name": "MG Road",
    "description": "A vibrant and bustling market in Pune, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Pune",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "30",
    "name": "Linking Road",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "31",
    "name": "Devaraja Market",
    "description": "A vibrant and bustling market in Mysuru, Karnataka. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Mysuru",
    "state": "Karnataka",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "32",
    "name": "Tibetan Market",
    "description": "A vibrant and bustling market in Leh, Ladakh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Leh",
    "state": "Ladakh",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "33",
    "name": "Burrabazar",
    "description": "A vibrant and bustling market in Kolkata, West Bengal. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Kolkata",
    "state": "West Bengal",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "34",
    "name": "Fancy Bazaar",
    "description": "A vibrant and bustling market in Guwahati, Assam. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Guwahati",
    "state": "Assam",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "35",
    "name": "Palika Bazaar",
    "description": "A vibrant and bustling market in New Delhi, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic electronics shopping.",
    "location": "New Delhi",
    "state": "Delhi",
    "tags": [
      "Electronics",
      "Gadgets",
      "Tech"
    ],
    "famous_items": [
      "Mobile phones",
      "Laptops",
      "Accessories",
      "Repair services"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "36",
    "name": "Gaffar Market",
    "description": "A vibrant and bustling market in New Delhi, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic electronics shopping.",
    "location": "New Delhi",
    "state": "Delhi",
    "tags": [
      "Electronics",
      "Gadgets",
      "Tech"
    ],
    "famous_items": [
      "Mobile phones",
      "Laptops",
      "Accessories",
      "Repair services"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "37",
    "name": "Chikpet",
    "description": "A vibrant and bustling market in Bengaluru, Karnataka. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Bengaluru",
    "state": "Karnataka",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "38",
    "name": "Sowcarpet",
    "description": "A vibrant and bustling market in Chennai, Tamil Nadu. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Chennai",
    "state": "Tamil Nadu",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "39",
    "name": "Tulsi Baug",
    "description": "A vibrant and bustling market in Pune, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Pune",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "40",
    "name": "Zaveri Bazaar",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "41",
    "name": "Tripolia Bazaar",
    "description": "A vibrant and bustling market in Jaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "42",
    "name": "Kishanpole Bazaar",
    "description": "A vibrant and bustling market in Jaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "43",
    "name": "Sadar Bazaar",
    "description": "A vibrant and bustling market in Delhi, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Delhi",
    "state": "Delhi",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "44",
    "name": "Phool Mandi",
    "description": "A vibrant and bustling market in Ghazipur, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic flowers shopping.",
    "location": "Ghazipur",
    "state": "Delhi",
    "tags": [
      "Flowers",
      "Wholesale",
      "Aroma"
    ],
    "famous_items": [
      "Marigolds",
      "Jasmine",
      "Roses",
      "Exotic flora"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "45",
    "name": "Dadar Flower Market",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic flowers shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Flowers",
      "Wholesale",
      "Aroma"
    ],
    "famous_items": [
      "Marigolds",
      "Jasmine",
      "Roses",
      "Exotic flora"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "46",
    "name": "Mallik Ghat",
    "description": "A vibrant and bustling market in Kolkata, West Bengal. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic flowers shopping.",
    "location": "Kolkata",
    "state": "West Bengal",
    "tags": [
      "Flowers",
      "Wholesale",
      "Aroma"
    ],
    "famous_items": [
      "Marigolds",
      "Jasmine",
      "Roses",
      "Exotic flora"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "47",
    "name": "KR Market",
    "description": "A vibrant and bustling market in Bengaluru, Karnataka. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic flowers shopping.",
    "location": "Bengaluru",
    "state": "Karnataka",
    "tags": [
      "Flowers",
      "Wholesale",
      "Aroma"
    ],
    "famous_items": [
      "Marigolds",
      "Jasmine",
      "Roses",
      "Exotic flora"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "48",
    "name": "Gudari Market",
    "description": "A vibrant and bustling market in Varanasi, Uttar Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Varanasi",
    "state": "Uttar Pradesh",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "49",
    "name": "Chowk",
    "description": "A vibrant and bustling market in Lucknow, Uttar Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Lucknow",
    "state": "Uttar Pradesh",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "50",
    "name": "Bapu Market",
    "description": "A vibrant and bustling market in Ahmedabad, Gujarat. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Ahmedabad",
    "state": "Gujarat",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "51",
    "name": "Law Garden",
    "description": "A vibrant and bustling market in Ahmedabad, Gujarat. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Ahmedabad",
    "state": "Gujarat",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "52",
    "name": "Dhalgarwad",
    "description": "A vibrant and bustling market in Ahmedabad, Gujarat. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Ahmedabad",
    "state": "Gujarat",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "53",
    "name": "Sindhi Market",
    "description": "A vibrant and bustling market in Ahmedabad, Gujarat. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Ahmedabad",
    "state": "Gujarat",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "54",
    "name": "Manek Chowk",
    "description": "A vibrant and bustling market in Ahmedabad, Gujarat. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Ahmedabad",
    "state": "Gujarat",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "55",
    "name": "Bapu Market",
    "description": "A vibrant and bustling market in Surat, Gujarat. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Surat",
    "state": "Gujarat",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "56",
    "name": "Ring Road Market",
    "description": "A vibrant and bustling market in Surat, Gujarat. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Surat",
    "state": "Gujarat",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "57",
    "name": "Johari Bazaar",
    "description": "A vibrant and bustling market in Indore, Madhya Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Indore",
    "state": "Madhya Pradesh",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "58",
    "name": "Sarafa Bazaar",
    "description": "A vibrant and bustling market in Indore, Madhya Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Indore",
    "state": "Madhya Pradesh",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "59",
    "name": "MT Cloth Market",
    "description": "A vibrant and bustling market in Indore, Madhya Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Indore",
    "state": "Madhya Pradesh",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "60",
    "name": "Chowk Bazaar",
    "description": "A vibrant and bustling market in Bhopal, Madhya Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Bhopal",
    "state": "Madhya Pradesh",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "61",
    "name": "New Market",
    "description": "A vibrant and bustling market in Bhopal, Madhya Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Bhopal",
    "state": "Madhya Pradesh",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "62",
    "name": "Sadar Bazaar",
    "description": "A vibrant and bustling market in Nagpur, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Nagpur",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "63",
    "name": "Sitabuldi Main Road",
    "description": "A vibrant and bustling market in Nagpur, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Nagpur",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "64",
    "name": "Ganjamal",
    "description": "A vibrant and bustling market in Nashik, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Nashik",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "65",
    "name": "Saraf Bazaar",
    "description": "A vibrant and bustling market in Nashik, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Nashik",
    "state": "Maharashtra",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "66",
    "name": "Laxmi Road",
    "description": "A vibrant and bustling market in Pune, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Pune",
    "state": "Maharashtra",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "67",
    "name": "Camp Market",
    "description": "A vibrant and bustling market in Pune, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Pune",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "68",
    "name": "Hong Kong Lane",
    "description": "A vibrant and bustling market in Pune, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Pune",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "69",
    "name": "Juna Bazaar",
    "description": "A vibrant and bustling market in Pune, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic antique shopping.",
    "location": "Pune",
    "state": "Maharashtra",
    "tags": [
      "Antiques",
      "Vintage",
      "Decor"
    ],
    "famous_items": [
      "Vintage artifacts",
      "Old coins",
      "Gramophones",
      "Retro decor"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "70",
    "name": "Fashion Street",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "71",
    "name": "Hill Road",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "72",
    "name": "Natraj Market",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "73",
    "name": "Lamington Road",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic electronics shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Electronics",
      "Gadgets",
      "Tech"
    ],
    "famous_items": [
      "Mobile phones",
      "Laptops",
      "Accessories",
      "Repair services"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "74",
    "name": "Mangaldas Market",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "75",
    "name": "Mulji Jetha Market",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "76",
    "name": "Bhuleshwar Market",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "77",
    "name": "Dadabhai Naoroji Road",
    "description": "A vibrant and bustling market in Mumbai, Maharashtra. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Mumbai",
    "state": "Maharashtra",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "78",
    "name": "Khari Baoli",
    "description": "A vibrant and bustling market in New Delhi, Delhi. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic spices shopping.",
    "location": "New Delhi",
    "state": "Delhi",
    "tags": [
      "Spices",
      "Dry Fruits",
      "Tea"
    ],
    "famous_items": [
      "Saffron",
      "Cardamom",
      "Cashews",
      "Assam Tea"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "79",
    "name": "Sadar Bazaar",
    "description": "A vibrant and bustling market in Jodhpur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Jodhpur",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "80",
    "name": "Nai Sarak",
    "description": "A vibrant and bustling market in Jodhpur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Jodhpur",
    "state": "Rajasthan",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "81",
    "name": "Kapoore Darwaza",
    "description": "A vibrant and bustling market in Jodhpur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Jodhpur",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "82",
    "name": "Bada Bazaar",
    "description": "A vibrant and bustling market in Udaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Udaipur",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "83",
    "name": "Hathi Pol Bazaar",
    "description": "A vibrant and bustling market in Udaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Udaipur",
    "state": "Rajasthan",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "84",
    "name": "Mochi Bazaar",
    "description": "A vibrant and bustling market in Jodhpur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Jodhpur",
    "state": "Rajasthan",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "85",
    "name": "Clock Tower Market",
    "description": "A vibrant and bustling market in Jodhpur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Jodhpur",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "86",
    "name": "Kote Gate",
    "description": "A vibrant and bustling market in Bikaner, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Bikaner",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "87",
    "name": "Station Road Market",
    "description": "A vibrant and bustling market in Bikaner, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Bikaner",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "88",
    "name": "Mahatma Gandhi Road",
    "description": "A vibrant and bustling market in Bikaner, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Bikaner",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "89",
    "name": "Pansari Bazaar",
    "description": "A vibrant and bustling market in Jaisalmer, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Jaisalmer",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "90",
    "name": "Sadar Bazaar",
    "description": "A vibrant and bustling market in Jaisalmer, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Jaisalmer",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "91",
    "name": "Sonaron Ka Baas",
    "description": "A vibrant and bustling market in Jaisalmer, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic jewelry shopping.",
    "location": "Jaisalmer",
    "state": "Rajasthan",
    "tags": [
      "Jewelry",
      "Gold",
      "Silver",
      "Precious"
    ],
    "famous_items": [
      "Antique jewelry",
      "Precious gems",
      "Silver ornaments",
      "Bridal sets"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "92",
    "name": "Manihar Ka Rasta",
    "description": "A vibrant and bustling market in Jaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "93",
    "name": "Sireh Deori Bazaar",
    "description": "A vibrant and bustling market in Jaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "94",
    "name": "Mirza Ismail Road",
    "description": "A vibrant and bustling market in Jaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "95",
    "name": "Nehru Bazaar",
    "description": "A vibrant and bustling market in Jaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "96",
    "name": "Bapu Bazaar",
    "description": "A vibrant and bustling market in Jaipur, Rajasthan. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Jaipur",
    "state": "Rajasthan",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "97",
    "name": "Goubert Market",
    "description": "A vibrant and bustling market in Pondicherry, Puducherry. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Pondicherry",
    "state": "Puducherry",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "98",
    "name": "Mission Street",
    "description": "A vibrant and bustling market in Pondicherry, Puducherry. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Pondicherry",
    "state": "Puducherry",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "99",
    "name": "Connemara Market",
    "description": "A vibrant and bustling market in Trivandrum, Kerala. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Trivandrum",
    "state": "Kerala",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "100",
    "name": "Chalai Market",
    "description": "A vibrant and bustling market in Trivandrum, Kerala. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Trivandrum",
    "state": "Kerala",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "101",
    "name": "Broadway",
    "description": "A vibrant and bustling market in Ernakulam, Kerala. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Ernakulam",
    "state": "Kerala",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "102",
    "name": "SM Street",
    "description": "A vibrant and bustling market in Kozhikode, Kerala. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Kozhikode",
    "state": "Kerala",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "103",
    "name": "Valiyangadi",
    "description": "A vibrant and bustling market in Kozhikode, Kerala. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Kozhikode",
    "state": "Kerala",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "104",
    "name": "Panbazar",
    "description": "A vibrant and bustling market in Guwahati, Assam. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Guwahati",
    "state": "Assam",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "105",
    "name": "Paltan Bazaar",
    "description": "A vibrant and bustling market in Guwahati, Assam. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Guwahati",
    "state": "Assam",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "106",
    "name": "Bara Bazaar",
    "description": "A vibrant and bustling market in Shillong, Meghalaya. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Shillong",
    "state": "Meghalaya",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "107",
    "name": "Hong Kong Market",
    "description": "A vibrant and bustling market in Dimapur, Nagaland. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Dimapur",
    "state": "Nagaland",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "108",
    "name": "Bhutia Market",
    "description": "A vibrant and bustling market in Nainital, Uttarakhand. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic fashion shopping.",
    "location": "Nainital",
    "state": "Uttarakhand",
    "tags": [
      "Fashion",
      "Apparel",
      "Trending"
    ],
    "famous_items": [
      "Designer wear",
      "Street fashion",
      "Footwear",
      "Accessories"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "109",
    "name": "Mall Road",
    "description": "A vibrant and bustling market in Mussoorie, Uttarakhand. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Mussoorie",
    "state": "Uttarakhand",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "110",
    "name": "Paltan Bazaar",
    "description": "A vibrant and bustling market in Dehradun, Uttarakhand. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic mixed shopping.",
    "location": "Dehradun",
    "state": "Uttarakhand",
    "tags": [
      "Shopping",
      "Local Market",
      "Street Food"
    ],
    "famous_items": [
      "Everyday essentials",
      "Local apparel",
      "Street food",
      "Souvenirs"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  },
  {
    "id": "111",
    "name": "Lakkar Bazaar",
    "description": "A vibrant and bustling market in Shimla, Himachal Pradesh. Known for its lively atmosphere, it is a prime destination for locals and tourists alike to experience authentic craft shopping.",
    "location": "Shimla",
    "state": "Himachal Pradesh",
    "tags": [
      "Crafts",
      "Handlooms",
      "Culture"
    ],
    "famous_items": [
      "Handmade artifacts",
      "Regional textiles",
      "Pottery",
      "Wood carvings"
    ],
    "best_time_to_visit": "Evening (4:00 PM - 8:00 PM)",
    "timings": "10:00 AM - 9:00 PM",
    "nearby_eateries": [
      "Local street food stalls",
      "Heritage cafes",
      "Famous sweet shops"
    ],
    "shopping_tips": [
      "Bargaining is essential",
      "Carry cash as cards may not be accepted everywhere",
      "Beware of pickpockets in crowded lanes"
    ]
  }
];

export const mockEvents: Event[] = [
  {
    "id": "1",
    "name": "Durga Puja & Dhaak Carnivals",
    "description": "UNESCO Intangible Cultural Heritage celebration transforming entire streets into open-air fine arts galleries with thematic pandals, dhunuchi rhythmic dance, and grand sindoor khela.",
    "category": "festival",
    "date_start": "2026-10-16",
    "date_end": "2026-10-21",
    "location": "Kolkata & across Bengal",
    "state": "West Bengal",
    "rituals": [
      "Bodhon & Pran Pratistha",
      "Dhunuchi Naach to live Dhaak percussion",
      "Sandhi Puja with 108 lotus blooms & lamps",
      "Sindoor Khela on Vijayadashami"
    ],
    "famous_for": [
      "Award-winning art installations & illuminated pandals",
      "Dhaak drumming master battles",
      "Goddess clay idol immersion procession into the Hooghly River"
    ],
    "traditional_foods": [
      "Bhoger Khichuri & Labra",
      "Chhanar Payesh",
      "Mutton Kosha & Luchi",
      "Mishti Doi & Sandesh"
    ],
    "how_to_reach": "Netaji Subhash Chandra Bose International Airport (CCU) or Howrah / Sealdah Railway Junctions.",
    "best_viewing_tips": "Take a midnight guided pandal-hopping tour via Kolkata Metro or heritage tram to beat midday crowds."
  },
  {
    "id": "2",
    "name": "Pushkar Camel Fair (Kartik Mela)",
    "description": "The world's largest desert camel and livestock fair blending vibrant Rajasthani pastoral commerce, sacred lake ghat rituals, turban tying contests, and hot air ballooning.",
    "category": "fair",
    "date_start": "2026-11-20",
    "date_end": "2026-11-28",
    "location": "Pushkar Dunes & Sacred Lake",
    "state": "Rajasthan",
    "rituals": [
      "Maha Aarti at Brahma Ghat",
      "Holy dip on Kartik Purnima full moon",
      "Deepdan floating lamps on Pushkar Sarovar"
    ],
    "famous_for": [
      "Over 50,000 decorated camels, Marwari horses, and sheep",
      "Matka Phod and Longest Moustache competitions",
      "Sunset desert camping and folk Kalbelia dances"
    ],
    "traditional_foods": [
      "Dal Baati Churma",
      "Rabdi Malpua of Halwai Gali",
      "Poha Jalebi",
      "Rajasthani Ker Sangri"
    ],
    "how_to_reach": "Fly to Jaipur Airport (145 km) or take a train to Ajmer Junction (14 km), then taxi to Pushkar.",
    "best_viewing_tips": "Arrive 2-3 days before Kartik Purnima to photograph early morning trading among the sand dunes."
  },
  {
    "id": "3",
    "name": "Hornbill Festival of Nagaland",
    "description": "The legendary 'Festival of Festivals' uniting all 16 indigenous warrior tribes of Nagaland in the heritage village of Kisama to celebrate tribal songs, archery, crafts, and rock concerts.",
    "category": "cultural",
    "date_start": "2026-12-01",
    "date_end": "2026-12-10",
    "location": "Kisama Heritage Village, Kohima",
    "state": "Nagaland",
    "rituals": [
      "Tribal fire-lighting with ancient flintstones",
      "Hornbill warrior victory chants & Log Drum beats",
      "Traditional tribal morung blessings"
    ],
    "famous_for": [
      "16 Naga tribe authentic Morungs (traditional pavilions)",
      "Naga King Chilli Eating Competition",
      "Hornbill International Rock Contest & Night Bazaar"
    ],
    "traditional_foods": [
      "Smoked Pork with Bamboo Shoots",
      "Galho rice porridge",
      "Boiled local organic greens with Raja Mircha"
    ],
    "how_to_reach": "Fly to Dimapur Airport (DMU) or Dimapur Railway Station, then take a 2.5-hour hill taxi to Kohima.",
    "best_viewing_tips": "Book Kohima homestays or luxury glamping tents 4 months in advance as tourist capacity fills quickly."
  },
  {
    "id": "4",
    "name": "Thrissur Pooram",
    "description": "The Mother of all Kerala Poorams featuring an electrifying rivalry between Thiruvambadi and Paramekkavu temples with majestic caparisoned elephants, Kudamattom umbrella displays, and Ilanjithara Melam percussion.",
    "category": "festival",
    "date_start": "2026-04-28",
    "date_end": "2026-04-29",
    "location": "Vadakkunnathan Temple, Thrissur",
    "state": "Kerala",
    "rituals": [
      "Kanimangalam Sastha sunrise arrival",
      "Ilanjithara Melam percussion symphony",
      "Kudamattom synchronized silk parasol swap",
      "Mega midnight fireworks"
    ],
    "famous_for": [
      "250+ instrumentalists playing Chenda, Kombu, and Elathalam in rhythm",
      "30 regal tusker elephants adorned in golden Nettypattam",
      "36-hour non-stop festivities"
    ],
    "traditional_foods": [
      "Kerala Sadya on banana leaf",
      "Unniyappam & Neyyappam",
      "Thrissur Halwa & Banana Chips"
    ],
    "how_to_reach": "Fly to Cochin International Airport (COK, 53 km) or take a train to Thrissur Railway Station (TCR).",
    "best_viewing_tips": "Stand near the Round South gates with ear protection for the thunderous 2-hour Ilanjithara Melam."
  },
  {
    "id": "5",
    "name": "Rann Utsav (White Desert Carnival)",
    "description": "A three-month winter extravaganza celebrating the pristine salt expanse of the Great Rann of Kutch under radiant moonlit nights with Kutchi embroidery, camel safaris, and Sufi music.",
    "category": "cultural",
    "date_start": "2026-11-01",
    "date_end": "2027-02-28",
    "location": "Dhordo White Desert, Kutch",
    "state": "Gujarat",
    "rituals": [
      "Sunset desert meditation",
      "Kutchi midnight full moon gathering",
      "Banni tribal handicraft demonstrations"
    ],
    "famous_for": [
      "Endless shimmering white salt desert landscape",
      "Tent City luxury desert glamping",
      "Kutchi mirror-work textiles, Rogan art, and copper bell workshops"
    ],
    "traditional_foods": [
      "Kutchi Dabeli",
      "Bajra no Rotlo with Ringna no Olo",
      "Gulab Pak & Mawa",
      "Khichdi Kadhi"
    ],
    "how_to_reach": "Fly to Bhuj Airport (BHJ) or take a train to Bhuj Railway Station, then drive 85 km to Dhordo.",
    "best_viewing_tips": "Schedule your visit during the Full Moon window (Purnima) for mystical moonlight reflections on salt crystals."
  },
  {
    "id": "6",
    "name": "Mysuru Dasara (Jumbo Savari)",
    "description": "The 400-year-old state festival of Karnataka where the Mysore Palace is illuminated with 100,000 golden bulbs as the golden howdah carrying Goddess Chamundeshwari processes through town.",
    "category": "festival",
    "date_start": "2026-10-11",
    "date_end": "2026-10-20",
    "location": "Mysore Palace & Bannimantap, Mysuru",
    "state": "Karnataka",
    "rituals": [
      "Puja to the Royal Sword (Pattada Katti)",
      "Vijayadashami Golden Howdah flag-off",
      "Torchlight Parade at Bannimantap Grounds"
    ],
    "famous_for": [
      "750-kg pure gold idol howdah carried by the lead elephant Captain Balarama/Abhimanyu",
      "Palace illumination by 100,000 bulbs",
      "Classical music recitals in Durbar Hall"
    ],
    "traditional_foods": [
      "Mysore Pak",
      "Mylari Butter Dosa",
      "Bisi Bele Bath",
      "Mysore Rasam & Mysore Bonda"
    ],
    "how_to_reach": "Fly to Bengaluru International Airport (BLR, 170 km) and take Vande Bharat Express to Mysuru.",
    "best_viewing_tips": "Acquire gold pass tickets for the Royal Stand inside Mysore Palace premises to witness the procession start."
  },
  {
    "id": "7",
    "name": "Kumbh Mela / Maha Kumbh & Magh Mela",
    "description": "The greatest gathering of humanity on earth where millions of sadhus, naga babas, and spiritual seekers bathe at the sacred confluence (Triveni Sangam) of Ganga, Yamuna, and mystical Saraswati.",
    "category": "fair",
    "date_start": "2026-01-14",
    "date_end": "2026-03-04",
    "location": "Triveni Sangam, Prayagraj",
    "state": "Uttar Pradesh",
    "rituals": [
      "Shahi Snan (Royal Bath of Akharas)",
      "Peshwai grand processions on elephants & chariots",
      "Kalpavas daily spiritual austerity on sandy riverbeds"
    ],
    "famous_for": [
      "Tens of millions participating in peace and devotion",
      "Naga Sadhus martial processions with swords and conches",
      "Vast tent city illuminated across the river banks"
    ],
    "traditional_foods": [
      "Prayagraj Gujiya",
      "Kachori Jalebi with Dam Aloo",
      "Lassi in Clay Kulhad",
      "Dehati Rasgulla"
    ],
    "how_to_reach": "Prayagraj Airport (IXD) or direct trains to Prayagraj Junction (PRYJ).",
    "best_viewing_tips": "Hire an authorized boat before dawn to witness the sunrise Shahi Snan from the middle of the river."
  },
  {
    "id": "8",
    "name": "Hemis Festival & Cham Dances",
    "description": "Tibetan Buddhist monastery celebration commemorating Guru Padmasambhava with vibrant masked dances (Cham), long horn trumpets (Dungchen), and unfurling of century-old sacred silk thangkas.",
    "category": "cultural",
    "date_start": "2026-06-25",
    "date_end": "2026-06-26",
    "location": "Hemis Monastery Courtyard, Leh",
    "state": "Ladakh",
    "rituals": [
      "Tantric invocation by the Drukpa Lineage Rinpoches",
      "Sacred Cham masked warrior & deity dances",
      "Unfurling of the giant jewel-encrusted Thangka"
    ],
    "famous_for": [
      "Intricate wooden and silk mask costumes depicting enlightened deities",
      "Cymbals, drums, and 10-foot Tibetan horns reverberating in the Himalayas",
      "Hemis courtyard bazaar with turquoise artifacts"
    ],
    "traditional_foods": [
      "Ladakhi Thukpa & Momos",
      "Butter Tea (Gur Gur Chai)",
      "Skyu root vegetable pasta",
      "Khambir flatbread"
    ],
    "how_to_reach": "Fly to Kushok Bakula Rimpochee Airport in Leh (IXL), acclimatize for 48 hours, then drive 45 km to Hemis.",
    "best_viewing_tips": "Secure a seat on the monastery roof perimeter before 8:30 AM with a zoom camera lens."
  },
  {
    "id": "9",
    "name": "Lathmar Holi of Barsana & Nandgaon",
    "description": "Legendary Braj festival recreating Lord Krishna's teasing of Radha where village women playfully beat shields held by men with long bamboo sticks (lathis) amidst clouds of organic gulal and kesar water.",
    "category": "festival",
    "date_start": "2026-03-18",
    "date_end": "2026-03-20",
    "location": "Radha Rani Temple & Rangeeli Gali, Barsana",
    "state": "Uttar Pradesh",
    "rituals": [
      "Gopas arrive from Nandgaon with shields",
      "Hori folk poetry singing battles",
      "Lathmar stick hitting in temple streets",
      "Samaj Gayan devotional singing"
    ],
    "famous_for": [
      "Vibrant natural herbal colors (Teshu flower dye)",
      "Radharani temple rooftop color cannons",
      "Playful cultural re-enactment of divine romance"
    ],
    "traditional_foods": [
      "Braj Thandai with dry fruits & saffron",
      "Khoya Gujiya",
      "Makhan Mishri",
      "Bedmi Poori & Nagori Halwa"
    ],
    "how_to_reach": "Drive from Mathura Railway Station (45 km) or Delhi Airport (140 km).",
    "best_viewing_tips": "Protect camera equipment with waterproof silicone covers and wear white cotton clothing."
  },
  {
    "id": "10",
    "name": "Dev Deepawali (Festival of Lights on Ghats)",
    "description": "Celebrated on Kartik Purnima in Varanasi when all 84 crescent-shaped river ghats are illuminated with over one million earthen diyas, welcoming the gods who descend to bathe in the holy Ganga.",
    "category": "festival",
    "date_start": "2026-11-23",
    "date_end": "2026-11-24",
    "location": "Dashashwamedh & Chet Singh Ghats, Varanasi",
    "state": "Uttar Pradesh",
    "rituals": [
      "Maha Ganga Aarti by 21 Vedic priests",
      "Lighting of one million clay lamps at twilight",
      "Floating Deepdan on the Ganga",
      "Vedic Chanting along the ghats"
    ],
    "famous_for": [
      "Breathtaking 7-km unbroken line of flickering oil lamps along the ancient riverbanks",
      "3D projection mapping on Chet Singh Fort",
      "Green eco fireworks display"
    ],
    "traditional_foods": [
      "Banarasi Tamatar Chaat",
      "Malaiyo (Winter milk froth sweet)",
      "Banarasi Paan",
      "Kachori Jalebi"
    ],
    "how_to_reach": "Lal Bahadur Shastri Airport Varanasi (VNS) or Varanasi Junction (BSB).",
    "best_viewing_tips": "Pre-book a hand-rowed wooden bajra boat 2 months in advance to view the glittering ghats from the water."
  },
  {
    "id": "11",
    "name": "Onam & Vallam Kali Boat Races",
    "description": "Kerala's 10-day grand harvest festival welcoming the mythological King Mahabali with Pookkalam floral carpets, Pulikali tiger dances, grand Onasadya feasts, and Snake Boat Races (Nehru Trophy).",
    "category": "festival",
    "date_start": "2026-08-25",
    "date_end": "2026-09-03",
    "location": "Kochi, Alappuzha & across Kerala",
    "state": "Kerala",
    "rituals": [
      "Atham floral rug (Pookkalam) designing",
      "Thrikkakara Temple Mahabali invocation",
      "Pulikali body painted tiger dancing in Thrissur Swaraj Round"
    ],
    "famous_for": [
      "Vallam Kali 100-oar Chundan Vallam snake boat races",
      "26-dish grand vegetarian Onasadya feast on plantain leaf",
      "Mohiniyattam and Thiruvathira classical dances"
    ],
    "traditional_foods": [
      "Onasadya (Avial, Sambar, Olan, Kalan, Thoran)",
      "Ada Pradhaman & Palada Payasam",
      "Sharkara Varatti & Banana Chips"
    ],
    "how_to_reach": "Cochin International Airport (COK) or Trivandrum International Airport (TRV).",
    "best_viewing_tips": "Visit Punnamada Lake in Alappuzha for the electrifying snake boat sprint competitions."
  },
  {
    "id": "12",
    "name": "Ganesh Chaturthi of Maharashtra",
    "description": "The 10-day state celebration inaugurated by Lokmanya Tilak featuring colossal Ganpati idols (Lalbaugcha Raja, Dagdusheth), live dhol-tasha beats, and grand sea immersions (Visarjan).",
    "category": "festival",
    "date_start": "2026-09-14",
    "date_end": "2026-09-24",
    "location": "Mumbai, Pune & Konkan",
    "state": "Maharashtra",
    "rituals": [
      "Pranpratishtha installation of clay idols",
      "Daily Maha Aarti with conch shells",
      "Dhol Tasha Pathak traditional drumming troupes",
      "Anant Chaturdashi Visarjan procession into the Arabian Sea"
    ],
    "famous_for": [
      "Lalbaugcha Raja & Pune Dagdusheth Halwai pandals",
      "Synchronized 500-member Dhol Tasha rhythmic troupes",
      "Girgaon Chowpatty ocean immersion processions with millions"
    ],
    "traditional_foods": [
      "Steamed Ukadiche Modak with fresh coconut and jaggery",
      "Puran Poli with pure ghee",
      "Kothimbir Vadi",
      "Matar Karanji"
    ],
    "how_to_reach": "Chhatrapati Shivaji Maharaj International Airport (BOM) or Pune International Airport (PNQ).",
    "best_viewing_tips": "Witness the grand Dhol Tasha troupes near Laxmi Road & Alka Talkies Chowk in Pune on Visarjan day."
  },
  {
    "id": "13",
    "name": "Jagannath Ratha Yatra of Puri",
    "description": "The chariot festival where Lord Jagannath, Balabhadra, and Subhadra journey on three towering wooden chariots pulled by hundreds of thousands of devoted pilgrims along the Grand Road (Bada Danda).",
    "category": "festival",
    "date_start": "2026-06-27",
    "date_end": "2026-07-06",
    "location": "Grand Road (Bada Danda), Puri",
    "state": "Odisha",
    "rituals": [
      "Snana Yatra holy bath",
      "Chhera Pahanra (Gajapati King sweeps the chariot with gold broom)",
      "Bahuda Yatra return journey from Gundicha Temple"
    ],
    "famous_for": [
      "Three massive 45-foot wooden chariots (Nandighosha, Taladhwaja, Darpadalana)",
      "Puri Srimandir Chhappan Bhog culinary offerings",
      "Millions uniting with cords to pull the sacred wheels"
    ],
    "traditional_foods": [
      "Mahaprasad (Khaja, Kanika, Abadha, Dalma)",
      "Puri Chenna Poda",
      "Rasagola from Pahala",
      "Chenna Gaja"
    ],
    "how_to_reach": "Biju Patnaik International Airport Bhubaneswar (BBI, 60 km) or Puri Railway Station.",
    "best_viewing_tips": "Secure balcony viewing permissions on Grand Road rooftops near the Jagannath Temple lion gate."
  },
  {
    "id": "14",
    "name": "International Kite Festival (Uttarayan)",
    "description": "Gujarat's skyline transforms into a kaleidoscope of millions of vibrant kites as people celebrate the sun's journey northward from dawn till night, followed by illuminated Tukkal lanterns.",
    "category": "festival",
    "date_start": "2026-01-14",
    "date_end": "2026-01-15",
    "location": "Sabarmati Riverfront, Ahmedabad & Surat",
    "state": "Gujarat",
    "rituals": [
      "Dawn rooftop kite battles with 'Kai Po Che!' cheers",
      "Surat Patang Bazaar night trading",
      "Night lantern (Tukkal) sky releases"
    ],
    "famous_for": [
      "Master kite flyers from 45+ countries displaying giant dragons and eagles",
      "Rooftop family music and food gatherings across the entire old city",
      "Illuminated nighttime kite trails"
    ],
    "traditional_foods": [
      "Surti Undhiyu cooked in clay pots",
      "Jalebi & Fafda",
      "Til Chikki & Peanut Gajak",
      "Bor & Sugarcane chunks"
    ],
    "how_to_reach": "Sardar Vallabhbhai Patel International Airport Ahmedabad (AMD) or direct rail to Ahmedabad Junction.",
    "best_viewing_tips": "Spend Uttarayan on a heritage pol rooftop in the Old City of Ahmedabad to experience the authentic local frenzy."
  },
  {
    "id": "15",
    "name": "Kullu Dussehra & Valley Gods Conclave",
    "description": "A week-long unique festival dating back to the 17th century where over 250 village deities from all across Himachal valleys arrive in wooden palanquins to pay homage to Lord Raghunath at Dhalpur Maidan.",
    "category": "fair",
    "date_start": "2026-10-20",
    "date_end": "2026-10-26",
    "location": "Dhalpur Maidan, Kullu",
    "state": "Himachal Pradesh",
    "rituals": [
      "Arrival of village devtas carried on wooden palanquins",
      "Rath Yatra of Lord Raghunath",
      "Lankadahan bonfire ritual on the banks of Beas River"
    ],
    "famous_for": [
      "Assemblage of 250+ Himalayan mountain gods (Devtas)",
      "Nati folk dance with hundreds of Himachali dancers in traditional cholas",
      "Himalayan woollen shawls and Kullu caps craft fair"
    ],
    "traditional_foods": [
      "Himachali Dham (Madra, Chana Khatta, Meetha Bhaat)",
      "Siddu with pure ghee",
      "Kullu Trout Fish",
      "Babru"
    ],
    "how_to_reach": "Fly to Bhuntar Airport Kullu (KUU, 10 km) or drive from Chandigarh (230 km).",
    "best_viewing_tips": "Attend the opening day procession to see devtas swaying and interacting in divine trance."
  },
  {
    "id": "16",
    "name": "Poush Mela & Baul Music Fair",
    "description": "A rural heritage fair started by Rabindranath Tagore celebrating mystic Baul folk singers, Dokra craft, and Santali tribal dances.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Shantiniketan",
    "state": "West Bengal",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "17",
    "name": "Ganga Sagar Mela",
    "description": "India's second largest pilgrimage where holy ascetics and millions take a sacred dip at the confluence of Ganga and Bay of Bengal on Makar Sankranti.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Sagar Island",
    "state": "West Bengal",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "18",
    "name": "Rash Mela of Cooch Behar",
    "description": "One of the oldest cultural fairs in North Bengal centered around the historic Madan Mohan Temple with century-old carousel wheels.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Cooch Behar Palace Grounds",
    "state": "West Bengal",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "19",
    "name": "Chhau Dance Festival",
    "description": "Vibrant acrobatic martial dance festival where artists wear oversized handmade clay and paper mache masks depicting mythic epics.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Purulia & Baghmundi",
    "state": "West Bengal",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "20",
    "name": "Konark Dance & International Sand Art Festival",
    "description": "Celebrated against the illuminated UNESCO Sun Temple backdrop, featuring classical Indian dance gurus and beach sand sculptures.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Sun Temple Beach, Konark",
    "state": "Odisha",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "21",
    "name": "Dhanu Jatra (World's Largest Open Air Theatre)",
    "description": "An entire 8-km municipal town transforms into ancient Mathura, with citizens and officials acting out the epics under King Kansa's rule.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Bargarh",
    "state": "Odisha",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "22",
    "name": "Bali Jatra Maritime Fair",
    "description": "Asia's largest open-air trade fair commemorating ancient Kalinga sea merchants voyaging to Bali, Java, and Sumatra in Boita boats.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Mahanadi Riverbed, Cuttack",
    "state": "Odisha",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "23",
    "name": "Nuakhai Agricultural Festival",
    "description": "The agrarian celebration of Western Odisha where the first harvested rice grain is offered to Goddess Samaleswari followed by folk dances.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Sambalpur",
    "state": "Odisha",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "24",
    "name": "Chhath Puja of the Sun God",
    "description": "Ancient 4-day Vedic austerity worshiping the rising and setting Sun with knee-deep river standing, Thekua prasad, and bamboo soop baskets.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Patna Ghats & River Banks",
    "state": "Bihar",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "25",
    "name": "Sonepur Cattle Fair",
    "description": "Asia's ancient riverside livestock and cultural fair held at the Gandak-Ganga confluence, dating back to Chandragupta Maurya.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Sonepur (Harihar Kshetra)",
    "state": "Bihar",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "26",
    "name": "Shravani Mela",
    "description": "A month-long saffron-clad pilgrimage where millions of Kanwariyas walk 105 km barefoot carrying holy Ganga water to pour on the Jyotirlinga.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Deoghar Baba Baidyanath",
    "state": "Jharkhand",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "27",
    "name": "Karma & Sohrai Tribal Art Festival",
    "description": "Celebration of nature and indigenous livestock with exquisite natural mud-resist Sohrai and Khovar wall mural art and Mandar drumming.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Hazaribagh & Ranchi",
    "state": "Jharkhand",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "28",
    "name": "Bihu (Rongali & Bhogali)",
    "description": "The vibrant Assamese new year and harvest celebration with energetic Dhol-Pepa dances in Muga silk and community community bonfires (Meji).",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Guwahati & across Assam",
    "state": "Assam",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "29",
    "name": "Ambubachi Mela",
    "description": "The tantric gathering at the sacred Nilachal Hills celebrating mother earth's fertility during monsoon, attracting mystic sadhus from across India.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Kamakhya Temple, Guwahati",
    "state": "Assam",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "30",
    "name": "Majuli Raas Mahotsav",
    "description": "Bhakti theatrical spectacle where the world's largest river island transforms into Vrindavan with clay-masked Vaishnavite dance dramas.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Majuli River Island Satras",
    "state": "Assam",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "31",
    "name": "Wangala Hundred Drums Festival",
    "description": "The post-harvest thanksgiving to the sun deity Saljong, featuring 100 synchronized Dama drums beaten by colorfully feathered Garo warriors.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Garo Hills, Tura",
    "state": "Meghalaya",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "32",
    "name": "Shad Suk Mynsiem",
    "description": "The Khasi dance of peaceful hearts where maidens in gold crowns and men in warrior feathers dance to Tangmuri flutes.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Weiking Ground, Shillong",
    "state": "Meghalaya",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "33",
    "name": "Nongkrem Dance Festival",
    "description": "Traditional royal thanksgiving of the Hima Khyrim kingdom with goat sacrifices, Pomblang rituals, and royal heirloom jewelry parades.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Smit Royal Village",
    "state": "Meghalaya",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "34",
    "name": "Moatsu Mong Festival",
    "description": "The celebration of the Ao Naga tribe post seed-sowing featuring Sangpangtu bonfires, storytelling, and warrior dances.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Mokokchung",
    "state": "Nagaland",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "35",
    "name": "Aoling Monyu Festival",
    "description": "The spring celebration of the legendary Konyak headhunter tribe marking the new year with gun salutes, feasts, and brass neck-pieces.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Mon & Longwa",
    "state": "Nagaland",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "36",
    "name": "Sekrenyi Purification Festival",
    "description": "The 10-day purification festival of the Angami Nagas renewing village harmony, hunting prowess, and youthful camaraderie.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Kohima & Khonoma",
    "state": "Nagaland",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "37",
    "name": "Chapchar Kut Spring Festival",
    "description": "Mizoram's most joyous festival with energetic Cheraw bamboo tapping dances, traditional Puan costumes, and community feasts.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Aizawl",
    "state": "Mizoram",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "38",
    "name": "Yaoshang & Thabal Chongba",
    "description": "The 5-day spring festival of Manipur featuring midnight Thabal Chongba (moonlight circle dancing), sports meets, and Holi colors.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Imphal",
    "state": "Manipur",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "39",
    "name": "Sangai Festival",
    "description": "Grand tourism festival showcasing the indigenous Brow-antlered deer heritage, polo roots (Sagol Kangjei), and floating phumdi culture.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Imphal & Loktak Lake",
    "state": "Manipur",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "40",
    "name": "Lai Haraoba (Pleasing of the Gods)",
    "description": "Ancient Meitei ritual dance enactment of the universe creation by Maibis (priestesses) in pristine white and gold attire.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Kanglei & Kakching",
    "state": "Manipur",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "41",
    "name": "Torgya Monastic Festival",
    "description": "Monpa Buddhist monastic festival featuring sacred mask Cham dances in the snowy heights to banish evil spirits and welcome peace.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Tawang Monastery",
    "state": "Arunachal Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "42",
    "name": "Ziro Festival of Music & Culture",
    "description": "India's premier eco-friendly indie music and arts festival set amidst the emerald pine groves and paddy fields of the Apatani tribe.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Ziro Valley",
    "state": "Arunachal Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "43",
    "name": "Losoong & Namsoong Festival",
    "description": "Bhutia and Lepcha new year celebration marking the harvest end with Chaam masked lamas, archery contests, and local Chi millet brew.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Gangtok & Phodong",
    "state": "Sikkim",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "44",
    "name": "Pang Lhabsol (Kanchenjunga Worship)",
    "description": "Unique festival honoring Mount Kanchenjunga as the guardian deity of Sikkim with dramatic warrior sword and shield choreography.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Rabdentse & Gangtok",
    "state": "Sikkim",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "45",
    "name": "Kharchi Puja & Fourteen Gods",
    "description": "Century-old royal festival worshiping the Chaturdasha Devata with sacred river baths and vibrant tribal folk fairs.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Old Agartala",
    "state": "Tripura",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "46",
    "name": "Desert Festival of Jaisalmer",
    "description": "A golden desert carnival featuring Gair dancers, fire eaters, camel polo, and Mr. Desert pageants amidst the Thar sand dunes.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Sam Sand Dunes, Jaisalmer",
    "state": "Rajasthan",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "47",
    "name": "Teej Festival of Royal Jaipur",
    "description": "Royal idol procession of Goddess Parvati through the Pink City lanes accompanied by decorated elephants, folk dancers, and Ghewar sweets.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "City Palace to Talkatora, Jaipur",
    "state": "Rajasthan",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "48",
    "name": "Gangaur Festival",
    "description": "Women's harvest and marital devotion festival carrying beautifully carved wooden Isar-Gangaur statues to Pichola Lake ghats.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Udaipur & Jaipur",
    "state": "Rajasthan",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "49",
    "name": "Marwar Festival",
    "description": "Musical tribute to the heroes of Rajasthan featuring classical Sarangi recitals and horse polo against the illuminated blue city.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Mehrangarh Fort, Jodhpur",
    "state": "Rajasthan",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "50",
    "name": "Brij Holi Mahotsav",
    "description": "Two-day precursor to Holi in the Brij region celebrated with Raslila theatrical dances and dynamic colored water fountains at Deeg Palace.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Bharatpur & Deeg",
    "state": "Rajasthan",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "51",
    "name": "Bikaner Camel Festival",
    "description": "Colorful showcase of world-famous Bikaner military camels with fur cutting art, camel acrobatics, and desert fireworks.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Ladera Dunes, Bikaner",
    "state": "Rajasthan",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "52",
    "name": "Kolayat Kapil Muni Fair",
    "description": "Sacred oasis lake fair with thousands of oil lamps floating on 52 marble ghats under the Kartik Purnima starry night sky.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Kolayat Lake, Bikaner",
    "state": "Rajasthan",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "53",
    "name": "Karni Mata Mela",
    "description": "Folk gathering at the world-famous Temple of 25,000 sacred white and black rats, celebrated with continuous devotional singing.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Deshnoke Rat Temple",
    "state": "Rajasthan",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "54",
    "name": "Mewar Festival & Spring Carnival",
    "description": "Welcoming of spring in the city of lakes with royal boat processions, Rajasthani puppet shows, and fireworks on Gangaur Ghat.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Lake Pichola Ghats, Udaipur",
    "state": "Rajasthan",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "55",
    "name": "Pandharpur Wari (Ashadhi Ekadashi)",
    "description": "An 800-year-old walking pilgrimage where 1.5 million Varkari devotees walk 250 km singing Abhangas to Lord Vitthal to the rhythm of Chipli cymbals.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Alandi/Dehu to Pandharpur",
    "state": "Maharashtra",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "56",
    "name": "Gudi Padwa Shobha Yatra",
    "description": "Maharashtrian New Year celebrated with traditional saffron flag motorcycle rallies, Dhol-Tasha drumming, and Puran Poli feasts.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Girgaon Mumbai & Thane/Pune",
    "state": "Maharashtra",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "57",
    "name": "Narali Purnima Sea Festival",
    "description": "The indigenous Koli fishing community's festival offering golden coconuts to the Arabian Sea to mark the end of monsoon fishing bans.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Versova & Worli Koliwadas, Mumbai",
    "state": "Maharashtra",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "58",
    "name": "Ellora Ajanta International Festival",
    "description": "Mesmerizing classical Indian music and dance performances set against the ancient rock-cut cave architectural heritage.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Soneri Mahal, Aurangabad",
    "state": "Maharashtra",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "59",
    "name": "Elephanta Island Cultural Festival",
    "description": "Heritage dance festival held in the courtyard of the 6th-century Trimurti rock sculptures, accessed by harbor ferries.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Elephanta Caves Island, Mumbai",
    "state": "Maharashtra",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "60",
    "name": "Pola Bull Thanksgiving Festival",
    "description": "Agrarian festival where farm bulls and oxen are decorated with painted horns, floral shawls, and brass bells, then honored with sweet Puran Poli.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Nagpur & Vidarbha",
    "state": "Maharashtra",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "61",
    "name": "Bhavani Mata Navratri of Tuljapur",
    "description": "Nine-night Shakti celebration drawing millions of devotees with Chhabina torchlight palanquin processions and Gondhal folk songs.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Tuljapur Temple",
    "state": "Maharashtra",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "62",
    "name": "Shigmo Festival (Goan Spring Carnival)",
    "description": "The traditional Goan spring festival featuring colorful mythology float parades, Ghode Modni warrior dances, and Romat drumming.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Panaji & Margao",
    "state": "Goa",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "63",
    "name": "Goa Carnival & King Momo Parade",
    "description": "Centuries-old pre-Lent fiesta introduced by the Portuguese with vibrant street dance troupes, brass bands, and King Momo decreeing fun.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Panaji, Vasco & Margao",
    "state": "Goa",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "64",
    "name": "Bonderam Island Flag Festival",
    "description": "Celebrated on the picturesque Divar island recreating historic village flag disputes with mock toy weapon battles and float parades.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Divar Island",
    "state": "Goa",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "65",
    "name": "Feast of St. Francis Xavier",
    "description": "Solemn pilgrimage and feast commemorating Goa's patron saint with open-air masses, fair stalls, and exposition of sacred relics.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Basilica of Bom Jesus, Old Goa",
    "state": "Goa",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "66",
    "name": "Sao Joao Monsoon Well Leaping",
    "description": "Joyous monsoon festival where young men wear floral crowns (kopels) and leap into village freshwater wells and rivers to the sound of ghumot drums.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Siolim & North Goa",
    "state": "Goa",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "67",
    "name": "Navratri Garba of Vadodara & Ahmedabad",
    "description": "The world's longest 9-night dance festival where hundreds of thousands in mirror-work Chaniya Cholis perform synchronized circular Garba steps.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "United Way & GMDC Grounds",
    "state": "Gujarat",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "68",
    "name": "Tarnetar Folk & Matchmaking Fair",
    "description": "Famous rural fair where tribal youths carry intricately embroidered mirror parasols, perform Raas dances, and choose life partners.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Trinetreshwar Temple, Saurashtra",
    "state": "Gujarat",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "69",
    "name": "Madhavpur Ghed Fair",
    "description": "Celebration of the divine wedding of Lord Krishna and Princess Rukmini connecting Western Gujarat with the culture of Arunachal Pradesh.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Madhavpur Beach, Porbandar",
    "state": "Gujarat",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "70",
    "name": "Modhera Sun Dance Festival",
    "description": "Three-day classical dance festival held against the intricately carved 11th-century Solanki Sun Temple and stepped Surya Kund.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Sun Temple, Modhera",
    "state": "Gujarat",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "71",
    "name": "Bhavnath Mahadev Fair",
    "description": "Maha Shivratri gathering where mystic Naga Sadhus march with swords and conches to take holy dips in the ancient Mrigi Kund.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Girnar Foothills, Junagadh",
    "state": "Gujarat",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "72",
    "name": "Khajuraho Dance Festival",
    "description": "World-renowned dance gala where India's foremost classical masters perform against the floodlit 1,000-year-old Chandela stone temples.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Western Temple Group, Khajuraho",
    "state": "Madhya Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "73",
    "name": "Tansen Sangeet Samaroh",
    "description": "India's oldest classical music gathering honoring musical legend Mian Tansen with day-and-night Dhrupad, Khayal, and Sitar concerts.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Tomb of Tansen, Gwalior",
    "state": "Madhya Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "74",
    "name": "Bhagoria Tribal Haat & Dance",
    "description": "Pre-Holi tribal festival of the Bhil and Bhilala communities featuring traditional flute music, sweet Gulal matchmaking, and swings.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Jhabua & Alirajpur",
    "state": "Madhya Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "75",
    "name": "Lokrang Folk Arts Festival",
    "description": "Five-day national tribal and folk performing arts congress celebrating India's indigenous crafts, puppetry, and heritage dances.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Ravindra Bhavan, Bhopal",
    "state": "Madhya Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "76",
    "name": "Mandu Winter Festival",
    "description": "Celebration of the historic city of joy with hot air balloon flights over Afghan palaces, stargazing, and heritage cycling tours.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Jahaz Mahal & Fort, Mandu",
    "state": "Madhya Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "77",
    "name": "Ujjain Mahakal Sawari",
    "description": "Grand royal Monday processions of Lord Mahakal seated in a silver palanquin through the ancient city during the month of Shravana.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Mahakaleshwar Temple, Ujjain",
    "state": "Madhya Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "78",
    "name": "Pongal & Jallikattu Bull Festival",
    "description": "Ancient 4-day Tamil harvest festival featuring sweet rice boiling in clay pots, Kolam floor art, and the brave sport of Jallikattu.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Madurai & Alanganallur",
    "state": "Tamil Nadu",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "79",
    "name": "Chithirai Festival of Madurai",
    "description": "Coronation and celestial wedding of Goddess Meenakshi followed by Lord Kallazhagar's grand entry into the Vaigai River on a golden horse.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Meenakshi Amman Temple, Madurai",
    "state": "Tamil Nadu",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "80",
    "name": "Mahabalipuram Indian Dance Festival",
    "description": "Month-long beachfront classical dance festival under the open sky beside UNESCO 7th-century rock-cut Pallava shore shrines.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Shore Temple & Arjuna's Penance",
    "state": "Tamil Nadu",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "81",
    "name": "Natyanjali Dance Festival",
    "description": "Maha Shivratri devotional offering where world classical dancers perform under the golden roofed hall of the cosmic dancer Nataraja.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Nataraja Temple, Chidambaram",
    "state": "Tamil Nadu",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "82",
    "name": "Karthigai Deepam of Annamalaiyar",
    "description": "The lighting of the massive Maha Deepam cauldron filled with 3,500 kg of pure ghee on the holy peak of Mount Arunachala.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Tiruvannamalai Hill Peak",
    "state": "Tamil Nadu",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "83",
    "name": "Attukal Pongala (Women's Conclave)",
    "description": "Guinness Record gathering where millions of women cook sweet Pongala in earthen pots on roadside hearths across the entire capital city.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Attukal Bhagavathy Temple, Trivandrum",
    "state": "Kerala",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "84",
    "name": "Theyyam Ritual Dance Festival",
    "description": "Ancient shamanistic temple theatre where performers enter divine trance wearing towering 30-foot headgears and fire embers.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Kannur & Kasaragod Shrine Groves",
    "state": "Kerala",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "85",
    "name": "Nehru Trophy Snake Boat Race",
    "description": "Electrifying 1.4-km boat race featuring 100-oar Chundan Vallams rowing to rhythmic Vanchipattu boat songs before 100,000 cheering spectators.",
    "category": "sports",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Punnamada Lake, Alappuzha",
    "state": "Kerala",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "86",
    "name": "Vishu Kani & Golden Cassia Blossom",
    "description": "Kerala New Year celebrated by viewing the sacred auspicious Vishu Kani arrangement of gold, mirrors, fruits, and yellow Kani Konna flowers.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Guruvayur & across Kerala",
    "state": "Kerala",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "87",
    "name": "Kochi-Muziris Contemporary Art Biennale",
    "description": "Asia's largest contemporary visual arts festival occupying heritage seaside spice warehouses with global avant-garde art.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Fort Kochi & Mattancherry",
    "state": "Kerala",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "88",
    "name": "Hampi Utsav & Vijayanagara Heritage",
    "description": "Three-day mega festival bringing the medieval Vijayanagara stone empire alive with lighting, classical music, and equestrian shows.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Virupaksha & Vittala Temples, Hampi",
    "state": "Karnataka",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "89",
    "name": "Kambala Traditional Buffalo Sprint",
    "description": "Centuries-old agrarian sport of coastal Karnataka where jockeys whip paired buffaloes through water-soaked mud tracks.",
    "category": "sports",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Moodabidri & Udupi Paddy Tracks",
    "state": "Karnataka",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "90",
    "name": "Bengaluru Karaga Shaktyotsava",
    "description": "800-year-old midnight procession where the bearer balances an intricate floral pot without touching it, guarded by sword-bearing Veerakumaras.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Dharmaraya Swamy Temple, Bengaluru",
    "state": "Karnataka",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "91",
    "name": "Pattadakal Dance Festival",
    "description": "Epitome of Chalukyan rock architecture celebrated with classical dances amidst 8th-century sandstone temples on the Malaprabha river.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Pattadakal UNESCO Monuments",
    "state": "Karnataka",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "92",
    "name": "Vaikunta Ekadashi of Tirupati",
    "description": "Devotees pass through the sacred Vaikunta Dwaram gateway to gain spiritual liberation, accompanied by Vedic Suprabhatam chanting.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Tirumala Venkateswara Temple",
    "state": "Andhra Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "93",
    "name": "Bonalu Mahankali Festival",
    "description": "Celebration honoring Mother Goddess Mahankali with women carrying decorated brass pots of rice and milk, led by fierce Pothuraju dancers.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Golconda Fort & Secunderabad",
    "state": "Telangana",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "94",
    "name": "Bathukamma Floral Festival",
    "description": "Unique women's floral festival crafting conical towers using seasonal wildflowers (Gunugu, Tangedu), singing traditional folk ballads.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Tank Bund & across Telangana",
    "state": "Telangana",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "95",
    "name": "Medaram Sammakka Saralamma Jathara",
    "description": "Asia's largest tribal gathering drawing over 10 million pilgrims to offer their weight in jaggery (Bangaram) to mother tribal deities.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Medaram Forest, Mulugu",
    "state": "Telangana",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "96",
    "name": "Kotappakonda Mahashivratri Prabhalu",
    "description": "Hundreds of 100-foot tall illuminated bamboo towers (Prabhas) mounted on bullock carts process up the sacred hill.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Kotappakonda Hill, Guntur",
    "state": "Andhra Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "97",
    "name": "Flamingo Bird Watching Festival",
    "description": "Eco-tourism festival celebrating the arrival of tens of thousands of migratory Greater Flamingos and pelicans in brackish lagoons.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Pulicat Lake & Nelapattu",
    "state": "Andhra Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "98",
    "name": "Sirimanotsavam Tree Trunk Festival",
    "description": "Historic festival where the chief priest is swung atop a 60-foot mobile timber pole (Sirimanu) to bless thousands of devotees.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Pydithalli Ammavaru, Vizianagaram",
    "state": "Andhra Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "99",
    "name": "Lepakshi Heritage Festival",
    "description": "Celebration of Vijayanagara fresco murals, the colossal monolithic Nandi bull, and the famous hanging pillar architecture.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Veerabhadra Temple, Lepakshi",
    "state": "Andhra Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "100",
    "name": "Baisakhi Harvest Festival",
    "description": "The foundation day of the Khalsa Panth and vibrant harvest festival celebrated with joyous Bhangra, Gidda, and Langar feasts.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Golden Temple, Amritsar",
    "state": "Punjab",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "101",
    "name": "Hola Mohalla Martial Arts Festival",
    "description": "Three-day warrior display of Gatka martial swordsmanship, bareback horse vaulting, and mock tent-pegging battles by Nihang Sikhs.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Takht Sri Keshgarh Sahib, Anandpur",
    "state": "Punjab",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "102",
    "name": "Lohri Bonfire & Winter Solstice",
    "description": "Vibrant winter harvest festival where communities circle crackling wood bonfires tossing sesame seeds, rewri, and popcorn while singing folk tales.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Across Punjab & Haryana",
    "state": "Punjab",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "103",
    "name": "Surajkund International Crafts Mela",
    "description": "The world's largest crafts fair showcasing 1,000+ master craftsmen and national cultural troupes from over 30 countries.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Surajkund Lake Grounds, Faridabad",
    "state": "Haryana",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "104",
    "name": "Gita Mahotsav of Kurukshetra",
    "description": "International spiritual celebration honoring the birthplace of Bhagavad Gita with 18-chapter Gita chanting and deepdan on the holy lake.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Brahma Sarovar, Kurukshetra",
    "state": "Haryana",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "105",
    "name": "Phool Dei Spring Blossom Festival",
    "description": "Charming Himalayan folk tradition where children place freshly plucked yellow mustard and peach blossoms on village doorsteps for blessings.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Across Kumaon & Garhwal Hills",
    "state": "Uttarakhand",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "106",
    "name": "Nanda Devi Raj Jat Pilgrimage",
    "description": "Once-in-12-years 280-km barefoot mountain pilgrimage following a four-horned ram to high Himalayan glacial sanctuaries.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Nauti to Homkund Glacial Lake",
    "state": "Uttarakhand",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "107",
    "name": "Ganga Dussehra & Maha Aarti",
    "description": "Celebration of Goddess Ganga's descent from heaven with mass evening aartis, rhythmic conch fanfares, and millions of floating marigold lamps.",
    "category": "festival",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Har Ki Pauri, Haridwar & Rishikesh",
    "state": "Uttarakhand",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "108",
    "name": "International Yoga Festival",
    "description": "Global congregation of yogis, spiritual masters, and seekers practicing asanas, meditation, and sacred chants beside the flowing Ganga.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Parmarth Niketan, Rishikesh",
    "state": "Uttarakhand",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "109",
    "name": "Minjar Fair of Chamba",
    "description": "Historic monsoon harvest fair dating to 935 AD where golden silk tassel Minjars are distributed and later immersed into the Ravi River.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Chaugan Grounds, Chamba",
    "state": "Himachal Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "110",
    "name": "Mandi International Shivratri Fair",
    "description": "Century-old gathering of over 200 valley hill deities who travel in ornate palanquins to pay homage to Lord Madho Rai.",
    "category": "fair",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Paddal Ground, Mandi",
    "state": "Himachal Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  },
  {
    "id": "111",
    "name": "Phagli Masked Winter Festival",
    "description": "Ancient snow festival where villagers wear handmade grass and willow bark masks and dance in deep snow to herald the end of winter.",
    "category": "cultural",
    "date_start": "2026-10-15",
    "date_end": "2026-10-18",
    "location": "Pattan Valley, Lahaul & Spiti",
    "state": "Himachal Pradesh",
    "rituals": [
      "Traditional invocation & morning aarti",
      "Community folk dance performances",
      "Sacred offerings & evening cultural gatherings"
    ],
    "famous_for": [
      "Unique indigenous cultural heritage",
      "Traditional music & artisan exhibitions",
      "Centuries-old regional rituals"
    ],
    "traditional_foods": [
      "Regional heritage cuisine",
      "Local festive sweets",
      "Traditional herbal preparations"
    ],
    "how_to_reach": "Accessible via the nearest regional airport or state highway junction.",
    "best_viewing_tips": "Arrive before sunset for the main cultural assemblies and local handicraft displays."
  }
];
