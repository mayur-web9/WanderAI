import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

const BackToHome = () => {
  const location = useLocation();
  
  // Don't show on home page or during dedicated full-height itinerary
  if (location.pathname === '/' || location.pathname === '/itinerary') {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-40 print:hidden">
      <Link
        to="/"
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold text-xs rounded-full shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 transition-all duration-200 border border-gray-200 dark:border-gray-700 backdrop-blur-md"
        title="Return to WanderAI Home"
      >
        <div className="p-1 rounded-full bg-forest-50 dark:bg-forest-900/50 text-forest-700 dark:text-forest-400 group-hover:bg-forest-100 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
        </div>
        <span className="flex items-center gap-1.5 pr-1">
          <Compass className="w-3.5 h-3.5 text-saffron-500" />
          Home
        </span>
      </Link>
    </div>
  );
};

export default BackToHome;
