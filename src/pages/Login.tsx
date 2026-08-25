import { useState } from 'react';
import { useNavigate, Link, Navigate, useSearchParams } from 'react-router-dom';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  AlertCircle,
  MapPin,
  Star
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, signIn } = useAuth();
  const [mode, setMode] = useState<'user' | 'admin'>(() => {
    const modeParam = searchParams.get('mode');
    return modeParam === 'admin' ? 'admin' : 'user';
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError('Email address is required.');
      return;
    }

    setLoading(true);
    try {
      const authenticatedUser = await signIn({
        email: email.trim().toLowerCase(),
        password: password.trim(),
      });
      navigate(authenticatedUser.role === 'admin' ? '/dashboard' : '/');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unable to sign in. Please check your credentials.';
      setError(message);
      
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return <Navigate to={user.role === 'admin' ? '/dashboard' : '/'} replace />;
  }

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex items-stretch bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      
      {/* Left Column: Visual Showcase (Visible on Large Screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-forest-950 via-forest-900 to-obsidian-950 text-white p-12 flex-col justify-between overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1548013146-59c1e67e02a4?w=1600&q=85&auto=format&fit=crop')` }}
          />
        </div>

        {/* Ambient Glows */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-forest-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-saffron-500/20 rounded-full blur-3xl pointer-events-none" />

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
            Next-Gen India Tourism Platform
          </span>

          <h2 className="text-2xl xl:text-3xl font-extrabold font-display leading-tight">
            Discover Unseen Shrines, Backwaters, & Hidden Heritage with AI
          </h2>

          <p className="text-sm text-emerald-100/80 leading-relaxed">
            Access your personalized multi-day itineraries, synced conversation history with WanderAI, and curated regional travel advisories.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Personalized Day-by-Day travel itineraries with Google Maps links",
              "Instant answers on local cuisine, entry fees, and cultural norms",
              "Verified insights for 150+ iconic and offbeat Indian destinations"
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

        {/* Bottom Testimonial Card */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 max-w-md">
          <div className="flex items-center gap-1 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-saffron-400 text-saffron-400" />
            ))}
          </div>
          <p className="text-xs text-white/90 italic">
            "WanderAI planned our 5-day Spiti Valley and Leh road trip flawlessly. The place notes and transport tips were spot-on!"
          </p>
          <p className="text-[10px] text-emerald-300 font-semibold mt-1">
            â€” Priya Patel, Ahmedabad
          </p>
        </div>
      </div>

      {/* Right Column: Authentication Form Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16">
        <div className="max-w-md w-full space-y-8">
          
          <div>
            <div className="lg:hidden flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-forest-700 to-saffron-500 flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-display text-xl font-bold">WanderAI</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 dark:text-white">
              {mode === 'admin' ? 'Admin Portal Login' : 'Welcome Back'}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1.5">
              {mode === 'admin'
                ? 'Sign in to access your administrative dashboard and content management.'
                : 'Sign in to access your saved travel itineraries and WanderAI conversations.'}
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="p-1 bg-gray-200/80 dark:bg-gray-800/80 rounded-2xl flex border border-gray-200 dark:border-gray-700/60">
            <button
              type="button"
              onClick={() => { setMode('user'); setError(null); }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                mode === 'user'
                  ? 'bg-white dark:bg-gray-900 text-forest-700 dark:text-forest-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Tourist Login
            </button>
            <button
              type="button"
              onClick={() => { setMode('admin'); setError(null); }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                mode === 'admin'
                  ? 'bg-white dark:bg-gray-900 text-saffron-600 dark:text-saffron-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin Portal
            </button>
          </div>

          {error && (
            <div className="rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 px-4 py-3 text-xs font-medium border border-red-200 dark:border-red-900/60 flex items-start gap-2 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                {mode === 'admin' ? 'Admin Email Address' : 'Email Address'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={mode === 'admin' ? 'admin@wanderai.com' : 'you@example.com'}
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 transition shadow-xs"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                {mode === 'admin' ? 'Security Key / Password' : 'Password'}
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                  required
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-forest-700 to-forest-900 hover:from-forest-800 hover:to-forest-950 text-white font-bold text-sm shadow-lg shadow-forest-900/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Verifying credentialsâ€¦</span>
              ) : (
                <>
                  <span>{mode === 'admin' ? 'Access Admin Dashboard' : 'Sign In to Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Registration link */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Don't have an account yet?{' '}
              <Link to="/register" className="text-forest-700 dark:text-forest-400 font-bold hover:underline">
                Create a free traveler account
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;

