import { ALL_1111_DESTINATIONS } from './destinations1111';

export interface AiDestination {
  id: string;
  name: string;
  emoji: string;
  tag: string;
  desc: string;
  location: string;
  category?: string;
  state?: string;
  best_time?: string;
  entry_fee?: number;
  rating?: number;
  famous_things?: string[];
  nearby_markets?: string[];
  local_festivals?: string[];
  transit_info?: string;
  image?: string;
}

export const AI_DESTINATIONS: AiDestination[] = ALL_1111_DESTINATIONS;
export const DESTINATIONS = ALL_1111_DESTINATIONS;

export const SYSTEM_PROMPT = "You are WanderAI, an expert AI travel planner and local cultural guide for India.\nYou specialize in Indian destinations, heritage circuits, local marketplaces, seasonal festivals, food culture, train routes, safety tips, and customized day-by-day itineraries.\nRespond warmly, concisely, and accurately in markdown with emoji headings and bullet points.";

export const QUICK_PROMPTS = [
  "Plan a 3-day Sahyadri Forts & Trekking circuit (Raigad, Rajgad, Sinhagad) from Pune",
  "Top 2-day Mumbai heritage & food walking tour (Colaba, Marine Drive, Fort & Crawford Market)",
  "Suggest a 4-day Konkan Coastal road trip with sea forts (Murud Janjira, Sindhudurg) & Malvani cuisine",
  "Complete guide to Ajanta & Ellora Caves, Kailasa Temple & Lonar Meteor Crater from Aurangabad",
  "Design a weekend getaway to Mahabaleshwar, Panchgani & Kaas Plateau Valley of Flowers",
  "How to experience Ganesh Chaturthi in Pune & Mumbai with top pandals and Dhol Tasha guide?",
  "Plan a 3-day Golden Triangle (Delhi, Agra, Jaipur) express heritage tour",
  "What is the best 4-day itinerary for Kerala backwaters, tea gardens & Alleppey houseboat?",
  "Suggest a 3-day spiritual immersion and boat trip for Varanasi Ghats & Sarnath",
  "How to prepare for a high-altitude adventure in Leh-Ladakh & Pangong Tso with acclimatization?"
];
