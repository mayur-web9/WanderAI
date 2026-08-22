import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 py-16 bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
    <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-xl">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-forest-600 via-forest-500 to-saffron-500 text-white text-3xl flex items-center justify-center mx-auto shadow-lg shadow-forest-900/20">
        🧭
      </div>
      
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-saffron-600 dark:text-saffron-400">
          Lost in Exploration
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 dark:text-white mt-1">
          404 Not Found
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Looks like this travel trail hasn’t been mapped yet, or the page you are looking for has taken another detour across India.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Link
          to="/"
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-forest-700 hover:bg-forest-800 text-white font-bold rounded-xl text-xs shadow-md transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <Link
          to="/itinerary"
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-xl text-xs shadow-md transition-all"
        >
          <Sparkles className="w-4 h-4" />
          Ask WanderAI
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
