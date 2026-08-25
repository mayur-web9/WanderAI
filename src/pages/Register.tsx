import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  MapPin,
  Compass,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({ 
    full_name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!formData.full_name.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
      setError('Please complete all required fields.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      await signUp({
        full_name: formData.full_name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });
      setSubmitted(true);
      setTimeout(() => {
        navigate('/');
      }, 1200);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unable to register account.';
      setError(message);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex items-stretch bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      
      {/* Left Column: Visual Showcase Panel (Large Screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-forest-950 via-forest-900 to-obsidian-950 text-white p-12 flex-col justify-between overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85&auto=format&fit=crop')` }}
          />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-saffron-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-forest-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Branding */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-forest-700 via-forest-600 to-saffron-500 flex items-center justify-center text-white shadow-md">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              Wander<span className="text-saffron-400">AI</span>
            </span>
          </Link>
        </div>

        {/* Middle Value Proposition */}
        <div className="relative z-10 space-y-6 max-w-lg">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-saffron-300 text-xs font-bold border border-white/20">
            <Sparkles className="w-4 h-4 text-saffron-400" />
            Create Your Free Account
          </span>

          <h2 className="text-2xl xl:text-3xl font-extrabold font-display leading-tight">
            Unlock Personalized Travel Itineraries & Cultural Intelligence
          </h2>

          <p className="text-sm text-emerald-100/80 leading-relaxed">
            Join thousands of travelers exploring Indiaâ€™s heritage sites, pristine eco-trails, and vibrant bazaars with WanderAI.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Save and export custom day-by-day itineraries across all states",
              "Maintain persistent conversation history with WanderAI",
              "Receive personalized alerts for upcoming cultural fairs & festivals"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs text-gray-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                  <span className="text-emerald-300 text-xs font-bold">âœ“</span>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Guarantee Badge */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 max-w-md flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">100% Free Forever</p>
            <p className="text-[11px] text-emerald-200/80">No credit card required. Pure Indian travel intelligence.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Register Form Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16">
        <div className="max-w-md w-full space-y-7">
          
          <div>
            <div className="lg:hidden flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-forest-700 to-saffron-500 flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-display text-xl font-bold">WanderAI</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 dark:text-white">
              Create Your Account
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1.5">
              Register in seconds and start crafting intelligent India travel plans.
            </p>
          </div>

          {error && (
            <div className="rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 px-4 py-3 text-xs font-medium border border-red-200 dark:border-red-900/60 flex items-start gap-2 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-in fade-in zoom-in duration-200">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">Account Created!</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Welcome to WanderAI. Redirecting to homeâ€¦</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 transition shadow-xs"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 transition shadow-xs"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Min. 6 characters"
                    className="w-full pl-11 pr-11 py-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 transition shadow-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Re-enter password"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 transition shadow-xs"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-4 rounded-2xl bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-sm shadow-lg shadow-saffron-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Creating Accountâ€¦</span>
                ) : (
                  <>
                    <span>Create Free Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Sign in link */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Already registered?{' '}
              <Link to="/login" className="text-forest-700 dark:text-forest-400 font-bold hover:underline">
                Sign in to your account
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Register;

