import { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Search, 
  ExternalLink, 
  Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockEvents } from '../utils/mockData';
import { Event } from '../types';
import { getDbEvents } from '../services/supabaseService';

const Events = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    getDbEvents().then((data) => {
      if (data && data.length > 0) {
        setEvents(data);
      }
    });
  }, []);

  const categories = ['All', 'festival', 'cultural', 'fair'];

  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = searchTerm === '' ||
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-100 dark:bg-forest-900/30 text-forest-700 dark:text-forest-400 border border-forest-200 dark:border-forest-800 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Vibrant Indian Traditions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white">
            Upcoming Festivals & Cultural Fairs
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
            Experience the rich tapestry of Indian folklore, tribal nature celebrations, harvest rituals, and grand processions celebrated across states.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search festival name, location, rituals..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-forest-500 text-sm focus:outline-none transition"
              />
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-forest-600 text-white shadow-xs'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {cat === 'All' ? 'All Events' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            const startDate = new Date(event.date_start);
            const endDate = new Date(event.date_end);
            
            return (
              <div 
                key={event.id} 
                className="group flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Image Header with Category Badge */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image_url || '/assets/events/sarhul_fest1.jpg'} 
                    alt={event.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-saffron-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {event.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h2 className="text-xl font-bold font-display text-white">
                      {event.name}
                    </h2>
                  </div>
                </div>
                
                {/* Body Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {event.description}
                  </p>
                  
                  {/* Event Details Badges */}
                  <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-forest-50 dark:bg-forest-900/30 text-forest-700 dark:text-forest-400 shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Festival Dates</p>
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">
                          {startDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })} – {endDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-saffron-50 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</p>
                          <a 
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm font-semibold text-forest-700 dark:text-forest-400 hover:underline flex items-center gap-1"
                          >
                            {event.location}
                            <ExternalLink className="w-3 h-3 opacity-60" />
                          </a>
                        </div>
                      </div>

                      <Link
                        to="/itinerary"
                        className="px-3 py-1.5 rounded-xl bg-forest-50 dark:bg-forest-950/40 text-forest-700 dark:text-forest-400 hover:bg-forest-100 text-xs font-bold border border-forest-200 dark:border-forest-800 flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3 text-saffron-500" />
                        Ask AI
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No Events Found</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-sm mx-auto">
              We couldn't find any festivals matching "{searchTerm}". Try clearing your filters.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
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

export default Events;
