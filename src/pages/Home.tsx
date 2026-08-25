import { handleImageError, FALLBACK_DESTINATION_IMAGE, FALLBACK_EVENT_IMAGE } from '../utils/imageFallback';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  Compass, 
  ExternalLink, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Zap,
  Bot,
  Send
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mockDestinations, mockEvents, mockReviews } from '../utils/mockData';
import { Destination, Event as AppEvent } from '../types';
import { FEATURES, QUICK_PROMPTS } from '../utils/aiData';
import { getDbDestinations, getDbEvents } from '../services/supabaseService';

const Home = () => {
  const navigate = useNavigate();
  const [heroPrompt, setHeroPrompt] = useState('');
  const [featuredDestinations, setFeaturedDestinations] = useState<Destination[]>(
    mockDestinations.filter(d => d.is_featured).slice(0, 3)
  );
  const [upcomingEvents, setUpcomingEvents] = useState<AppEvent[]>(mockEvents.slice(0, 3));

  useEffect(() => {
    // Load from Supabase
    getDbDestinations().then((dests) => {
      if (dests && dests.length > 0) {
        const formatted: Destination[] = dests.map((d, index) => ({
          id: d.id || `dest-${index}`,
          name: d.name,
          district: d.location ? d.location.split(',')[0] : 'India',
          category: (d.tag?.toLowerCase() || 'historical') as Destination['category'],
          short_description: d.desc || '',
          description: d.desc || '',
          entry_fee: 0,
          images: [d.image || '/assets/destinations/taj_mahal.jpg'],
          is_featured: true,
          created_at: new Date().toISOString(),
        }));
        setFeaturedDestinations(formatted.slice(0, 3));
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

  const getFeatureLink = (title: string) => {
    switch (title) {
      case "Multilingual Chat":
        return "/itinerary?tab=chat&prompt=Namaste!%20Can%20you%20guide%20me%20in%20Hindi%20and%20English%3F";
      case "Smart Planner":
        return "/itinerary?tab=plan";
      case "AR Exploration":
        return "/itinerary?tab=destinations&tag=Historical";
      case "Safety Guide":
        return "/itinerary?tab=chat&prompt=What%20are%20the%20essential%20safety%2C%20health%2C%20and%20emergency%20guidelines%20for%20traveling%20in%20India%3F";
      case "Eco-Tourism":
        return "/itinerary?tab=plan&interest=eco";
      case "Food Finder":
        return "/itinerary?tab=chat&prompt=Recommend%20the%20most%20authentic%20regional%20food%20dishes%20and%20hidden%20culinary%20gems%20in%20India";
      case "Transit & Route Guide":
        return "/itinerary?tab=chat&prompt=How%20do%20I%20navigate%20Indian%20Railways%20trains%20and%20scenic%20road%20routes%3F";
      case "Live Insights":
        return "/events";
      default:
        return "/itinerary";
    }
  };

  const stats = [
    { label: 'Curated Destinations', value: '150+', icon: MapPin, color: 'from-emerald-600 to-teal-700' },
    { label: 'Happy Explorers', value: '25K+', icon: Users, color: 'from-saffron-500 to-orange-600' },
    { label: 'Festivals & Fairs', value: '50+', icon: Calendar, color: 'from-forest-700 to-emerald-800' },
    { label: 'AI Accuracy Score', value: '99.4%', icon: TrendingUp, color: 'from-amber-500 to-saffron-600' },
  ];

  return (
    <div className="w-full min-h-screen bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      
      {/* HERO SECTION - Shifted up with compact padding and immediate above-the-fold visibility */}
      <section className="relative w-full flex items-center bg-gradient-to-br from-forest-900 via-forest-800 to-emerald-950 dark:from-obsidian-950 dark:via-forest-950 dark:to-obsidian-900 overflow-hidden text-white pt-6 pb-12 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16">
        
        {/* Ambient Glows */}
        <div className="absolute top-10 -left-20 w-[30rem] h-[30rem] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-5 right-5 w-[32rem] h-[32rem] bg-saffron-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 dark:bg-black/40 backdrop-blur-md border border-white/25 text-saffron-300 text-xs sm:text-sm font-bold shadow-md">
                <Sparkles className="h-4 w-4 text-saffron-400 animate-pulse" />
                <span>India’s Premier AI Tourism Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Explore the <br />
                <span className="bg-gradient-to-r from-saffron-400 via-amber-300 to-orange-300 bg-clip-text text-transparent">
                  Untamed & Unseen
                </span> <br />
                Wonders of India
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-emerald-50/90 dark:text-gray-300 leading-relaxed max-w-xl font-normal">
                From snowy Himalayan ridges to peaceful Alleppey backwaters and millennia-old spiritual ghats. Let WanderAI craft your custom day-by-day journey across Indian states.
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  to="/itinerary?tab=plan"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-saffron-600/30 hover:shadow-saffron-600/50 transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Plan with AI Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  to="/itinerary?tab=destinations"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-sm sm:text-base border border-white/30 transition-all transform hover:-translate-y-0.5 shadow-md"
                >
                  <Compass className="mr-2 h-4 w-4 text-emerald-300" />
                  Explore 150+ Places
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-emerald-100/90 dark:text-gray-300/80">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Verified Local Data</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-saffron-300" />
                  <span>Eco & Sustainable Focus</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-teal-300" />
                  <span>24x7 Multilingual AI</span>
                </div>
              </div>

            </div>

            {/* Right Column: Live Interactive WanderAI Box */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/20 dark:border-gray-800 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-saffron-500 to-saffron-600 flex items-center justify-center text-white shadow-md">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                        Ask WanderAI
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      </h3>
                      <p className="text-[11px] text-emerald-200/80 dark:text-gray-400">Instant answers for your Indian journey</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-forest-600/60 text-emerald-200 border border-emerald-400/30">
                    Live
                  </span>
                </div>

                {/* Question Input Form */}
                <form onSubmit={handleHeroSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={heroPrompt}
                      onChange={(e) => setHeroPrompt(e.target.value)}
                      placeholder="e.g. Plan a 4-day budget trip in Kerala..."
                      className="w-full pl-4 pr-11 py-3 rounded-2xl bg-white/90 dark:bg-gray-800/90 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-400 shadow-inner"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-forest-700 hover:bg-forest-800 text-white transition shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>

                {/* Suggested Quick Prompt Chips - Direct deep links */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-saffron-300">
                    Try Asking:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_PROMPTS.slice(0, 4).map((p) => (
                      <Link
                        key={p}
                        to={`/itinerary?tab=chat&prompt=${encodeURIComponent(p)}`}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white border border-white/15 transition-all flex items-center gap-1 hover:scale-102"
                      >
                        <span>{p}</span>
                        <ArrowRight className="w-3 h-3 text-saffron-300" />
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Transition gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-sand-50 dark:from-obsidian-950 pointer-events-none" />
      </section>

      {/* STATS SECTION */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 rounded-3xl p-5 sm:p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 group"
              >
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PLATFORM CAPABILITIES SECTION - Deep Linked */}
      <section className="py-14 sm:py-20 bg-white/70 dark:bg-obsidian-900/60 border-y border-gray-200/60 dark:border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-100 dark:bg-forest-900/40 text-forest-700 dark:text-forest-300 border border-forest-200 dark:border-forest-800 mb-3">
              <Zap className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
              Smart Travel Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-gray-900 dark:text-white">
              Engineered for Seamless Exploration
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
              Cutting-edge AI capabilities built to help you discover authentic local heritage, optimal travel routes, sacred traditions, and hidden gems across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {FEATURES.map((feature) => {
              const linkTarget = getFeatureLink(feature.title);
              return (
                <Link
                  key={feature.title}
                  to={linkTarget}
                  className="group relative flex flex-col p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 hover:border-forest-500/60 dark:hover:border-forest-500/60 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <div className="w-13 h-13 rounded-2xl bg-forest-50 dark:bg-forest-950/60 border border-forest-100 dark:border-forest-900/60 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold font-display text-gray-900 dark:text-white mb-2 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    {feature.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold text-forest-600 dark:text-forest-400 group-hover:text-forest-700 dark:group-hover:text-forest-300">
                    <span>Open Feature</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS SECTION */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
              Top Handpicked Gems
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white mt-1">
              Featured Indian Destinations
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
              Breathtaking waterfalls, sacred sanctuaries, wildlife reserves, and royal monuments.
            </p>
          </div>

          <Link
            to="/itinerary?tab=destinations"
            className="inline-flex items-center font-bold text-sm text-forest-700 dark:text-forest-400 hover:text-forest-800 dark:hover:text-forest-300 group"
          >
            <span>View All 150+ Places</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.images?.[0] || '/assets/destinations/taj_mahal.jpg'}
                  alt={destination.name}
                  onError={(e) => handleImageError(e, FALLBACK_DESTINATION_IMAGE)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    {destination.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold font-display text-white">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-xs text-gray-300 mt-1">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-saffron-400" />
                    {destination.district}, India
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 line-clamp-3">
                  {destination.short_description || destination.description}
                </p>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between mt-auto">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.name + ' ' + destination.district)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-forest-600 dark:hover:text-forest-400 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    Directions
                    <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                  </a>

                  <Link
                    to={`/itinerary?tab=plan&destination=${encodeURIComponent(destination.name)}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 px-3.5 py-2 rounded-xl bg-saffron-50 dark:bg-saffron-950/40 border border-saffron-200 dark:border-saffron-800"
                  >
                    <Sparkles className="w-3 h-3" />
                    Plan Trip
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING CULTURAL FESTIVALS SECTION */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-forest-950 via-forest-900 to-obsidian-950 text-white relative overflow-hidden">
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
              Immerse yourself in authentic tribal dances, ancient harvest rituals, and spiritual celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group flex flex-col rounded-3xl bg-white/10 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-700/60 overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image_url || '/assets/events/sarhul_fest1.jpg'}
                    alt={event.name}
                    onError={(e) => handleImageError(e, FALLBACK_EVENT_IMAGE)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-saffron-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {event.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-bold font-display text-white">
                      {event.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                    <div className="flex items-center justify-between text-gray-300">
                      <span className="text-gray-400">Location:</span>
                      <span className="font-semibold text-white">{event.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-300">
                      <span className="text-gray-400">Dates:</span>
                      <span className="font-bold text-saffron-300">
                        {new Date(event.date_start).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })} – {new Date(event.date_end).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-3.5 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Explore Complete Event Calendar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRAVELER TESTIMONIALS SECTION */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
            Community Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white mt-1">
            What Travelers Are Saying
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Authentic stories from explorers who journeyed through India with WanderAI assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {mockReviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-saffron-500 text-saffron-500" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-600 to-saffron-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {review.user_name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    {review.user_name}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-14 sm:py-18 bg-gradient-to-r from-forest-800 via-forest-900 to-saffron-700 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-saffron-300 text-xs font-bold border border-white/20">
            <Sparkles className="w-4 h-4" />
            100% Free Intelligent Travel Planning
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
            Ready to Begin Your Incredible Indian Adventure?
          </h2>
          
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light">
            Ask WanderAI anything about offbeat routes, state cuisines, booking tricks, or local cultural norms.
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

    </div>
  );
};

export default Home;
