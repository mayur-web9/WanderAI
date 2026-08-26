import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  User, 
  Compass, 
  ChevronDown, 
  LogOut, 
  Sparkles, 
  LayoutDashboard,
  MapPin,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setAccountOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Compass },
    { name: 'AI Itinerary', path: '/itinerary', icon: Sparkles, badge: 'AI' },
    { name: 'Feedback', path: '/feedback', icon: MessageSquare },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 dark:bg-obsidian-950/90 backdrop-blur-xl shadow-md border-b border-gray-200/80 dark:border-gray-800/80' 
          : isHome
            ? 'bg-forest-950/75 dark:bg-obsidian-950/80 backdrop-blur-md border-b border-white/10 dark:border-gray-800/40 text-white'
            : 'bg-white/90 dark:bg-obsidian-950/90 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-forest-700 via-forest-600 to-saffron-500 flex items-center justify-center shadow-md shadow-forest-900/20 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-saffron-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                !scrolled && isHome ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                Wander<span className="text-saffron-500">AI</span>
              </span>
              <span className={`text-[10px] font-semibold tracking-wider uppercase -mt-1 ${
                !scrolled && isHome ? 'text-emerald-200/80' : 'text-gray-500 dark:text-gray-400'
              }`}>
                Discover Unseen India
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className={`hidden md:flex items-center space-x-1 p-1 rounded-2xl border transition-colors ${
            !scrolled && isHome
              ? 'bg-white/10 border-white/15'
              : 'bg-gray-100/80 dark:bg-gray-900/70 border-gray-200/70 dark:border-gray-800/70'
          }`}>
            {navLinks.map((link) => {
              const isActive = location.pathname.toLowerCase() === link.path.toLowerCase();
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 relative ${
                    isActive
                      ? !scrolled && isHome
                        ? 'bg-white text-forest-900 shadow-sm'
                        : 'bg-white dark:bg-gray-800 text-forest-700 dark:text-forest-400 shadow-sm'
                      : !scrolled && isHome
                        ? 'text-emerald-100 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-gray-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-xs">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all border ${
                !scrolled && isHome
                  ? 'bg-white/10 hover:bg-white/20 text-white border-white/15'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-200/70 dark:border-gray-700/60'
              }`}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to Dark mode' : 'Switch to Light mode'}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4 text-saffron-400" />
              )}
            </button>

            {/* User Profile / Login Dropdown */}
            {!user ? (
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setAccountOpen((v) => !v)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs transition-all shadow-xs border ${
                    !scrolled && isHome
                      ? 'bg-saffron-500 hover:bg-saffron-600 text-white border-saffron-400/40 shadow-saffron-500/20'
                      : 'bg-forest-700 hover:bg-forest-800 text-white border-forest-600/40'
                  }`}
                >
                  <User className="h-3.5 w-3.5" />
                  <span>Account</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      to="/login"
                      className="flex items-center px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-forest-50 dark:hover:bg-gray-800"
                    >
                      Tourist Login
                    </Link>
                    <Link
                      to="/register"
                      className="flex items-center px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-forest-50 dark:hover:bg-gray-800"
                    >
                      Register Free
                    </Link>
                    
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setAccountOpen((v) => !v)}
                  className="flex items-center gap-2 p-1.5 pl-2.5 rounded-xl bg-forest-50 dark:bg-forest-950/60 border border-forest-200 dark:border-forest-800 text-xs font-bold text-forest-800 dark:text-forest-200"
                >
                  <span>{user.full_name?.split(' ')[0] || user.email?.split('@')[0]}</span>
                  <div className="w-6 h-6 rounded-lg bg-forest-700 text-white flex items-center justify-center text-xs font-extrabold uppercase shadow-xs">
                    {user.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
                  </div>
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800">
                      <p className="text-xs font-bold text-gray-900 dark:text-white truncate">{user.full_name || 'Traveler'}</p>
                      <p className="text-[11px] text-gray-400 truncate">{user.email}</p>
                    </div>

                    

                    <Link
                      to="/itinerary"
                      className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-forest-50 dark:hover:bg-gray-800"
                    >
                      <Sparkles className="w-4 h-4 text-saffron-500" />
                      My Saved Plans
                    </Link>

                    <div className="border-t border-gray-100 dark:border-gray-800 my-1" />

                    <button
                      onClick={() => signOut()}
                      className="w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 text-left"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            
          </div>
        </div>
      </div>

            </nav>
{/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/95 dark:bg-obsidian-950/95 backdrop-blur-xl border-t border-gray-200/80 dark:border-gray-800 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] safe-area-pb">
        <div className="flex items-center justify-around h-16 px-2">
          {navLinks.map((link) => {
            const isActive = location.pathname.toLowerCase() === link.path.toLowerCase() || (link.path === '/itinerary' && (location.pathname.startsWith('/itinerary') || location.pathname === '/plan' || location.pathname === '/chat' || location.pathname === '/events' || location.pathname === '/marketplaces'));
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  isActive
                    ? 'text-forest-600 dark:text-forest-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isActive ? 'bg-forest-100 dark:bg-forest-900/50' : 'bg-transparent'}`}>
                  <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} />
                </div>
                <span className={`text-[10px] font-bold transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  {link.name === 'AI Itinerary' ? 'Itinerary' : link.name}
                </span>
                {link.badge && (
                  <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-saffron-500 border-2 border-white dark:border-obsidian-950" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    
    </>
  );
};

export default Navbar;
