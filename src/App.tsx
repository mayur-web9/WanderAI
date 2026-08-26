import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CultureEvents from './pages/CultureEvents';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';
import Ai from './Ai';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Navigate to="/" replace />} />
          <Route path="/itinerary" element={<Ai />} />
          <Route path="/ai" element={<Navigate to="/itinerary?tab=chat" replace />} />
          <Route path="/chat" element={<Navigate to="/itinerary?tab=chat" replace />} />
          <Route path="/plan" element={<Navigate to="/itinerary?tab=plan" replace />} />
          <Route path="/planner" element={<Navigate to="/itinerary?tab=plan" replace />} />
          <Route path="/marketplaces" element={<CultureEvents defaultTab="bazaars" />} />
          <Route path="/Marketplaces" element={<CultureEvents defaultTab="bazaars" />} />
          <Route path="/culture" element={<CultureEvents defaultTab="all" />} />
          <Route path="/markets" element={<CultureEvents defaultTab="bazaars" />} />
          <Route path="/events" element={<CultureEvents defaultTab="events" />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Footer is only displayed on the Home page */}
      {location.pathname === '/' && <Footer />}
    </div>
  );
}

export default App;
