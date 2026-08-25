import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToHome from './components/BackToHome';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Marketplaces from './pages/Marketplaces';
import Events from './pages/Events';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';
import Ai from './Ai';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-obsidian-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/itinerary" element={<Ai />} />
          <Route path="/ai" element={<Navigate to="/itinerary?tab=chat" replace />} />
          <Route path="/chat" element={<Navigate to="/itinerary?tab=chat" replace />} />
          <Route path="/plan" element={<Navigate to="/itinerary?tab=plan" replace />} />
          <Route path="/planner" element={<Navigate to="/itinerary?tab=plan" replace />} />
          <Route path="/marketplaces" element={<Marketplaces />} />
          <Route path="/Marketplaces" element={<Marketplaces />} />
          <Route path="/events" element={<Events />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <BackToHome />
      <Footer />
    </div>
  );
}

export default App;
