import { handleImageError, FALLBACK_MARKETPLACE_IMAGE } from '../utils/imageFallback';
import { useState, useEffect } from 'react';
import { 
  Store, 
  MapPin, 
  Search, 
  ExternalLink, 
  Sparkles, 
  ShoppingBag, 
  Tag 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DEFAULT_MARKETPLACES } from '../utils/mockData';
import { Marketplace } from '../types';
import { getDbMarketplaces } from '../services/supabaseService';

const Marketplaces = () => {
  const [marketplaces, setMarketplaces] = useState<Marketplace[]>(DEFAULT_MARKETPLACES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    getDbMarketplaces().then((data) => {
      if (data && data.length > 0) {
        setMarketplaces(data);
      }
    });
  }, []);

  // Collect all unique tags
  const allTags = ['All', ...Array.from(new Set(marketplaces.flatMap(m => m.tags)))];

  const filteredMarketplaces = marketplaces.filter((market) => {
    const matchesTag = selectedTag === 'All' || market.tags.includes(selectedTag);
    const matchesSearch = searchTerm === '' ||
      market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      market.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      market.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      market.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 border border-saffron-200 dark:border-saffron-800 mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            Authentic Bazaars & Crafts
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white">
            Famous Indian Marketplaces
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
            From historic silk weavers in Varanasi to vibrant spice haats in Kerala and bohemian flea bazaars in Goa. Experience the colors, handicrafts, and bustling energy of India’s trade roots.
          </p>
        </div>

        {/* Search and Tag Filtering Controls */}
        <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search bazaars, crafts, cities, spices..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-forest-500 text-sm focus:outline-none transition"
              />
            </div>

            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Showing <span className="font-bold text-gray-900 dark:text-white">{filteredMarketplaces.length}</span> of {marketplaces.length} Bazaars
            </div>
          </div>

          {/* Tags bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-gray-100 dark:border-gray-800 pt-3">
            <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Tag className="w-3 h-3" /> Filter:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedTag === tag
                    ? 'bg-forest-600 text-white shadow-xs'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Marketplaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMarketplaces.map((market) => (
            <div 
              key={market.id} 
              className="group flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Image & Tags */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={market.image || '/assets/marketplaces/dilli_haat.jpg'}
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
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-2 group-hover:text-forest-600 dark:group-hover:text-forest-400 transition-colors">
                  {market.name}
                </h2>
                
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 line-clamp-3">
                  {market.description}
                </p>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between mt-auto">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(market.location + " " + market.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-forest-700 dark:text-forest-400 hover:underline"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{market.location}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                  </a>

                  <Link
                    to="/itinerary"
                    className="inline-flex items-center gap-1 text-xs font-bold text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 px-3 py-1.5 rounded-xl bg-saffron-50 dark:bg-saffron-950/40 border border-saffron-200 dark:border-saffron-800/60"
                  >
                    <Sparkles className="w-3 h-3" />
                    Ask AI Tips
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredMarketplaces.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8">
            <Store className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No Marketplaces Found</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-sm mx-auto">
              We couldn't find any bazaars matching "{searchTerm}". Try clearing your search query or selecting "All" tags.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedTag('All'); }}
              className="mt-4 px-4 py-2 bg-forest-600 text-white rounded-xl text-xs font-bold hover:bg-forest-700 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Marketplaces;
