import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Send, 
  Star, 
  Sparkles, 
  Bug, 
  Lightbulb, 
  Heart, 
  HelpCircle,
  CheckCircle2,
  Lock,
  Mail,
  User,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { submitDbFeedback } from '../services/supabaseService';
import { useAuth } from '../contexts/AuthContext';

const Feedback: React.FC = () => {
  const { user } = useAuth();

  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    category: 'suggestion' as 'bug' | 'suggestion' | 'praise' | 'other',
    message: '',
  });

  // Automatically populate user profile info when logged in
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        user_name: user.full_name || user.email?.split('@')[0] || 'Traveler',
        user_email: user.email || ''
      }));
    }
  }, [user]);

  const categories = [
    { id: 'suggestion', label: 'Suggestion', icon: Lightbulb, color: 'text-amber-500' },
    { id: 'bug', label: 'Report Issue', icon: Bug, color: 'text-red-500' },
    { id: 'praise', label: 'Appreciation', icon: Heart, color: 'text-rose-500' },
    { id: 'other', label: 'General Feedback', icon: HelpCircle, color: 'text-forest-600' },
  ] as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim() || submitting || !user) return;

    setSubmitting(true);
    setEmailStatus(null);

    const feedbackPayload = {
      user_id: user.id,
      user_name: formData.user_name.trim() || user.full_name || 'Traveler',
      user_email: formData.user_email.trim() || user.email || '',
      category: formData.category,
      rating: rating,
      message: formData.message.trim(),
    };

    try {
      // 1. Save to Supabase travel_feedback table
      await submitDbFeedback(feedbackPayload);

      // 2. Send email notification to mayur.patil.ac@gmail.com via AJAX endpoint
      try {
        await fetch('https://formsubmit.co/ajax/mayur.patil.ac@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `WanderAI Feedback [${formData.category.toUpperCase()} - ${rating}★] from ${feedbackPayload.user_name}`,
            _template: 'table',
            traveler_name: feedbackPayload.user_name,
            traveler_email: feedbackPayload.user_email,
            rating: `${rating} / 5 Stars`,
            feedback_category: formData.category,
            user_message: feedbackPayload.message,
            user_id: user.id,
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
          })
        });
        setEmailStatus('Sent directly to Mayur Patil (mayur.patil.ac@gmail.com)');
      } catch (mailErr) {
        console.warn('Direct email dispatch note:', mailErr);
      }

      setSubmitted(true);
      setFormData(prev => ({ ...prev, message: '' }));
      setRating(5);
    } catch {
      alert('Unable to submit feedback. Please check your network connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 pt-6 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-100 dark:bg-forest-900/30 text-forest-700 dark:text-forest-400 border border-forest-200 dark:border-forest-800 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            We Value Your Voice
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white">
            Share Your Experience & Insights
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
            Help us improve WanderAI travel guides, suggest hidden gems, or let us know how your trip went.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Context, FAQs & Emergency Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-forest-900 to-forest-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-saffron-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Sparkles className="w-6 h-6 text-saffron-400" />
                </div>
                
                <h3 className="text-xl font-bold font-display">
                  Community-Driven Cultural Intelligence
                </h3>
                
                <p className="text-xs sm:text-sm text-forest-100 leading-relaxed">
                  WanderAI is continuously enriched by travelers across all Indian states. Every comment goes directly to our core developer:
                </p>

                <div className="p-3.5 rounded-2xl bg-forest-950/60 border border-forest-700/60 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-saffron-400 shrink-0" />
                  <div className="text-xs truncate">
                    <span className="text-forest-300 block text-[10px] uppercase font-bold">Direct Recipient</span>
                    <span className="font-bold text-white">mayur.patil.ac@gmail.com</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-forest-700/60 space-y-2 text-xs text-forest-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Logged-in tourist verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instant dispatch to developer mailbox</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tourist Helpline Numbers */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200/80 dark:border-gray-800 p-6 space-y-3 shadow-sm">
              <h4 className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-saffron-500" />
                <span>24x7 India Tourist Helpline</span>
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Ministry of Tourism toll-free multilingual assistance for domestic & international travelers:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="tel:1800111363"
                  className="px-3 py-1.5 rounded-xl bg-forest-50 dark:bg-forest-950/60 text-forest-700 dark:text-forest-300 text-xs font-bold border border-forest-200/80 dark:border-forest-800 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" /> 1800-11-1363
                </a>
                <a
                  href="tel:1363"
                  className="px-3 py-1.5 rounded-xl bg-forest-50 dark:bg-forest-950/60 text-forest-700 dark:text-forest-300 text-xs font-bold border border-forest-200/80 dark:border-forest-800 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" /> Shortcode 1363
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Feedback Form / Auth Guard */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-xl p-6 sm:p-10">
            
            {!user ? (
              /* Auth Wall for Guests */
              <div className="py-12 text-center space-y-4 max-w-md mx-auto">
                <div className="w-16 h-16 rounded-3xl bg-forest-50 dark:bg-forest-950 text-forest-700 dark:text-forest-400 flex items-center justify-center mx-auto shadow-md">
                  <Lock className="w-8 h-8 text-forest-600 dark:text-forest-400" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white">
                    Tourist Sign In Required
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    To maintain high-quality recommendations and verify genuine travel experiences, submitting feedback is reserved for registered travelers.
                  </p>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    to="/login"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs shadow-md transition text-center"
                  >
                    Sign In to Tourist Account
                  </Link>
                  <Link
                    to="/register"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xs transition text-center"
                  >
                    Create Free Account
                  </Link>
                </div>
              </div>
            ) : submitted ? (
              /* Success State */
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                  Dhanyavaad! Feedback Dispatched 🙏
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <b>{user.full_name || user.email}</b>. Your feedback has been sent directly to <b>mayur.patil.ac@gmail.com</b> and recorded in our travel intelligence database.
                </p>
                {emailStatus && (
                  <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 py-1.5 px-3 rounded-lg inline-block border border-emerald-200 dark:border-emerald-800">
                    ✓ {emailStatus}
                  </p>
                )}
                <div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-forest-700 text-white text-xs font-bold hover:bg-forest-800 transition shadow-sm"
                  >
                    Send Another Response
                  </button>
                </div>
              </div>
            ) : (
              /* Authenticated Feedback Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Logged in User Badge */}
                <div className="p-3 rounded-2xl bg-forest-50/80 dark:bg-forest-950/40 border border-forest-200/80 dark:border-forest-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-forest-700 text-white flex items-center justify-center text-xs font-bold">
                      {user.full_name?.charAt(0) || user.email?.charAt(0) || 'T'}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400 block">
                        Verified Tourist
                      </span>
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        {user.full_name || user.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium hidden sm:inline">
                    {user.email}
                  </span>
                </div>

                {/* Rating selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    How was your overall experience?
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 focus:outline-none transition-transform hover:scale-125"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= (hoverRating || rating)
                              ? 'fill-saffron-500 text-saffron-500'
                              : 'text-gray-300 dark:text-gray-700'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 ml-2">
                      {rating === 5 ? 'Exceptional 🌟' : rating === 4 ? 'Great 👍' : rating === 3 ? 'Good 👌' : 'Needs Work'}
                    </span>
                  </div>
                </div>

                {/* Category Selector Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    Feedback Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: cat.id })}
                          className={`p-2.5 rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                            formData.category === cat.id
                              ? 'bg-forest-700 text-white shadow-xs ring-2 ring-forest-500/20'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                    Your Thoughts or Suggestions
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us what you liked, suggest unlisted cultural spots, report a route issue, or suggest features..."
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-xs sm:text-sm focus:ring-2 focus:ring-forest-500 focus:outline-none transition resize-none leading-relaxed shadow-2xs"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting || !formData.message.trim()}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-forest-700 via-forest-800 to-forest-900 hover:from-forest-800 hover:to-forest-950 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'Dispatching to mayur.patil.ac@gmail.com…' : 'Submit Feedback to Developer'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Feedback;
