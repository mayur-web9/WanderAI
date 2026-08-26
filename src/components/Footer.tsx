import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Check, 
  Shield, 
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-sand-100 dark:bg-obsidian-900 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 pt-12 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand Info & Newsletter (Takes 2 cols on desktop) */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-forest-700 dark:bg-forest-600 flex items-center justify-center text-white shadow-md">
                <MapPin className="w-5 h-5 text-saffron-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight text-forest-900 dark:text-white">
                  Wander<span className="text-saffron-500">AI</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-gray-500 dark:text-gray-400 -mt-1">
                  Discover Unseen India
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              India’s next-generation AI travel planner. Personalizing itineraries across 28 states with local cultural insights, seasonal fairs, and hidden heritage trails.
            </p>

            {/* Live System Operational Status */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Proprietary AI Engine
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-saffron-100 dark:bg-saffron-900/40 text-saffron-800 dark:text-saffron-300 border border-saffron-200 dark:border-saffron-800">
                🇮🇳 Incredible India
              </span>
            </div>

            {/* Newsletter Subscription Widget */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-2">
                Join 25,000+ Travel Explorers
              </p>
              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800 animate-in fade-in">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Subscribed! Check your inbox for weekly curated Indian itineraries.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email..."
                      required
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-xl bg-forest-700 hover:bg-forest-800 text-white text-xs font-bold flex items-center gap-1 shadow-xs transition"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-gray-400" />
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/itinerary" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-saffron-500" />
                  AI Trip Planner
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Festivals & Marketplaces
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Community Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Safety & Helpline */}
          <div>
            <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Travel Helpline
            </h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-xl bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Tourist Helpline (24x7)</p>
                <a href="tel:1363" className="font-bold text-forest-700 dark:text-forest-300 hover:underline flex items-center gap-1 mt-0.5">
                  <Phone className="w-3.5 h-3.5" /> 1363 (Toll Free)
                </a>
              </div>
              <div className="p-3 rounded-xl bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Emergency Services</p>
                <div className="flex gap-3 mt-0.5 text-xs font-bold text-gray-800 dark:text-gray-200">
                  <span>Police: 112</span>
                  <span>Ambulance: 108</span>
                </div>
              </div>
              <Link 
                to="/feedback"
                className="inline-flex items-center gap-1 text-xs font-semibold text-saffron-600 dark:text-saffron-400 hover:underline"
              >
                Report an issue or suggest a place <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} WanderAI Travel Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
