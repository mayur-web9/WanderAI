import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Compass, 
  Calendar, 
  ShieldCheck, 
  Mail, 
  Heart, 
  Bot, 
  ArrowRight,
  UserCheck
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      
      {/* Hero Banner */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-800 text-white overflow-hidden">
        <div className="absolute top-10 -left-10 w-96 h-96 bg-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-saffron-300 text-xs font-bold shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Discover the Soul of Incredible India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            About Wander<span className="text-saffron-400">AI</span>
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            India’s dedicated travel intelligence platform built to make exploring royal citadels, sacred river ghats, misty hill stations, and vibrant cultural haats seamless, authentic, and inspiring.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 pb-28 md:pb-16">

        {/* 1. Key Platform Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-extrabold font-display text-forest-700 dark:text-forest-400">1,111</div>
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Verified Places</div>
            <p className="text-[11px] text-gray-500">Across all 28 states & UTs</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-extrabold font-display text-saffron-600 dark:text-saffron-400">111</div>
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Cultural Festivals</div>
            <p className="text-[11px] text-gray-500">Living rituals & celebrations</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-extrabold font-display text-blue-600 dark:text-blue-400">111</div>
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Historic Bazaars</div>
            <p className="text-[11px] text-gray-500">Craft haats & spice lanes</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-extrabold font-display text-emerald-600 dark:text-emerald-400">100%</div>
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Free Access</div>
            <p className="text-[11px] text-gray-500">For global & local tourists</p>
          </div>
        </div>

        {/* 2. Our Mission & Vision */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 border border-forest-200 dark:border-forest-800">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Our Mission</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 dark:text-white">
            Celebrating the Diversity of Incredible India
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            WanderAI was created to bridge the gap between traditional tourism guides and intelligent, personalized travel experiences. Whether planning a 3-day trek across the legendary Sahyadri forts of Maharashtra, a spiritual voyage along the Ganga in Varanasi, or a spice trail through the misty backwaters of Kerala, WanderAI provides contextual itineraries with realistic budgets in ₹, transit navigation, and cultural etiquette.
          </p>
        </div>

        {/* 3. Core Ecosystem Features */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white">
            Platform Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">AI Chat Companion</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Interactive real-time travel assistant with audio speech narration, custom day-by-day plans, budget breakdowns, and multi-chat session history.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-saffron-50 dark:bg-saffron-950 text-saffron-600 dark:text-saffron-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Smart Trip Planner</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Automated multi-day itinerary generator customized by duration (1-14 days), travel style, budget level, and travel pace.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Festivals & Bazaars</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Curated directories of 111 authentic cultural celebrations and 111 heritage marketplaces with shopping tips and opening hours.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Creator & Developer Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-forest-900 to-forest-950 text-white shadow-xl relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-forest-800 pb-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-saffron-500 to-saffron-600 flex items-center justify-center text-white font-black text-2xl shadow-md shrink-0">
                MP
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">Mayur Patil</h3>
                  <span className="px-2 py-0.5 rounded-full bg-saffron-500/30 text-saffron-300 text-[10px] font-bold border border-saffron-500/40">
                    Lead Developer & Creator
                  </span>
                </div>
                <p className="text-xs text-emerald-200/80 mt-0.5">
                  Engineered with passion for Indian cultural heritage & modern travel tech
                </p>
              </div>
            </div>

            <a
              href="mailto:mayur.patil.ac@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-forest-950 font-bold text-xs hover:bg-sand-100 transition shadow-sm shrink-0"
            >
              <Mail className="w-4 h-4 text-forest-700" />
              <span>mayur.patil.ac@gmail.com</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-emerald-100/90 leading-relaxed">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="font-bold text-white flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-saffron-400" />
                Collaborations & Inquiries
              </span>
              <p>
                For technical discussions, business partnerships, or feedback, feel free to reach out via email directly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Tourist Safety & Support
              </span>
              <p>
                Have suggestions or need emergency assistance? Visit our community feedback portal to connect.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/itinerary?tab=chat"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-forest-950 font-bold text-xs transition shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch WanderAI Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/feedback"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition"
            >
              <span>Share Feedback</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
