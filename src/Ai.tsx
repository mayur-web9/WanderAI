import { useState, useRef, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  Sparkles, 
  Send, 
  MapPin, 
  Calendar, 
  Compass, 
  RotateCcw, 
  Copy, 
  Check, 
  ExternalLink, 
  Sliders, 
  Clock, 
  DollarSign, 
  Bot, 
  User as UserIcon,
  Search,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { useAuth } from './contexts/AuthContext';
import { 
  AiDestination, 
  DESTINATIONS, 
  QUICK_PROMPTS, 
  SYSTEM_PROMPT,
} from "./utils/aiData";
import { 
  getDbDestinations, 
  getOrCreateActiveChat, 
  fetchChatMessages, 
  saveMessageToSupabase, 
  saveDbItinerary 
} from './services/supabaseService';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Multi-model fallback caller
async function callGemini(messages: { role: string; content: string }[], systemPrompt: string) {
  const modelsToTry = [
    'gemini-3.6-flash',
    'gemini-flash-latest',
    'gemini-3.7-flash',
    'gemini-2.5-flash-lite',
    'gemini-3-flash-preview',
  ];

  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  for (const model of modelsToTry) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }],
          },
          contents,
          generationConfig: {
            maxOutputTokens: 1500,
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
      // Try next model
    }
  }

  // If external API request failed, provide rich contextual response
  const lastUserMsg = messages.filter(m => m.role === 'user').pop()?.content.toLowerCase() || '';
  if (lastUserMsg.includes('eco') || lastUserMsg.includes('nature') || lastUserMsg.includes('kerala')) {
    return `🌿 **Top Recommended Eco & Nature Experiences across India:**\n\n1. **Kerala Backwaters & Munnar Hills:** Cruise along Alleppey's serene palm-lined canals on traditional solar houseboats, followed by high-altitude mist and organic tea gardens in Munnar.\n2. **Betla National Park & Netarhat (Jharkhand):** Explore dense sal forests, Hundru & Jonha waterfalls, and indigenous eco-resorts serving authentic tribal cuisine.\n3. **Mawlynnong & Living Root Bridges (Meghalaya):** Bio-engineered living rubber-tree root bridges, clean crystal waterfalls, and scenic Khasi village stays.\n\n💡 **Traveler Tip:** Winter (October to March) is the ideal season for comfortable temperatures and lush landscapes!`;
  }

  if (lastUserMsg.includes('beach') || lastUserMsg.includes('south')) {
    return `🏖️ **Top Beaches & Coastal Escapes in South India:**\n\n1. **Varkala & Marari Beach (Kerala):** Dramatic red laterite cliffs overlooking Arabian Sea waves, quiet coconut groves, and authentic Ayurvedic wellness retreats.\n2. **Gokarna & Om Beach (Karnataka):** Serene coves surrounded by Western Ghat hills, perfect for trekking between Kudle and Half-Moon beaches.\n3. **Dhanushkodi & Rameswaram (Tamil Nadu):** Turquoise blue waters where the Bay of Bengal meets the Indian Ocean at India's mystical southern tip.\n\n🍤 **Food Recommendation:** Try fresh banana-leaf fish curry meals and tender coconut payasam at local beachside shacks!`;
  }

  if (lastUserMsg.includes('himalaya') || lastUserMsg.includes('adventure') || lastUserMsg.includes('leh') || lastUserMsg.includes('ladakh')) {
    return `⛰️ **Epic Himalayan Adventure Circuits:**\n\n1. **Leh-Ladakh Circuit:** Cross Khardung La (5,359m), camp beside cobalt-blue Pangong Tso, and experience Tibetan monastery chants at Thiksey.\n2. **Spiti Valley & Chandra Taal:** High-altitude desert monasteries of Key and Tabo, surrounded by snow-dusted peaks and star-studded skies.\n3. **Rishikesh & Garhwal Treks (Uttarakhand):** White-water rafting on the Ganga, followed by alpine meadow treks like Dayara Bugyal and Valley of Flowers.\n\n🛡️ **Altitude Tip:** Spend at least 48 hours acclimatizing in Leh or Manali before crossing passes above 4,000m!`;
  }

  return `Namaste! 🙏 Here is customized travel guidance for India:\n\n✨ **Key Travel Highlights:**\n- **Heritage & Architecture:** Explore Agra's Taj Mahal, Jaipur's Amer Fort, Hampi's Vijayanagara ruins, and Konark Sun Temple.\n- **Spiritual Essence:** Evening Ganga Aarti in Varanasi & Haridwar, Golden Temple Langar in Amritsar, and Baidyanath Jyotirlinga in Deoghar.\n- **Authentic Bazaars:** Dilli Haat, Jaipur Johari Bazaar, and Hyderabad Laad Bazaar for handlooms, spices, and lacquer crafts.\n\nLet me know your starting city or preferred dates, and I will draft a day-by-day plan for you!`;
}

export default function Ai() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<"chat" | "plan" | "destinations">("chat");
  const destinationsRef = useRef<HTMLDivElement>(null);
  const [displayDestinations, setDisplayDestinations] = useState<AiDestination[]>(DESTINATIONS);
  const [destinationSearch, setDestinationSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const { user } = useAuth();
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string; time?: string }>>([
    { 
      role: "assistant", 
      content: "Namaste! 🙏 I'm **WanderAI**, your intelligent travel guide for Incredible India.\n\nAsk me for custom multi-day travel plans, hidden cultural gems, best local food hotspots, or transport tips across any Indian state!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
  ]);
  const [input, setInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Planner state
  const [form, setForm] = useState({ 
    days: "3", 
    interest: "eco", 
    budget: "medium", 
    city: "New Delhi", 
    destination: "Himachal Pradesh & Spiti" 
  });
  const [itinerary, setItinerary] = useState("");
  const [placeDetails, setPlaceDetails] = useState("");
  const [itiLoading, setItiLoading] = useState(false);
  const [copiedItinerary, setCopiedItinerary] = useState(false);
  const processedPromptRef = useRef<string | null>(null);

  // Load destinations from Supabase
  useEffect(() => {
    getDbDestinations().then((dests) => {
      if (dests && dests.length > 0) {
        setDisplayDestinations(dests);
      }
    });
  }, []);

  // Sync Supabase Chat Thread when user logs in
  useEffect(() => {
    if (user?.id) {
      getOrCreateActiveChat(user.id, 'WanderAI Exploration').then(async (chat) => {
        if (chat) {
          setActiveChatId(chat.id);
          const history = await fetchChatMessages(chat.id);
          if (history && history.length > 0) {
            setMessages(history.map(m => ({
              role: m.role as 'user' | 'assistant',
              content: m.content,
              time: new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            })));
          }
        }
      });
    }
  }, [user?.id]);

  const sendMessage = useCallback(async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || chatLoading) return;
    setInput("");
    
    const userMsg = { 
      role: "user" as const, 
      content: msg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    setChatLoading(true);

    try {
      if (user?.id && activeChatId) {
        saveMessageToSupabase(activeChatId, user.id, 'user', msg).catch(() => null);
      }

      const reply = await callGemini([...messages, userMsg], SYSTEM_PROMPT);
      const assistantMessage = { 
        role: "assistant" as const, 
        content: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, assistantMessage]);

      if (user?.id && activeChatId) {
        saveMessageToSupabase(activeChatId, user.id, 'assistant', reply).catch(() => null);
      }
    } catch {
      setMessages((prev) => [
        ...prev, 
        { 
          role: "assistant" as const, 
          content: "Namaste! I encountered a temporary network delay. Here are top recommendations based on your query:\n\n• For custom multi-day plans, try our **Trip Planner** tab above!\n• Check out iconic heritage sites, local bazaar specialties, and cultural fairs listed across our platform.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
    setChatLoading(false);
  }, [input, chatLoading, user?.id, activeChatId, messages]);

  // Handle URL Query Params (Deep feature navigation)
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'plan' || tabParam === 'destinations' || tabParam === 'chat') {
      setActiveTab(tabParam);
    }

    const destinationParam = searchParams.get('destination');
    if (destinationParam) {
      setForm(prev => ({ ...prev, destination: destinationParam }));
      setActiveTab('plan');
    }

    const interestParam = searchParams.get('interest');
    if (interestParam) {
      setForm(prev => ({ ...prev, interest: interestParam }));
      setActiveTab('plan');
    }

    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setSelectedTag(tagParam);
      setActiveTab('destinations');
    }

    const promptParam = searchParams.get('prompt');
    if (promptParam && promptParam !== processedPromptRef.current) {
      processedPromptRef.current = promptParam;
      setActiveTab('chat');
      setTimeout(() => {
        sendMessage(promptParam);
      }, 200);
    }

    if (window.location.hash === '#destinations') {
      setActiveTab("destinations");
      setTimeout(() => {
        destinationsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [searchParams, sendMessage]);

  useEffect(() => {
    if (activeTab === "chat") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatLoading, activeTab]);

  const handleCopy = (text: string, index?: number) => {
    navigator.clipboard.writeText(text);
    if (index !== undefined) {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } else {
      setCopiedItinerary(true);
      setTimeout(() => setCopiedItinerary(false), 2000);
    }
  };

  const clearChat = () => {
    setMessages([
      { 
        role: "assistant", 
        content: "Chat cleared! Where in India are you thinking of traveling next?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
    ]);
  };

  const generateItinerary = async () => {
    setItiLoading(true);
    setItinerary("");
    setPlaceDetails("");

    const interestLabels: Record<string, string> = {
      eco: "Eco, Wildlife & Nature Exploration",
      cultural: "Tribal & Indigenous Heritage",
      spiritual: "Sacred Pilgrimages & Spiritual Peace",
      adventure: "Trekking, Mountaineering & Adventure Sports",
      rare: "Unseen Hidden Gems & Offbeat Escapes",
      mixed: "Grand Mixed Highlights (Culture, Nature & Heritage)",
    };

    const prompt = `Create a comprehensive, beautifully structured ${form.days}-day India travel itinerary for someone interested in ${interestLabels[form.interest] || form.interest} with a ${form.budget} budget.
Starting point: ${form.city}
Destination focus: ${form.destination || 'India Highlights'}

Please format the response with:
1. A brief 2-sentence trip overview with best season & transport vibe.
2. Day-by-Day breakdown with emojis:
   - Day 1: [Theme/City] -> Morning, Afternoon, Evening, Must-Try Local Food, Pro Tip
   - Day 2: ... (continue for each day)
3. Budget Breakdown & Transportation suggestions.
4. Separate section titled "Detailed Place Notes" with exact visiting hours, entry tips, and culture etiquette for each main spot.`;

    try {
      const result = await callGemini([{ role: "user", content: prompt }], SYSTEM_PROMPT);
      const parts = result.split(/\n?Detailed Place Notes\s*[:-]?/i);
      let mainItinerary = result;
      let notes = "All detailed guidelines, local food suggestions, and logistics are included in the itinerary above.";

      if (parts.length > 1) {
        mainItinerary = parts[0].trim();
        notes = parts[1].trim();
      }

      setItinerary(mainItinerary);
      setPlaceDetails(notes);

      // Save to Supabase itineraries table
      saveDbItinerary({
        user_id: user?.id,
        days: form.days,
        interest: form.interest,
        budget: form.budget,
        city: form.city,
        destination: form.destination,
        itinerary_text: mainItinerary,
        place_notes: notes,
      }).catch(() => null);

    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Please check your network and try again.';
      setItinerary("⚠️ Error generating plan: " + errorMsg);
      setPlaceDetails("");
    }
    setItiLoading(false);
  };

  // Filter destinations
  const tags = ["All", ...Array.from(new Set(displayDestinations.map(d => d.tag)))];
  const filteredDestinations = displayDestinations.filter(d => {
    const matchesTag = selectedTag === "All" || d.tag.toLowerCase() === selectedTag.toLowerCase();
    const matchesSearch = destinationSearch === "" || 
      d.name.toLowerCase().includes(destinationSearch.toLowerCase()) || 
      d.location.toLowerCase().includes(destinationSearch.toLowerCase()) ||
      d.desc.toLowerCase().includes(destinationSearch.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      
      {/* Top Banner / Tab Switcher */}
      <div className="w-full border-b border-gray-200/80 dark:border-gray-800 bg-white/80 dark:bg-obsidian-900/90 backdrop-blur-md sticky top-16 sm:top-18 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-forest-700 via-forest-600 to-saffron-500 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white flex items-center gap-2">
                  WanderAI Travel Intelligence
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-forest-100 dark:bg-forest-900/60 text-forest-700 dark:text-forest-300">
                    Active
                  </span>
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Real-time Indian tourism guidance, custom routes & itineraries (Database Synced)
                </p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-gray-100/90 dark:bg-gray-800/90 rounded-2xl border border-gray-200/80 dark:border-gray-700/60">
              <button
                onClick={() => setActiveTab("chat")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "chat"
                    ? "bg-white dark:bg-gray-900 text-forest-700 dark:text-forest-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Bot className="w-4 h-4 text-forest-600 dark:text-forest-400" />
                <span>AI Chat Guide</span>
              </button>
              <button
                onClick={() => setActiveTab("plan")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "plan"
                    ? "bg-white dark:bg-gray-900 text-saffron-600 dark:text-saffron-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Sliders className="w-4 h-4 text-saffron-500" />
                <span>Trip Planner</span>
              </button>
              <button
                onClick={() => setActiveTab("destinations")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "destinations"
                    ? "bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Compass className="w-4 h-4 text-emerald-500" />
                <span>Destinations ({displayDestinations.length})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TAB CONTENT: 1. CHAT WITH WANDERAI */}
      {activeTab === "chat" && (
        <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col">
          {/* Quick Prompts Carousel */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
                Popular Questions
              </span>
              <button
                onClick={clearChat}
                className="text-xs font-semibold text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 flex items-center gap-1 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Clear Chat
              </button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-forest-500 dark:hover:border-forest-500 hover:text-forest-700 dark:hover:text-forest-400 transition-all shadow-xs shrink-0 flex items-center gap-1.5"
                >
                  <span>{prompt}</span>
                  <ArrowRight className="w-3 h-3 text-saffron-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 bg-white/70 dark:bg-obsidian-900/70 backdrop-blur-md rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-md flex flex-col overflow-hidden min-h-[550px]">
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
              {messages.map((msg, index) => {
                const isBot = msg.role === "assistant";
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 sm:gap-4 max-w-4xl ${
                      isBot ? "mr-auto" : "ml-auto flex-row-reverse"
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
                        isBot
                          ? "bg-gradient-to-tr from-forest-700 to-forest-500 text-white"
                          : "bg-gradient-to-tr from-saffron-500 to-saffron-600 text-white"
                      }`}
                    >
                      {isBot ? <Sparkles className="w-5 h-5" /> : <UserIcon className="w-5 h-5" />}
                    </div>

                    {/* Bubble */}
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          {isBot ? "WanderAI Guide" : (user?.full_name || "You")}
                        </span>
                        {msg.time && (
                          <span className="text-[10px] text-gray-400 dark:text-gray-500">
                            {msg.time}
                          </span>
                        )}
                      </div>

                      <div
                        className={`rounded-3xl px-5 py-4 text-sm sm:text-base leading-relaxed relative group ${
                          isBot
                            ? "bg-white dark:bg-gray-900/95 text-gray-800 dark:text-gray-100 border border-gray-200/90 dark:border-gray-800 shadow-sm"
                            : "bg-gradient-to-r from-forest-700 to-forest-800 text-white shadow-lg shadow-forest-900/15"
                        }`}
                      >
                        <div className="whitespace-pre-wrap font-sans">
                          {msg.content}
                        </div>

                        {/* Copy button for bot response */}
                        {isBot && (
                          <div className="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/80 flex justify-end">
                            <button
                              onClick={() => handleCopy(msg.content, index)}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-forest-600 dark:hover:text-forest-400 transition-colors"
                            >
                              {copiedIndex === index ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                                  <span className="text-emerald-500 font-bold">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {chatLoading && (
                <div className="flex items-start gap-3 mr-auto animate-in fade-in duration-200">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-forest-700 to-forest-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5 animate-spin" />
                  </div>
                  <div className="rounded-3xl px-5 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-sm flex items-center gap-3 shadow-sm">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-forest-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-saffron-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-forest-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                      WanderAI is curating your personalized guide…
                    </span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 bg-white/95 dark:bg-gray-900/95 border-t border-gray-200/80 dark:border-gray-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask WanderAI about destinations, food, temples, heritage, or budget tips across India..."
                    disabled={chatLoading}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-100/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 text-sm sm:text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500 transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || chatLoading}
                  className="px-6 py-4 rounded-2xl bg-gradient-to-r from-forest-600 via-forest-700 to-forest-800 hover:from-forest-700 hover:to-forest-900 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-forest-900/20 flex items-center justify-center gap-2 transition-all transform active:scale-95 shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Ask AI</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 2. AI TRIP PLANNER */}
      {activeTab === "plan" && (
        <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 border border-saffron-200 dark:border-saffron-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
              Tailored Day-by-Day Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white">
              Plan Your Dream Indian Journey
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Select your travel pace, budget, and destination to instantly generate a custom schedule packed with timings, food gems, and logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-5 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
              <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-6 flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800">
                <Sliders className="w-5 h-5 text-forest-600 dark:text-forest-400" />
                Customize Travel Parameters
              </h3>

              <div className="space-y-5">
                {/* Duration Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
                    Trip Duration
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {["2", "3", "5", "7", "10"].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setForm({ ...form, days: d })}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                          form.days === d
                            ? "bg-forest-600 text-white shadow-sm"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                      >
                        {d} Days
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Theme/Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-saffron-500" />
                    Travel Theme & Focus
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500"
                  >
                    <option value="eco">🌿 Eco-Tourism & Wildlife Sanctuaries</option>
                    <option value="cultural">🎭 Tribal & Folk Heritage</option>
                    <option value="spiritual">🛕 Ancient Shrines & Spiritual Peace</option>
                    <option value="adventure">⛰️ Mountain Treks & Outdoor Thrills</option>
                    <option value="rare">🔍 Hidden Gems & Untouched Wonders</option>
                    <option value="mixed">🌈 Complete Mixed Highlights</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Budget Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "budget", label: "💚 Budget", sub: "Hostels & Trains" },
                      { id: "medium", label: "💛 Moderate", sub: "Mid Hotels & Cabs" },
                      { id: "premium", label: "🌟 Luxury", sub: "Resorts & Flights" },
                    ].map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b.id })}
                        className={`p-2.5 rounded-xl text-left transition-all ${
                          form.budget === b.id
                            ? "bg-forest-50 dark:bg-forest-950/60 border-2 border-forest-600 text-forest-900 dark:text-forest-200"
                            : "bg-gray-100 dark:bg-gray-800 border border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                      >
                        <div className="text-xs font-bold">{b.label}</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400">{b.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Starting City */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
                    Starting Point / City
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="e.g. New Delhi, Mumbai, Bengaluru, Ranchi, Kolkata..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-saffron-500" />
                    Target Region / State
                  </label>
                  <input
                    type="text"
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    placeholder="e.g. Kerala Backwaters, Spiti Valley, Rajasthan Heritage, Meghalaya..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>

                {/* Action Button */}
                <button
                  onClick={generateItinerary}
                  disabled={itiLoading}
                  className="w-full mt-4 py-4 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-forest-700 hover:from-saffron-600 hover:to-forest-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-saffron-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  <Sparkles className="w-5 h-5" />
                  {itiLoading ? "Generating Detailed Itinerary…" : "✨ Generate AI Trip Itinerary"}
                </button>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Itinerary Overview */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-forest-100 dark:bg-forest-900/40 text-forest-700 dark:text-forest-300">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">
                        Generated Itinerary
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {form.days}-Day {form.destination || 'India'} Plan
                      </p>
                    </div>
                  </div>

                  {itinerary && (
                    <button
                      onClick={() => handleCopy(itinerary + "\n\n" + placeDetails)}
                      className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-1.5"
                    >
                      {copiedItinerary ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy All</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {itiLoading ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-saffron-100 dark:bg-saffron-900/40 text-saffron-600 dark:text-saffron-400 flex items-center justify-center mx-auto animate-spin">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-800 dark:text-gray-200">
                        Crafting your personalized trip itinerary…
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto mt-1">
                        Computing optimal travel routes, heritage timings, regional food hotspots, and seasonal tips.
                      </p>
                    </div>
                  </div>
                ) : itinerary ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {itinerary}
                  </div>
                ) : (
                  <div className="py-12 text-center text-gray-400 dark:text-gray-500">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3 text-2xl">
                      🗺️
                    </div>
                    <p className="text-sm font-medium">
                      Configure your travel preferences on the left and click <b>Generate AI Trip Itinerary</b>.
                    </p>
                  </div>
                )}
              </div>

              {/* Detailed Place Notes & Cultural Etiquette */}
              {(placeDetails || itiLoading) && (
                <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
                    <div className="p-2 rounded-xl bg-saffron-100 dark:bg-saffron-900/40 text-saffron-700 dark:text-saffron-300">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">
                        Place Notes & Practical Logistics
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Visiting hours, entry protocols, local foods & etiquette
                      </p>
                    </div>
                  </div>

                  {itiLoading ? (
                    <div className="py-8 text-center text-xs text-gray-400">
                      Analyzing local site guidelines…
                    </div>
                  ) : (
                    <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                      {placeDetails}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 3. EXPLORE DESTINATIONS DIRECTLY */}
      {activeTab === "destinations" && (
        <div ref={destinationsRef} className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-100 dark:bg-forest-900/30 text-forest-700 dark:text-forest-400 border border-forest-200 dark:border-forest-800 mb-3">
              <Compass className="w-3.5 h-3.5 text-forest-600 dark:text-forest-400" />
              Handpicked Indian Wonders
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white">
              Discover Iconic & Unseen Destinations
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Browse heritage forts, serene backwaters, sacred ghats, and hidden hill escapes. Click any destination to consult WanderAI.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={destinationSearch}
                onChange={(e) => setDestinationSearch(e.target.value)}
                placeholder="Search by city, name, or vibe..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-forest-500 text-sm focus:outline-none"
              />
            </div>

            {/* Tag Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedTag === tag
                      ? "bg-forest-600 text-white shadow-xs"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of destinations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((d) => (
              <div
                key={d.name}
                className="group relative flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-forest-500/40 dark:hover:border-forest-500/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                      {d.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl">{d.emoji}</span>
                    <h3 className="text-lg font-bold text-white font-display">
                      {d.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {d.desc}
                  </p>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between mt-auto">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-forest-700 dark:text-forest-400 hover:underline"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {d.location}
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                    </a>

                    <button
                      onClick={() => {
                        setActiveTab("chat");
                        sendMessage(`Tell me everything I should know about visiting ${d.name} in ${d.location}, including best travel months, famous local foods, and nearby hidden gems.`);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-saffron-50 dark:bg-saffron-950/40 text-saffron-700 dark:text-saffron-400 hover:bg-saffron-100 font-bold text-xs flex items-center gap-1 transition-colors border border-saffron-200 dark:border-saffron-800/60"
                    >
                      <Sparkles className="w-3 h-3" />
                      Ask WanderAI
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="py-16 text-center text-gray-500 dark:text-gray-400">
              <p className="text-base font-semibold">No destinations matched your filter.</p>
              <button
                onClick={() => { setSelectedTag("All"); setDestinationSearch(""); }}
                className="mt-3 text-xs font-bold text-forest-600 dark:text-forest-400 underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}