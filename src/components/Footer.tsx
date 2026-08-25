import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Compass, Sparkles, Shield, ArrowRight, Check, Send, Mail } from 'lucide-react';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-sand-100 dark:bg-obsidian-900 border-t border-gray-200/80 dark:border-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-forest-800 via-forest-600 to-saffron-500 flex items-center justify-center shadow-md">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Wander<span className="text-saffron-500">AI</span>
                </span>
                <span className="text-[11px] font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
                  Discover Unseen India
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Empowering global and domestic travelers to explore India’s majestic landscapes, sacred shrines, hidden tribal heritage, and authentic bazaars using intelligent AI guidance.
            </p>
            
            {/* System Status & Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-forest-100 dark:bg-forest-900/40 text-forest-800 dark:text-forest-300 border border-forest-200 dark:border-forest-800">
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
                <Link to="/marketplaces" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Traditional Bazaars
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Cultural Festivals
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Community Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Regions */}
          <div>
            <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Top Circuits
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/itinerary?tab=chat&prompt=Plan%20a%20Himalayan%20trek%20in%20Ladakh%20and%20Spiti" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Himalayan Adventures
                </Link>
              </li>
              <li>
                <Link to="/itinerary?tab=chat&prompt=Recommend%20a%20Kerala%20Backwaters%20and%20Munnar%20circuit" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Kerala & Backwaters
                </Link>
              </li>
              <li>
                <Link to="/itinerary?tab=chat&prompt=Draft%20a%20Rajasthan%20Royal%20Palaces%20and%20desert%20itinerary" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Rajasthan Royal Palaces
                </Link>
              </li>
              <li>
                <Link to="/itinerary?tab=chat&prompt=What%20are%20the%20best%20waterfalls%20and%20eco%20shrines%20in%20Jharkhand%3F" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Jharkhand Eco Shrines
                </Link>
              </li>
              <li>
                <Link to="/itinerary?tab=chat&prompt=Guide%20me%20through%20Varanasi%20ghats%2C%20evening%20aarti%2C%20and%20food%20walks" className="hover:text-forest-600 dark:hover:text-forest-400 transition-colors">
                  Varanasi Spiritual Ghats
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Safety & Helpline */}
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
