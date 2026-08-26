import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Sparkles, 
  Send, 
  Compass, 
  MapPin, 
  Calendar, 
  DollarSign, 
  User as UserIcon, 
  Clock, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  RotateCcw, 
  Copy, 
  Check, 
  Search, 
  Volume2, 
  VolumeX, 
  Printer, 
  Dices, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { DESTINATIONS, AiDestination, SYSTEM_PROMPT } from './utils/aiData';
import { handleImageError, FALLBACK_DESTINATION_IMAGE } from './utils/imageFallback';
import { 
  getOrCreateActiveChat, 
  saveMessageToSupabase, 
  fetchChatMessages, 
  saveDbItinerary,
  getDbDestinations,
  getDbItineraries
} from './services/supabaseService';
import type { Message, ItineraryRecord } from './types';
import { useAuth } from './contexts/AuthContext';

// Multi-key load-balanced pool parser (19 Active Keys)
function getGeminiApiKeys(): string[] {
  const raw = import.meta.env.VITE_GEMINI_API_KEYS || '';
  return raw
    .split(',')
    .map((k: string) => k.trim())
    .filter((k: string) => k && !k.includes('your_gemini_api_key'));
}

// Multi-model fallback caller with random load balancing across 19 keys
async function callGemini(messages: { role: string; content: string }[], systemPrompt: string) {
  const keys = getGeminiApiKeys();
  const modelsToTry = [
    'gemini-3.6-flash',
    'gemini-3.7-flash',
    'gemini-2.5-flash-lite',
    'gemini-flash-latest',
  ];

  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const startIndex = Math.floor(Math.random() * keys.length);

  for (let k = 0; k < keys.length; k++) {
    const activeKey = keys[(startIndex + k) % keys.length];

    for (const model of modelsToTry) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${activeKey}`;
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: systemPrompt }],
            },
            contents,
            generationConfig: {
              maxOutputTokens: 1600,
              temperature: 0.7,
            },
          }),
        });

        const data = await response.json();
        if (data.error) {
          continue;
        }

        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (replyText) {
          return replyText;
        }
      } catch {
        // Try next model / key
      }
    }
  }

  throw new Error("Unable to connect to travel intelligence engine. Please try again.");
}

// Lightweight inline markdown formatter that converts **bold**, *italic*, `code`, # headers, and bullet points to clean JSX
function renderInlineFormatted(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(<strong key={match.index} className="font-bold text-gray-900 dark:text-white">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(<code key={match.index} className="px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-saffron-600 dark:text-saffron-400 font-mono text-[11px]">{token.slice(1, -1)}</code>);
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(<em key={match.index} className="italic text-gray-800 dark:text-gray-200">{token.slice(1, -1)}</em>);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [text];
}

function FormattedMarkdown({ content }: { content: string }) {
  if (!content) return null;
  const lines = content.split('\n');

  return (
    <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed text-gray-800 dark:text-gray-200">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        // Header 3 / 4
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={idx} className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white pt-2 pb-0.5 border-b border-gray-100 dark:border-gray-800/80 flex items-center gap-1.5">
              {renderInlineFormatted(trimmed.slice(4))}
            </h4>
          );
        }
        if (trimmed.startsWith('## ')) {
          return (
            <h3 key={idx} className="font-bold text-sm sm:text-base text-gray-900 dark:text-white pt-2.5 pb-0.5 flex items-center gap-1.5">
              {renderInlineFormatted(trimmed.slice(3))}
            </h3>
          );
        }
        if (trimmed.startsWith('# ')) {
          return (
            <h2 key={idx} className="font-extrabold text-base text-gray-900 dark:text-white pt-3 pb-0.5">
              {renderInlineFormatted(trimmed.slice(2))}
            </h2>
          );
        }

        // Bullet point
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('â€¢ ')) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1 my-0.5 text-gray-700 dark:text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-600 dark:bg-forest-400 mt-1.5 shrink-0" />
              <div className="flex-1">
                {renderInlineFormatted(trimmed.slice(2))}
              </div>
            </div>
          );
        }

        // Numbered list (e.g. 1. , 2. )
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1 my-0.5 text-gray-700 dark:text-gray-300">
              <span className="text-[11px] font-bold text-forest-700 dark:text-forest-400 shrink-0 min-w-4">
                {numMatch[1]}.
              </span>
              <div className="flex-1">
                {renderInlineFormatted(numMatch[2])}
              </div>
            </div>
          );
        }

        // Regular paragraph
        return (
          <p key={idx} className="my-0.5">
            {renderInlineFormatted(line)}
          </p>
        );
      })}
    </div>
  );
}

// Categorized Prompt Chips
const PROMPT_CATEGORIES = [
  { id: 'all', label: 'ðŸŒŸ All Prompts' },
  { id: 'itinerary', label: 'ðŸ—ºï¸ Itineraries' },
  { id: 'food', label: 'ðŸ² Food & Bazaars' },
  { id: 'budget', label: 'ðŸŽ’ Budget & Transit' },
  { id: 'culture', label: 'ðŸ›• Temples & Culture' },
];

const CURATED_PROMPTS = [
  { category: 'itinerary', text: 'Plan a 3-day Golden Triangle (Delhi, Agra, Jaipur) express circuit' },
  { category: 'itinerary', text: '5-day tranquil Kerala backwaters, tea gardens & houseboat trip' },
  { category: 'food', text: 'Must-try street food walking tour in Varanasi & Old Delhi' },
  { category: 'food', text: 'Best handicraft bazaars and jewelry haats in Jaipur and Hyderabad' },
  { category: 'budget', text: 'How to travel across Himachal & Ladakh on a â‚¹15,000 budget' },
  { category: 'budget', text: 'Guide to luxury & Vande Bharat express train routes in India' },
  { category: 'culture', text: 'Ancient rock-cut temple wonders of Ajanta, Ellora, and Hampi' },
  { category: 'culture', text: 'Sacred river ghats, evening Ganga Aarti rituals, and dress etiquette' },
];

const POPULAR_STARTING_CITIES = [
  'New Delhi', 'Mumbai', 'Jaipur', 'Varanasi', 'Kochi', 'Bengaluru', 'Ranchi', 'Kolkata', 'Goa'
];

export default function Ai() {
  const [searchParams] = useSearchParams();
  const { user } = useAuth();

  // Tab state: 'chat' | 'plan' | 'destinations' | 'saved'
  const [activeTab, setActiveTab] = useState<'chat' | 'plan' | 'destinations' | 'saved'>(() => {
    const tab = searchParams.get('tab');
    if (tab === 'plan' || tab === 'planner') return 'plan';
    if (tab === 'destinations') return 'destinations';
    if (tab === 'saved') return 'saved';
    return 'chat';
  });

  // Chat State
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: 'Namaste! ðŸ™ I am your **WanderAI Travel Companion**. How can I help plan your journey across India today? You can ask for custom day-by-day itineraries, regional delicacies, budget tips, train routes, or cultural festival dates!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [activePromptCategory, setActivePromptCategory] = useState('all');
  const [savedSuccessMsg, setSavedSuccessMsg] = useState<string | null>(null);

  // Planner State
  const [plannerCity, setPlannerCity] = useState('');
  const [plannerDays, setPlannerDays] = useState('3');
  const [plannerStyle, setPlannerStyle] = useState('Heritage & Palaces');
  const [plannerBudget, setPlannerBudget] = useState('Mid-Range (â‚¹â‚¹)');
  const [plannerPace, setPlannerPace] = useState('Balanced');
  const [itinerary, setItinerary] = useState('');
  const [plannerLoading, setPlannerLoading] = useState(false);
  const [plannerSaved, setPlannerSaved] = useState(false);

  // Destinations & Saved Itineraries State
  const [destinationsList, setDestinationsList] = useState<AiDestination[]>(DESTINATIONS);
  const [destSearch, setDestSearch] = useState('');
  const [destTagFilter, setDestTagFilter] = useState('All');
  const [savedItinerariesList, setSavedItinerariesList] = useState<ItineraryRecord[]>([]);
  const [savedLoading, setSavedLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Load URL prompt if provided
  useEffect(() => {
    const urlPrompt = searchParams.get('prompt');
    if (urlPrompt && urlPrompt.trim()) {
      handleSend(urlPrompt.trim());
    }
  }, [searchParams]);

  // Fetch Destinations & Saved Itineraries
  useEffect(() => {
    getDbDestinations().then(data => {
      if (data && data.length > 0) setDestinationsList(data);
    });

    if (user?.id) {
      setSavedLoading(true);
      getDbItineraries(user.id).then(data => {
        if (data) setSavedItinerariesList(data);
        setSavedLoading(false);
      });
    }
  }, [user]);

  // Load chat session if logged in
  useEffect(() => {
    if (user?.id) {
      getOrCreateActiveChat(user.id).then(chat => {
        if (chat) {
          fetchChatMessages(chat.id).then((dbMsgs: Message[]) => {
            if (dbMsgs && dbMsgs.length > 0) {
              setMessages(dbMsgs.map((m: Message) => ({ role: m.role as 'user' | 'assistant', content: m.content })));
            }
          });
        }
      });
    }
  }, [user]);

  // Handle Chat Submit
  const handleSend = async (messageText?: string) => {
    const textToSend = (messageText || input).trim();
    if (!textToSend || loading) return;

    const newMsgs = [...messages, { role: 'user' as const, content: textToSend }];
    setMessages(newMsgs);
    if (!messageText) setInput('');
    setLoading(true);

    try {
      if (user?.id) {
        const chat = await getOrCreateActiveChat(user.id);
        if (chat) {
          await saveMessageToSupabase(chat.id, user.id, 'user', textToSend);
        }
      }

      const reply = await callGemini(newMsgs, SYSTEM_PROMPT);
      setMessages([...newMsgs, { role: 'assistant' as const, content: reply }]);

      if (user?.id) {
        const chat = await getOrCreateActiveChat(user.id);
        if (chat) {
          await saveMessageToSupabase(chat.id, user.id, 'assistant', reply);
        }
      }
    } catch {
      setMessages([
        ...newMsgs,
        {
          role: 'assistant' as const,
          content: 'I apologize, but I encountered a momentary connection delay. Please retry or pick one of the quick suggestions above!'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Text to Speech
  const toggleSpeech = (text: string, index: number) => {
    if ('speechSynthesis' in window) {
      if (speakingIndex === index) {
        window.speechSynthesis.cancel();
        setSpeakingIndex(null);
      } else {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/[*#`_]/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.onend = () => setSpeakingIndex(null);
        utterance.onerror = () => setSpeakingIndex(null);
        window.speechSynthesis.speak(utterance);
        setSpeakingIndex(index);
      }
    }
  };

  // Copy text handler
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  // Save itinerary to database
  const handleSaveToItineraries = async (content: string, title: string) => {
    if (!user?.id) {
      setSavedSuccessMsg('Please sign in to save itineraries to your account.');
      setTimeout(() => setSavedSuccessMsg(null), 4000);
      return;
    }

    const saved = await saveDbItinerary({
      user_id: user.id,
      days: plannerDays || 'Custom',
      interest: plannerStyle || 'General Tourism',
      budget: plannerBudget || 'Standard',
      city: plannerCity || 'India',
      destination: title || 'Curated Indian Circuit',
      itinerary_text: content,
      place_notes: 'Saved via WanderAI Intelligence'
    });

    if (saved) {
      setPlannerSaved(true);
      setSavedSuccessMsg('âœ¨ Plan saved to your Saved Itineraries!');
      getDbItineraries(user.id).then(data => {
        if (data) setSavedItinerariesList(data);
      });
      setTimeout(() => {
        setPlannerSaved(false);
        setSavedSuccessMsg(null);
      }, 4000);
    }
  };

  // Reset Chat
  const clearChat = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setMessages([
      {
        role: 'assistant',
        content: 'Chat refreshed! Where in India are we traveling next? Ask me anything!'
      }
    ]);
  };

  // Random Prompt Generator
  const handleSurpriseMe = () => {
    const random = CURATED_PROMPTS[Math.floor(Math.random() * CURATED_PROMPTS.length)];
    handleSend(random.text);
  };

  // Generate Smart Itinerary
  const handleGeneratePlanner = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!plannerCity.trim()) return;

    setPlannerLoading(true);
    setPlannerSaved(false);

    const prompt = `Create a comprehensive, highly detailed ${plannerDays}-day itinerary for ${plannerCity}, India.
- Travel Style: ${plannerStyle}
- Budget Tier: ${plannerBudget}
- Pace: ${plannerPace}

Format with:
1. Day-by-Day schedule (Morning, Afternoon, Evening) with exact highlights and travel timings.
2. Estimated daily budget breakdown in INR (â‚¹) including food, entry fees, and local transit.
3. Authentic regional foods & best local eateries to try.
4. Essential local packing, weather, and cultural guidelines.`;

    try {
      const reply = await callGemini([{ role: 'user', content: prompt }], SYSTEM_PROMPT);
      setItinerary(reply);
    } catch {
      setItinerary("Unable to generate the itinerary right now. Please try again.");
    } finally {
      setPlannerLoading(false);
    }
  };

  // Filtered Prompt Chips
  const filteredPrompts = useMemo(() => {
    if (activePromptCategory === 'all') return CURATED_PROMPTS;
    return CURATED_PROMPTS.filter(p => p.category === activePromptCategory);
  }, [activePromptCategory]);

  // Destination Categories
  const destinationTags = useMemo(() => {
    const set = new Set(destinationsList.map(d => d.tag));
    return ['All', ...Array.from(set)];
  }, [destinationsList]);

  // Filtered Destinations
  const filteredDestinations = useMemo(() => {
    return destinationsList.filter(d => {
      const matchTag = destTagFilter === 'All' || d.tag.toLowerCase() === destTagFilter.toLowerCase();
      const matchSearch = !destSearch.trim() || 
        d.name.toLowerCase().includes(destSearch.toLowerCase()) || 
        d.location.toLowerCase().includes(destSearch.toLowerCase()) || 
        d.desc.toLowerCase().includes(destSearch.toLowerCase());
      return matchTag && matchSearch;
    });
  }, [destinationsList, destTagFilter, destSearch]);

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* TOP COMMAND BAR */}
      {/* ========================================================================= */}
      <div className="sticky top-16 z-30 bg-white/90 dark:bg-obsidian-900/90 backdrop-blur-xl border-b border-gray-200/80 dark:border-gray-800 shadow-xs">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Engine Title & Health Status */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-forest-700 to-forest-500 text-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-4 h-4 text-saffron-400" />
              </div>
              <div>
                <h1 className="text-xs sm:text-sm font-bold font-display text-gray-900 dark:text-white flex items-center gap-1.5">
                  <span>WanderAI Engine</span>
                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> 19-Key Pool
                  </span>
                </h1>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 hidden sm:block">
                  Live AI Travel Planner, Cultural Guide & Indian Routes
                </p>
              </div>
            </div>

            {/* Quick Surprise Me button on mobile header */}
            <button
              onClick={handleSurpriseMe}
              className="sm:hidden px-2.5 py-1 rounded-xl bg-saffron-50 dark:bg-saffron-950/60 text-saffron-700 dark:text-saffron-300 border border-saffron-200 dark:border-saffron-800 text-[11px] font-bold flex items-center gap-1"
            >
              <Dices className="w-3 h-3" />
              <span>Surprise</span>
            </button>
          </div>

          {/* Interactive Mode Switcher Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-100 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/60 w-full sm:w-auto justify-center">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'chat'
                  ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
              <span>AI Chat</span>
            </button>

            <button
              onClick={() => setActiveTab('plan')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'plan'
                  ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
              <span>Trip Planner</span>
            </button>

            <button
              onClick={() => setActiveTab('destinations')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'destinations'
                  ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-emerald-500" />
              <span>Explore ({destinationsList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'saved'
                  ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-500" />
              <span>Saved</span>
            </button>
          </div>

        </div>
      </div>

      {/* Global Notification Toast */}
      {savedSuccessMsg && (
        <div className="fixed bottom-5 right-5 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="px-4 py-2.5 rounded-2xl bg-forest-900 text-white text-xs font-bold shadow-2xl border border-forest-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{savedSuccessMsg}</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: AI CHAT COMPANION */}
      {/* ========================================================================= */}
      {activeTab === 'chat' && (
        <div className="flex-1 max-w-5xl w-full mx-auto px-3 sm:px-6 py-3 flex flex-col">
          
          {/* Topic Pills Toolbar */}
          <div className="mb-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5">
                {PROMPT_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActivePromptCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all whitespace-nowrap ${
                      activePromptCategory === cat.id
                        ? 'bg-forest-700 text-white shadow-xs'
                        : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200/80 dark:border-gray-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 shrink-0 pl-2">
                <button
                  onClick={handleSurpriseMe}
                  className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-saffron-50 dark:bg-saffron-950/60 text-saffron-700 dark:text-saffron-300 border border-saffron-200 dark:border-saffron-800 text-[11px] font-bold hover:bg-saffron-100 transition"
                  title="Generate a random travel prompt"
                >
                  <Dices className="w-3.5 h-3.5" />
                  <span>Surprise Me</span>
                </button>

                <button
                  onClick={clearChat}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition"
                  title="Clear conversation"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span className="hidden sm:inline">Clear</span>
                </button>
              </div>
            </div>

            {/* Quick Prompts Carousel */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {filteredPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(p.text)}
                  className="whitespace-nowrap px-3 py-1.5 rounded-xl text-[11px] font-semibold bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-forest-500 hover:text-forest-700 dark:hover:text-forest-300 transition-all shadow-2xs shrink-0 flex items-center gap-1.5"
                >
                  <span>{p.text}</span>
                  <ArrowRight className="w-3 h-3 text-saffron-500 opacity-60" />
                </button>
              ))}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-sm overflow-hidden h-[calc(100vh-230px)] min-h-[380px] max-h-[700px]">
            
            {/* Scrollable Message History */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-4">
              {messages.map((msg, index) => {
                const isBot = msg.role === 'assistant';
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-2.5 sm:gap-3.5 max-w-3xl ${
                      isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-7 h-7 sm:w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                        isBot
                          ? 'bg-gradient-to-tr from-forest-700 to-forest-500 text-white'
                          : 'bg-gradient-to-tr from-saffron-500 to-saffron-600 text-white'
                      }`}
                    >
                      {isBot ? <Sparkles className="w-3.5 h-3.5 text-saffron-300" /> : <UserIcon className="w-3.5 h-3.5" />}
                    </div>

                    {/* Chat Bubble */}
                    <div className="flex-1 space-y-1.5">
                      <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider ${isBot ? 'text-forest-700 dark:text-forest-400' : 'text-saffron-700 dark:text-saffron-400 justify-end'}`}>
                        <span>{isBot ? 'WanderAI Guide' : 'You'}</span>
                      </div>

                      <div
                        className={`p-3 sm:p-4 rounded-2xl transition-all ${
                          isBot
                            ? 'bg-gray-50 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 border border-gray-200/80 dark:border-gray-700/60 shadow-xs'
                            : 'bg-forest-700 text-white shadow-sm'
                        }`}
                      >
                        <FormattedMarkdown content={msg.content} />

                        {/* Actions Toolbar for Bot Responses */}
                        {isBot && index > 0 && (
                          <div className="mt-2.5 pt-2 border-t border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between text-[11px]">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleCopy(msg.content, index)}
                                className="inline-flex items-center gap-1 font-semibold text-gray-500 dark:text-gray-400 hover:text-forest-600 dark:hover:text-forest-400 transition"
                                title="Copy to clipboard"
                              >
                                {copiedIndex === index ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-500" />
                                    <span className="text-emerald-500 font-bold">Copied</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Copy</span>
                                  </>
                                )}
                              </button>

                              <button
                                onClick={() => toggleSpeech(msg.content, index)}
                                className="inline-flex items-center gap-1 font-semibold text-gray-500 dark:text-gray-400 hover:text-saffron-600 dark:hover:text-saffron-400 transition"
                                title="Listen with speech synthesis"
                              >
                                {speakingIndex === index ? (
                                  <>
                                    <VolumeX className="w-3 h-3 text-red-500" />
                                    <span className="text-red-500">Stop</span>
                                  </>
                                ) : (
                                  <>
                                    <Volume2 className="w-3 h-3" />
                                    <span>Listen</span>
                                  </>
                                )}
                              </button>
                            </div>

                            <button
                              onClick={() => handleSaveToItineraries(msg.content, 'AI Travel Recommendation')}
                              className="inline-flex items-center gap-1 font-bold text-forest-700 dark:text-forest-400 hover:underline"
                              title="Save to My Saved Itineraries"
                            >
                              <Bookmark className="w-3 h-3" />
                              <span>Save Plan</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing / Streaming Indicator */}
              {loading && (
                <div className="flex items-start gap-2.5 sm:gap-3.5 max-w-3xl mr-auto animate-in fade-in">
                  <div className="w-7 h-7 sm:w-8 h-8 rounded-xl bg-forest-700 text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60 flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
                    <span>WanderAI is researching destinations & routesâ€¦</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Bar */}
            <div className="p-2.5 sm:p-3 bg-white dark:bg-gray-900 border-t border-gray-200/80 dark:border-gray-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about destinations, budget, trains, heritage, food..."
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-forest-500 dark:focus:border-forest-500 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none transition"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="px-4 py-2.5 rounded-2xl bg-forest-700 hover:bg-forest-800 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SMART DAY-BY-DAY TRIP PLANNER */}
      {/* ========================================================================= */}
      {activeTab === 'plan' && (
        <div className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-4 space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Visual Configurator Form */}
            <div className="lg:col-span-5 bg-white dark:bg-gray-900 rounded-3xl p-5 sm:p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest-100 dark:bg-forest-950 text-forest-700 dark:text-forest-400 border border-forest-200 dark:border-forest-800 mb-2">
                  <Calendar className="w-3 h-3 text-forest-600" /> Interactive Generator
                </span>
                <h2 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white">
                  Craft Your Custom Itinerary
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Select your destination, rhythm, budget, and travel days.
                </p>
              </div>

              <form onSubmit={handleGeneratePlanner} className="space-y-4">
                
                {/* 1. Destination / Starting City */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-saffron-500" /> Destination or Region:
                  </label>
                  <input
                    type="text"
                    value={plannerCity}
                    onChange={(e) => setPlannerCity(e.target.value)}
                    placeholder="e.g. Jaipur & Udaipur, Kerala Backwaters, Ladakh..."
                    required
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                  {/* Quick City Chips */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {POPULAR_STARTING_CITIES.map(city => (
                      <button
                        type="button"
                        key={city}
                        onClick={() => setPlannerCity(city)}
                        className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-forest-100 hover:text-forest-700 transition"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Duration Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-forest-600" /> Trip Duration:
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { days: '2', label: '2 Days' },
                      { days: '3', label: '3 Days' },
                      { days: '5', label: '5 Days' },
                      { days: '7', label: '7 Days' },
                    ].map(d => (
                      <button
                        type="button"
                        key={d.days}
                        onClick={() => setPlannerDays(d.days)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all ${
                          plannerDays === d.days
                            ? 'bg-forest-700 text-white shadow-xs'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Travel Vibe & Rhythm */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-saffron-500" /> Travel Vibe:
                  </label>
                  <select
                    value={plannerStyle}
                    onChange={(e) => setPlannerStyle(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-500"
                  >
                    <option>ðŸ° Heritage & Royal Palaces</option>
                    <option>ðŸŒ¿ Nature, Waterfalls & Eco-Trails</option>
                    <option>ðŸ•‰ï¸ Spiritual Ghats & Ancient Temples</option>
                    <option>â›°ï¸ High Altitude Adventure & Treks</option>
                    <option>ðŸ² Authentic Food, Spices & Bazaars</option>
                    <option>ðŸ–ï¸ Coastal Beaches & Relaxation</option>
                  </select>
                </div>

                {/* 4. Pace & Budget */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Travel Pace:</label>
                    <select
                      value={plannerPace}
                      onChange={(e) => setPlannerPace(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option>Relaxed</option>
                      <option>Balanced</option>
                      <option>Fast-Paced</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-emerald-600" /> Budget:
                    </label>
                    <select
                      value={plannerBudget}
                      onChange={(e) => setPlannerBudget(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option>Budget (â‚¹)</option>
                      <option>Mid-Range (â‚¹â‚¹)</option>
                      <option>Luxury (â‚¹â‚¹â‚¹)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={plannerLoading || !plannerCity.trim()}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-forest-700 to-forest-800 hover:from-forest-800 hover:to-forest-900 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition transform active:scale-98"
                >
                  {plannerLoading ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-saffron-300" />
                      <span>Generating Detailed Itineraryâ€¦</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-saffron-400" />
                      <span>Generate Day-by-Day Itinerary</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Generated Itinerary View */}
            <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-3xl p-5 sm:p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              
              {itinerary ? (
                <div className="space-y-4">
                  {/* Result Header & Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <h3 className="text-base font-bold font-display text-gray-900 dark:text-white">
                        {plannerCity} â€” {plannerDays}-Day Trip Plan
                      </h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        {plannerStyle} â€¢ {plannerBudget} â€¢ {plannerPace}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.print()}
                        className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition text-xs font-bold flex items-center gap-1"
                        title="Print or save as PDF"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Print</span>
                      </button>

                      <button
                        onClick={() => handleCopy(itinerary, 999)}
                        className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition text-xs font-bold flex items-center gap-1"
                        title="Copy full itinerary"
                      >
                        {copiedIndex === 999 ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-500">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Copy</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleSaveToItineraries(itinerary, `${plannerCity} ${plannerDays}-Day Plan`)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                          plannerSaved
                            ? 'bg-emerald-600 text-white'
                            : 'bg-forest-700 hover:bg-forest-800 text-white'
                        }`}
                      >
                        {plannerSaved ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                        <span>{plannerSaved ? 'Saved' : 'Save Plan'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Formatted Content */}
                  <div className="overflow-y-auto max-h-[520px] pr-2">
                    <FormattedMarkdown content={itinerary} />
                  </div>
                </div>
              ) : (
                <div className="py-16 text-center space-y-3 my-auto">
                  <div className="w-12 h-12 rounded-2xl bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 flex items-center justify-center mx-auto text-xl shadow-xs">
                    ðŸ—ºï¸
                  </div>
                  <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
                    Ready to Generate Your Indian Adventure
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                    Pick a starting city and your preferred rhythm on the left, then click <b>Generate Day-by-Day Itinerary</b> to view complete routes, costs, and local cuisine.
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: DESTINATIONS CATALOGUE EXPLORER */}
      {/* ========================================================================= */}
      {activeTab === 'destinations' && (
        <div className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-4 space-y-5">
          
          {/* Header & Filter Toolbar */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-4 sm:p-5 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={destSearch}
                  onChange={(e) => setDestSearch(e.target.value)}
                  placeholder="Search destinations by name, state, or vibe..."
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500"
                />
              </div>

              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                Showing <b>{filteredDestinations.length}</b> handpicked Indian wonders
              </div>
            </div>

            {/* Category Tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-t border-gray-100 dark:border-gray-800 pt-2">
              {destinationTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setDestTagFilter(tag)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    destTagFilter === tag
                      ? 'bg-forest-700 text-white shadow-xs'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Destinations Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id || dest.name}
                className="group flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={dest.image || 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80&auto=format&fit=crop'}
                    alt={dest.name}
                    onError={(e) => handleImageError(e, FALLBACK_DESTINATION_IMAGE)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-saffron-500 text-white text-[10px] font-bold uppercase tracking-wider">
                      {dest.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3">
                    <h3 className="text-base font-bold font-display text-white drop-shadow-sm flex items-center gap-1.5">
                      <span>{dest.name}</span>
                    </h3>
                    <div className="flex items-center text-[11px] text-gray-200 mt-0.5">
                      <MapPin className="w-3 h-3 text-saffron-400 mr-1 shrink-0" />
                      <span>{dest.location}</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {dest.desc}
                  </p>

                  <div className="pt-2.5 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.name + ' ' + dest.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition text-xs font-bold flex items-center gap-1"
                      title="View on Google Maps"
                    >
                      <ExternalLink className="w-3 h-3 text-forest-600 dark:text-forest-400" />
                      <span>Map</span>
                    </a>

                    <button
                      onClick={() => {
                        setPlannerCity(dest.location.split(',')[0]);
                        setActiveTab('plan');
                      }}
                      className="flex-1 px-3 py-2 rounded-xl bg-forest-700 hover:bg-forest-800 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-xs transition"
                    >
                      <Sparkles className="w-3 h-3 text-saffron-400" />
                      <span>Plan Trip Here</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SAVED ITINERARIES & TRIPS */}
      {/* ========================================================================= */}
      {activeTab === 'saved' && (
        <div className="flex-1 max-w-5xl w-full mx-auto px-3 sm:px-6 py-4 space-y-5">
          
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-saffron-500" />
                <span>My Saved Itineraries</span>
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Access your custom travel plans saved from WanderAI Chat & Planner.
              </p>
            </div>

            <button
              onClick={() => setActiveTab('plan')}
              className="px-3.5 py-1.5 rounded-xl bg-forest-700 text-white text-xs font-bold flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-saffron-400" />
              <span>Create New</span>
            </button>
          </div>

          {savedLoading ? (
            <div className="py-12 text-center text-xs text-gray-400">
              Loading your saved itinerariesâ€¦
            </div>
          ) : savedItinerariesList.length === 0 ? (
            <div className="py-16 text-center rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 space-y-3">
              <Bookmark className="w-8 h-8 text-gray-400 mx-auto" />
              <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                No saved itineraries yet
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Generate an itinerary in <b>Trip Planner</b> or chat with <b>WanderAI</b> and click <b>Save Plan</b> to store it here.
              </p>
              <button
                onClick={() => setActiveTab('plan')}
                className="px-4 py-2 rounded-xl bg-forest-700 text-white text-xs font-bold"
              >
                Launch Trip Planner
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {savedItinerariesList.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 p-5 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2.5">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                        {String(item.destination || item.city || 'Saved Indian Itinerary')}
                      </h4>
                      <p className="text-[11px] text-gray-500">
                        {String(item.days || '')} Days â€¢ {String(item.interest || '')} â€¢ {String(item.budget || '')}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopy(String(item.itinerary_text || ''), idx + 1000)}
                      className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-semibold flex items-center gap-1"
                    >
                      {copiedIndex === idx + 1000 ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      <span>Copy</span>
                    </button>
                  </div>
                  <div className="max-h-60 overflow-y-auto pr-2 text-xs">
                    <FormattedMarkdown content={String(item.itinerary_text || '')} />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      )}

    </div>
  );
}


