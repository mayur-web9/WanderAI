# 🌍 WanderAI — Intelligent Travel Guide & Itinerary Planner for Incredible India

[![Live Demo](https://img.shields.io/badge/Live_Demo-wanderrai.netlify.app-047857?style=for-the-badge&logo=netlify&logoColor=white)](https://wanderrai.netlify.app)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Gemini AI](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

> **Live Platform URL**: [https://wanderrai.netlify.app](https://wanderrai.netlify.app)

---

## 📖 Overview

**WanderAI** is a premier AI-driven tourism exploration and trip planning platform for India. Designed with a luxury Indian Emerald & Saffron glassmorphic aesthetic, WanderAI empowers global and domestic travelers to discover both world-famous wonders and untamed, hidden heritage sites across Indian states.

From snowy Himalayan passes and sacred Ganga ghats to serene Kerala backwaters and vibrant tribal craft bazaars, WanderAI crafts tailored, day-by-day itineraries with logistics, cuisine suggestions, and seasonal cultural guidance.

---

## ⚡ Core Features

### 1. 🤖 WanderAI Conversational Assistant
- **Real-Time Interactive Travel Guide**: Powered by Google Gemini AI with high-accuracy Indian tourism data.
- **Deep Feature & Prompt Linking**: One-click prompt exploration for eco-tours, beach getaways, train transit guides, and regional culinary trails.
- **Multilingual & Cultural Etiquette**: Contextual advice on sacred temple norms, best photography hours, entry protocols, and offbeat recommendations.

### 2. 🗺️ Intelligent AI Trip Planner
- **Multi-Parameter Customization**: Configure duration (2 to 10 days), travel pace, budget (Budget, Moderate, Luxury), starting hub, and target region.
- **Structured Schedules**: Delivers day-by-day morning/afternoon/evening breakdowns, must-try local delicacies, and logistics tips.
- **Direct Maps Integration**: Immediate Google Maps links for seamless on-ground navigation.

### 3. 🏛️ Curated Tourism Directory (150+ Places)
- Verified database of historical forts, eco-sanctuaries, high-altitude lakes, waterfalls, and Jyotirlinga shrines.
- Dynamic filtering by tags (Historical, Nature, Spiritual, Adventure, Heritage) and instant keyword search.

### 4. 🎭 Living Cultural Festivals & Events Calendar
- Real-time showcase of Indian harvest festivals, tribal ceremonies, and cultural fairs (e.g., Pushkar Fair, Hornbill Festival, Sarhul, Karma, Chhath Puja).

### 5. 🛍️ Traditional Bazaars & Indigenous Haats
- Curated guide to iconic Indian markets, state handlooms, Dokra metal crafts, spices, and gemstone bazaars (e.g., Dilli Haat, Jaipur Johari Bazaar, Mysore Devaraja Market).

### 6. 🔐 Supabase Cloud Database & Authentication
- **Isolated Multi-Project Schema**: Uses non-conflicting `travel_*` tables (`travel_chats`, `travel_messages`, `travel_destinations`, `travel_events`, `travel_marketplaces`, `travel_feedback`, `travel_itineraries`).
- **User Profiles & Saved Trips**: Cloud synchronization of user itineraries, chat logs, and community feedback.
- **Admin Dashboard**: Full portal to manage destinations, events, bazaars, and review inquiries.

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript & Vite
- **Styling & UI**: Tailwind CSS, PostCSS, Lucide Icons, Glassmorphism design system
- **Routing**: React Router v7
- **AI Intelligence**: Google Gemini API (`gemini-3.6-flash` / multi-model fallback)
- **Database & Auth**: Supabase (PostgreSQL, Row Level Security, Auth triggers)
- **Deployment**: Netlify

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/mayur-web9/WanderAI.git
cd travel.ai
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables Setup
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup
Run the SQL script from [`supabase_schema.sql`](./supabase_schema.sql) in your **Supabase SQL Editor** to initialize the `travel_*` tables and Row Level Security policies.

### 5. Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 6. Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```
├── public/                     # Static assets (images, favicon, icons)
├── src/
│   ├── components/             # Reusable UI components (Navbar, Footer, BackToHome)
│   ├── contexts/               # AuthContext (Supabase Auth) & ThemeContext
│   ├── pages/                  # Route views (Home, Login, Register, Dashboard, Events, Marketplaces, Feedback)
│   ├── services/               # supabaseService.ts (Cloud DB queries & mutations)
│   ├── types/                  # TypeScript interface definitions
│   ├── utils/                  # aiData.ts, mockData.ts, supabaseClient.ts
│   ├── Ai.tsx                  # WanderAI engine & Trip Planner interface
│   ├── App.tsx                 # Route configuration
│   └── main.tsx                # Entry point
├── supabase_schema.sql         # Non-destructive Supabase SQL migration script
├── tailwind.config.js          # Theme colors (Forest Emerald, Saffron, Sand, Obsidian)
└── vite.config.ts              # Vite build configuration
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Crafted with ❤️ for India’s rich heritage, culture, and tourism.
</p>
