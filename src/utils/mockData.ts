import { Destination, Event, Review, Marketplace } from '../types';

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
    id: "1",
    name: "Sarhul Festival",
    description: "The paramount spring celebration of tribal communities in India, commemorating the eternal sacred bond between humanity and mother nature. Dedicated to the blossoming of the holy Sal trees, marking the arrival of the new harvest year with vibrant folk dance and sacred rituals.",
    category: "festival",
    date_start: "2026-03-25",
    date_end: "2026-03-27",
    location: "Ranchi & Tribal Belts",
    state: "Jharkhand",
    famous_for: [
      "Worship of Sal tree blossoms at the sacred Sarna Sthal",
      "Grand floral street processions with thousands in traditional Lal Paad sarees",
      "Resonant tribal rhythm of Mandar drums and flute symphonies",
      "Distribution of holy Sal flower blossoms for home prosperity"
    ],
    rituals: [
      "Pahan (village priest) performs water prediction ritual for annual monsoon",
      "Sacred offering of Handia (traditional herbal rice brew) to village deities",
      "Community tribal circle dances continuing late into the starlit night"
    ],
    traditional_foods: [
      "Dhuska with spicy Black Gram (Kala Chana) curry",
      "Arsa Roti (sweet jaggery rice patties)",
      "Rugra & Bamboo shoot festive tribal curry"
    ],
    nearby_markets: [
      "Daily Market Ranchi for indigenous brass crafts",
      "Kashmir Vastralaya craft center",
      "Jharkhand Tribal Haat at Morabadi ground"
    ],
    how_to_reach: "Fly into Birsa Munda Airport Ranchi (IXR) or take direct trains to Ranchi Junction (RNC). Main processions converge along Kutchery Road.",
    best_viewing_tips: "Stand along the main road near Albert Ekka Chowk on day 2 for the grand procession where over 50 cultural contingents perform."
  },
  {
    id: "2",
    name: "Karma Festival",
    description: "A deeply spiritual harvest and sisterhood festival celebrated across Eastern India. Youth worship the holy Karma tree (Nauclea parvifolia), seeking divine blessings for bountiful agricultural harvest, family well-being, and longevity for brothers.",
    category: "cultural",
    date_start: "2026-09-15",
    date_end: "2026-09-16",
    location: "Tribal Villages",
    state: "Jharkhand & Odisha",
    famous_for: [
      "Ceremonial planting of the Karma tree branch in the village square",
      "All-night vibrant Karma dance performed in concentric circles",
      "Traditional folk storytelling recounting legends of Dharma and Karma",
      "Sisters observing dawn-to-dusk sacred fasting for their brothers"
    ],
    rituals: [
      "Young villagers venture into the deep forest to fetch sacred Karma branches",
      "Decorating the branch with wild forest flowers and brass oil lamps",
      "Ceremonial immersion of the branch into the local river at sunrise"
    ],
    traditional_foods: [
      "Pitha (steamed rice cakes with sweet or lentil filling)",
      "Chilka Roti (thin rice flour crepes)",
      "Mahua blossom sweet delicacies"
    ],
    nearby_markets: [
      "Ranchi Tribal Handicraft Cooperative",
      "Hazaribagh Sohrai painting artist village",
      "Purulia rural weekly haats"
    ],
    how_to_reach: "Easily accessible from Ranchi or Jamshedpur by road. Village festivities are celebrated across Latehar, Gumla, and Khunti districts.",
    best_viewing_tips: "Visit a village Akhra (community square) after 8:00 PM to experience the hypnotic sound of traditional drums and coordinated circle dancing."
  },
  {
    id: "3",
    name: "Tusu Parab",
    description: "An enchanting folk harvest festival celebrated on Makar Sankranti. Young women craft elaborate, brightly colored multi-tiered paper and bamboo architectural models called Chaudal, carrying them in jubilant musical processions to sacred rivers for ceremonial immersion.",
    category: "festival",
    date_start: "2026-01-14",
    date_end: "2026-01-15",
    location: "Purulia & Dhanbad",
    state: "Jharkhand & West Bengal",
    famous_for: [
      "Grand multi-tiered colorful Chaudal folk architectural structures",
      "Heartfelt Tusu folk songs sung in regional Kurmali and Bengali dialects",
      "Vibrant riverside melas with giant Ferris wheels and folk craft stalls",
      "Celebration of the winter paddy harvest across Chotanagpur"
    ],
    rituals: [
      "Girls gather nightly during the month of Poush to sing traditional Tusu ballads",
      "Carrying decorated Chaudals to the riverside with dhol and flutes on Sankranti",
      "Holy dip in the Subarnarekha and Damodar rivers followed by til-gur feast"
    ],
    traditional_foods: [
      "Tilwa & Gud Badam (sesame and jaggery brittle)",
      "Gud Pitha & Dudh Pitha (rice dumplings in sweetened milk)",
      "Muri Laru (puffed rice and date-palm jaggery laddoos)"
    ],
    nearby_markets: [
      "Purulia Chowk Bazar for terracotta handicrafts and Chhau dance masks",
      "Dhanbad Bank More Market for festive sweets and winter handlooms"
    ],
    how_to_reach: "Train to Dhanbad Junction (DHN) or Purulia Junction (PRR). The riverside ghats along Damodar and Kasai rivers host the largest gatherings.",
    best_viewing_tips: "Arrive at Kasai riverbanks by 10:00 AM on Makar Sankranti morning to witness hundreds of colorful Chaudals parading simultaneously."
  },
  {
    id: "4",
    name: "Chhath Puja",
    description: "An ancient, revered Vedic festival dedicated to Surya Dev (Sun God) and Chhathi Maiya. Known for unmatched purity, four days of rigorous fasting without water, and millions of devotees standing waist-deep in holy river waters offering Arghya to the setting and rising sun.",
    category: "festival",
    date_start: "2026-11-06",
    date_end: "2026-11-09",
    location: "River Ghats across India",
    state: "Bihar, Jharkhand & UP",
    famous_for: [
      "Sandalwood-scented river ghats illuminated with millions of clay diyas",
      "Waist-deep river water prayers during sunset and sunrise",
      "Traditional soulful Chhath folk geet sung by families in chorus",
      "Sacred bamboo Soop baskets filled with seasonal fruits, sugarcane, and Thekua"
    ],
    rituals: [
      "Day 1 (Nahay Khay): Holy bath and satvik pumpkin-rice meal",
      "Day 2 (Kharna): Full day fast concluded with jaggery kheer and roti",
      "Day 3 (Sandhya Arghya): Evening offerings to the setting sun in river waters",
      "Day 4 (Usha Arghya): Dawn offerings to the rising sun and breaking the 36-hour fast"
    ],
    traditional_foods: [
      "Thekua (crispy whole wheat, ghee, cardamom, and jaggery cookies)",
      "Rasiya (Kheer cooked in unrefined sugarcane jaggery)",
      "Kasari & fresh whole coconuts"
    ],
    nearby_markets: [
      "Patna Ghat Marketplace for bamboo soop, daura baskets, and fresh sugarcane",
      "Ranchi Kanke Dam & Bada Talab festive stalls"
    ],
    how_to_reach: "Celebrated enthusiastically across Patna (Ganga Ghats), Varanasi, Ranchi, and Delhi Yamuna Ghats. Direct flights and trains to Patna/Ranchi.",
    best_viewing_tips: "Reach the river ghats by 4:00 PM on Day 3 for evening Arghya, and 4:30 AM on Day 4 for sunrise Arghya to witness the mesmerizing sea of glowing lamps."
  },
  {
    id: "5",
    name: "Rohini Festival",
    description: "The symbolic commencement of the Indian agricultural cycle. Celebrated as the first festival of the agricultural year, farmers perform sacred seed-sowing rituals without ploughing, praying for timely monsoons, fertile soils, and abundant harvests.",
    category: "festival",
    date_start: "2026-05-25",
    date_end: "2026-05-26",
    location: "Agricultural Belts",
    state: "Jharkhand & Bengal",
    famous_for: [
      "Ceremonial broadcasting of paddy seeds into fertile red soils",
      "Worship of traditional farming tools, wooden ploughs, and seed baskets",
      "Community singing of agricultural welcome songs and folk melodies",
      "Celebration welcoming the upcoming monsoon season"
    ],
    rituals: [
      "Farmers rise before dawn and carry sanctified paddy seeds to their fields",
      "First handful of seeds sown facing east with prayers to the Earth Mother",
      "Village elders host community storytelling feasts in the evening"
    ],
    traditional_foods: [
      "Dhuska with fresh summer green mango chutney",
      "Kendu fruit sweet dessert",
      "Steamed herbal rice with wild saag"
    ],
    nearby_markets: [
      "Khunti organic spice and grain market",
      "Gumla agricultural haat for traditional tools and indigenous seeds"
    ],
    how_to_reach: "Celebrated across rural villages surrounding Ranchi, Hazaribagh, and Giridih. 1-2 hours drive from Ranchi city center.",
    best_viewing_tips: "Visit rural farm homestays in early morning to watch the auspicious first seed sowing ritual across terraced green plateau fields."
  },
  {
    id: "6",
    name: "Bandna Festival",
    description: "A vibrant, heartwarming harvest festival celebrated during the new moon of Kartik month. Dedicated entirely to honoring farm animals, particularly bullocks and cows, decorated with colorful floral garlands, painted horns, and traditional Sohrai geometric wall art.",
    category: "cultural",
    date_start: "2026-11-10",
    date_end: "2026-11-12",
    location: "Rural Tribal Districts",
    state: "Jharkhand & Bengal",
    famous_for: [
      "Intricate Sohrai folk mural art painted with natural clays on mud home walls",
      "Cattle decorated with marigold garlands, painted horns, and vermilion tilaks",
      "Night-long Ohira folk songs sung by youth visiting every cattle shed",
      "Gohal Puja (worship of the sacred animal shelter)"
    ],
    rituals: [
      "Day 1: Thorough cleaning of cattle sheds and painting home courtyards",
      "Day 2: Bathing farm animals, oiling their horns, and performing Aarti",
      "Day 3: Khuntta ritual — joyful dance with decorated bullocks in village arenas"
    ],
    traditional_foods: [
      "Chilka Roti with roasted country chicken curry",
      "Gud Pitha (crisp jaggery sweet dumplings)",
      "Freshly brewed Mahua and rice pitha"
    ],
    nearby_markets: [
      "Hazaribagh Sohrai & Kohbar Art Center for authentic handmade wall scrolls",
      "Ranchi Gram Udyog craft marketplace"
    ],
    how_to_reach: "Hazaribagh is 2 hours drive from Ranchi airport via NH-20. The rural villages of Barkagaon are renowned for world-famous Sohrai mural art.",
    best_viewing_tips: "Walk through the painted village lanes of Hazaribagh during morning hours to admire museum-quality natural mud murals on every house."
  },
  {
    id: "7",
    name: "Mysore Dussehra",
    description: "The spectacular state festival of Karnataka with over 400 years of royal heritage. Culminating on Vijayadashami, the magnificent Mysore Palace is illuminated with 100,000 golden bulbs, hosting the grand Jamboo Savari elephant procession carrying the golden idol of Goddess Chamundeshwari.",
    category: "festival",
    date_start: "2026-10-12",
    date_end: "2026-10-22",
    location: "Mysore",
    state: "Karnataka",
    famous_for: [
      "The breathtaking illumination of Mysore Palace with over 100,000 bulbs",
      "Jamboo Savari: Royal elephant procession carrying 750kg pure gold Howdah",
      "Torchlight Parade and equestrian acrobatics at Bannimantap Ground",
      "Classical music and dance concerts inside the royal Durbar Hall"
    ],
    rituals: [
      "Royal family performs special Puja to the royal throne and weapons (Ayudha Puja)",
      "State honours bestowed upon the royal tusker leading the grand procession",
      "Grand concluding torchlight drill and fireworks display"
    ],
    traditional_foods: [
      "Authentic Mysore Pak made with pure desi ghee",
      "Mysore Masala Dosa with red chilli-garlic chutney",
      "Bisi Bele Bath served with spicy potato chips"
    ],
    nearby_markets: [
      "Devaraja Market for sandalwood oils, incense, and fresh jasmine garlands",
      "Cauvery Arts & Crafts Emporium for genuine Mysore rosewood inlays",
      "KSIC Mysore Silk showroom for pure gold zari silk sarees"
    ],
    how_to_reach: "Fly into Bengaluru Airport (BLR) and take the 2-hour Vande Bharat Express to Mysore Junction (MYS).",
    best_viewing_tips: "Book royal procession gold seats inside the Palace grounds well in advance for the best view of the golden Howdah departure."
  },
  {
    id: "8",
    name: "Pushkar Camel Fair",
    description: "One of the planet's most iconic cultural and livestock spectacles. Over 50,000 decorated camels, horses, and cattle converge on the golden sand dunes of the Thar Desert, alongside hot air balloons, desert folk music, mustache competitions, and sacred dips in Pushkar Lake.",
    category: "cultural",
    date_start: "2026-11-18",
    date_end: "2026-11-26",
    location: "Pushkar",
    state: "Rajasthan",
    famous_for: [
      "Thousands of colorfully adorned camels with handmade beaded saddles and pom-poms",
      "Vibrant rural competitions: Longest Mustache contest, Matka Race, and Camel Dance",
      "Hot air balloon rides offering sweeping panoramic views over the desert dunes",
      "Sacred Kartik Purnima full-moon holy dip in the ancient Pushkar Sarovar lake"
    ],
    rituals: [
      "Devotees perform Maha Aarti at Brahma Temple — one of the world's few Brahma shrines",
      "Floating thousands of glowing clay lamps (Deepdan) across the 52 holy ghats at dusk",
      "Desert campfire folk concerts with Kalbelia dancers and Rajasthani Sarangi players"
    ],
    traditional_foods: [
      "Crisp hot Malpua dipped in saffron syrup from Halwai Gali",
      "Rajasthani Dal Baati Churma served with desi ghee and garlic chutney",
      "Thandai topped with dry fruits and rose petals"
    ],
    nearby_markets: [
      "Pushkar Main Market for silver tribal jewelry, leather bags, and embroidered textiles",
      "Sarafa Marketplace for brass statues, camel bone artifacts, and miniature paintings"
    ],
    how_to_reach: "Take a train or cab to Ajmer Junction (AII), then a scenic 30-minute mountain pass drive across the Nag Pahar hills into Pushkar.",
    best_viewing_tips: "Head out to the sand dune mela ground during sunrise (6:30 AM) when camel herders stoke morning campfires in the desert mist."
  },
  {
    id: "9",
    name: "Hornbill Festival",
    description: "Revered as the 'Festival of Festivals' in Northeast India. Held annually in the picturesque heritage village of Kisama, it unites all 16 indigenous warrior tribes of Nagaland to celebrate their rich folklore, warrior dances, indigenous games, and culinary heritage.",
    category: "cultural",
    date_start: "2026-12-01",
    date_end: "2026-12-10",
    location: "Kisama Heritage Village, Kohima",
    state: "Nagaland",
    famous_for: [
      "Traditional tribal warrior dances with Hornbill feather headdresses and spears",
      "Authentic Morungs (tribal architectural huts) built by each of the 16 tribes",
      "The legendary Naga King Chilly (Bhut Jolokia) eating competition",
      "International Hornbill Rock Concert featuring top rock and metal bands"
    ],
    rituals: [
      "Ceremonial lighting of the festival fire by tribal elders in traditional regalia",
      "Traditional indigenous archery, wrestling (Kene), and bamboo climbing contests",
      "Evening bonfire feasts with folk singing celebrating tribal warrior ancestry"
    ],
    traditional_foods: [
      "Smoked pork cooked with fermented bamboo shoots and Raja Mircha",
      "Galho (fragrant Naga herbal rice porridge)",
      "Zutho (traditional fermented organic rice beverage)"
    ],
    nearby_markets: [
      "Kisama Crafts Marketplace for Naga warrior shawls, bead necklaces, and wood carvings",
      "Kohima Night Market for street foods, local winter fashion, and handicrafts"
    ],
    how_to_reach: "Fly to Dimapur Airport (DMU) or take a train to Dimapur Railway Station, then a scenic 2.5-hour mountain taxi ride up to Kohima/Kisama.",
    best_viewing_tips: "Arrive at the main arena by 9:30 AM for the morning tribal cultural parade where each tribe showcases their distinct war cries and chants."
  }
];

export const mockReviews: (Review & { user_name: string; location: string })[] = [
  {
    id: "1",
    user_id: "u1",
    target_id: "taj-mahal",
    rating: 5,
    comment: "WanderAI gave us the perfect sunrise timing for Taj Mahal and avoided all crowd rush! Truly unforgettable experience.",
    created_at: "2026-08-20T10:00:00Z",
    user_name: "Amit Sharma",
    location: "Mumbai, Maharashtra"
  },
  {
    id: "2",
    user_id: "u2",
    target_id: "kerala-backwaters",
    rating: 5,
    comment: "The 4-day Alleppey & Munnar circuit recommendation was flawless. The local Toddy shop food tips were 10/10 delicious!",
    created_at: "2026-08-21T14:30:00Z",
    user_name: "Priya Patel",
    location: "Ahmedabad, Gujarat"
  },
  {
    id: "3",
    user_id: "u3",
    target_id: "varanasi-ghats",
    rating: 5,
    comment: "Subah-e-Banaras sunrise boat ride and the evening Dashashwamedh Aarti guidance helped us navigate Varanasi with total peace of mind.",
    created_at: "2026-08-22T08:15:00Z",
    user_name: "Rahul Verma",
    location: "New Delhi"
  },
  {
    id: "4",
    user_id: "u4",
    target_id: "hampi-ruins",
    rating: 5,
    comment: "The heritage notes for the stone chariot and boulder sunsets across Tungabhadra river made me feel like an ancient explorer.",
    created_at: "2026-08-23T11:45:00Z",
    user_name: "Anjali Gupta",
    location: "Kolkata, West Bengal"
  },
  {
    id: "5",
    user_id: "u5",
    target_id: "leh-ladakh",
    rating: 5,
    comment: "The acclimatization advice and Pangong Tso homestay recommendations made our high-altitude bike ride super safe and magical.",
    created_at: "2026-08-24T16:20:00Z",
    user_name: "Suresh Iyer",
    location: "Chennai, Tamil Nadu"
  },
  {
    id: "6",
    user_id: "u6",
    target_id: "golden-temple",
    rating: 5,
    comment: "Langar timing and midnight Palki Sahib seva tips were incredibly accurate and deeply moving. Best Indian travel AI by far.",
    created_at: "2026-08-24T19:10:00Z",
    user_name: "Meera Deshmukh",
    location: "Pune, Maharashtra"
  },
  {
    id: "7",
    user_id: "u7",
    target_id: "amer-fort",
    rating: 5,
    comment: "Explored Jaipur with the instant chat feature in Hindi! It recommended the best Pyaaz Kachori near Johari Market.",
    created_at: "2026-08-25T09:00:00Z",
    user_name: "Vikram Singh",
    location: "Jaipur, Rajasthan"
  },
  {
    id: "8",
    user_id: "u8",
    target_id: "cherrapunji-bridges",
    rating: 5,
    comment: "Nongriat double decker root bridge trek plan was spot on with exact step counts, guide contacts, and rain gear prep.",
    created_at: "2026-08-25T12:00:00Z",
    user_name: "Kavita Nair",
    location: "Kochi, Kerala"
  },
  {
    id: "9",
    user_id: "u9",
    target_id: "goa-coastal",
    rating: 5,
    comment: "Showed us unexplored peaceful beaches in South Goa away from commercial party spots. Exactly the getaway we needed!",
    created_at: "2026-08-25T15:30:00Z",
    user_name: "Arjun Reddy",
    location: "Hyderabad, Telangana"
  }
];

export const mockDestinations: Destination[] = [
  {
    "id": "taj-mahal",
    "name": "Taj Mahal",
    "district": "Agra",
    "state": "Uttar Pradesh",
    "category": "historical",
    "rating": 4.9,
    "description": "Agra's iconic ivory-white marble mausoleum, commissioned in 1632 by Mughal Emperor Shah Jahan for his beloved wife Mumtaz Mahal. Renowned globally for symmetrical gardens, intricate Pietra Dura stone inlays, and ethereal reflections on the Yamuna River at dawn.",
    "short_description": "UNESCO World Heritage white marble monument and eternal symbol of love.",
    "latitude": 27.1751,
    "longitude": 78.0421,
    "best_time": "October to March (Sunrise 6:00 AM – 8:30 AM is magical)",
    "entry_fee": 50,
    "is_featured": true,
    "famous_things": [
      "Pietra Dura floral marble inlay work with semi-precious gems",
      "Mehtab Bagh sunset viewpoint across the Yamuna River",
      "Iconic reflecting pool and Four Minarets architecture",
      "World-famous Agra Petha (Ash Gourd sweet) at Sadar Market"
    ],
    "nearby_markets": [
      "Sadar Market for leather footwear, marble replicas & Petha",
      "Kinari Market near Jama Masjid for wedding jewelry & spices",
      "Subhash Market for traditional Zardozi silk embroidery"
    ],
    "local_festivals": [
      "Taj Mahotsav (10-day cultural festival in February at Shilpgram)",
      "Sharad Purnima (Night viewing under full moonlight)"
    ],
    "transit_info": "Nearest Airport: Kheria Airport Agra (AGR) / Delhi IGI (DEL, 3.5 hrs via Yamuna Expressway). Railway: Agra Cantt (AGC) with 100-min Gatimaan Express from Delhi."
  },
  {
    "id": "varanasi-ghats",
    "name": "Varanasi Ghats",
    "district": "Varanasi",
    "state": "Uttar Pradesh",
    "category": "temple",
    "rating": 4.9,
    "description": "One of the oldest continuously inhabited cities on Earth. The spiritual heart of India along the sacred crescent curve of the River Ganges, famous for 84 ancient stone ghats, sunrise boat meditation, labyrinthine old alleys, and the spellbinding evening Maha Ganga Aarti.",
    "short_description": "Sacred riverfront ghats and evening Ganga Aarti along the holy Ganges.",
    "latitude": 25.3176,
    "longitude": 83.0062,
    "best_time": "October to March (Crisp winter mornings and temple festivals)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Subah-e-Banaras sunrise rowing boat ride along Dashashwamedh Ghat",
      "Grand multi-priest evening Maha Ganga Aarti with brass lamps",
      "Kashi Vishwanath Temple Golden Shikhara corridor",
      "Banarasi Paan, Malaiyo winter saffron froth, and Blue Lassi"
    ],
    "nearby_markets": [
      "Chowk & Thatheri Market for authentic Banarasi Silk Sarees & brassware",
      "Vishwanath Gali for rudraksha malas, copper pooja vessels & sweets",
      "Godowlia Market for perfumes, silk stoles & street food"
    ],
    "local_festivals": [
      "Dev Deepawali (Ghats illuminated with 1 million diyas on Kartik Purnima)",
      "Maha Shivratri (Grand procession to Kashi Vishwanath)"
    ],
    "transit_info": "Nearest Airport: Lal Bahadur Shastri International Airport (VNS, 25 km). Railway: Varanasi Junction (BSB) & Banaras Station (BSBS) connected by Vande Bharat from Delhi."
  },
  {
    "id": "kerala-backwaters",
    "name": "Kerala Backwaters",
    "district": "Alleppey (Alappuzha)",
    "state": "Kerala",
    "category": "nature",
    "rating": 4.8,
    "description": "A tranquil, interconnected web of palm-fringed canals, serene lagoons, and emerald lakes running parallel to the Arabian Sea coast. Best experienced aboard a traditional luxury wooden Kettuvallam houseboat gliding past paddy fields and village toddy shops.",
    "short_description": "Serene network of emerald lagoons and traditional luxury houseboats.",
    "latitude": 9.4981,
    "longitude": 76.3388,
    "best_time": "September to March (Pleasant breeze and birdwatching season)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Overnight luxury Kettuvallam houseboat cruise with private chef",
      "Vembanad Lake kayaking through narrow village canals",
      "Authentic Karimeen Pollichathu (pearl spot fish wrapped in banana leaf)",
      "Traditional Ayurvedic rejuvenation massages & herbal treatments"
    ],
    "nearby_markets": [
      "Alleppey Floating Triveni Supermarket & spice stalls",
      "Mullakkal Street for coir home decor, spices & brass lamps",
      "Canal Market for Malabar black pepper, cardamom & coconut oil"
    ],
    "local_festivals": [
      "Nehru Trophy Boat Race (Roaring snake boat race in Punnamada Lake, August)",
      "Mullakkal Chirappu (December temple festival with cultural processions)"
    ],
    "transit_info": "Nearest Airport: Cochin International Airport (COK, 85 km). Railway: Alappuzha Railway Station (ALLP) with scenic coastal train links."
  },
  {
    "id": "hampi-ruins",
    "name": "Hampi Ruins",
    "district": "Vijayanagara",
    "state": "Karnataka",
    "category": "heritage",
    "rating": 4.9,
    "description": "UNESCO World Heritage open-air museum and former capital of the magnificent 14th-century Vijayanagara Empire. Set in an otherworldly landscape of giant granite boulders and banana plantations, featuring the iconic Stone Chariot, musical pillars, and sunset viewpoints.",
    "short_description": "Ancient Vijayanagara empire capital and iconic stone chariot ruins.",
    "latitude": 15.335,
    "longitude": 76.46,
    "best_time": "October to February (Comfortable daytime temperatures for cycling)",
    "entry_fee": 40,
    "is_featured": true,
    "famous_things": [
      "Vitthala Temple Stone Chariot & 56 musical acoustic pillars",
      "Sunset view over boulder-strewn landscape from Matanga Hill",
      "Virupaksha Temple — continuously active temple since the 7th century",
      "Coracle (round bowl boat) ride across the Tungabhadra River"
    ],
    "nearby_markets": [
      "Hampi Market lane fronting Virupaksha temple for stone carvings & leather crafts",
      "Kamalapur Market for local banana chips and Karnataka filter coffee",
      "Hospet Market for Lambani tribal embroidered handicrafts"
    ],
    "local_festivals": [
      "Hampi Utsav (3-day mega cultural carnival in November with laser shows)",
      "Virupaksha Car Festival (Grand chariot pulling in March/April)"
    ],
    "transit_info": "Nearest Airport: Jindal Vijaynagar Airport (VDY, 35 km) / Hubli (HBX, 140 km). Railway: Hosapete Junction (HPT, 13 km) with direct trains from Bengaluru & Goa."
  },
  {
    "id": "leh-ladakh",
    "name": "Leh Ladakh & Pangong Tso",
    "district": "Leh",
    "state": "Ladakh",
    "category": "hill",
    "rating": 4.9,
    "description": "High-altitude Himalayan wonderland of stark moonscapes, soaring mountain passes, and ancient Tibetan Buddhist gompas perched on rugged cliffs. Famous for the mesmerizing color-changing cobalt waters of Pangong Tso lake at 14,270 feet and the Nubra sand dunes.",
    "short_description": "High-altitude Himalayan passes, Tibetan monasteries, and azure alpine lakes.",
    "latitude": 34.1526,
    "longitude": 77.5771,
    "best_time": "May to September (Road passes open, pleasant sunny weather)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Pangong Tso Lake extending from India to Tibet with changing shades of blue",
      "Double-humped Bactrian camel safari in Nubra Valley sand dunes",
      "Khardung La — one of the world's highest motorable mountain passes (17,982 ft)",
      "Thiksey & Hemis Monasteries with giant Maitreya Buddha statues"
    ],
    "nearby_markets": [
      "Leh Main Market for Pashmina shawls, Tibetan carpets & prayer wheels",
      "Moti Market for authentic Tibetan turquoise & silver jewelry",
      "Choglamsar Tibetan Refugee Market for hand-knitted yak wool caps"
    ],
    "local_festivals": [
      "Hemis Festival (June/July featuring sacred masked Cham dance)",
      "Ladakh Festival (September carnival in Leh with archery & polo matches)"
    ],
    "transit_info": "Nearest Airport: Kushok Bakula Rimpochee Airport (IXL, Leh). Highway: Manali-Leh Highway & Srinagar-Leh Highway (open June–October). Mandatory 48-hr acclimatization."
  },
  {
    "id": "golden-temple",
    "name": "Golden Temple (Harmandir Sahib)",
    "district": "Amritsar",
    "state": "Punjab",
    "category": "temple",
    "rating": 5,
    "description": "The holiest sanctum of Sikhism, gilded with 500 kg of pure gold leaf and surrounded by the sacred Amrit Sarovar (Pool of Nectar). Open to all faiths, housing Guru Granth Sahib and the world's largest community kitchen (Langar) feeding 100,000 pilgrims daily for free.",
    "short_description": "Spiritual Sikh holy shrine with gleaming gold dome and sacred Amrit Sarovar.",
    "latitude": 31.62,
    "longitude": 74.8765,
    "best_time": "October to March (Pleasant winter weather, especially at night)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Harmandir Sahib gold sanctum reflection in the holy Amrit Sarovar lake",
      "Langar Seva — tasting holy Dal, Kheer, and hot rotis in community hall",
      "Palki Sahib ceremony (Nightly procession at 9:30 PM and dawn at 4:30 AM)",
      "Wagah Border Beating Retreat ceremony (30 km away at Indo-Pak border)"
    ],
    "nearby_markets": [
      "Hall Market for Phulkari embroidered dupattas, Punjabi juttis & pickles",
      "Katra Jaimal Singh for authentic Amritsari textiles & pashminas",
      "Guru Market for traditional gold and jadau jewelry"
    ],
    "local_festivals": [
      "Baisakhi (Grand harvest and Khalsa founding celebration in April)",
      "Guru Nanak Gurpurab (Magnificent night fireworks and temple illumination)"
    ],
    "transit_info": "Nearest Airport: Sri Guru Ram Dass Jee International Airport (ATQ, 12 km). Railway: Amritsar Junction (ASR) with Vande Bharat and Shatabdi from Delhi."
  },
  {
    "id": "munnar-tea-gardens",
    "name": "Munnar Tea Gardens",
    "district": "Idukki",
    "state": "Kerala",
    "category": "hill",
    "rating": 4.8,
    "description": "Idyllic hill station situated at 5,200 feet at the confluence of three mountain streams in the Western Ghats. Blanketed by endless manicured emerald-green tea plantations, cascading waterfalls, misty peak trails, and the endangered Nilgiri Tahr mountain goat sanctuary.",
    "short_description": "Rolling emerald hills, manicured tea estates, and misty mountain viewpoints.",
    "latitude": 10.0889,
    "longitude": 77.0595,
    "best_time": "September to May (Crisp cool mountain air and clear valley views)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Kolukkumalai Tea Estate — one of the highest organic tea gardens in the world",
      "Eravikulam National Park to spot the rare Nilgiri Tahr mountain goats",
      "Top Station viewpoint offering panoramic vistas of the Western Ghats clouds",
      "Fresh cardamom tea and homemade chocolate tasting"
    ],
    "nearby_markets": [
      "Munnar Town Market for fresh green pepper, cinnamon, nutmeg & essential oils",
      "KDHP Tea Museum Sales Outlet for single-estate reserve tea leaves",
      "Mattupetty Dam souvenir stalls for wooden crafts and wild honey"
    ],
    "local_festivals": [
      "Neelakurinji Blossom (Spectacular blue-purple flower blooming once every 12 years)",
      "Onam Harvest Festival (Celebrated with flower carpets and traditional feasts in Sept)"
    ],
    "transit_info": "Nearest Airport: Cochin International Airport (COK, 110 km, 3.5 hrs scenic drive). Railway: Aluva (AWY, 110 km) / Ernakulam Junction (ERS, 130 km)."
  },
  {
    "id": "mysore-palace",
    "name": "Mysore Palace",
    "district": "Mysore",
    "state": "Karnataka",
    "category": "heritage",
    "rating": 4.9,
    "description": "The grand official residence of the Wadiyar royal dynasty. A masterwork of Indo-Saracenic architecture featuring opulent turquoise durbar halls, intricately carved teakwood ceilings, stained glass domes, and an ethereal illumination by 100,000 bulbs on Sundays and festivals.",
    "short_description": "Opulent royal palace illuminated with over 100,000 festival lights.",
    "latitude": 12.3051,
    "longitude": 76.6551,
    "best_time": "October to March (Especially during the 10-day Dussehra festival)",
    "entry_fee": 100,
    "is_featured": true,
    "famous_things": [
      "Sunday & festive evening Palace Illumination (7:00 PM – 8:00 PM)",
      "Grand Durbar Hall with peacock stained-glass ceiling and golden throne",
      "Gombe Thotti (Doll's pavilion) housing a 750 kg golden howdah",
      "Authentic melt-in-mouth Mysore Pak sweet from original confectioners"
    ],
    "nearby_markets": [
      "Devaraja Market for sandalwood artifacts, attar, and fragrant flowers",
      "Sayyaji Rao Road for traditional Mysore Silk sarees with pure zari",
      "Cauvery Arts Emporium for certified rosewood inlay furniture"
    ],
    "local_festivals": [
      "Mysore Dussehra (Grand 10-day state festival with elephant procession)",
      "Mysore Palace Music Festival (Renowned Indian classical concerts in Oct)"
    ],
    "transit_info": "Nearest Airport: Mysore Domestic Airport (MYQ) / Bengaluru International (BLR, 170 km via Expressway). Railway: Mysore Junction (MYS) with direct Vande Bharat links."
  },
  {
    "id": "amer-fort",
    "name": "Amer Fort & Palace",
    "district": "Jaipur",
    "state": "Rajasthan",
    "category": "historical",
    "rating": 4.8,
    "description": "Magnificent 16th-century hilltop citadel constructed from red sandstone and yellow marble overlooking the calm waters of Maota Lake. Renowned for its opulent Sheesh Mahal (Mirror Palace) where a single candle light illuminates thousands of Belgian convex mirrors.",
    "short_description": "Hilltop fort showcasing Rajput architecture, courtyards, and mirror palaces.",
    "latitude": 26.9855,
    "longitude": 75.8513,
    "best_time": "October to March (Early morning or evening for light & sound show)",
    "entry_fee": 100,
    "is_featured": true,
    "famous_things": [
      "Sheesh Mahal (Hall of Mirrors) with intricate glass mosaic ceilings",
      "Diwan-i-Aam public audience hall with double-pillared colonnades",
      "Evening Sound & Light Show narrated by Amitabh Bachchan",
      "Jaigarh Fort secret subterranean tunnel connecting the two fortresses"
    ],
    "nearby_markets": [
      "Amer Town Market for handmade puppet crafts and lac bangles",
      "Johari Market (Jaipur city, 11 km) for precious gemstones and Kundan jewelry",
      "Bapu Market for camel leather footwear and traditional Jaipuri bedsheets"
    ],
    "local_festivals": [
      "Teej Festival (Royal procession of Goddess Parvati in August)",
      "Jaipur Literature Festival (World-renowned cultural fest in January)"
    ],
    "transit_info": "Nearest Airport: Jaipur International Airport (JAI, 22 km). Railway: Jaipur Junction (JP, 13 km). Local AC low-floor buses and cabs run frequently from Hawa Mahal."
  },
  {
    "id": "konark-sun-temple",
    "name": "Konark Sun Temple",
    "district": "Puri",
    "state": "Odisha",
    "category": "heritage",
    "rating": 4.8,
    "description": "13th-century UNESCO World Heritage architectural marvel sculpted as a colossal 24-wheeled chariot of Surya Dev (Sun God) pulled by seven stone horses. The wheels function as precise sundials, capable of calculating time down to the exact minute by sun shadows.",
    "short_description": "13th-century UNESCO marvel sculpted as a colossal 24-wheeled Sun chariot.",
    "latitude": 19.8876,
    "longitude": 86.0945,
    "best_time": "October to March (Cool ocean breeze and annual dance festival in Dec)",
    "entry_fee": 40,
    "is_featured": true,
    "famous_things": [
      "24 monumental sculpted Sun Chariot wheels with functioning sundial spokes",
      "Natya Mandapa (Dance Hall) carved with over 100 classical Odissi dance poses",
      "Konark Dance Festival held against the floodlit temple backdrop in December",
      "Chandrabhaga Beach (3 km away) — celebrated clean blue flag beach and sunrise spot"
    ],
    "nearby_markets": [
      "Konark Open-Air Craft Stalls for stone sculpture replicas and sea-shell crafts",
      "Pipili Artisan Village (on way to Puri) for vibrant Applique textile lamps",
      "Puri Grand Road Market for Lord Jagannath Pattachitra scroll paintings"
    ],
    "local_festivals": [
      "Konark Dance & Music Festival (1st to 5th December annually)",
      "Magha Saptami (Sacred sunrise holy dip at Chandrabhaga Beach in February)"
    ],
    "transit_info": "Nearest Airport: Biju Patnaik International Airport, Bhubaneswar (BBI, 65 km). Railway: Puri Railway Station (PURI, 35 km) / Bhubaneswar (BBS). Marine Drive connects Puri & Konark."
  },
  {
    "id": "ranthambore",
    "name": "Ranthambore Tiger Reserve",
    "district": "Sawai Madhopur",
    "state": "Rajasthan",
    "category": "wildlife",
    "rating": 4.8,
    "description": "One of Northern India's largest and most famous national parks. Royal Bengal tigers roam freely among 10th-century fort ramparts, banyan trees, and lotus-filled lakes where marsh crocodiles bask, offering India's most thrilling wildlife jeep safaris.",
    "short_description": "Premier tiger sanctuary featuring wilderness safaris and historic fort ruins.",
    "latitude": 26.0173,
    "longitude": 76.5026,
    "best_time": "October to April (Park open Oct–June, safaris best Nov–March)",
    "entry_fee": 1200,
    "is_featured": true,
    "famous_things": [
      "Open-top 4x4 Gypsy Tiger Safari across Zones 1 through 10",
      "10th-century Ranthambore Fort perched 700 ft above the jungle",
      "Padam Talao & Rajbagh Lake with ruins and basking crocodiles",
      "Trinetra Ganesha Temple located inside the ancient fort walls"
    ],
    "nearby_markets": [
      "Sawai Madhopur Main Market for Dastkar Ranthambore women's handicrafts",
      "Village Women Craft Center for hand block prints & tiger souvenir pottery",
      "Local Guava Orchards for world-famous fresh Sawai Madhopur guavas"
    ],
    "local_festivals": [
      "Ganesh Chaturthi (Major 3-day pilgrimage mela at Trinetra Ganesha temple in Sept)"
    ],
    "transit_info": "Nearest Airport: Jaipur International Airport (JAI, 160 km, 3.5 hrs drive). Railway: Sawai Madhopur Junction (SWM, 11 km) on Delhi-Mumbai main line with Superfast train stops."
  },
  {
    "id": "victoria-memorial",
    "name": "Victoria Memorial Hall",
    "district": "Kolkata",
    "state": "West Bengal",
    "category": "historical",
    "rating": 4.7,
    "description": "Imposing British-era white Makrana marble monument set in 64 acres of landscaped gardens beside the Hooghly River. Designed in grand Indo-Saracenic revival style, it houses 25 galleries with rare historical portraits, royal artifacts, and Raj-era paintings.",
    "short_description": "Stately white Makrana marble palace surrounded by sprawling gardens.",
    "latitude": 22.5448,
    "longitude": 88.3426,
    "best_time": "October to March (Pleasant winter weather for strolls in the garden)",
    "entry_fee": 50,
    "is_featured": true,
    "famous_things": [
      "Gleaming white Makrana marble architecture and revolving Angel of Victory statue",
      "Queen's Hall dome galleries with historic Indian and European paintings",
      "Evening Son-et-Lumiere (Sound and Light Show) in the manicured gardens",
      "Iconic Kolkata horse carriage ride along the Queen's Way boulevard"
    ],
    "nearby_markets": [
      "New Market (Hogg Market) for Kolkata sweets, leather goods & silver jewelry",
      "Dakshinapan Shopping Center for certified handloom emporiums of all states",
      "College Street (Boi Para) — largest second-hand book market in Asia"
    ],
    "local_festivals": [
      "Kolkata Durga Puja (UNESCO Intangible Cultural Heritage fest in October)",
      "International Kolkata Book Fair (World's largest non-trade book fair in Jan)"
    ],
    "transit_info": "Nearest Airport: Netaji Subhash Chandra Bose International Airport (CCU, 22 km). Metro: Maidan Metro Station & Rabindra Sadan Station are 5 mins walk away."
  },
  {
    "id": "ajanta-ellora",
    "name": "Ajanta & Ellora Caves",
    "district": "Aurangabad (Chhatrapati Sambhajinagar)",
    "state": "Maharashtra",
    "category": "heritage",
    "rating": 4.9,
    "description": "UNESCO World Heritage rock-cut cave monuments spanning 2nd century BCE to 10th century CE. Ellora features the breathtaking monolithic Kailash Temple carved top-down from a single volcanic basalt cliff, while Ajanta houses world-famous ancient Buddhist fresco murals.",
    "short_description": "Ancient rock-cut cave monuments and the monolithic Kailash Temple.",
    "latitude": 20.0268,
    "longitude": 75.178,
    "best_time": "October to March (Pleasant temperatures for cave exploration)",
    "entry_fee": 40,
    "is_featured": true,
    "famous_things": [
      "Kailash Temple (Cave 16) — world's largest monolithic rock excavation",
      "Ajanta Cave 1 & 2 ancient Buddhist fresco paintings & Padmapani Bodhisattva",
      "Ajanta Viewpoint overlooking the horseshoe gorge of Waghur River",
      "Himroo and Paithani handloom weaving demonstrations in Aurangabad"
    ],
    "nearby_markets": [
      "Gul Mandi & City Chowk for authentic Paithani silk sarees and Himroo shawls",
      "Nirala Market for Bidriware metal craft souvenirs and local street food",
      "Tara Pan Center for royal Aurangabadi digestive sweet paan"
    ],
    "local_festivals": [
      "Ellora-Ajanta International Music & Dance Festival (Held in January)",
      "Buddha Purnima (Special meditation gatherings at Ajanta Caves in May)"
    ],
    "transit_info": "Nearest Airport: Chhatrapati Sambhajinagar Airport (IXU, 30 km to Ellora, 100 km to Ajanta). Railway: Aurangabad Station (AWB) with direct Vande Bharat train from Mumbai."
  },
  {
    "id": "meenakshi-temple",
    "name": "Meenakshi Amman Temple",
    "district": "Madurai",
    "state": "Tamil Nadu",
    "category": "temple",
    "rating": 4.9,
    "description": "Historic Dravidian temple complex on the southern bank of the Vaigai River, dedicated to Goddess Meenakshi and Lord Sundareswarar. Dominated by 14 towering gopurams encrusted with thousands of brightly painted mythological stucco sculptures and the Hall of Thousand Pillars.",
    "short_description": "Dravidian architectural masterpiece with 14 vibrant sculpted gopurams.",
    "latitude": 9.9195,
    "longitude": 78.1193,
    "best_time": "October to March (Cool weather, especially during Chithirai festival)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Hall of 1,000 Pillars (Aayiram Kaal Mandapam) with musical acoustic pillars",
      "Golden Lotus Tank (Potramarai Kulam) reflection of southern gopuram",
      "Nightly Palliarai Ceremony (Lord Shiva carried to Goddess Meenakshi's chamber at 9 PM)",
      "Famous Madurai Jigarthanda dessert and piping hot Madurai Kari Dosa"
    ],
    "nearby_markets": [
      "Puthu Mandapam opposite eastern tower for brass vessels, tailoring & Madurai Sungudi cotton sarees",
      "Chithirai Street encircling the temple for bronze pooja idols & fragrant Madurai Malli (Jasmine)",
      "Avani Moola Street for South Indian snacks and sweet halwa"
    ],
    "local_festivals": [
      "Chithirai Festival (10-day divine celestial wedding of Goddess Meenakshi in April/May)",
      "Float Festival (Theppam mela celebrated on full moon in January/February)"
    ],
    "transit_info": "Nearest Airport: Madurai Airport (IXM, 12 km). Railway: Madurai Junction (MDU) connected by direct Vande Bharat & Express trains from Chennai and Bengaluru."
  },
  {
    "id": "qutub-minar",
    "name": "Qutub Minar & Mehrauli Complex",
    "district": "New Delhi",
    "state": "Delhi",
    "category": "historical",
    "rating": 4.7,
    "description": "A soaring 73-meter victory minaret of fluted red sandstone and marble, built in 1192 by Qutb-ud-din Aibak. Surrounded by ancient architectural ruins including the Quwwat-ul-Islam Mosque and the 1,600-year-old rust-resistant Iron Pillar of Chandragupta II.",
    "short_description": "World's tallest brick minaret standing inside a historic 12th-century monument complex.",
    "latitude": 28.5244,
    "longitude": 77.1855,
    "best_time": "October to March (Sunny winter afternoons with manicured lawn picnics)",
    "entry_fee": 40,
    "is_featured": true,
    "famous_things": [
      "73-meter fluted red sandstone minaret with intricate Arabic calligraphy carvings",
      "Ancient 4th-century Iron Pillar that has never rusted despite centuries of outdoor exposure",
      "Ala'i Minar — the ambitious unfinished base intended to be twice the height of Qutub",
      "Illuminated monument viewing at night with landscaped archaeological gardens"
    ],
    "nearby_markets": [
      "Mehrauli Village Marketplace for traditional pottery and Sufi attar",
      "Dilli Haat INA (15 mins via Metro) for regional handicrafts and food courts",
      "Ambawatta One complex for designer boutiques and rooftop Qutub-facing bistros"
    ],
    "local_festivals": [
      "Qutub Festival (3-day classical music and Sufi qawwali festival in November)",
      "Phool Walon Ki Sair (Historic floral fan festival celebrated in Mehrauli in autumn)"
    ],
    "transit_info": "Nearest Airport: Indira Gandhi International Airport (DEL, 12 km). Metro: Qutub Minar Metro Station (Yellow Line) is 1.5 km away with e-rickshaws available."
  },
  {
    "id": "sundarbans",
    "name": "Sundarbans Biosphere Reserve",
    "district": "South 24 Parganas",
    "state": "West Bengal",
    "category": "wildlife",
    "rating": 4.8,
    "description": "World's largest contiguous halophytic mangrove forest and UNESCO Biosphere Reserve in the Ganges-Brahmaputra delta. Home to swimming Royal Bengal tigers, estuarine saltwater crocodiles, Gangetic river dolphins, and over 260 species of exotic migratory birds.",
    "short_description": "Vast mangrove delta crisscrossed by tidal waterways, tigers, and biodiversity.",
    "latitude": 21.9497,
    "longitude": 89.1833,
    "best_time": "September to March (Winter months with calm waters and sunbathing wildlife)",
    "entry_fee": 100,
    "is_featured": true,
    "famous_things": [
      "Boat safari through narrow tidal mangrove creeks (Pakhiralay & Sajnekhali)",
      "Sajnekhali Bird Sanctuary watchtower and Mangrove Interpretation Centre",
      "Dobanki Canopy Walk elevated 20 feet above the tidal forest floor",
      "Pure wild Sundarbans mangrove honey (Mou) harvested by local honey collectors"
    ],
    "nearby_markets": [
      "Godkhali Ferry Ghat local market for organic mangrove honey and fish",
      "Canning Local Marketplace for regional Bengal sweets and freshwater crabs",
      "Pakhiralay village craft stalls for mangrove wood sculptures"
    ],
    "local_festivals": [
      "Bonbibi Mela (January celebration honoring the goddess of the forest)",
      "Rash Mela on Sagar Island (Grand full-moon delta celebration in November)"
    ],
    "transit_info": "Nearest Airport: Kolkata Airport (CCU, 110 km to Godkhali boat base). Railway: Canning Station (45 km from Kolkata by local train), followed by road transfer to Godkhali boat ghat."
  },
  {
    "id": "rishikesh-ganga",
    "name": "Rishikesh & Laxman Jhula",
    "district": "Dehradun",
    "state": "Uttarakhand",
    "category": "temple",
    "rating": 4.9,
    "description": "The Yoga Capital of the World nestled in the Himalayan foothills where the emerald-green Ganges surges into the northern plains. Celebrated for iconic suspension bridges, spiritual ashrams, cliff jumping, white-water river rafting, and the sublime Parmarth Niketan Ganga Aarti.",
    "short_description": "Yoga capital on the emerald Ganges with iconic suspension bridges and river rafting.",
    "latitude": 30.0869,
    "longitude": 78.2676,
    "best_time": "September to November & February to May (Ideal for rafting and yoga retreats)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "White-water river rafting from Shivpuri and Marine Drive rapids (Grade 3+)",
      "Parmarth Niketan & Triveni Ghat sunset Ganga Aarti with devotional chants",
      "The Beatles Ashram (Chaurasi Kutia) with retro transcendental meditation murals",
      "Bungee jumping and giant swing at Mohan Chatti (India's highest 83m jump)"
    ],
    "nearby_markets": [
      "Tapovan & Lakshman Jhula Market for yoga mats, singing bowls & bohemian clothes",
      "Ram Jhula Marketplace for Ayurvedic oils, Rudraksha beads & Himalayan rock salt",
      "Rishikesh Main Market for brass puja bells and pure hill honey"
    ],
    "local_festivals": [
      "International Yoga Festival (Held annually in March at Parmarth Niketan)",
      "Ganga Dussehra (Sacred carnival celebrating the descent of River Ganga in June)"
    ],
    "transit_info": "Nearest Airport: Jolly Grant Airport, Dehradun (DED, 20 km). Railway: Yog Nagari Rishikesh (YNRK) / Haridwar Junction (HW, 25 km, with frequent Vande Bharat trains)."
  },
  {
    "id": "cherrapunji-bridges",
    "name": "Living Root Bridges",
    "district": "East Khasi Hills (Sohra)",
    "state": "Meghalaya",
    "category": "nature",
    "rating": 4.9,
    "description": "Centuries-old bio-engineering wonders hand-grown by indigenous Khasi and Jaintia tribes. Aerial roots of Ficus elastica (rubber fig) trees are guided across rushing jungle rivers through hollowed areca nut trunks, growing stronger with age to endure heavy tropical monsoons.",
    "short_description": "Centuries-old living bio-engineered bridges grown from tree roots across jungle streams.",
    "latitude": 25.2702,
    "longitude": 91.7323,
    "best_time": "October to April (Dry winter months ideal for hiking the 3,500 steps)",
    "entry_fee": 50,
    "is_featured": true,
    "famous_things": [
      "Nongriat Double Decker Living Root Bridge (Umshiang) in deep rainforest",
      "Rainbow Falls with natural crystal-clear turquoise natural swimming pool",
      "Nohkalikai Falls — India's tallest plunge waterfall (1,115 feet)",
      "Mawsmai Limestone Caves with prehistoric stalactites and fossils"
    ],
    "nearby_markets": [
      "Sohra (Cherrapunji) Market for organic Khasi orange blossom honey & cinnamon",
      "Iewduh (Bara Bazar) Shillong for hand-woven bamboo baskets & traditional Khasi knives",
      "Nongriat village homestay stalls for local wild berry jams"
    ],
    "local_festivals": [
      "Nongkrem Dance Festival (Traditional 5-day Khasi harvest festival in November)",
      "Shillong Autumn Festival (Music, food, and cultural carnival in October/November)"
    ],
    "transit_info": "Nearest Airport: Shillong Airport (SHL, 85 km) / Guwahati Airport (GAU, 160 km, 4.5 hrs scenic drive). Base village Tyrna is 20 km from Cherrapunji town."
  },
  {
    "id": "jaisalmer-fort",
    "name": "Jaisalmer Golden Fort & Thar Desert",
    "district": "Jaisalmer",
    "state": "Rajasthan",
    "category": "heritage",
    "rating": 4.9,
    "description": "A living golden sandstone citadel (Sonar Qila) rising majestically from the Thar Desert dunes. One-fourth of the city's population still resides within its ramparts among 12th-century Jain temples, intricately carved merchant havelis, and sunset desert camel safaris.",
    "short_description": "Living golden fort rising dramatically over the Thar Desert dunes.",
    "latitude": 26.9124,
    "longitude": 70.916,
    "best_time": "October to March (Pleasant desert days and cool star-lit nights)",
    "entry_fee": 50,
    "is_featured": true,
    "famous_things": [
      "Sonar Qila — living 12th-century fort made of golden-yellow sandstone",
      "Sam Sand Dunes sunset camel safari and desert tent camping under Milky Way",
      "Patwon Ki Haveli — a cluster of 5 opulent havelis with intricate stone jali screens",
      "7 ancient Jain Temples inside the fort carved with Dilwara-style marble finesse"
    ],
    "nearby_markets": [
      "Sadar Market for Rajasthani camel leather footwear, bags & puppet souvenirs",
      "Bhatia Market for hand-woven woollen carpets, mirror-work textiles & Bandhani",
      "Manak Chowk for antique brass artifacts, silver jewelry, and embroidered quilts"
    ],
    "local_festivals": [
      "Jaisalmer Desert Festival (3-day vibrant cultural fest in February at Sam Dunes)",
      "Ramdevra Fair (Major pilgrimage carnival in August/September)"
    ],
    "transit_info": "Nearest Airport: Jaisalmer Airport (JSA, seasonal) / Jodhpur Airport (JDH, 280 km, 4.5 hrs drive). Railway: Jaisalmer Railway Station (JSM) with direct trains from Delhi & Jaipur."
  },
  {
    "id": "kaziranga-park",
    "name": "Kaziranga National Park",
    "district": "Golaghat & Nagaon",
    "state": "Assam",
    "category": "wildlife",
    "rating": 4.9,
    "description": "UNESCO World Heritage wildlife sanctuary in the lush Brahmaputra floodplains, hosting over two-thirds of the world's population of great Indian one-horned rhinoceroses. Also sanctuary to wild water buffalo, royal Bengal tigers, Asiatic elephants, and swamp deer.",
    "short_description": "World-famous sanctuary of the Indian one-horned rhinoceros and Brahmaputra wetlands.",
    "latitude": 26.5775,
    "longitude": 93.1711,
    "best_time": "November to April (Park open Nov–April, wildlife spotting peak in Feb–April)",
    "entry_fee": 100,
    "is_featured": true,
    "famous_things": [
      "Dawn elephant safari & 4x4 open jeep safari in Central (Kohora) & Western (Bagori) ranges",
      "Spotting the 'Big Five': Rhino, Tiger, Elephant, Wild Water Buffalo, and Swamp Deer",
      "Kaziranga National Orchid and Biodiversity Park housing 500+ indigenous orchid species",
      "Brahmaputra river dolphin spotting boat safari near Silghat"
    ],
    "nearby_markets": [
      "Kohora Main Market for Assam tea varieties (CTC & Orthodox) & bamboo crafts",
      "Bokakhat Market for world-famous fresh Peda (sweet milk fudge) and cane furniture",
      "Kaziranga Handloom Emporium for authentic Assamese Muga & Eri silk Mekhela Chador"
    ],
    "local_festivals": [
      "Kaziranga Elephant Festival (Held annually in February promoting conservation)",
      "Bhogali Bihu (Assamese harvest festival with community bonfires in January)"
    ],
    "transit_info": "Nearest Airport: Jorhat Airport (JRH, 95 km) / Guwahati Airport (GAU, 220 km, 4.5 hrs via 4-lane NH-715). Railway: Furkating (FKG, 75 km) / Guwahati (GHY)."
  },
  {
    "id": "goa-coastal",
    "name": "Goa Coast & Chapora Fort",
    "district": "North & South Goa",
    "state": "Goa",
    "category": "beach",
    "rating": 4.8,
    "description": "Tropical coastal paradise of golden sandy palm-lined beaches, 17th-century Portuguese baroque churches, vibrant flea markets, seafood shacks, and historic hilltop fortresses like Chapora Fort overlooking the azure Arabian Sea.",
    "short_description": "Sun-kissed Arabian Sea beaches, colonial heritage churches, and coastal forts.",
    "latitude": 15.2993,
    "longitude": 74.124,
    "best_time": "November to February (Pleasant sunny days, festive nightlife, and beach shacks)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Panoramic sunset view over Vagator Beach from 1717 Chapora Fort ramparts",
      "Water sports at Calangute & Baga (Parasailing, jet skiing, and scuba diving at Grande Island)",
      "Basilica of Bom Jesus (UNESCO World Heritage church housing St. Francis Xavier tomb)",
      "Authentic Goan Fish Curry Thali, Prawn Balchão, and Bebinca layer cake"
    ],
    "nearby_markets": [
      "Anjuna Wednesday Flea Market for boho beachwear, spices & handicrafts",
      "Arpora Saturday Night Market for international food stalls, live music & designer wear",
      "Mapusa Friday Market for local Goan pork sausages (Choriz), cashews & Feni"
    ],
    "local_festivals": [
      "Goa Carnival (4-day colorful street float parade in February before Lent)",
      "Sunburn Festival & New Year celebrations across coastal beaches in December"
    ],
    "transit_info": "Nearest Airport: Manohar International Airport, Mopa (GOX) / Dabolim Airport (GOI). Railway: Madgaon Junction (MAO) & Thivim (THVM) connected by Vande Bharat from Mumbai."
  },
  {
    "id": "valley-of-flowers",
    "name": "Valley of Flowers National Park",
    "district": "Chamoli",
    "state": "Uttarakhand",
    "category": "nature",
    "rating": 4.9,
    "description": "UNESCO World Heritage high-altitude alpine valley nestled at 12,000 feet in the Garhwal Himalayas. Carpeted with over 500 species of endemic alpine wildflowers during monsoon, framed by snow-capped peaks, glaciers, and rushing crystal streams.",
    "short_description": "High-altitude alpine valley blossoming with hundreds of endemic mountain wildflowers.",
    "latitude": 30.728,
    "longitude": 79.6053,
    "best_time": "July to September (Peak blooming season with vibrant floral carpets)",
    "entry_fee": 150,
    "is_featured": true,
    "famous_things": [
      "Over 500 varieties of wild alpine flora including the rare Brahma Kamal and Blue Poppy",
      "Scenic 14 km Himalayan trek from base camp Govindghat via Ghangaria",
      "Hemkund Sahib (14,107 ft) — sacred high-altitude Sikh pilgrimage shrine and glacial lake",
      "Pristine Pushpawati River flowing through the heart of the blossom valley"
    ],
    "nearby_markets": [
      "Govindghat Market for trekking gear, woollens, and walking poles",
      "Joshimath Main Market for organic Garhwali kidney beans (Rajma) and hand-woven shawls",
      "Badrinath Temple Market for Ayurvedic mountain herbs and holy souvenirs"
    ],
    "local_festivals": [
      "Nanda Devi Raj Jat Yatra (Grand Himalayan pilgrimage celebration)",
      "Badrinath Kapat Opening (Holy temple opening festival in May)"
    ],
    "transit_info": "Nearest Airport: Jolly Grant Airport, Dehradun (DED, 290 km). Railway: Rishikesh / Haridwar, followed by scenic road drive along Alaknanda river to Govindghat (trek base)."
  },
  {
    "id": "jonha-falls",
    "name": "Jonha & Hundru Waterfalls",
    "district": "Ranchi",
    "state": "Jharkhand",
    "category": "waterfall",
    "rating": 4.7,
    "description": "Spectacular cascading waterfalls on the edge of the Ranchi Plateau. Hundru plummets 320 feet over massive granite cliffs on the Subarnarekha River, while Jonha (Gautamdhara) cascades down 722 stone steps with an ancient Buddhist shrine.",
    "short_description": "Spectacular cascade surrounded by dense green Sal forests of Chotanagpur.",
    "latitude": 23.3441,
    "longitude": 85.6074,
    "best_time": "September to February (Post-monsoon full water volume and pleasant forest weather)",
    "entry_fee": 10,
    "is_featured": true,
    "famous_things": [
      "Hundru Falls — 320-foot plunge forming magnificent natural pools amidst rock formations",
      "Jonha Falls (Gautamdhara) descending 722 stone steps through dense Sal canopy",
      "Gautam Buddha Ashram and temple perched beside the waterfall pool",
      "Scenic drive through the rolling Chotanagpur plateau and rural tribal villages"
    ],
    "nearby_markets": [
      "Jonha Local Haat for fresh forest honey, bamboo shoots & local seasonal fruits",
      "Ranchi Main Road Marketplace for tribal brass Dokra crafts and Tussar silk sarees",
      "Firayalal Chowk for Jharkhand sweet delicacies like Khaja and Tilkut"
    ],
    "local_festivals": [
      "Makar Sankranti Mela (Grand riverside fair held at Jonha falls in mid-January)",
      "Sarhul & Karma tribal celebrations in surrounding Sal forest villages"
    ],
    "transit_info": "Nearest Airport: Birsa Munda Airport, Ranchi (IXR, 40 km). Railway: Jonha Railway Station (5 km) / Ranchi Junction (RNC, 38 km). Easily accessible via Ranchi-Purulia Highway."
  },
  {
    "id": "betla-national-park",
    "name": "Betla National Park",
    "district": "Latehar",
    "state": "Jharkhand",
    "category": "wildlife",
    "rating": 4.7,
    "description": "One of India's earliest tiger sanctuaries under Project Tiger (1974) and the only national park in Jharkhand. Spanning dense Sal and bamboo forest canopy, it is home to wild Asian elephant herds, leopards, sloth bears, and 16th-century Chero Dynasty fort ruins.",
    "short_description": "Sanctuary known for wild elephant herds, tigers, and historic 16th-century Chero fort ruins.",
    "latitude": 23.8833,
    "longitude": 84.1833,
    "best_time": "November to April (Comfortable weather for morning and evening jungle safaris)",
    "entry_fee": 50,
    "is_featured": true,
    "famous_things": [
      "Open jeep safaris through dense Sal canopy with high wild elephant sighting rate",
      "Twin 16th-century Palamau Forts built by Chero King Medini Ray deep inside the jungle",
      "Natural waterholes (Madhuchua & Kamaldah Lake) where wildlife gather at dusk",
      "Watchtower viewing overlooking elephant herds and herds of spotted deer (Chital)"
    ],
    "nearby_markets": [
      "Betla Village Gate Market for local tribal wood carvings and forest honey",
      "Daltonganj (Medininagar) Market for local spices, tribal handlooms & bell metal crafts",
      "Latehar rural marketplace for organic Mahua blossom sweets"
    ],
    "local_festivals": [
      "Karam Festival (Celebrated with great joy across tribal settlements in September)",
      "Palamau Qila Cultural Fair (Winter heritage mela held near the ancient fort ruins)"
    ],
    "transit_info": "Nearest Airport: Ranchi Airport (IXR, 175 km, 4 hrs drive via NH-39). Railway: Daltonganj (DTO, 25 km) / Latehar (LTH, 40 km). Regular forest department safari jeeps at main gate."
  },
  {
    "id": "baidyanath-dham",
    "name": "Baidyanath Dham Temple",
    "district": "Deoghar",
    "state": "Jharkhand",
    "category": "temple",
    "rating": 4.9,
    "description": "One of the twelve revered Jyotirlinga shrines of Lord Shiva in India and a designated Shakti Peeth. The historic temple complex features 22 shrines with towering red-flagged stone spires. Center of the world-famous month-long Shravani Mela where millions of Kanwariyas walk 105 km barefoot.",
    "short_description": "Sacred Jyotirlinga pilgrimage temple attracting devotees across the subcontinent.",
    "latitude": 24.4925,
    "longitude": 86.7001,
    "best_time": "October to March (Pleasant weather; July–August for Shravani Mela)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Baba Baidyanath Jyotirlinga sanctum with gold-plated Chandra Kanta crown",
      "Shravani Mela — world's longest unorganized pilgrimage with saffron-clad Kanwariyas",
      "Naulakha Temple (146-ft temple modeled on Belur Ramakrishna Math)",
      "Trikut Parvat ropeway (Scenic cable car ride overlooking three forested mountain peaks)"
    ],
    "nearby_markets": [
      "Tower Chowk Deoghar for world-famous Deoghar Peda (sweet milk fudge cooked in iron kadhais)",
      "Baidyanath Mandir Gali for sacred brass tridents, rudraksha malas & vermilion",
      "Jasidih Market for local handloom towels and brass pooja vessels"
    ],
    "local_festivals": [
      "Shravani Mela (Month-long Kanwar pilgrimage in July/August with millions of pilgrims)",
      "Maha Shivratri (Grand all-night temple aarti and flower decoration in Feb/March)"
    ],
    "transit_info": "Nearest Airport: Deoghar International Airport (DGH, 6 km with direct flights from Delhi, Kolkata & Bengaluru). Railway: Jasidih Junction (JSME, 8 km on Delhi-Howrah main line)."
  },
  {
    "id": "netarhat-hills",
    "name": "Netarhat – Queen of Chotanagpur",
    "district": "Latehar",
    "state": "Jharkhand",
    "category": "hill",
    "rating": 4.8,
    "description": "A serene, unspoiled hill station perched at an elevation of 3,700 feet amidst the dense forests of the Pat region. Celebrated for dramatic sunrises and sunsets at Magnolia Point, fragrant pine and eucalyptus forests, cool mountain climate, and Upper Ghaghri waterfalls.",
    "short_description": "Serene hill station famed for misty sunsets at Magnolia Point and dense pine forests.",
    "latitude": 23.4833,
    "longitude": 84.2667,
    "best_time": "October to April (Crisp mountain air, misty sunrises, and blooming pear orchards)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Magnolia Point — legendary sunset viewpoint over deep forested valleys",
      "Sunrise viewpoint near Netarhat Residential School over morning clouds",
      "Pine Forest & Netarhat Dam surrounded by eucalyptus plantations",
      "Upper & Lower Ghaghri Waterfalls cascading through dense jungle gorges"
    ],
    "nearby_markets": [
      "Netarhat Main Chowk for fresh hill pears, organic wild honey & forest mushrooms",
      "Lodh Market for tribal handicraft bamboo mats and hand-carved walking sticks",
      "Mahuadanr Marketplace for fresh organic farm vegetables and hill spices"
    ],
    "local_festivals": [
      "Sarhul & Karma spring/harvest celebrations in Asur tribal forest villages",
      "Netarhat Winter Carnival (Tourist cultural fest held in December)"
    ],
    "transit_info": "Nearest Airport: Birsa Munda Airport, Ranchi (IXR, 155 km, 3.5 hrs scenic drive through winding ghat roads). Railway: Latehar (LTH, 90 km) / Ranchi (RNC, 155 km)."
  },
  {
    "id": "ranchi-lake",
    "name": "Ranchi Lake & Tagore Hill",
    "district": "Ranchi",
    "state": "Jharkhand",
    "category": "nature",
    "rating": 4.6,
    "description": "Historic urban landmark dug in 1842 by British Colonel Ouseley at the base of Ranchi Hill. Overlooked by the tranquil 300-foot Tagore Hill (Morabadi), where Nobel Laureate Rabindranath Tagore's elder brother Jyotirindranath Tagore built his literary retreat 'Shanti Dham'.",
    "short_description": "Scenic lake and historic hilltop viewpoint with panoramic city vistas.",
    "latitude": 23.3644,
    "longitude": 85.3216,
    "best_time": "October to March (Pleasant breeze for evening boating and hill sunset walks)",
    "entry_fee": 0,
    "is_featured": true,
    "famous_things": [
      "Tagore Hill 'Shanti Dham' heritage pavilion with 360-degree panoramic city views",
      "Pahari Mandir perched atop 468 steps of Ranchi Hill dedicated to Lord Shiva",
      "Paddle boating and evening illuminated musical fountain in Ranchi Lake",
      "Ramakrishna Mission Ashram & Brahma Temple situated at the foot of Tagore Hill"
    ],
    "nearby_markets": [
      "Morabadi Ground Night Market for mouth-watering street food and tribal handicrafts",
      "Upper Bazar Ranchi for wholesale dry fruits, fabrics, and traditional brassware",
      "Main Road Ranchi for modern shopping malls and iconic sweet shops"
    ],
    "local_festivals": [
      "Maha Shivratri (Thousands climb 468 steps of Pahari Mandir with tridents and flowers)",
      "Rabindra Jayanti (Celebrated with classical music at Tagore Hill pavilion in May)"
    ],
    "transit_info": "Nearest Airport: Birsa Munda Airport Ranchi (IXR, 8 km). Railway: Ranchi Junction (RNC, 4 km). Located centrally in the city, easily reachable by e-rickshaws and auto-rickshaws."
  }
];
