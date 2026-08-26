
import { useState, useEffect, useMemo } from 'react';
import {
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  Sparkles,

  Zap,
  Bot,
  Send,
  Dice5,
  Search,
  CheckCircle2,
  BookmarkCheck,
  MessageSquare,
  Route,
  ShieldCheck,
  Leaf,
  Utensils,
  Train,
  Compass,
  Crown,
  Mountain,
  Flame,
  ChefHat,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mockDestinations, mockEvents } from '../utils/mockData';
import { Destination, Event as AppEvent } from '../types';
import { QUICK_PROMPTS } from '../utils/aiData';
import { DetailModal, DetailModalType } from '../components/DetailModal';
import { getDbDestinations, getDbEvents } from '../services/supabaseService';


// Feature cards with Lucide icons (replaces corrupted emoji strings)
const FEATURES = [
  { icon: MessageSquare, color: 'text-blue-500', title: 'Multilingual Chat', desc: 'Get travel advice in 10+ Indian languages including Hindi, Marathi, Bengali, and Tamil.' },
  { icon: Route, color: 'text-forest-600', title: 'Smart Planner', desc: 'Generate custom day-by-day itineraries based on your interests, pace, and budget.' },
  { icon: Zap, color: 'text-amber-500', title: 'Culture & Marketplaces', desc: 'Discover historic artisan craft haats, handloom markets, and living tribal harvest festivals.' },
  { icon: ShieldCheck, color: 'text-emerald-600', title: 'Safety Guide', desc: 'Real-time updates on weather, safety protocols, and 24x7 tourist emergency contacts.' },
  { icon: Leaf, color: 'text-green-600', title: 'Eco-Tourism', desc: 'Discover sustainable travel options that support local communities and pristine nature.' },
  { icon: Utensils, color: 'text-orange-500', title: 'Food Finder', desc: 'Find the most authentic local eateries and hidden culinary specialties in any city.' },
  { icon: Train, color: 'text-sky-500', title: 'Transit & Route Guide', desc: 'Smart transport advice for Indian Railways trains, cabs, scenic road trips, and bus routes.' },
  { icon: Compass, color: 'text-purple-500', title: 'Destination Explorer', desc: 'Browse 150+ handpicked Indian heritage and nature spots with instant Google Maps links.' },
];
// Interactive Preview Itinerary Models for the Live Playground
interface PlaygroundCircuit {
  id: string;
  name: string;
  region: string;
  days: number;
  vibe: 'heritage' | 'nature' | 'spiritual' | 'adventure';
  highlights: string[];
  estimatedBudget: string;
  prompt: string;
}

const PLAYGROUND_CIRCUITS: PlaygroundCircuit[] = [
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwaters & Tea Hills',
    region: 'South India',
    days: 4,
    vibe: 'nature',
    highlights: ['Alleppey Houseboat Cruise', 'Munnar Organic Tea Estates', 'Kathakali Cultural Night', 'Varkala Cliff Sunset'],
    estimatedBudget: '₹14,000 - ₹22,000 / person',
    prompt: 'Plan a detailed 4-day nature and relaxation trip to Kerala including Alleppey houseboat and Munnar tea hills with local seafood suggestions.'
  },
  {
    id: 'rajasthan-royal',
    name: 'Golden Triangle & Royal Palaces',
    region: 'North India',
    days: 5,
    vibe: 'heritage',
    highlights: ['Sunrise at Taj Mahal Agra', 'Amer Fort & Hawa Mahal Jaipur', 'Chokhi Dhani Heritage Village', 'Johari Gems & Jewelry'],
    estimatedBudget: '₹18,000 - ₹28,000 / person',
    prompt: 'Create a 5-day heritage trip covering Delhi, Agra (Taj Mahal), and Jaipur with exact visiting hours, entry tips, and traditional Rajasthani food.'
  },
  {
    id: 'varanasi-spiritual',
    name: 'Varanasi Spiritual Ghats & Sarnath',
    region: 'Central India',
    days: 3,
    vibe: 'spiritual',
    highlights: ['Dashashwamedh Ghat Evening Ganga Aarti', 'Subah-e-Banaras Sunrise Boat Ride', 'Kashi Vishwanath Corridor', 'Ancient Deer Park Sarnath'],
    estimatedBudget: '₹7,500 - ₹12,000 / person',
    prompt: 'Draft a 3-day spiritual immersion itinerary for Varanasi with boat timings, Ganga Aarti viewing tips, temple dress codes, and famous Banarasi street food.'
  },
  {
    id: 'ladakh-circuit',
    name: 'Leh-Ladakh High Altitude Passes',
    region: 'Himalayas',
    days: 6,
    vibe: 'adventure',
    highlights: ['Khardung La Pass (5,359m)', 'Cobalt-Blue Pangong Tso Lake', 'Nubra Valley Sand Dunes & Bactrian Camels', 'Thiksey Monastery Chants'],
    estimatedBudget: '₹26,000 - ₹38,000 / person',
    prompt: 'Design a 6-day adventure circuit in Leh-Ladakh with proper 48-hour acclimatization plan, Pangong Tso homestays, and Inner Line Permit guidance.'
  },
  {
    id: 'jharkhand-eco',
    name: 'Jharkhand Waterfalls & Sal Forests',
    region: 'East India',
    days: 3,
    vibe: 'nature',
    highlights: ['Hundru & Jonha Cascades', 'Netarhat Queen of Chotanagpur Sunsets', 'Betla National Park Safari', 'Tribal Handloom & Dhuska Cuisine'],
    estimatedBudget: '₹6,000 - ₹10,500 / person',
    prompt: 'Give me a 3-day eco-tourism plan for Ranchi, Netarhat, and Hundru Falls in Jharkhand with tribal cuisine recommendations and scenic routes.'
  }
];

const RANDOM_PROMPTS = [
  "Plan a 3-day weekend food and heritage trip to Jaipur under ₹10,000",
  "Recommend offbeat tranquil hill stations in Himachal Pradesh for solo travelers",
  "What is the best 5-day circuit for temples and beaches in Tamil Nadu?",
  "How to travel by Vande Bharat train from Delhi to Varanasi with day-by-day plan?",
  "Suggest budget-friendly homestays and trekking trails in Meghalaya",
  "Plan a family vacation in Goa covering spice plantations and heritage churches"
];

const Home = () => {
  const navigate = useNavigate();

  // Floating Detail Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<Destination | AppEvent | null>(null);
  const [modalType, setModalType] = useState<DetailModalType>('destination');

  const handleOpenModal = (item: Destination | AppEvent, type: DetailModalType) => {
    setModalItem(item);
    setModalType(type);
    setIsModalOpen(true);
  };

  // Hero interactive state
  const [heroTab, setHeroTab] = useState<'chat' | 'plan' | 'vibe'>('chat');
  const [heroPrompt, setHeroPrompt] = useState('');

  // Interactive Playground state
  const [selectedCircuit, setSelectedCircuit] = useState<PlaygroundCircuit>(PLAYGROUND_CIRCUITS[0]);
  const [activeVibeFilter, setActiveVibeFilter] = useState<'all' | 'heritage' | 'nature' | 'spiritual' | 'adventure'>('all');

  // Interactive Persona Quiz state
  const [quizVibe, setQuizVibe] = useState<'relax' | 'adventure' | 'heritage' | 'food'>('heritage');
  const [quizPace, setQuizPace] = useState<'weekend' | 'week' | 'grand'>('week');

  // Destinations & Events from Supabase / Mock
  const [featuredDestinations, setFeaturedDestinations] = useState<Destination[]>(
    mockDestinations.filter(d => d.is_featured).slice(0, 9)
  );
  const [destinationSearch, setDestinationSearch] = useState('');
  const [destCategoryFilter, setDestCategoryFilter] = useState('All');
  const [upcomingEvents, setUpcomingEvents] = useState<AppEvent[]>(mockEvents.slice(0, 3));

  useEffect(() => {
    // Load from Supabase
    getDbDestinations().then((dests) => {
      if (dests && dests.length > 0) {
        const formatted: Destination[] = dests.map((d, index) => {
          const localMatch = mockDestinations.find(loc => loc.id === d.id || loc.name.toLowerCase() === d.name.toLowerCase());
          return {
            id: d.id || `dest-${index}`,
            name: d.name,
            district: d.location ? d.location.split(',')[0].trim() : 'India',
            state: d.state || localMatch?.state || 'India',
            category: (d.tag?.toLowerCase() || localMatch?.category || 'historical') as Destination['category'],
            short_description: d.desc || localMatch?.short_description || '',
            description: d.desc || localMatch?.description || '',
            entry_fee: d.entry_fee ?? localMatch?.entry_fee ?? 0,
            rating: d.rating ?? localMatch?.rating ?? 4.8,
            best_time: d.best_time || localMatch?.best_time,
            famous_things: d.famous_things || localMatch?.famous_things,
            nearby_markets: d.nearby_markets || localMatch?.nearby_markets,
            local_festivals: d.local_festivals || localMatch?.local_festivals,
            transit_info: d.transit_info || localMatch?.transit_info,
            is_featured: true,
            created_at: new Date().toISOString()
          };
        });
        setFeaturedDestinations(formatted);
      }
    });

    getDbEvents().then((evts) => {
      if (evts && evts.length > 0) {
        setUpcomingEvents(evts.slice(0, 3));
      }
    });
  }, []);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroPrompt.trim()) {
      navigate(`/itinerary?tab=chat&prompt=${encodeURIComponent(heroPrompt.trim())}`);
    } else {
      navigate('/itinerary?tab=chat');
    }
  };

  const handleRandomizePrompt = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_PROMPTS.length);
    setHeroPrompt(RANDOM_PROMPTS[randomIndex]);
  };

  const handleGenerateQuizPlan = () => {
    const vibeMap = {
      relax: 'relaxing nature trails, backwaters, and Ayurvedic wellness',
      adventure: 'high altitude mountain passes, river rafting, and forest treks',
      heritage: 'UNESCO heritage forts, royal palaces, and sacred architectural temples',
      food: 'authentic regional spice walks, street food trails, and culinary classes'
    };
    const daysMap = {
      weekend: '3-day weekend',
      week: '5-day balanced',
      grand: '8-day immersive'
    };
    const prompt = `Plan a ${daysMap[quizPace]} itinerary in India focused on ${vibeMap[quizVibe]} with day-by-day breakdown, transportation, and local guidelines.`;
    navigate(`/itinerary?tab=plan&prompt=${encodeURIComponent(prompt)}`);
  };

  // Filtered Circuits in Playground
  const filteredCircuits = useMemo(() => {
    if (activeVibeFilter === 'all') return PLAYGROUND_CIRCUITS;
    return PLAYGROUND_CIRCUITS.filter(c => c.vibe === activeVibeFilter);
  }, [activeVibeFilter]);

  // Filtered Featured Destinations
  const filteredDestinationsList = useMemo(() => {
    return featuredDestinations.filter(d => {
      const matchesCategory = destCategoryFilter === 'All' || d.category.toLowerCase() === destCategoryFilter.toLowerCase();
      const matchesSearch = !destinationSearch.trim() ||
        d.name.toLowerCase().includes(destinationSearch.toLowerCase()) ||
        d.district.toLowerCase().includes(destinationSearch.toLowerCase()) ||
        d.short_description.toLowerCase().includes(destinationSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [featuredDestinations, destCategoryFilter, destinationSearch]);

  const getFeatureTarget = (title: string) => {
    switch (title) {
      case "Multilingual Chat":
        return "/itinerary?tab=chat&prompt=Namaste!%20Can%20you%20guide%20me%20in%20Hindi%20and%20English%3F";
      case "Smart Planner":
        return "/itinerary?tab=plan";
      case "Culture & Marketplaces":
        return "/events";
      case "Safety Guide":
        return "/itinerary?tab=chat&prompt=What%20are%20the%20essential%20safety%2C%20health%2C%20and%20emergency%20guidelines%20for%20traveling%20in%20India%3F";
      case "Eco-Tourism":
        return "/itinerary?tab=destinations&tag=Nature";
      case "Food Finder":
        return "/itinerary?tab=chat&prompt=Recommend%20the%20most%20authentic%20regional%20food%20dishes%20and%20hidden%20culinary%20gems%20in%20India";
      case "Transit & Route Guide":
        return "/itinerary?tab=chat&prompt=How%20do%20I%20navigate%20Indian%20Railways%20trains%20and%20scenic%20road%20routes%3F";
      case "Destination Explorer":
        return "/itinerary?tab=destinations";
      default:
        return "/itinerary";
    }
  };

  return (
    <div className="w-full min-h-screen bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH INTERACTIVE AI HUB */}
      {/* ========================================================================= */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900 to-forest-800 text-white pt-6 pb-12 sm:pt-8 sm:pb-16">

        {/* Ambient background glowing circles */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-saffron-500/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Headlines & Value Prop */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-saffron-300 text-xs font-bold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-saffron-400 animate-ping"></span>
                <span>AI-Powered Indian Tourism Platform</span>
                <span className="px-2 py-0.5 rounded-full bg-saffron-500 text-forest-950 text-[10px] font-extrabold uppercase ml-1">
                  v2.0
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.12] text-white">
                Discover the Soul of <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 via-amber-300 to-orange-400">
                  Incredible India
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-emerald-100/90 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                From high-altitude Himalayan mountain passes and sacred ghats in Varanasi to tranquil backwaters in Kerala and vibrant local marketplaces"”explore India with customized, intelligent AI travel planning.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/itinerary?tab=chat"
                  className="px-7 py-3.5 rounded-2xl bg-saffron-500 hover:bg-saffron-600 text-forest-950 font-extrabold text-sm sm:text-base transition-all shadow-lg hover:shadow-saffron-500/30 transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-forest-950 fill-forest-950" />
                  <span>Start AI Trip Planner</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/events"
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-saffron-300" />
                  <span>Festival Calendar</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-3 text-xs text-emerald-200/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                  100% Free & No Sign-up Needed
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                  Direct Google Maps Navigation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-saffron-400" />
                  Authentic Regional Food Tips
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Live AI Hub Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/10 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 p-5 sm:p-6 shadow-2xl space-y-4">

                {/* Hub Header & Tabs */}
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-saffron-500 to-amber-400 text-forest-950 flex items-center justify-center font-bold shadow-md">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                        Ask WanderAI
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      </h3>
                      <p className="text-[11px] text-emerald-200/80">Instant answers for your journey</p>
                    </div>
                  </div>

                  {/* Mode Pills */}
                  <div className="flex bg-white/10 p-0.5 rounded-xl border border-white/15">
                    <button
                      onClick={() => setHeroTab('chat')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${heroTab === 'chat' ? 'bg-saffron-500 text-forest-950 shadow-sm' : 'text-gray-300 hover:text-white'}`}
                    >
                      Chat
                    </button>
                    <button
                      onClick={() => setHeroTab('plan')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${heroTab === 'plan' ? 'bg-saffron-500 text-forest-950 shadow-sm' : 'text-gray-300 hover:text-white'}`}
                    >
                      Plan
                    </button>
                    <button
                      onClick={() => setHeroTab('vibe')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${heroTab === 'vibe' ? 'bg-saffron-500 text-forest-950 shadow-sm' : 'text-gray-300 hover:text-white'}`}
                    >
                      Vibe
                    </button>
                  </div>
                </div>

                {/* Question Input Form */}
                <form onSubmit={handleHeroSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={heroPrompt}
                      onChange={(e) => setHeroPrompt(e.target.value)}
                      placeholder={
                        heroTab === 'chat'
                          ? "e.g. Best offbeat places near Varanasi for a day trip?"
                          : heroTab === 'plan'
                            ? "e.g. Plan a 4-day budget trip in Kerala..."
                            : "e.g. Where should I travel in October for lush waterfalls?"
                      }
                      className="w-full pl-4 pr-24 py-3 rounded-2xl bg-white/90 dark:bg-gray-800/90 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-400 shadow-inner font-medium"
                    />
                    <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handleRandomizePrompt}
                        title="Surprise me with a travel query"
                        className="p-2 rounded-xl text-gray-500 hover:text-forest-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        <Dice5 className="w-4 h-4" />
                      </button>
                      <button
                        type="submit"
                        className="p-2 rounded-xl bg-forest-700 hover:bg-forest-800 text-white transition shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </form>

                {/* Suggested Quick Prompt Chips */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold uppercase tracking-wider text-saffron-300">
                      Popular Recommendations:
                    </span>
                    <button
                      onClick={handleRandomizePrompt}
                      className="text-emerald-300 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Dice5 className="w-3 h-3" /> Randomize
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
                    {QUICK_PROMPTS.slice(0, 5).map((p: string) => (
                      <Link
                        key={p}
                        to={`/itinerary?tab=chat&prompt=${encodeURIComponent(p)}`}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white border border-white/15 transition-all flex items-center gap-1 hover:scale-102"
                      >
                        <span className="truncate max-w-[220px]">{p}</span>
                        <ArrowRight className="w-3 h-3 text-saffron-300 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Direct Launch Helper */}
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-emerald-200">
                  <span>Custom day-by-day budgets & maps</span>
                  <Link
                    to="/itinerary?tab=plan"
                    className="font-bold text-saffron-300 hover:underline flex items-center gap-1"
                  >
                    Open Smart Planner <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Transition gradient to body */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-sand-50 dark:from-obsidian-950 pointer-events-none" />
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE INSTANT TRIP PLAYGROUND (New Feature) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-forest-900 via-forest-800 to-obsidian-900 text-white p-5 sm:p-7 lg:p-8 shadow-2xl relative overflow-hidden border border-forest-700/60">

          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left info & interactive selector */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-saffron-500/20 text-saffron-300 border border-saffron-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                Interactive Circuit Preview
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display leading-tight">
                Preview Top Curated Circuits Across India
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Click any popular circuit to inspect main stops, estimated budgets, and launch instant customized AI itineraries with 1 click.
              </p>

              {/* Vibe filter pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { id: 'all', label: 'All Circuits' },
                  { id: 'nature', label: '🌿 Nature' },
                  { id: 'heritage', label: '🏰 Heritage' },
                  { id: 'spiritual', label: '🕉️ Spiritual' },
                  { id: 'adventure', label: '⛰️ Adventure' }
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveVibeFilter(v.id as typeof activeVibeFilter)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${activeVibeFilter === v.id
                      ? 'bg-saffron-500 text-forest-950 shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-gray-200 border border-white/15'
                      }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>

              {/* Circuit Cards List */}
              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {filteredCircuits.map((circuit) => {
                  const isSelected = selectedCircuit.id === circuit.id;
                  return (
                    <button
                      key={circuit.id}
                      onClick={() => setSelectedCircuit(circuit)}
                      className={`w-full p-3.5 rounded-2xl text-left transition-all flex items-center justify-between border ${isSelected
                        ? 'bg-white/20 border-saffron-400 shadow-md transform scale-[1.01]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${isSelected ? 'bg-saffron-400 text-forest-950' : 'bg-white/10 text-white'
                          }`}>
                          {circuit.days}D
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white">{circuit.name}</div>
                          <div className="text-xs text-gray-400">{circuit.region} "¢ {circuit.vibe.toUpperCase()}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-bold ${isSelected ? 'text-saffron-300' : 'text-gray-400'}`}>
                        {isSelected ? 'Active Preview' : 'Select'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Live Teaser Display */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 shadow-2xl border border-white/20 dark:border-gray-800 space-y-6">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-forest-100 dark:bg-forest-950 text-forest-700 dark:text-forest-300 text-xs font-bold uppercase tracking-wider">
                      {selectedCircuit.region}
                    </span>
                    <h3 className="text-2xl font-extrabold font-display text-gray-900 dark:text-white mt-1">
                      {selectedCircuit.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Duration</span>
                    <div className="text-xl font-extrabold text-saffron-600 dark:text-saffron-400">
                      {selectedCircuit.days} Days / {selectedCircuit.days - 1} Nights
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Highlights Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedCircuit.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60 text-xs font-semibold text-gray-800 dark:text-gray-200">
                        <BookmarkCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget estimate & CTA */}
                <div className="p-4 rounded-2xl bg-sand-100 dark:bg-obsidian-950 border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 uppercase font-bold">Estimated Cost</span>
                    <div className="text-sm font-bold text-forest-800 dark:text-forest-300">
                      {selectedCircuit.estimatedBudget}
                    </div>
                  </div>

                  <Link
                    to={`/itinerary?tab=plan&prompt=${encodeURIComponent(selectedCircuit.prompt)}`}
                    className="px-5 py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md transition transform hover:scale-105"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
                    <span>Generate Full Plan in AI</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PLATFORM CAPABILITIES GRID */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white/70 dark:bg-obsidian-900/60 border-y border-gray-200/60 dark:border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-100 dark:bg-forest-900/40 text-forest-700 dark:text-forest-300 border border-forest-200 dark:border-forest-800 mb-3">
              <Zap className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
              Smart Travel Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 dark:text-white">
              Engineered for Seamless Exploration
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
              Cutting-edge travel capabilities built to help you discover authentic local heritage, optimal transit routes, sacred traditions, and hidden regional gems across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {FEATURES.map((feature) => {
              return (
                <Link
                  key={feature.title}
                  to={getFeatureTarget(feature.title)}
                  className="group relative flex flex-col p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 hover:border-forest-500/60 dark:hover:border-forest-500/60 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <div className="w-13 h-13 rounded-2xl bg-forest-50 dark:bg-forest-950/60 border border-forest-100 dark:border-forest-900/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {(() => { const Icon = feature.icon; return <Icon className={`w-6 h-6 ${feature.color}`} />; })()}
                  </div>
                  <h3 className="text-base font-bold font-display text-gray-900 dark:text-white mb-2 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    {feature.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold text-forest-600 dark:text-forest-400 group-hover:text-forest-700 dark:group-hover:text-forest-300">
                    <span>Explore Feature</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE FEATURED DESTINATIONS EXPLORER */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
              Iconic & Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white mt-1">
              Explore Unseen India
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Explore iconic architectural marvels, sacred ghats, misty hill stations, and untouched wilderness.
            </p>
          </div>

          <Link
            to="/itinerary?tab=destinations"
            className="inline-flex items-center text-sm font-bold text-forest-700 dark:text-forest-400 hover:text-forest-800 dark:hover:text-forest-300 group"
          >
            <span>Explore All</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Destinations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredDestinations.slice(0, 9).map((destination) => (
            <div
              key={destination.id}
              onClick={() => handleOpenModal(destination, 'destination')}
              className="group cursor-pointer flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 hover:border-forest-500/50 dark:hover:border-forest-500/50 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-5 sm:p-6"
            >
              <div className="space-y-3.5">
                {/* Header Tag & Rating */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-forest-50 dark:bg-forest-950/60 border border-forest-200 dark:border-forest-800/80 text-forest-800 dark:text-forest-300 text-[11px] font-bold uppercase tracking-wider">
                    {destination.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-900/60">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{destination.rating || 4.8}</span>
                  </div>
                </div>

                {/* Title & Location */}
                <div>
                  <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-saffron-500 shrink-0" />
                    <span>{destination.district}, {destination.state || 'India'}</span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {destination.short_description || destination.description}
                </p>

                {/* Quick Info Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {destination.best_time && (
                    <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[11px] font-semibold text-gray-600 dark:text-gray-300">
                      📅 {destination.best_time.split('(')[0].trim()}
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[11px] font-semibold text-gray-600 dark:text-gray-300">
                    🎟️ {destination.entry_fee ? `₹${destination.entry_fee}` : 'Free Entry'}
                  </span>
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-4 mt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-forest-700 dark:text-forest-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>View Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <span className="px-3 py-1.5 rounded-xl bg-forest-700 text-white text-xs font-bold shadow-xs">
                  Guide
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INTERACTIVE TRAVEL PERSONA & VIBE QUIZ */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 bg-sand-100 dark:bg-obsidian-900 border-y border-gray-200/80 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-saffron-100 dark:bg-saffron-950/60 text-saffron-800 dark:text-saffron-300 border border-saffron-300 dark:border-saffron-800">
            <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
            Interactive Matchmaker
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 dark:text-white">
            Find Your Ideal Indian Vacation Vibe
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose your preferred travel rhythm and vacation duration below to let WanderAI construct your tailored Indian route.
          </p>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-4 sm:p-6 border border-gray-200/80 dark:border-gray-800 shadow-xl space-y-6 text-left">

            {/* Step 1: Vibe */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-3">
                1. Select Your Preferred Travel Vibe
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "heritage", VibeIcon: Crown, title: "Royal Heritage", desc: "Forts, Palaces & Lore", color: "text-amber-500" },
                  { id: "nature", VibeIcon: Mountain, title: "Nature & Mist", desc: "Backwaters, Hills & Falls", color: "text-emerald-500" },
                  { id: "adventure", VibeIcon: Flame, title: "High Adventure", desc: "Passes, Rafting & Treks", color: "text-orange-500" },
                  { id: "food", VibeIcon: ChefHat, title: "Culinary Trails", desc: "Local Markets, Spices & Cuisines", color: "text-rose-500" }
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setQuizVibe(v.id as typeof quizVibe)}
                    className={`p-4 rounded-2xl border text-left transition-all ${quizVibe === v.id
                      ? 'bg-forest-50 dark:bg-forest-950/60 border-forest-600 dark:border-forest-500 shadow-md transform scale-[1.02]'
                      : 'bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    <div className="text-2xl mb-1.5">{(() => { const VI = v.VibeIcon; return <VI className={`w-7 h-7 mb-1.5 ${v.color}`} />; })()}</div>
                    <div className="font-bold text-xs text-gray-900 dark:text-white">{v.title}</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pace */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-3">
                2. Select Trip Duration
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'weekend', title: 'Weekend Escape', days: '2 - 3 Days' },
                  { id: 'week', title: 'Standard Week', days: '5 - 6 Days' },
                  { id: 'grand', title: 'Grand Journey', days: '8+ Days' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setQuizPace(p.id as typeof quizPace)}
                    className={`p-3.5 rounded-2xl border text-center transition-all ${quizPace === p.id
                      ? 'bg-saffron-50 dark:bg-saffron-950/60 border-saffron-500 text-saffron-900 dark:text-saffron-200 shadow-md font-bold'
                      : 'bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100'
                      }`}
                  >
                    <div className="text-xs font-bold">{p.title}</div>
                    <div className="text-[11px] opacity-75">{p.days}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Launch Button */}
            <div className="pt-2 text-center">
              <button
                onClick={handleGenerateQuizPlan}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-forest-800 via-forest-700 to-saffron-600 hover:from-forest-900 hover:to-saffron-700 text-white font-extrabold text-sm sm:text-base shadow-xl transition transform hover:scale-[1.02] flex items-center justify-center gap-2 mx-auto"
              >
                <Sparkles className="w-4 h-4 text-saffron-300" />
                <span>Generate My Customized Route Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. UPCOMING CULTURAL FESTIVALS SECTION */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 bg-forest-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-saffron-500/20 text-saffron-300 border border-saffron-500/30 mb-3">
              <Calendar className="w-3.5 h-3.5" />
              Living Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Upcoming Cultural Events & Fairs
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              Immerse yourself in authentic tribal dances, ancient harvest rituals, and spiritual celebrations across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => handleOpenModal(event, 'event')}
                className="group cursor-pointer flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 hover:border-saffron-500/50 dark:hover:border-saffron-500/50 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-5 sm:p-6"
              >
                <div className="space-y-3.5">
                  {/* Category Pill & Dates */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-saffron-50 dark:bg-saffron-950/60 border border-saffron-200 dark:border-saffron-800/80 text-saffron-800 dark:text-saffron-300 text-[11px] font-bold uppercase tracking-wider">
                      {event.category}
                    </span>
                    <div className="flex items-center text-xs font-bold text-forest-700 dark:text-forest-400 bg-forest-50 dark:bg-forest-950/40 px-2.5 py-1 rounded-full border border-forest-200 dark:border-forest-800/60">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      <span>{event.date_start ? new Date(event.date_start).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }) : 'Upcoming'}</span>
                    </div>
                  </div>

                  {/* Title & Location */}
                  <div>
                    <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors">
                      {event.name}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-saffron-500 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  {/* Ritual preview if present */}
                  {event.famous_for && event.famous_for.length > 0 && (
                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700/60 text-[11px] font-medium text-gray-700 dark:text-gray-300 truncate">
                      🌟 {event.famous_for[0]}
                    </div>
                  )}
                </div>

                {/* Bottom Action */}
                <div className="pt-4 mt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-saffron-700 dark:text-saffron-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Festival Guide & Feasts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <span className="px-3 py-1.5 rounded-xl bg-saffron-600 text-white text-xs font-bold shadow-xs">
                    Explore
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-3.5 bg-saffron-500 hover:bg-saffron-600 text-forest-950 font-extrabold rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Explore Complete Event Calendar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 bg-gradient-to-r from-forest-800 via-forest-900 to-saffron-700 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-saffron-300 text-xs font-bold border border-white/20">
            <Sparkles className="w-4 h-4" />
            100% Free Intelligent Travel Planning
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
            Ready to Begin Your Incredible Indian Adventure?
          </h2>

          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light">
            Ask WanderAI anything about offbeat routes, regional cuisines, booking tricks, or local cultural customs.
          </p>

          <div className="pt-2">
            <Link
              to="/itinerary?tab=chat"
              className="inline-flex items-center px-8 py-3.5 rounded-2xl bg-white text-forest-900 font-extrabold text-sm sm:text-base hover:bg-sand-100 shadow-2xl transition-all transform hover:scale-105"
            >
              <Sparkles className="mr-2 h-4 w-4 text-saffron-500" />
              Launch WanderAI Now
              <ArrowRight className="ml-2 h-4 w-4 text-forest-700" />
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Destination / Event Details Modal */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
        item={modalItem}
      />

    </div>
  );
};

export default Home;














