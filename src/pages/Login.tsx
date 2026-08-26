import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { 
  Sparkles, 
  Mail, 
  Lock, 
  ArrowRight, 
  Compass, 
  Star, 
  AlertCircle,
  Eye,
  EyeOff,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { user, signIn, loginAsDemo } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDemoLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await loginAsDemo();
      navigate('/');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unable to activate demo login.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    setError(null);

    try {
      await signIn({
        email: email.trim().toLowerCase(),
        password: password.trim(),
      });
      navigate('/');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unable to sign in. Please check your credentials.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // If already logged in, redirect to home
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200/80 dark:border-gray-800 overflow-hidden">
        
        {/* Left Side: Brand Experience */}
        <div className="lg:col-span-5 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-saffron-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-saffron-500 to-amber-400 flex items-center justify-center shadow-lg">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight font-display text-white">
                Wander<span className="text-saffron-400">AI</span>
              </span>
            </Link>

            <div className="space-y-3 pt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-800/80 text-saffron-300 border border-forest-700/80">
                <Sparkles className="w-3.5 h-3.5" />
                Tourist Account
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                Unlock Your Personalized Indian Journeys
              </h2>
              <p className="text-xs sm:text-sm text-forest-200/90 leading-relaxed">
                Save multi-day itineraries, track your AI travel conversations, and explore curated cultural circuits.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-8 relative z-10 border-t border-forest-800/80">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-forest-800 flex items-center justify-center text-saffron-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-xs text-forest-200">
                Synchronized trip plans & AI chat histories
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-forest-800 flex items-center justify-center text-saffron-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-xs text-forest-200">
                Exclusive regional heritage & festival updates
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Clean Login Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
          
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Sign in with your email and password to access your saved itineraries.
            </p>
          </div>

          {error && (
            <div className="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 text-xs font-semibold text-red-600 dark:text-red-400 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 transition shadow-2xs"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-500 transition shadow-2xs"
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

            {/* Demo Autofill Helper */}
            <div className="pt-0.5">
              <button
                type="button"
                onClick={handleDemoLogin}
                disabled={loading}
                className="w-full py-2 px-3 rounded-xl bg-forest-50 dark:bg-forest-950/60 text-forest-800 dark:text-forest-200 hover:bg-forest-100 font-bold text-xs border border-forest-200/80 dark:border-forest-800/80 transition flex items-center justify-center gap-1.5 shadow-2xs group"
              >
                <Sparkles className="w-3.5 h-3.5 text-saffron-500 group-hover:scale-110 transition-transform" />
                <span>⚡ 1-Click Instant Demo Login (traveler@wanderai.com)</span>
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-forest-700 to-forest-900 hover:from-forest-800 hover:to-forest-950 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Signing in…</span>
              ) : (
                <>
                  <span>Sign In to Tourist Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Registration link */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800 text-center">
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
}
