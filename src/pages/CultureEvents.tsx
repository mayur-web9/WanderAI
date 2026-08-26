import { handleImageError, FALLBACK_EVENT_IMAGE, FALLBACK_MARKETPLACE_IMAGE } from '../utils/imageFallback';
import { UnsplashImage } from '../components/UnsplashImage';
import { buildEventQuery, buildMarketplaceQuery } from '../services/unsplashService';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Store, 
  MapPin, 
  Search, 
  ExternalLink, 
  Sparkles, 
  ShoppingBag, 
  Clock, 
  SlidersHorizontal,
  Compass,
} from 'lucide-react';
import { mockEvents, DEFAULT_MARKETPLACES } from '../utils/mockData';
import { Event, Marketplace } from '../types';
import { getDbEvents, getDbMarketplaces } from '../services/supabaseService';

export default function CultureEvents({ defaultTab }: { defaultTab?: 'events' | 'bazaars' | 'all' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Tab state: 'events' | 'bazaars' | 'all'
  const initialTab = (searchParams.get('tab') as 'events' | 'bazaars' | 'all') || defaultTab || 'all';
  const [activeTab, setActiveTab] = useState<'events' | 'bazaars' | 'all'>(initialTab);

  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [marketplaces, setMarketplaces] = useState<Marketplace[]>(DEFAULT_MARKETPLACES);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Event category filter
  const [selectedEventCategory, setSelectedEventCategory] = useState('All');
  
  // Marketplace tag filter
  const [selectedMarketTag, setSelectedMarketTag] = useState('All');

  useEffect(() => {
    // Sync with URL query param if present
    const urlTab = searchParams.get('tab') as 'events' | 'bazaars' | 'all';
    if (urlTab && (urlTab === 'events' || urlTab === 'bazaars' || urlTab === 'all')) {
      setActiveTab(urlTab);
    }
  }, [searchParams]);

  useEffect(() => {
    // Fetch live data from Supabase
    getDbEvents().then((data) => {
      if (data && data.length > 0) setEvents(data);
    });

    getDbMarketplaces().then((data) => {
      if (data && data.length > 0) setMarketplaces(data);
    });
  }, []);

  const handleTabChange = (tab: 'events' | 'bazaars' | 'all') => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // Event Categories
  const eventCategories = useMemo(() => {
    return ['All', ...Array.from(new Set(events.map(e => e.category)))];
  }, [events]);

  // Market Tags
  const marketTags = useMemo(() => {
    const allTags = marketplaces.flatMap(m => m.tags);
    return ['All', ...Array.from(new Set(allTags))];
  }, [marketplaces]);

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesCategory = selectedEventCategory === 'All' || event.category.toLowerCase() === selectedEventCategory.toLowerCase();
      const matchesSearch = !searchTerm.trim() || 
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
        event.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [events, selectedEventCategory, searchTerm]);

  // Filtered Marketplaces
  const filteredMarketplaces = useMemo(() => {
    return marketplaces.filter(market => {
      const matchesTag = selectedMarketTag === 'All' || market.tags.some(t => t.toLowerCase() === selectedMarketTag.toLowerCase());
      const matchesSearch = !searchTerm.trim() || 
        market.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        market.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
        market.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [marketplaces, selectedMarketTag, searchTerm]);

  return (
    <div className="w-full min-h-screen bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      
      {/* Header Banner */}
      <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-800 text-white overflow-hidden">
        {/* Subtle glow circles */}
        <div className="absolute top-10 -left-10 w-80 h-80 bg-saffron-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -right-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-saffron-300 text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Living Heritage, Fairs & Artisans</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Cultural Festivals & Traditional Bazaars
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in Indiaâ€™s vibrant harvest celebrations, sacred rituals, authentic craft haats, and century-old spice bazaars.
          </p>

          {/* Unified Mode Switcher Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl gap-1">
              <button
                onClick={() => handleTabChange('all')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-saffron-500 text-forest-950 shadow-md'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>All Highlights ({events.length + marketplaces.length})</span>
              </button>

              <button
                onClick={() => handleTabChange('events')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'events'
                    ? 'bg-saffron-500 text-forest-950 shadow-md'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Festivals & Fairs ({events.length})</span>
              </button>

              <button
                onClick={() => handleTabChange('bazaars')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'bazaars'
                    ? 'bg-saffron-500 text-forest-950 shadow-md'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Traditional Bazaars ({marketplaces.length})</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Search & Filter Toolbar */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by festival, market, city or specialty..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500"
              />
            </div>

            {/* Quick Stats or Mode Indicator */}
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-forest-600 dark:text-forest-400" />
              <span>
                Showing {activeTab === 'events' ? filteredEvents.length : activeTab === 'bazaars' ? filteredMarketplaces.length : (filteredEvents.length + filteredMarketplaces.length)} cultural experiences
              </span>
            </div>
          </div>

          {/* Dynamic Filter Pills */}
          {(activeTab === 'events' || activeTab === 'all') && (
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-gray-100 dark:border-gray-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mr-2 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-saffron-500" /> Festival Categories:
              </span>
              {eventCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedEventCategory(category)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    selectedEventCategory === category
                      ? 'bg-forest-700 text-white shadow-xs'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {(activeTab === 'bazaars' || activeTab === 'all') && (
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-gray-100 dark:border-gray-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mr-2 flex items-center gap-1">
                <ShoppingBag className="w-3 h-3 text-forest-600" /> Bazaar Specialties:
              </span>
              {marketTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedMarketTag(tag)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    selectedMarketTag === tag
                      ? 'bg-saffron-500 text-forest-950 shadow-xs'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: CULTURAL FESTIVALS & FAIRS */}
        {/* ========================================================================= */}
        {(activeTab === 'events' || activeTab === 'all') && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-saffron-100 dark:bg-saffron-950 text-saffron-700 dark:text-saffron-400 flex items-center justify-center font-bold">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-display text-gray-900 dark:text-white">
                    Cultural Festivals & Sacred Fairs
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Timeless harvest celebrations, rituals, and music assemblies</p>
                </div>
              </div>
              <span className="text-xs font-bold text-saffron-600 dark:text-saffron-400 px-3 py-1 rounded-full bg-saffron-50 dark:bg-saffron-950/60 border border-saffron-200 dark:border-saffron-800">
                {filteredEvents.length} Events
              </span>
            </div>

            {filteredEvents.length === 0 ? (
              <div className="p-10 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center space-y-3">
                <Calendar className="w-8 h-8 text-gray-400 mx-auto" />
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">No festivals match your current filter or search criteria.</p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedEventCategory('All'); }}
                  className="px-4 py-2 rounded-xl bg-forest-700 text-white text-xs font-bold"
                >
                  Reset Festival Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5"
                  >
                    {/* Image Header */}
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <UnsplashImage
                        query={buildEventQuery(event)}
                        staticSrc={event.image_url || 'https://images.unsplash.com/photo-1533104858776-4a00e0f44e63?w=800&q=80&auto=format&fit=crop'}
                        alt={event.name}
                        onError={(e) => handleImageError(e, FALLBACK_EVENT_IMAGE)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Category Pill */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-saffron-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                          {event.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-xl font-bold font-display text-white">
                          {event.name}
                        </h3>
                        <div className="flex items-center text-xs text-gray-200 mt-0.5">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-saffron-400 shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-4">
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                        {event.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-gray-100 dark:border-gray-800 text-xs">
                        <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1 font-medium">
                            <Clock className="w-3.5 h-3.5 text-forest-600" /> Dates:
                          </span>
                          <span className="font-bold text-saffron-600 dark:text-saffron-400">
                            {new Date(event.date_start).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })} â€“ {new Date(event.date_end).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location + ' ' + event.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-xs font-bold flex items-center gap-1"
                          title="View on Google Maps"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
                          <span>Maps</span>
                        </a>

                        <Link
                          to={`/itinerary?tab=chat&prompt=${encodeURIComponent(`Tell me about the ${event.name} festival in ${event.location}. What are the major rituals, best viewpoints, local dress codes, and food specialties during this celebration?`)}`}
                          className="flex-1 px-4 py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
                          <span>AI Event Guide</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 2: TRADITIONAL BAZAARS & MARKETS */}
        {/* ========================================================================= */}
        {(activeTab === 'bazaars' || activeTab === 'all') && (
          <section className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-forest-100 dark:bg-forest-950 text-forest-700 dark:text-forest-400 flex items-center justify-center font-bold">
                  <Store className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-display text-gray-900 dark:text-white">
                    Traditional Bazaars & Craft Markets
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Authentic artisan handlooms, spices, jewelry, and antique treasures</p>
                </div>
              </div>
              <span className="text-xs font-bold text-forest-700 dark:text-forest-300 px-3 py-1 rounded-full bg-forest-50 dark:bg-forest-950/60 border border-forest-200 dark:border-forest-800">
                {filteredMarketplaces.length} Bazaars
              </span>
            </div>

            {filteredMarketplaces.length === 0 ? (
              <div className="p-10 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center space-y-3">
                <Store className="w-8 h-8 text-gray-400 mx-auto" />
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">No traditional bazaars match your current filter or search criteria.</p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedMarketTag('All'); }}
                  className="px-4 py-2 rounded-xl bg-forest-700 text-white text-xs font-bold"
                >
                  Reset Bazaar Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredMarketplaces.map((market) => (
                  <div
                    key={market.id}
                    className="group flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5"
                  >
                    {/* Image Header */}
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <UnsplashImage
                        query={buildMarketplaceQuery(market)}
                        staticSrc={market.image || 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80&auto=format&fit=crop'}
                        alt={market.name}
                        onError={(e) => handleImageError(e, FALLBACK_MARKETPLACE_IMAGE)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Tags */}
                      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
                        {market.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="absolute top-3 left-4">
                        <h3 className="text-xl font-bold font-display text-white drop-shadow-md">
                          {market.name}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-4">
                      <div>
                        <div className="flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-forest-600 dark:text-forest-400 shrink-0" />
                          <span>{market.location}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                          {market.description}
                        </p>
                      </div>

                      {/* Card Actions */}
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(market.location + ' ' + market.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-xs font-bold flex items-center gap-1"
                          title="View on Google Maps"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
                          <span>Maps</span>
                        </a>

                        <Link
                          to={`/itinerary?tab=chat&prompt=${encodeURIComponent(`What are the best items to shop for at ${market.name} in ${market.location}? Give me bargaining tips, typical price ranges, and nearby authentic eateries.`)}`}
                          className="flex-1 px-4 py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
                          <span>Bazaar Guide</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

      </div>
    </div>
  );
}



