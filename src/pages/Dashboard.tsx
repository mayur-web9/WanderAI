import { handleImageError, FALLBACK_EVENT_IMAGE, FALLBACK_MARKETPLACE_IMAGE } from '../utils/imageFallback';
import { UnsplashImage } from '../components/UnsplashImage';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MapPin, 
  Calendar, 
  Store, 
  MessageSquare, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit, 
  X,
  Database
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Feedback as FeedbackType, Event, Marketplace } from '../types';
import { AiDestination } from '../utils/aiData';
import { 
  getDbDestinations, 
  saveDbDestination, 
  deleteDbDestination,
  getDbEvents,
  saveDbEvent,
  deleteDbEvent,
  getDbMarketplaces,
  saveDbMarketplace,
  deleteDbMarketplace,
  getDbFeedback,
  deleteDbFeedback
} from '../services/supabaseService';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [destinations, setDestinations] = useState<AiDestination[]>([]);
  const [marketplaces, setMarketplaces] = useState<Marketplace[]>([]);
  const [activeTab, setActiveTab] = useState<'destinations' | 'events' | 'markets' | 'feedback'>('destinations');

  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [editingDestination, setEditingDestination] = useState<AiDestination | null>(null);
  const [editingMarketplace, setEditingMarketplace] = useState<Marketplace | null>(null);

  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [isAddingDestination, setIsAddingDestination] = useState(false);
  const [isAddingMarketplace, setIsAddingMarketplace] = useState(false);

  useEffect(() => {
    const loadAllDbData = async () => {
      const [dests, evts, markets, fbs] = await Promise.all([
        getDbDestinations(),
        getDbEvents(),
        getDbMarketplaces(),
        getDbFeedback(),
      ]);

      if (dests) setDestinations(dests);
      if (evts) setEvents(evts);
      if (markets) setMarketplaces(markets);
      if (fbs) setFeedbacks(fbs);
    };

    loadAllDbData();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleUpdateEvent = async (updatedEvent: Event) => {
    const saved = await saveDbEvent(updatedEvent);
    if (isAddingEvent) {
      setEvents([...events, saved]);
    } else {
      setEvents(events.map(e => e.id === saved.id ? saved : e));
    }
    setEditingEvent(null);
    setIsAddingEvent(false);
  };

  const handleDeleteEvent = async (id: string) => {
    await deleteDbEvent(id);
    setEvents(events.filter(e => e.id !== id));
  };

  const handleUpdateDestination = async (updatedDest: AiDestination) => {
    const saved = await saveDbDestination(updatedDest);
    if (isAddingDestination) {
      setDestinations([...destinations, saved]);
    } else {
      setDestinations(destinations.map(d => (d.id || d.name) === (saved.id || saved.name) ? saved : d));
    }
    setEditingDestination(null);
    setIsAddingDestination(false);
  };

  const handleDeleteDestination = async (idOrName: string) => {
    await deleteDbDestination(idOrName);
    setDestinations(destinations.filter(d => (d.id || d.name) !== idOrName));
  };

  const handleUpdateMarketplace = async (updatedMarket: Marketplace) => {
    const saved = await saveDbMarketplace(updatedMarket);
    if (isAddingMarketplace) {
      setMarketplaces([...marketplaces, saved]);
    } else {
      setMarketplaces(marketplaces.map(m => m.id === saved.id ? saved : m));
    }
    setEditingMarketplace(null);
    setIsAddingMarketplace(false);
  };

  const handleDeleteMarketplace = async (id: string) => {
    await deleteDbMarketplace(id);
    setMarketplaces(marketplaces.filter(m => m.id !== id));
  };

  const deleteFeedback = async (id: string) => {
    await deleteDbFeedback(id);
    setFeedbacks(feedbacks.filter(f => f.id !== id));
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-forest-700 to-forest-500 text-white flex items-center justify-center shadow-md">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display text-gray-900 dark:text-white flex items-center gap-2">
                Administration Portal
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-forest-100 dark:bg-forest-900/60 text-forest-700 dark:text-forest-300 flex items-center gap-1">
                  <Database className="w-3 h-3" /> Supabase Connected
                </span>
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Logged in as <span className="font-semibold text-gray-800 dark:text-gray-200">{user?.full_name || user?.email}</span>
              </p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 font-bold text-xs hover:bg-red-100 transition border border-red-200 dark:border-red-800/40 shrink-0"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Destinations', count: destinations.length, icon: MapPin, color: 'from-amber-500 to-orange-600' },
            { label: 'Events & Festivals', count: events.length, icon: Calendar, color: 'from-forest-600 to-teal-700' },
            { label: 'Marketplaces', count: marketplaces.length, icon: Store, color: 'from-purple-600 to-indigo-700' },
            { label: 'Feedbacks', count: feedbacks.length, icon: MessageSquare, color: 'from-blue-600 to-cyan-600' },
          ].map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="bg-white dark:bg-gray-900 rounded-3xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">{metric.label}</p>
                  <p className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 dark:text-white mt-1">{metric.count}</p>
                </div>
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${metric.color} text-white flex items-center justify-center shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Management Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 border-b border-gray-200 dark:border-gray-800">
          {[
            { id: 'destinations', label: `Destinations (${destinations.length})`, icon: MapPin },
            { id: 'events', label: `Events (${events.length})`, icon: Calendar },
            { id: 'markets', label: `Marketplaces (${marketplaces.length})`, icon: Store },
            { id: 'feedback', label: `Feedback (${feedbacks.length})`, icon: MessageSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'destinations' | 'events' | 'markets' | 'feedback')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-forest-600 text-white shadow-sm'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200/80 dark:border-gray-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: DESTINATIONS */}
        {activeTab === 'destinations' && (
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200/80 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div>
                <h2 className="text-lg font-bold font-display text-gray-900 dark:text-white">Destinations Directory</h2>
                <p className="text-xs text-gray-500">Live database collection of Indian tourist destinations.</p>
              </div>
              <button
                onClick={() => {
                  setIsAddingDestination(true);
                  setEditingDestination({ id: '', name: '', emoji: 'ðŸ“', tag: 'Historical', desc: '', location: '', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80&auto=format&fit=crop' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs rounded-xl shadow-sm transition"
              >
                <Plus className="w-4 h-4" />
                Add Destination
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinations.map((dest) => (
                <div key={dest.id || dest.name} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 flex items-start justify-between gap-3 group">
                  <div className="flex gap-3">
                    <span className="text-2xl shrink-0">{dest.emoji}</span>
                    <div>
                      <h3 className="font-bold text-sm text-gray-900 dark:text-white">{dest.name}</h3>
                      <p className="text-[11px] text-forest-600 dark:text-forest-400 font-semibold">{dest.tag} â€¢ {dest.location}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{dest.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => { setEditingDestination(dest); setIsAddingDestination(false); }}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-forest-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteDestination(dest.id || dest.name)}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: EVENTS */}
        {activeTab === 'events' && (
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200/80 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div>
                <h2 className="text-lg font-bold font-display text-gray-900 dark:text-white">Cultural Events & Fairs</h2>
                <p className="text-xs text-gray-500">Manage festival dates, descriptions, and locations.</p>
              </div>
              <button
                onClick={() => {
                  setIsAddingEvent(true);
                  setEditingEvent({ id: '', name: '', description: '', category: 'festival', date_start: '', date_end: '', location: '', image_url: 'https://images.unsplash.com/photo-1533104858776-4a00e0f44e63?w=800&q=80&auto=format&fit=crop', created_at: '' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs rounded-xl shadow-sm transition"
              >
                <Plus className="w-4 h-4" />
                Add Event
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 flex items-start justify-between gap-3 group">
                  <div className="flex gap-3">
                    {event.image_url && (
                      <UnsplashImage src={event.image_url || FALLBACK_EVENT_IMAGE} fallbackSrc={FALLBACK_EVENT_IMAGE} alt={event.name} onError={(e) => handleImageError(e, FALLBACK_EVENT_IMAGE)} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                    )}
                    <div>
                      <h3 className="font-bold text-sm text-gray-900 dark:text-white">{event.name}</h3>
                      <p className="text-[11px] text-saffron-600 dark:text-saffron-400 font-semibold uppercase">{event.category} â€¢ {event.location}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{event.description}</p>
                      <p className="text-[10px] text-gray-400 mt-1 font-medium">{event.date_start} to {event.date_end}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => { setEditingEvent(event); setIsAddingEvent(false); }}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-forest-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: MARKETPLACES */}
        {activeTab === 'markets' && (
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200/80 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div>
                <h2 className="text-lg font-bold font-display text-gray-900 dark:text-white">Indian Bazaars & Haats</h2>
                <p className="text-xs text-gray-500">Manage craft markets, specialty tags, and images.</p>
              </div>
              <button
                onClick={() => {
                  setIsAddingMarketplace(true);
                  setEditingMarketplace({ id: '', name: '', description: '', location: '', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80&auto=format&fit=crop', tags: ['Crafts'] });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs rounded-xl shadow-sm transition"
              >
                <Plus className="w-4 h-4" />
                Add Marketplace
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketplaces.map((market) => (
                <div key={market.id} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 flex items-start justify-between gap-3 group">
                  <div className="flex gap-3">
                    <UnsplashImage src={market.image || FALLBACK_MARKETPLACE_IMAGE} fallbackSrc={FALLBACK_MARKETPLACE_IMAGE} alt={market.name} onError={(e) => handleImageError(e, FALLBACK_MARKETPLACE_IMAGE)} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                    <div>
                      <h3 className="font-bold text-sm text-gray-900 dark:text-white">{market.name}</h3>
                      <p className="text-[11px] text-forest-600 dark:text-forest-400 font-semibold">{market.location}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{market.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => { setEditingMarketplace(market); setIsAddingMarketplace(false); }}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-forest-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteMarketplace(market.id)}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FEEDBACK */}
        {activeTab === 'feedback' && (
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200/80 dark:border-gray-800 p-6 shadow-sm">
            <h2 className="text-lg font-bold font-display text-gray-900 dark:text-white mb-1">User Feedbacks & Suggestions</h2>
            <p className="text-xs text-gray-500 mb-6">Recent inquiries, suggestions, and praises recorded in the database.</p>

            {feedbacks.length === 0 ? (
              <div className="text-center py-12 text-gray-400 text-xs font-semibold">
                No feedback entries recorded in database yet.
              </div>
            ) : (
              <div className="space-y-3">
                {feedbacks.map((f) => (
                  <div key={f.id} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-900 dark:text-white">{f.user_name}</span>
                        <span className="text-[10px] text-gray-400">({f.user_email})</span>
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                          f.category === 'bug' ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' :
                          f.category === 'praise' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' :
                          'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                        }`}>
                          {f.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed italic">"{f.message}"</p>
                      <p className="text-[10px] text-gray-400">{new Date(f.created_at).toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => deleteFeedback(f.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* EDIT/ADD DESTINATION MODAL */}
      {editingDestination && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full max-w-lg overflow-hidden p-6">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-lg">{isAddingDestination ? 'Add Destination' : 'Edit Destination'}</h3>
              <button onClick={() => setEditingDestination(null)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleUpdateDestination(editingDestination); }} className="space-y-4">
              <input type="text" placeholder="Destination Name" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm outline-none" value={editingDestination.name} onChange={(e) => setEditingDestination({ ...editingDestination, name: e.target.value })} />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="Emoji (e.g. ðŸ°)" className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingDestination.emoji} onChange={(e) => setEditingDestination({ ...editingDestination, emoji: e.target.value })} />
                <input type="text" placeholder="Tag (e.g. Historical)" className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingDestination.tag} onChange={(e) => setEditingDestination({ ...editingDestination, tag: e.target.value })} />
              </div>
              <textarea placeholder="Description" required rows={3} className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm outline-none resize-none" value={editingDestination.desc} onChange={(e) => setEditingDestination({ ...editingDestination, desc: e.target.value })} />
              <input type="text" placeholder="Location (City, State)" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingDestination.location} onChange={(e) => setEditingDestination({ ...editingDestination, location: e.target.value })} />
              <input type="text" placeholder="Image URL (e.g. https://images.unsplash.com/...)" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingDestination.image} onChange={(e) => setEditingDestination({ ...editingDestination, image: e.target.value })} />
              
              <div className="flex gap-3 pt-3">
                <button type="button" onClick={() => setEditingDestination(null)} className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 font-bold text-xs">Cancel</button>
                <button type="submit" className="flex-1 py-3 rounded-xl bg-forest-600 text-white font-bold text-xs hover:bg-forest-700">Save Destination</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT/ADD EVENT MODAL */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full max-w-lg overflow-hidden p-6">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-lg">{isAddingEvent ? 'Add Event' : 'Edit Event'}</h3>
              <button onClick={() => setEditingEvent(null)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleUpdateEvent(editingEvent); }} className="space-y-4">
              <input type="text" placeholder="Event Name" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm outline-none" value={editingEvent.name} onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })} />
              <textarea placeholder="Description" required rows={3} className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm outline-none resize-none" value={editingEvent.description} onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })} />
              <div className="grid grid-cols-2 gap-3">
                <input type="date" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingEvent.date_start} onChange={(e) => setEditingEvent({ ...editingEvent, date_start: e.target.value })} />
                <input type="date" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingEvent.date_end} onChange={(e) => setEditingEvent({ ...editingEvent, date_end: e.target.value })} />
              </div>
              <input type="text" placeholder="Location" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingEvent.location} onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })} />
              <input type="text" placeholder="Image URL (e.g. https://images.unsplash.com/...)" className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingEvent.image_url || ''} onChange={(e) => setEditingEvent({ ...editingEvent, image_url: e.target.value })} />
              
              <div className="flex gap-3 pt-3">
                <button type="button" onClick={() => setEditingEvent(null)} className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 font-bold text-xs">Cancel</button>
                <button type="submit" className="flex-1 py-3 rounded-xl bg-forest-600 text-white font-bold text-xs hover:bg-forest-700">Save Event</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT/ADD MARKETPLACE MODAL */}
      {editingMarketplace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full max-w-lg overflow-hidden p-6">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-lg">{isAddingMarketplace ? 'Add Marketplace' : 'Edit Marketplace'}</h3>
              <button onClick={() => setEditingMarketplace(null)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleUpdateMarketplace(editingMarketplace); }} className="space-y-4">
              <input type="text" placeholder="Marketplace Name" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm outline-none" value={editingMarketplace.name} onChange={(e) => setEditingMarketplace({ ...editingMarketplace, name: e.target.value })} />
              <textarea placeholder="Description" required rows={3} className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm outline-none resize-none" value={editingMarketplace.description} onChange={(e) => setEditingMarketplace({ ...editingMarketplace, description: e.target.value })} />
              <input type="text" placeholder="Location (e.g. INA, New Delhi)" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingMarketplace.location} onChange={(e) => setEditingMarketplace({ ...editingMarketplace, location: e.target.value })} />
              <input type="text" placeholder="Image URL (e.g. https://images.unsplash.com/...)" required className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingMarketplace.image} onChange={(e) => setEditingMarketplace({ ...editingMarketplace, image: e.target.value })} />
              <input type="text" placeholder="Tags (comma separated, e.g. Crafts, Food)" className="w-full px-4 py-2.5 rounded-xl border dark:bg-gray-800 text-sm" value={editingMarketplace.tags.join(', ')} onChange={(e) => setEditingMarketplace({ ...editingMarketplace, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })} />
              
              <div className="flex gap-3 pt-3">
                <button type="button" onClick={() => setEditingMarketplace(null)} className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 font-bold text-xs">Cancel</button>
                <button type="submit" className="flex-1 py-3 rounded-xl bg-forest-600 text-white font-bold text-xs hover:bg-forest-700">Save Market</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;








