import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  MapPin, 
  Calendar, 
  Sparkles, 
ExternalLink, 
  Clock, 
  ShoppingBag, 
  PartyPopper, 
  Train, 
Star, 
  Info, 
  Utensils, 
  Check, 
  Share2 
} from 'lucide-react';
import { Destination, Event as AppEvent, Marketplace } from '../types';

export type DetailModalType = 'destination' | 'event' | 'marketplace';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: DetailModalType;
  item: Destination | AppEvent | Marketplace | null;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  type,
  item
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'highlights' | 'markets' | 'transit'>('overview');
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlanWithAI = () => {
    onClose();
    if (type === 'destination') {
      const dest = item as Destination;
      navigate(`/itinerary?tab=plan&destination=${encodeURIComponent(dest.name)}&days=3`);
    } else if (type === 'event') {
      const ev = item as AppEvent;
      navigate(`/itinerary?tab=chat&prompt=${encodeURIComponent(`I want to attend the ${ev.name} in ${ev.location}. Can you create a 3-day travel itinerary with festival highlights, rituals, and local food recommendations?`)}`);
    } else {
      const m = item as Marketplace;
      navigate(`/itinerary?tab=chat&prompt=${encodeURIComponent(`I want to visit ${m.name} in ${m.location}. Suggest a shopping guide, best stalls, must-buy souvenirs, and famous local eateries nearby.`)}`);
    }
  };

  const isDest = type === 'destination';
  const isEvent = type === 'event';
  const isMarket = type === 'marketplace';

  const dest = isDest ? (item as Destination) : null;
  const event = isEvent ? (item as AppEvent) : null;
  const market = isMarket ? (item as Marketplace) : null;

  const title = item.name;
  const locationText = isDest 
    ? `${dest?.district}, ${dest?.state || 'India'}`
    : isEvent 
      ? `${event?.location}` 
      : `${market?.location}`;

  const categoryText = isDest ? dest?.category : (isEvent ? event?.category : market?.tags?.[0] || 'Marketplace');
  const googleMapsQuery = encodeURIComponent(`${title} ${locationText}`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/65 dark:bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Floating Modal Window */}
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-obsidian-900 border border-gray-200/90 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[88vh] animate-in zoom-in-95 fade-in duration-200"
      >
        {/* Modal Header Bar */}
        <div className="bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 text-white p-5 sm:p-7 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-saffron-500/90 text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  {categoryText}
                </span>
                {dest?.rating && (
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-amber-300 text-xs font-bold flex items-center gap-1 border border-white/10">
                    <Star className="w-3.5 h-3.5 fill-amber-300" />
                    {dest.rating}
                  </span>
                )}
                {event?.date_start && (
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-emerald-300 text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date_start} to {event.date_end}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                {title}
              </h2>

              <div className="flex items-center text-xs sm:text-sm text-gray-200 gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-saffron-400 shrink-0" />
                <span>{locationText}</span>
              </div>
            </div>

            {/* Actions: Share & Close */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleShare}
                className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-md border border-white/10"
                title="Share link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-md border border-white/10"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-white/10 text-xs">
            {dest && (
              <>
                <div className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 border border-white/5">
                  <span className="text-gray-300 block text-[10px] uppercase font-bold tracking-wider">Best Season</span>
                  <span className="font-semibold text-white truncate block">{dest.best_time || 'Oct to March'}</span>
                </div>
                <div className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 border border-white/5">
                  <span className="text-gray-300 block text-[10px] uppercase font-bold tracking-wider">Entry Fee</span>
                  <span className="font-semibold text-white block">{dest.entry_fee ? `₹${dest.entry_fee}` : 'Free Entry'}</span>
                </div>
                <div className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-gray-300 block text-[10px] uppercase font-bold tracking-wider">Ideal Duration</span>
                  <span className="font-semibold text-white block">1 – 2 Days</span>
                </div>
              </>
            )}

            {event && (
              <>
                <div className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 border border-white/5">
                  <span className="text-gray-300 block text-[10px] uppercase font-bold tracking-wider">Category</span>
                  <span className="font-semibold text-white capitalize block">{event.category}</span>
                </div>
                <div className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 border border-white/5">
                  <span className="text-gray-300 block text-[10px] uppercase font-bold tracking-wider">Duration</span>
                  <span className="font-semibold text-white block">{event.date_start} – {event.date_end}</span>
                </div>
                <div className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-gray-300 block text-[10px] uppercase font-bold tracking-wider">Atmosphere</span>
                  <span className="font-semibold text-white block">Living Cultural Heritage</span>
                </div>
              </>
            )}

            {market && (
              <>
                <div className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 border border-white/5">
                  <span className="text-gray-300 block text-[10px] uppercase font-bold tracking-wider">Timings</span>
                  <span className="font-semibold text-white truncate block">{market.timings || '10:00 AM – 8:00 PM'}</span>
                </div>
                <div className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 border border-white/5">
                  <span className="text-gray-300 block text-[10px] uppercase font-bold tracking-wider">Specialties</span>
                  <span className="font-semibold text-white truncate block">{market.tags?.join(', ') || 'Handicrafts'}</span>
                </div>
                <div className="bg-black/25 backdrop-blur-md rounded-xl p-2.5 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-gray-300 block text-[10px] uppercase font-bold tracking-wider">Best Time</span>
                  <span className="font-semibold text-white truncate block">{market.best_time_to_visit || 'Evenings'}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-obsidian-950 px-4 sm:px-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-forest-600 text-forest-700 dark:text-forest-400'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Overview & Details
          </button>
          <button
            onClick={() => setActiveTab('highlights')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap ${
              activeTab === 'highlights'
                ? 'border-forest-600 text-forest-700 dark:text-forest-400'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {isDest ? 'Famous Things & Highlights' : (isEvent ? 'Rituals & Delicacies' : 'Famous Items to Buy')}
          </button>
          <button
            onClick={() => setActiveTab('markets')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap ${
              activeTab === 'markets'
                ? 'border-forest-600 text-forest-700 dark:text-forest-400'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {isDest ? 'Marketplaces & Local Festivals' : (isEvent ? 'Nearby Marketplaces' : 'Food & Tips')}
          </button>
          <button
            onClick={() => setActiveTab('transit')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap ${
              activeTab === 'transit'
                ? 'border-forest-600 text-forest-700 dark:text-forest-400'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Location & Transit Guide
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 font-display">
                  <Info className="w-4 h-4 text-forest-600 dark:text-forest-400" />
                  About this Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              {/* Best Time & Climate */}
              <div className="p-4 rounded-2xl bg-sand-100/60 dark:bg-obsidian-950 border border-gray-200/80 dark:border-gray-800 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-forest-900 dark:text-forest-300">
                  <Clock className="w-4 h-4 text-forest-600" />
                  Best Time to Visit & Climate Advice
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {dest?.best_time || event?.best_viewing_tips || market?.best_time_to_visit || 'Pleasant throughout October to March with cool mornings and comfortable daytime temperatures.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: FAMOUS THINGS / HIGHLIGHTS / ITEMS */}
          {activeTab === 'highlights' && (
            <div className="space-y-6">
              {dest?.famous_things && (
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 font-display">
                    <Sparkles className="w-4 h-4 text-saffron-500" />
                    Famous Things, Landmarks & Delicacies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {dest.famous_things.map((thing, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700/60 flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-saffron-500 mt-2 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">{thing}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event?.famous_for && (
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 font-display">
                    <PartyPopper className="w-4 h-4 text-saffron-500" />
                    Sacred Rituals & Cultural Traditions
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {event.famous_for.map((thing, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700/60 flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-saffron-500 mt-2 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">{thing}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event?.traditional_foods && (
                <div className="pt-3">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 font-display">
                    <Utensils className="w-4 h-4 text-forest-600" />
                    Traditional Festive Feasts & Foods
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.traditional_foods.map((food, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-xl bg-forest-50 dark:bg-forest-950/50 border border-forest-200 dark:border-forest-800 text-xs font-bold text-forest-800 dark:text-forest-300">
                        {food}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {market?.famous_items && (
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 font-display">
                    <ShoppingBag className="w-4 h-4 text-saffron-500" />
                    Must-Buy Specialties & Souvenirs
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {market.famous_items.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700/60 flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-saffron-500 mt-2 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: MarketplaceS, FESTIVALS & FOOD */}
          {activeTab === 'markets' && (
            <div className="space-y-6">
              {dest?.nearby_markets && (
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 font-display">
                    <ShoppingBag className="w-4 h-4 text-forest-600" />
                    Famous Marketplaces & Shopping Streets Nearby
                  </h3>
                  <div className="space-y-2.5">
                    {dest.nearby_markets.map((mkt, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/80 dark:border-gray-700/60 text-xs sm:text-sm text-gray-800 dark:text-gray-200 flex items-center gap-2.5">
                        <ShoppingBag className="w-4 h-4 text-forest-500 shrink-0" />
                        <span>{mkt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {dest?.local_festivals && (
                <div className="pt-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 font-display">
                    <PartyPopper className="w-4 h-4 text-saffron-500" />
                    Annual Festivals & Cultural Celebrations
                  </h3>
                  <div className="space-y-2.5">
                    {dest.local_festivals.map((fest, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-saffron-50/60 dark:bg-saffron-950/30 border border-saffron-200 dark:border-saffron-900 text-xs sm:text-sm text-gray-800 dark:text-gray-200 flex items-center gap-2.5">
                        <PartyPopper className="w-4 h-4 text-saffron-600 shrink-0" />
                        <span>{fest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {market?.nearby_eateries && (
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 font-display">
                    <Utensils className="w-4 h-4 text-forest-600" />
                    Iconic Food Stalls & Eateries Nearby
                  </h3>
                  <div className="space-y-2.5">
                    {market.nearby_eateries.map((eat, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/80 dark:border-gray-700/60 text-xs sm:text-sm text-gray-800 dark:text-gray-200 flex items-center gap-2.5">
                        <Utensils className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{eat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {market?.shopping_tips && (
                <div className="pt-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 font-display">
                    <Info className="w-4 h-4 text-forest-600" />
                    Local Bargaining & Shopping Tips
                  </h3>
                  <div className="space-y-2">
                    {market.shopping_tips.map((tip, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-xs sm:text-sm text-gray-800 dark:text-gray-200 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: TRANSIT & LOCATION */}
          {activeTab === 'transit' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-gray-900 dark:text-white font-display">
                  <Train className="w-4 h-4 text-forest-600" />
                  How to Reach & Connectivity Guide
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {dest?.transit_info || event?.how_to_reach || `Centrally situated in ${locationText}. Conveniently accessible via local metro, cabs, and auto-rickshaws.`}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-forest-50 dark:bg-forest-950/40 border border-forest-300 dark:border-forest-700 text-forest-800 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-900/60 transition flex items-center justify-center gap-2 font-bold text-sm"
                >
                  <MapPin className="w-4 h-4 text-saffron-500" />
                  <span>Open ${title} in Google Maps Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Actions Bar */}
        <div className="p-4 sm:p-5 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-obsidian-900/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold transition flex items-center justify-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Google Maps</span>
          </a>

          <button
            onClick={handlePlanWithAI}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-500 hover:to-forest-600 text-white text-xs font-bold shadow-md shadow-forest-900/20 hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-saffron-300 animate-pulse" />
            <span>Plan AI Itinerary for {title}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
