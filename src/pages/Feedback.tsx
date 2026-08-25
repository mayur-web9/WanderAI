import { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Star, 
  Sparkles, 
  Bug, 
  HelpCircle, 
  ThumbsUp,
  Phone,
  Shield,
  Compass
} from 'lucide-react';
import { Feedback as FeedbackType } from '../types';
import { submitDbFeedback } from '../services/supabaseService';

const Feedback = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    category: 'suggestion' as FeedbackType['category'],
    message: '',
  });
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const categories: { id: FeedbackType['category']; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'suggestion', label: 'Suggestion', icon: Sparkles },
    { id: 'praise', label: 'Praise', icon: ThumbsUp },
    { id: 'bug', label: 'Bug Report', icon: Bug },
    { id: 'other', label: 'Other', icon: HelpCircle },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitDbFeedback({
        user_name: formData.user_name,
        user_email: formData.user_email,
        category: formData.category,
        message: formData.message,
        rating,
      });
    } catch (error) {
      console.warn('Unable to send feedback to Supabase:', error);
    }

    setSubmitting(false);
    setSubmitted(true);
    setFormData({
      user_name: '',
      user_email: '',
      category: 'suggestion',
      message: '',
    });

    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-100 dark:bg-forest-900/30 text-forest-700 dark:text-forest-400 border border-forest-200 dark:border-forest-800 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            We Value Your Voice
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white">
            Share Your Experience & Insights
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
            Help us improve WanderAI algorithms, suggest hidden places in your hometown, or let us know how your trip went.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Context, FAQs & Emergency Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-forest-900 to-forest-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-saffron-500/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-lg text-white">Why Your Feedback Matters</h2>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-6">
                WanderAI combines live regional knowledge with artificial intelligence. Your suggestions directly shape our next destination datasets, travel safety tips, and regional food suggestions.
              </p>

              <div className="space-y-3 text-xs text-emerald-50">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center font-bold text-emerald-300">✓</span>
                  <span>Suggest unlisted historical or eco sites</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center font-bold text-emerald-300">✓</span>
                  <span>Report route delays or seasonal changes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center font-bold text-emerald-300">✓</span>
                  <span>Review WanderAI's accuracy and suggestions</span>
                </div>
              </div>
            </div>

            {/* Tourist Assistance Banner */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-forest-600 dark:text-forest-400" />
                24x7 Tourist Assistance
              </h3>
              
              <p className="text-xs text-gray-500 dark:text-gray-400">
                For immediate on-ground travel emergency assistance while in India:
              </p>

              <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">Ministry of Tourism (Incredible India)</span>
                <a href="tel:1363" className="text-xs font-extrabold text-forest-700 dark:text-forest-400 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> 1363
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Feedback Form */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-xl p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                  Dhanyavaad! Feedback Received 🙏
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Thank you for helping us elevate WanderAI. Your insights empower smarter travel across India.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-forest-600 text-white text-xs font-bold hover:bg-forest-700 transition"
                >
                  Send Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
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
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 ml-2">
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
                          className={`p-3 rounded-2xl text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                            formData.category === cat.id
                              ? 'bg-forest-600 text-white shadow-sm ring-2 ring-forest-500/20'
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

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="user_name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      required
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-sm focus:ring-2 focus:ring-forest-500 focus:outline-none transition shadow-xs"
                      value={formData.user_name}
                      onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      required
                      placeholder="ananya@example.com"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-sm focus:ring-2 focus:ring-forest-500 focus:outline-none transition shadow-xs"
                      value={formData.user_email}
                      onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                    />
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
                    placeholder="Tell us what you liked, which unseen places we should add, or anything we can improve..."
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 text-sm focus:ring-2 focus:ring-forest-500 focus:outline-none transition resize-none leading-relaxed shadow-xs"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-forest-700 via-forest-800 to-forest-900 hover:from-forest-800 hover:to-forest-950 text-white font-bold text-sm sm:text-base shadow-lg shadow-forest-900/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'Submitting…' : 'Submit Feedback'}
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
