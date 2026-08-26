import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Trash2,
  Lock,
  Sparkles,
  Send,
  Compass,
  Star,
  MapPin,
  Calendar,
  DollarSign,
  User as UserIcon,
  Clock,
  Bookmark,
  RotateCcw,
  Copy,
  Check,
  Search,
  Volume2,
  VolumeX,
  Printer,
  Dices,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Bot,
  MessageSquare,
  Plus,
  MessageCircle,
  FolderBookmark,
  Layers
} from 'lucide-react';
import { DESTINATIONS, AiDestination, SYSTEM_PROMPT } from './utils/aiData';
import {
  deleteDbItinerary,
  getUserChats,
  createNewUserChat,
  deleteUserChat,
  updateChatTitle,
  getOrCreateActiveChat,
  saveMessageToSupabase,
  fetchChatMessages,
  saveDbItinerary,
  getDbDestinations,
  getDbItineraries
} from './services/supabaseService';
import { DetailModal } from './components/DetailModal';
import { Destination, Message, ItineraryRecord, Chat } from './types';
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

  const startIndex = Math.floor(Math.random() * (keys.length || 1));

  for (let k = 0; k < (keys.length || 1); k++) {
    const activeKey = keys.length > 0 ? keys[(startIndex + k) % keys.length] : '';

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

// Intelligent content-based chat title generator
function generateChatTitle(query: string): string {
  let clean = query.trim()
    .replace(/^(hi|hello|hey|namaste|please|can you|help me|tell me|i want to|plan a|plan an|suggest a|guide me for|create a)\s+/i, '')
    .replace(/[?!.,]+$/, '');

  if (!clean) return 'Indian Travel Discussion';

  const words = clean.split(/\s+/).slice(0, 6);
  const formatted = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return formatted.length > 36 ? formatted.slice(0, 34) + '…' : formatted;
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
    <div className="space-y-1 text-xs sm:text-[13px] leading-relaxed text-gray-800 dark:text-gray-200">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-0.5" />;
        }

        // Header 3 / 4
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={idx} className="font-bold text-xs sm:text-[13px] text-gray-900 dark:text-white pt-1.5 pb-0.5 border-b border-gray-100 dark:border-gray-800/80 flex items-center gap-1.5">
              {renderInlineFormatted(trimmed.slice(4))}
            </h4>
          );
        }
        if (trimmed.startsWith('## ')) {
          return (
            <h3 key={idx} className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white pt-2 pb-0.5 flex items-center gap-1.5">
              {renderInlineFormatted(trimmed.slice(3))}
            </h3>
          );
        }
        if (trimmed.startsWith('# ')) {
          return (
            <h2 key={idx} className="font-extrabold text-sm sm:text-base text-gray-900 dark:text-white pt-2.5 pb-0.5">
              {renderInlineFormatted(trimmed.slice(2))}
            </h2>
          );
        }

        // Bullet point
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
          return (
            <div key={idx} className="flex items-start gap-1.5 pl-0.5 my-0.5 text-gray-700 dark:text-gray-300">
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
            <div key={idx} className="flex items-start gap-1.5 pl-0.5 my-0.5 text-gray-700 dark:text-gray-300">
              <span className="text-[11px] font-bold text-forest-700 dark:text-forest-400 shrink-0 min-w-3.5">
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
  { id: 'all', label: '🌟 All' },
  { id: 'itinerary', label: '🗺️ Itineraries' },
  { id: 'food', label: '🍲 Food & Markets' },
  { id: 'budget', label: '🎒 Budget & Transit' },
  { id: 'culture', label: '🛕 Temples & Culture' },
];

const CURATED_PROMPTS = [
  { category: 'itinerary', text: 'Plan a 3-day Golden Triangle (Delhi, Agra, Jaipur) express circuit', icon: '🏛️' },
  { category: 'itinerary', text: '5-day tranquil Kerala backwaters, tea gardens & houseboat trip', icon: '🚣' },
  { category: 'food', text: 'Must-try street food walking tour in Varanasi & Old Delhi', icon: '🥘' },
  { category: 'food', text: 'Best handicraft marketplaces and jewelry haats in Jaipur and Hyderabad', icon: '🛍️' },
  { category: 'budget', text: 'How to travel across Himachal & Ladakh on a ₹15,000 budget', icon: '💰' },
  { category: 'budget', text: 'Guide to luxury & Vande Bharat express train routes in India', icon: '🚆' },
  { category: 'culture', text: 'Ancient rock-cut temple wonders of Ajanta, Ellora, and Hampi', icon: '🛕' },
  { category: 'culture', text: 'Sacred river ghats, evening Ganga Aarti rituals, and dress etiquette', icon: '✨' },
];

const POPULAR_STARTING_CITIES = [
  'New Delhi', 'Mumbai', 'Jaipur', 'Varanasi', 'Kochi', 'Bengaluru', 'Ranchi', 'Kolkata', 'Goa', 'Amritsar', 'Udaipur'
];

const DEFAULT_GREETING_MESSAGE = {
  role: 'assistant' as const,
  content: 'Namaste! 🙏 I am your **WanderAI Travel Companion**. How can I help plan your journey across India today? You can ask for custom day-by-day itineraries, regional delicacies, budget tips in ₹, train routes, or cultural festival dates!'
};

export default function Ai() {
  const [searchParams] = useSearchParams();
  const { user } = useAuth();

  // Floating Detail Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<Destination | null>(null);

  const handleOpenDestModal = (dest: AiDestination) => {
    const d: Destination = {
      id: dest.id,
      name: dest.name,
      district: dest.location ? dest.location.split(',')[0].trim() : 'India',
      state: dest.state || (dest.location ? dest.location.split(',')[1]?.trim() : 'India'),
      category: (dest.category || dest.tag?.toLowerCase() || 'historical') as Destination['category'],
      description: dest.desc,
      short_description: dest.desc,
      best_time: dest.best_time,
      entry_fee: dest.entry_fee || 0,
      rating: dest.rating || 4.8,
      famous_things: dest.famous_things,
      nearby_markets: dest.nearby_markets,
      local_festivals: dest.local_festivals,
      transit_info: dest.transit_info,
      is_featured: true,
      created_at: new Date().toISOString()
    };
    setModalItem(d);
    setIsModalOpen(true);
  };

  // Tab state: 'chat' | 'plan' | 'destinations' | 'saved'
  const [activeTab, setActiveTab] = useState<'chat' | 'plan' | 'destinations' | 'saved'>(() => {
    const tab = searchParams.get('tab');
    if (tab === 'plan' || tab === 'planner') return 'plan';
    if (tab === 'destinations') return 'destinations';
    if (tab === 'saved') return 'saved';
    return 'chat';
  });

  // Sidebar Internal Tab: 'chats' | 'saved'
  const [sidebarTab, setSidebarTab] = useState<'chats' | 'saved'>('chats');

  // Chat State
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([DEFAULT_GREETING_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [activePromptCategory, setActivePromptCategory] = useState('all');
  const [savedSuccessMsg, setSavedSuccessMsg] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Multi-Chat History Sessions State (for logged-in users)
  const [userChats, setUserChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [chatsLoading, setChatsLoading] = useState(false);

  // Planner State
  const [plannerCity, setPlannerCity] = useState('');
  const [plannerDays, setPlannerDays] = useState('3');
  const [plannerStyle, setPlannerStyle] = useState('Heritage & Palaces');
  const [plannerBudget, setPlannerBudget] = useState('Mid-Range (₹₹)');
  const [plannerPace, setPlannerPace] = useState('Balanced');
  const [itinerary, setItinerary] = useState('');
  const [plannerLoading, setPlannerLoading] = useState(false);
  const [plannerSaved, setPlannerSaved] = useState(false);

  // Destinations & Saved Itineraries State
  const [destinationsList, setDestinationsList] = useState<AiDestination[]>(DESTINATIONS);
  const [destSearch, setDestSearch] = useState('');
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

  // Load URL params if provided
  useEffect(() => {
    const urlPrompt = searchParams.get('prompt');
    if (urlPrompt && urlPrompt.trim()) {
      handleSend(urlPrompt.trim());
    }
    const destParam = searchParams.get('destination');
    if (destParam && destParam.trim()) {
      setPlannerCity(destParam.trim());
    }
    const daysParam = searchParams.get('days');
    if (daysParam && daysParam.trim()) {
      setPlannerDays(daysParam.trim());
    }
    const tabParam = searchParams.get('tab');
    if (tabParam === 'saved') {
      setSidebarTab('saved');
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
    } else {
      setSavedItinerariesList([]);
      setSavedLoading(false);
    }
  }, [user]);

  // Load Chat History Sessions for logged-in user
  useEffect(() => {
    if (user?.id) {
      setChatsLoading(true);
      getUserChats(user.id).then(chats => {
        setChatsLoading(false);
        if (chats && chats.length > 0) {
          setUserChats(chats);
          const firstChat = chats[0];
          setActiveChatId(firstChat.id);
          fetchChatMessages(firstChat.id).then((dbMsgs: Message[]) => {
            if (dbMsgs && dbMsgs.length > 0) {
              setMessages(dbMsgs.map((m: Message) => ({ role: m.role as 'user' | 'assistant', content: m.content })));
            } else {
              setMessages([DEFAULT_GREETING_MESSAGE]);
            }
          });
        } else {
          // Create initial chat session
          getOrCreateActiveChat(user.id, 'WanderAI Travel Plan').then(newChat => {
            if (newChat) {
              setUserChats([newChat]);
              setActiveChatId(newChat.id);
            }
          });
          setMessages([DEFAULT_GREETING_MESSAGE]);
        }
      });
    } else {
      setUserChats([]);
      setActiveChatId(null);
      setMessages([DEFAULT_GREETING_MESSAGE]);
    }
  }, [user]);

  // Switch to a specific chat session
  const handleSelectChat = async (chat: Chat) => {
    if (chat.id === activeChatId) return;
    setActiveChatId(chat.id);
    setLoading(true);
    try {
      const dbMsgs = await fetchChatMessages(chat.id);
      if (dbMsgs && dbMsgs.length > 0) {
        setMessages(dbMsgs.map((m: Message) => ({ role: m.role as 'user' | 'assistant', content: m.content })));
      } else {
        setMessages([DEFAULT_GREETING_MESSAGE]);
      }
    } finally {
      setLoading(false);
    }
  };

  // Create a brand new chat session
  const handleCreateNewChat = async () => {
    if (!user?.id) {
      // For guests, reset in-memory conversation
      setMessages([DEFAULT_GREETING_MESSAGE]);
      return;
    }

    setLoading(true);
    try {
      const newChat = await createNewUserChat(user.id, 'New Travel Discussion');
      if (newChat) {
        setUserChats(prev => [newChat, ...prev]);
        setActiveChatId(newChat.id);
        setMessages([DEFAULT_GREETING_MESSAGE]);
      }
    } finally {
      setLoading(false);
    }
  };

  // Delete a chat session
  const handleDeleteChat = async (e: React.MouseEvent, chatId: string) => {
    e.stopPropagation();
    if (!user?.id || !chatId) return;

    const ok = await deleteUserChat(chatId, user.id);
    if (ok) {
      const remaining = userChats.filter(c => c.id !== chatId);
      setUserChats(remaining);
      if (activeChatId === chatId) {
        if (remaining.length > 0) {
          handleSelectChat(remaining[0]);
        } else {
          handleCreateNewChat();
        }
      }
      setSavedSuccessMsg('Chat removed from history.');
      setTimeout(() => setSavedSuccessMsg(null), 2500);
    }
  };

  // Handle Chat Submit
  const handleSend = async (messageText?: string) => {
    const textToSend = (messageText || input).trim();
    if (!textToSend || loading) return;

    const newMsgs = [...messages, { role: 'user' as const, content: textToSend }];
    setMessages(newMsgs);
    if (!messageText) setInput('');
    setLoading(true);

    try {
      let currentChatId = activeChatId;

      // Ensure active chat session exists for user and auto-name intelligently based on content
      if (user?.id) {
        const smartTitle = generateChatTitle(textToSend);

        if (!currentChatId) {
          const newChat = await getOrCreateActiveChat(user.id, smartTitle);
          if (newChat) {
            currentChatId = newChat.id;
            setActiveChatId(newChat.id);
            setUserChats(prev => [newChat, ...prev]);
          }
        } else {
          // If first user message or still default title, update chat title to reflect content
          const existingChat = userChats.find(c => c.id === currentChatId);
          if (messages.length <= 1 || existingChat?.title === 'New Travel Discussion' || existingChat?.title === 'WanderAI Travel Plan') {
            updateChatTitle(currentChatId, user.id, smartTitle);
            setUserChats(prev => prev.map(c => c.id === currentChatId ? { ...c, title: smartTitle } : c));
          }
        }

        if (currentChatId) {
          await saveMessageToSupabase(currentChatId, user.id, 'user', textToSend);
        }
      }

      const reply = await callGemini(newMsgs, SYSTEM_PROMPT);
      setMessages([...newMsgs, { role: 'assistant' as const, content: reply }]);

      if (user?.id && currentChatId) {
        await saveMessageToSupabase(currentChatId, user.id, 'assistant', reply);
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

  // Delete saved itinerary
  const handleDeleteItinerary = async (id?: string) => {
    if (!id || !user?.id) return;
    const ok = await deleteDbItinerary(id, user.id);
    if (ok) {
      setSavedItinerariesList(prev => prev.filter(item => item.id !== id));
      setSavedSuccessMsg('Itinerary removed from saved plans.');
      setTimeout(() => setSavedSuccessMsg(null), 3000);
    }
  };

  // Save itinerary to database
  const handleSaveToItineraries = async (content: string, title: string) => {
    if (!user?.id) {
      setSavedSuccessMsg('Please sign in to save itineraries to your tourist account.');
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
      setSavedSuccessMsg('✨ Plan saved to your Saved Itineraries!');
      getDbItineraries(user.id).then(data => {
        if (data) setSavedItinerariesList(data);
      });
      setTimeout(() => {
        setPlannerSaved(false);
        setSavedSuccessMsg(null);
      }, 4000);
    }
  };

  // Random Surprise Me prompt
  const handleSurpriseMe = () => {
    const random = CURATED_PROMPTS[Math.floor(Math.random() * CURATED_PROMPTS.length)];
    handleSend(random.text);
  };

  // Generator for Planner Form
  const handleGeneratePlanner = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!plannerCity.trim() || plannerLoading) return;

    setPlannerLoading(true);
    setItinerary('');
    setPlannerSaved(false);

    const prompt = `Create a structured, highly realistic, and inspiring ${plannerDays}-day travel itinerary for ${plannerCity}.
Style: ${plannerStyle}
Budget: ${plannerBudget}
Pace: ${plannerPace}

Format with:
1. Day-by-day breakdown with Morning, Afternoon, Evening, and Night activities.
2. Estimated daily budget breakdown in INR (₹) including food, entry fees, and local transit.
3. Authentic regional dishes and street food spots to try.
4. Essential local transport tips and cultural etiquette.`;

    try {
      const reply = await callGemini([{ role: 'user', content: prompt }], SYSTEM_PROMPT);
      setItinerary(reply);
    } catch {
      setItinerary("I apologize, but I could not generate the complete itinerary at this moment. Please check your internet connection and try again.");
    } finally {
      setPlannerLoading(false);
    }
  };

  // Filtered prompt list
  const filteredPrompts = useMemo(() => {
    if (activePromptCategory === 'all') return CURATED_PROMPTS;
    return CURATED_PROMPTS.filter(p => p.category === activePromptCategory);
  }, [activePromptCategory]);

  // Filtered destinations catalogue
  const filteredDestinations = useMemo(() => {
    const q = destSearch.trim().toLowerCase();
    return destinationsList.filter(d => {
      const matchSearch = !q ||
        d.name.toLowerCase().includes(q) ||
        d.desc.toLowerCase().includes(q) ||
        (d.state && d.state.toLowerCase().includes(q)) ||
        (d.location && d.location.toLowerCase().includes(q)) ||
        (d.tag && d.tag.toLowerCase().includes(q)) ||
        (d.category && d.category.toLowerCase().includes(q));

      const matchTag = selectedTag === 'All' ||
        (d.tag && d.tag.toLowerCase().includes(selectedTag.toLowerCase())) ||
        (d.category && d.category.toLowerCase().includes(selectedTag.toLowerCase())) ||
        (selectedTag === 'Forts & Palaces' && (d.tag?.toLowerCase().includes('fort') || d.category === 'fort')) ||
        (selectedTag === 'Spiritual' && (d.tag?.toLowerCase().includes('spirit') || d.tag?.toLowerCase().includes('temple') || d.category === 'temple')) ||
        (selectedTag === 'Hidden Gems' && (d.tag?.toLowerCase().includes('hidden') || d.category === 'hidden')) ||
        (selectedTag === 'Tribal & Craft' && (d.tag?.toLowerCase().includes('tribal') || d.category === 'tribal'));

      return matchSearch && matchTag;
    });
  }, [destinationsList, destSearch, selectedTag]);

  const visibleDestinations = filteredDestinations.slice(0, displayCount);

  // Active chat metadata
  const activeChat = userChats.find(c => c.id === activeChatId);

  return (
    <div className={`w-full ${activeTab === 'chat' ? 'h-[calc(100vh-56px)] overflow-hidden' : 'min-h-[calc(100vh-56px)]'} bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-200`}>

      {/* ========================================================================= */}
      {/* TOP COMPACT COMMAND BAR */}
      {/* ========================================================================= */}
      <div className="sticky top-0 z-30 bg-white/95 dark:bg-obsidian-900/95 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 py-2 flex flex-col sm:flex-row items-center justify-between gap-2.5">

          {/* Engine Title & Status */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-forest-700 to-forest-500 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-saffron-300" />
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-xs sm:text-sm font-extrabold font-display text-gray-900 dark:text-white">
                  WanderAI Studio
                </h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live AI
                </span>
              </div>
            </div>

            {/* Mobile Surprise Button */}
            <button
              onClick={handleSurpriseMe}
              className="sm:hidden px-2.5 py-1 rounded-lg bg-saffron-50 dark:bg-saffron-950/60 text-saffron-700 dark:text-saffron-300 border border-saffron-200 dark:border-saffron-800 text-[11px] font-bold flex items-center gap-1"
            >
              <Dices className="w-3 h-3" />
              <span>Surprise</span>
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-100 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/60 w-full sm:w-auto justify-center">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'chat'
                ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              <Bot className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
              <span>AI Chat</span>
            </button>

            <button
              onClick={() => setActiveTab('plan')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'plan'
                ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              <Calendar className="w-3.5 h-3.5 text-saffron-500" />
              <span>Trip Planner</span>
            </button>

            <button
              onClick={() => setActiveTab('destinations')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'destinations'
                ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              <Compass className="w-3.5 h-3.5 text-emerald-500" />
              <span>Explore ({destinationsList.length})</span>
            </button>

            <button
              onClick={() => { setActiveTab('saved'); setSidebarTab('saved'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'saved'
                ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-500" />
              <span>Saved {user && savedItinerariesList.length > 0 ? `(${savedItinerariesList.length})` : ''}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Global Notification Toast */}
      {savedSuccessMsg && (
        <div className="fixed bottom-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="px-3.5 py-2 rounded-xl bg-forest-900 text-white text-xs font-bold shadow-xl border border-forest-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{savedSuccessMsg}</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: AI CHAT COMPANION WITH STATIC INTEGRATED SIDEBAR */}
      {/* ========================================================================= */}
      {activeTab === 'chat' && (
        <div className="flex-1 max-w-7xl w-full mx-auto px-2 sm:px-4 py-2 flex flex-col h-[calc(100vh-112px)] overflow-hidden min-h-0">

          <div className="flex-1 flex gap-3 overflow-hidden h-full min-h-0">

            {/* ------------------------------------------------------------- */}
            {/* STATIC DEDICATED SIDEBAR (CHATS & SAVED PLANS) */}
            {/* ------------------------------------------------------------- */}
            <div className="w-64 sm:w-72 lg:w-80 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-xs flex flex-col overflow-hidden shrink-0 h-full">

              {/* Sidebar Header & New Chat Action */}
              <div className="p-3 border-b border-gray-100 dark:border-gray-800 space-y-2 shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-forest-700 dark:text-forest-400" />
                    <span className="text-xs font-bold text-gray-900 dark:text-white">
                      Travel Workspace
                    </span>
                  </div>
                  {user && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 font-bold border border-forest-200/60 dark:border-forest-800/60">
                      {sidebarTab === 'chats' ? `${userChats.length} Chats` : `${savedItinerariesList.length} Plans`}
                    </span>
                  )}
                </div>

                {/* Primary New Chat Button */}
                <button
                  onClick={handleCreateNewChat}
                  className="w-full py-2 px-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-xs group"
                >
                  <Plus className="w-3.5 h-3.5 text-saffron-300 group-hover:rotate-90 transition-transform duration-200" />
                  <span>New Trip Discussion</span>
                </button>
              </div>

              {/* Sidebar Segmented Mode Switcher: [💬 Chats]  [🔖 Saved Plans] */}
              <div className="p-2 border-b border-gray-100 dark:border-gray-800/60 shrink-0">
                <div className="grid grid-cols-2 gap-1 p-0.5 rounded-xl bg-gray-100 dark:bg-gray-800/90 text-xs font-bold">
                  <button
                    onClick={() => setSidebarTab('chats')}
                    className={`py-1.5 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all ${sidebarTab === 'chats'
                      ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
                    <span>Chats ({user ? userChats.length : 0})</span>
                  </button>

                  <button
                    onClick={() => setSidebarTab('saved')}
                    className={`py-1.5 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all ${sidebarTab === 'saved'
                      ? 'bg-white dark:bg-gray-900 text-forest-800 dark:text-forest-300 shadow-xs'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 text-saffron-500" />
                    <span>Saved ({user ? savedItinerariesList.length : 0})</span>
                  </button>
                </div>
              </div>

              {/* Scrollable List Body */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1 min-h-0 overscroll-contain">
                {!user ? (
                  <div className="p-4 rounded-xl bg-sand-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/50 text-center space-y-2.5 my-auto">
                    <Lock className="w-5 h-5 text-forest-600 dark:text-forest-400 mx-auto" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200">
                        Private Travel Workspace
                      </h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                        Sign in to store conversations with smart auto-names and access all your saved itineraries anytime.
                      </p>
                    </div>
                    <Link
                      to="/login"
                      className="block w-full py-1.5 rounded-lg bg-forest-700 text-white font-bold text-[11px] shadow-xs hover:bg-forest-800 transition"
                    >
                      Tourist Sign In
                    </Link>
                  </div>
                ) : sidebarTab === 'chats' ? (
                  /* CHAT SESSIONS LIST */
                  chatsLoading ? (
                    <div className="py-8 text-center text-xs text-gray-400 space-y-1">
                      <Sparkles className="w-4 h-4 animate-spin mx-auto text-forest-600" />
                      <span>Loading history…</span>
                    </div>
                  ) : userChats.length === 0 ? (
                    <div className="py-8 text-center text-xs text-gray-400 space-y-1">
                      <MessageCircle className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />
                      <span>No chats yet</span>
                      <p className="text-[10px] text-gray-500">Ask any question to create your first discussion!</p>
                    </div>
                  ) : (
                    userChats.map((chat) => {
                      const isActive = chat.id === activeChatId;
                      return (
                        <div
                          key={chat.id}
                          onClick={() => handleSelectChat(chat)}
                          className={`group cursor-pointer flex items-center justify-between p-2.5 rounded-xl text-xs transition-all ${isActive
                            ? 'bg-forest-50 dark:bg-forest-950/70 text-forest-900 dark:text-forest-200 font-bold border border-forest-200 dark:border-forest-800/80 shadow-2xs'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 border border-transparent'
                            }`}
                        >
                          <div className="flex items-center gap-2 min-w-0 pr-1">
                            <MessageSquare className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-forest-600 dark:text-forest-400' : 'text-gray-400'}`} />
                            <div className="min-w-0">
                              <div className="truncate text-[12px]">{chat.title || 'Travel Discussion'}</div>
                              <div className="text-[9px] text-gray-400 dark:text-gray-500 font-normal">
                                {new Date(chat.updated_at || chat.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={(e) => handleDeleteChat(e, chat.id)}
                            className="opacity-0 group-hover:opacity-100 p-1 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition shrink-0"
                            title="Delete Conversation"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      );
                    })
                  )
                ) : (
                  /* SAVED ITINERARIES LIST */
                  savedLoading ? (
                    <div className="py-8 text-center text-xs text-gray-400 space-y-1">
                      <Sparkles className="w-4 h-4 animate-spin mx-auto text-saffron-500" />
                      <span>Loading saved plans…</span>
                    </div>
                  ) : savedItinerariesList.length === 0 ? (
                    <div className="py-8 text-center text-xs text-gray-400 space-y-1.5 p-3">
                      <Bookmark className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />
                      <span className="font-semibold">No saved plans yet</span>
                      <p className="text-[10px] text-gray-500">Generate an itinerary in Trip Planner and click Save Plan.</p>
                      <button
                        onClick={() => setActiveTab('plan')}
                        className="mt-1 px-3 py-1 rounded-lg bg-forest-700 text-white text-[11px] font-bold"
                      >
                        Open Trip Planner
                      </button>
                    </div>
                  ) : (
                    savedItinerariesList.map((item, idx) => (
                      <div
                        key={item.id || idx}
                        onClick={() => setActiveTab('saved')}
                        className="group cursor-pointer flex items-center justify-between p-2.5 rounded-xl text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition"
                      >
                        <div className="flex items-center gap-2 min-w-0 pr-1">
                          <Bookmark className="w-3.5 h-3.5 text-saffron-500 shrink-0" />
                          <div className="min-w-0">
                            <div className="truncate text-[12px] font-bold text-gray-900 dark:text-white">
                              {item.destination || item.city || 'Custom Itinerary'}
                            </div>
                            <div className="text-[10px] text-gray-400 flex items-center gap-1 font-medium">
                              <span>{item.days}D</span>
                              <span>•</span>
                              <span>{item.budget}</span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.id) handleDeleteItinerary(item.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 p-1 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition shrink-0"
                          title="Delete Saved Plan"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))
                  )
                )}
              </div>

              {/* Sidebar Profile Status */}
              {user && (
                <div className="p-2.5 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900 flex items-center justify-between text-xs shrink-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 rounded-md bg-forest-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {user.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </div>
                    <span className="truncate font-semibold text-gray-800 dark:text-gray-200 text-[11px]">
                      {user.full_name?.split(' ')[0] || user.email?.split('@')[0]}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveTab('saved')}
                    className="text-[10px] font-bold text-forest-700 dark:text-forest-400 hover:underline"
                  >
                    View All Plans →
                  </button>
                </div>
              )}

            </div>

            {/* ------------------------------------------------------------- */}
            {/* MAIN CHAT CONVERSATION AREA */}
            {/* ------------------------------------------------------------- */}
            <div className="flex-1 flex flex-col overflow-hidden min-w-0 h-full min-h-0">

              {/* Integrated Interactive Prompt Carousel Strip */}
              <div className="mb-2 bg-white dark:bg-gray-900 rounded-2xl p-2 sm:p-2.5 border border-gray-200/80 dark:border-gray-800 shadow-xs space-y-1.5 shrink-0">
                <div className="flex items-center justify-between gap-2">

                  {/* Category Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
                    {PROMPT_CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setActivePromptCategory(cat.id)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all whitespace-nowrap ${activePromptCategory === cat.id
                          ? 'bg-forest-700 text-white shadow-xs'
                          : 'bg-gray-50 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200/60 dark:border-gray-700/60'
                          }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={handleSurpriseMe}
                      className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-saffron-50 dark:bg-saffron-950/60 text-saffron-700 dark:text-saffron-300 border border-saffron-200 dark:border-saffron-800 text-[11px] font-bold hover:bg-saffron-100 dark:hover:bg-saffron-900/60 transition"
                      title="Generate a random travel prompt"
                    >
                      <Dices className="w-3 h-3" />
                      <span>Surprise Me</span>
                    </button>

                    <button
                      onClick={handleCreateNewChat}
                      className="p-1 rounded-lg text-gray-400 hover:text-forest-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      title="New chat session"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Quick Interactive Prompt Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
                  {filteredPrompts.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(p.text)}
                      className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-gray-800/60 hover:bg-forest-50 dark:hover:bg-forest-950/50 text-gray-700 dark:text-gray-300 hover:text-forest-700 dark:hover:text-forest-300 border border-gray-200/80 dark:border-gray-700/60 text-[11px] font-medium transition-all shrink-0 flex items-center gap-1.5 group text-left max-w-xs truncate shadow-2xs hover:border-forest-400"
                    >
                      <span>{p.icon}</span>
                      <span className="truncate">{p.text}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-forest-600 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Stream Window */}
              <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-xs flex flex-col overflow-hidden min-h-0">

                {/* Active Session Title Header */}
                {activeChat && user && (
                  <div className="px-3.5 py-1.5 border-b border-gray-100 dark:border-gray-800/80 bg-gray-50/40 dark:bg-gray-900/40 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 truncate">
                      <span className="font-bold text-forest-700 dark:text-forest-400">Discussion:</span>
                      <span className="truncate font-semibold text-gray-800 dark:text-gray-200">{activeChat.title}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 shrink-0">
                      {new Date(activeChat.updated_at || activeChat.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                )}

                {/* Scrollable Message History */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 min-h-0 overscroll-contain">
                  {messages.map((msg, index) => {
                    const isBot = msg.role === 'assistant';
                    return (
                      <div
                        key={index}
                        className={`flex items-start gap-2.5 max-w-3xl ${isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'
                          }`}
                      >
                        {/* Avatar */}
                        <div
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 shadow-xs ${isBot
                            ? 'bg-gradient-to-tr from-forest-700 to-forest-500 text-white'
                            : 'bg-gradient-to-tr from-saffron-500 to-saffron-600 text-white'
                            }`}
                        >
                          {isBot ? <Sparkles className="w-3 h-3 text-saffron-300" /> : <UserIcon className="w-3 h-3" />}
                        </div>

                        {/* Chat Bubble */}
                        <div className="flex-1 space-y-1">
                          <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${isBot ? 'text-forest-700 dark:text-forest-400' : 'text-saffron-700 dark:text-saffron-400 justify-end'}`}>
                            <span>{isBot ? 'WanderAI Guide' : 'You'}</span>
                          </div>

                          <div
                            className={`p-3 rounded-2xl transition-all ${isBot
                              ? 'bg-gray-50/90 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 border border-gray-200/80 dark:border-gray-700/60 shadow-2xs'
                              : 'bg-forest-700 text-white shadow-xs'
                              }`}
                          >
                            <FormattedMarkdown content={msg.content} />

                            {/* Actions Toolbar for Bot Responses */}
                            {isBot && index > 0 && (
                              <div className="mt-2 pt-1.5 border-t border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between text-[11px]">
                                <div className="flex items-center gap-2.5">
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

                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleSaveToItineraries(msg.content, 'AI Travel Recommendation')}
                                    className="inline-flex items-center gap-1 font-bold text-forest-700 dark:text-forest-400 hover:underline"
                                    title="Save to My Saved Itineraries"
                                  >
                                    <Bookmark className="w-3 h-3" />
                                    <span>Save Plan</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Typing Indicator */}
                  {loading && (
                    <div className="flex items-start gap-2.5 max-w-3xl mr-auto animate-in fade-in">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-forest-700 text-white flex items-center justify-center shrink-0">
                        <Sparkles className="w-3 h-3 animate-spin text-saffron-300" />
                      </div>
                      <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60 flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
                        <span>WanderAI is researching destinations & routes…</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input Bar */}
                <div className="p-2 sm:p-2.5 bg-white dark:bg-gray-900 border-t border-gray-200/80 dark:border-gray-800 shrink-0">
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
                      placeholder="Ask about destinations, budget in ₹, train routes, local food..."
                      disabled={loading}
                      className="flex-1 px-3.5 py-2 text-xs sm:text-[13px] rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-forest-500 dark:focus:border-forest-500 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none transition shadow-2xs font-medium"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || loading}
                      className="px-3.5 py-2 rounded-xl bg-forest-700 hover:bg-forest-800 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition shrink-0"
                    >
                      <span>Send</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </form>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SMART DAY-BY-DAY TRIP PLANNER */}
      {/* ========================================================================= */}
      {activeTab === 'plan' && (
        <div className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-5 py-3 space-y-4">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* Left Column: Visual Configurator Form */}
            <div className="lg:col-span-5 bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-5 border border-gray-200/80 dark:border-gray-800 shadow-xs space-y-4">
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest-100 dark:bg-forest-950 text-forest-700 dark:text-forest-400 border border-forest-200 dark:border-forest-800 mb-1.5">
                  <Calendar className="w-3 h-3 text-forest-600" /> Interactive Generator
                </span>
                <h2 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white">
                  Craft Custom Itinerary
                </h2>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  Select destination, rhythm, budget, and travel days.
                </p>
              </div>

              <form onSubmit={handleGeneratePlanner} className="space-y-3.5">

                {/* 1. Destination / Starting City */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-saffron-500" /> Destination / Region:
                  </label>
                  <input
                    type="text"
                    value={plannerCity}
                    onChange={(e) => setPlannerCity(e.target.value)}
                    placeholder="e.g. Jaipur, Kerala Backwaters, Ladakh..."
                    required
                    className="w-full px-3 py-2 text-xs sm:text-[13px] rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                  {/* Quick City Chips */}
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {POPULAR_STARTING_CITIES.map(city => (
                      <button
                        type="button"
                        key={city}
                        onClick={() => setPlannerCity(city)}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition ${plannerCity === city
                          ? 'bg-forest-700 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-forest-100 hover:text-forest-700'
                          }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Duration Selector */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-forest-600" /> Duration:
                  </label>
                  <div className="grid grid-cols-5 gap-1">
                    {[
                      { days: '2', label: '2D' },
                      { days: '3', label: '3D' },
                      { days: '5', label: '5D' },
                      { days: '7', label: '7D' },
                      { days: '10', label: '10D' },
                    ].map(d => (
                      <button
                        type="button"
                        key={d.days}
                        onClick={() => setPlannerDays(d.days)}
                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${plannerDays === d.days
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
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-saffron-500" /> Travel Vibe:
                  </label>
                  <select
                    value={plannerStyle}
                    onChange={(e) => setPlannerStyle(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-500"
                  >
                    <option>🏰 Heritage & Royal Palaces</option>
                    <option>🌿 Nature, Waterfalls & Eco-Trails</option>
                    <option>🕉️ Spiritual Ghats & Ancient Temples</option>
                    <option>⛰️ High Altitude Adventure & Treks</option>
                    <option>🍲 Authentic Food, Spices & Marketplaces</option>
                    <option>🏖️ Coastal Beaches & Relaxation</option>
                  </select>
                </div>

                {/* 4. Pace & Budget */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Pace:</label>
                    <select
                      value={plannerPace}
                      onChange={(e) => setPlannerPace(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option>Relaxed</option>
                      <option>Balanced</option>
                      <option>Fast-Paced</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-emerald-600" /> Budget:
                    </label>
                    <select
                      value={plannerBudget}
                      onChange={(e) => setPlannerBudget(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option>Budget (₹)</option>
                      <option>Mid-Range (₹₹)</option>
                      <option>Luxury (₹₹₹)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={plannerLoading || !plannerCity.trim()}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-forest-700 via-forest-800 to-forest-900 hover:from-forest-800 hover:to-forest-950 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition disabled:opacity-50"
                >
                  {plannerLoading ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 animate-spin text-saffron-300" />
                      <span>Generating Detailed Itinerary…</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-saffron-300" />
                      <span>Generate Day-by-Day Itinerary</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Interactive Generated Itinerary Display */}
            <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-5 border border-gray-200/80 dark:border-gray-800 shadow-xs flex flex-col min-h-[440px]">

              {itinerary ? (
                <div className="space-y-3 flex-1 flex flex-col">
                  {/* Top Action Bar */}
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2.5">
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                        {plannerCity} — {plannerDays}-Day Trip Plan
                      </h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        {plannerStyle} • {plannerBudget} • {plannerPace}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopy(itinerary, 999)}
                        className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-semibold flex items-center gap-1 transition"
                      >
                        {copiedIndex === 999 ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        <span>Copy</span>
                      </button>

                      <button
                        onClick={() => window.print()}
                        className="p-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs text-gray-600 dark:text-gray-300"
                        title="Print Itinerary"
                      >
                        <Printer className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleSaveToItineraries(itinerary, `${plannerCity} ${plannerDays}-Day Tour`)}
                        className="px-3 py-1 rounded-lg bg-forest-700 hover:bg-forest-800 text-white text-xs font-bold flex items-center gap-1 shadow-xs transition"
                      >
                        <Bookmark className="w-3 h-3 text-saffron-300" />
                        <span>{plannerSaved ? 'Saved!' : 'Save Plan'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Rendered Itinerary Body */}
                  <div className="flex-1 overflow-y-auto max-h-[500px] pr-1">
                    <FormattedMarkdown content={itinerary} />
                  </div>
                </div>
              ) : (
                <div className="py-16 text-center space-y-2.5 my-auto">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 flex items-center justify-center mx-auto text-lg shadow-2xs">
                    🗺️
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                    Ready to Generate Your Indian Adventure
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                    Pick a starting city and your preferred rhythm on the left, then click <b>Generate Day-by-Day Itinerary</b> to view complete routes, costs in ₹, and local cuisine.
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
        <div className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-5 py-3 space-y-4">

          {/* Header & Filter Toolbar */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-3 sm:p-3.5 border border-gray-200/80 dark:border-gray-800 shadow-xs space-y-2.5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="relative w-full sm:w-80">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={destSearch}
                  onChange={(e) => setDestSearch(e.target.value)}
                  placeholder="Search destination, state, or vibe..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-[13px] rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500"
                />
              </div>

              <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
                Showing {filteredDestinations.length} verified destinations
              </div>
            </div>

            {/* Tag filter pills */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-0.5">
              {['All', 'Historical', 'Nature', 'Wildlife', 'Waterfall', 'Temple', 'Beach'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all shrink-0 ${selectedTag === tag
                    ? 'bg-forest-700 text-white shadow-xs'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* High-density Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => handleOpenDestModal(dest)}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 hover:border-forest-500/50 dark:hover:border-forest-500/50 shadow-2xs hover:shadow-lg transition-all duration-200 p-4 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-forest-100 dark:bg-forest-950 text-forest-700 dark:text-forest-300 text-[10px] font-bold uppercase tracking-wider">
                      {dest.tag || dest.category || 'Spot'}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{dest.rating || 4.8}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm font-display text-gray-900 dark:text-white group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors">
                    {dest.name}
                  </h3>

                  <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {dest.desc}
                  </p>

                  <div className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-gray-500">
                    <MapPin className="w-3 h-3 shrink-0 text-saffron-500" />
                    <span className="truncate">{dest.location}</span>
                  </div>
                </div>

                {/* Bottom Meta & Action */}
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-500">
                    {dest.entry_fee ? `₹${dest.entry_fee}` : 'Free Entry'}
                  </span>
                  <span className="text-[11px] font-bold text-forest-700 dark:text-forest-400 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    <span>Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
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
        <div className="flex-1 max-w-5xl w-full mx-auto px-3 sm:px-5 py-3 space-y-4">

          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2.5">
            <div>
              <h2 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-saffron-500" />
                <span>My Saved Itineraries</span>
              </h2>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                Access your custom travel plans saved from WanderAI Chat & Planner.
              </p>
            </div>

            {user && (
              <button
                onClick={() => setActiveTab('plan')}
                className="px-3 py-1 rounded-xl bg-forest-700 hover:bg-forest-800 text-white text-xs font-bold flex items-center gap-1 transition shadow-xs"
              >
                <Sparkles className="w-3 h-3 text-saffron-400" />
                <span>Create New</span>
              </button>
            )}
          </div>

          {!user ? (
            <div className="py-12 text-center rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 space-y-3 shadow-xs max-w-sm mx-auto">
              <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-forest-950/60 text-forest-700 dark:text-forest-400 flex items-center justify-center mx-auto text-xl">
                <Lock className="w-5 h-5 text-forest-600 dark:text-forest-400" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                Sign In to Access Your Saved Trips
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
                Custom trip itineraries and AI chat histories are stored privately for signed-in tourist accounts only.
              </p>
              <div className="pt-1.5 flex flex-col sm:flex-row items-center justify-center gap-2">
                <Link
                  to="/login"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs transition shadow-xs text-center"
                >
                  Tourist Sign In
                </Link>
                <Link
                  to="/register"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xs transition text-center"
                >
                  Register Free
                </Link>
              </div>
            </div>
          ) : savedLoading ? (
            <div className="py-10 text-center text-xs text-gray-400">
              Loading your saved itineraries…
            </div>
          ) : savedItinerariesList.length === 0 ? (
            <div className="py-12 text-center rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 space-y-2.5">
              <Bookmark className="w-6 h-6 text-gray-400 mx-auto" />
              <h3 className="text-xs font-bold text-gray-700 dark:text-gray-300">
                No saved itineraries yet
              </h3>
              <p className="text-[11px] text-gray-500 max-w-xs mx-auto">
                Generate an itinerary in <b>Trip Planner</b> or chat with <b>WanderAI</b> and click <b>Save Plan</b> to store it here.
              </p>
              <button
                onClick={() => setActiveTab('plan')}
                className="px-3.5 py-1.5 rounded-xl bg-forest-700 text-white text-xs font-bold"
              >
                Launch Trip Planner
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {savedItinerariesList.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 p-4 shadow-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                        {String(item.destination || item.city || 'Saved Indian Itinerary')}
                      </h4>
                      <p className="text-[10px] text-gray-500">
                        {String(item.days || '')} Days • {String(item.interest || '')} • {String(item.budget || '')}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopy(String(item.itinerary_text || ''), idx + 1000)}
                        className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-[11px] font-semibold flex items-center gap-1 transition"
                      >
                        {copiedIndex === idx + 1000 ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        <span>Copy</span>
                      </button>
                      {item.id && (
                        <button
                          onClick={() => handleDeleteItinerary(item.id)}
                          className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 text-[11px] font-semibold flex items-center gap-1 transition"
                          title="Delete Saved Itinerary"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="max-h-52 overflow-y-auto pr-1 text-xs">
                    <FormattedMarkdown content={String(item.itinerary_text || '')} />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      )}

      {/* Floating Destination Details Modal */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="destination"
        item={modalItem}
      />
    </div>
  );
}
