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
  "Plan a 3-day heritage trip to Jaipur including Amer Fort and Johari Market",
  "What is the best time to visit Munnar Tea Gardens and Alleppey Houseboats?",
  "Suggest a 4-day spiritual and boat itinerary for Varanasi Ghats and Sarnath",
  "How to prepare for a high-altitude trip to Leh Ladakh and Pangong Tso?",
  "Recommend the top tribal harvest festivals in Jharkhand and authentic foods to try",
  "Design a relaxing 5-day coastal itinerary for South Goa with secluded beaches",
  "What are the must-buy items and bargaining tips at Dilli Haat and Janpath?"
];
