# 🌍 WanderAI — Intelligent Travel Guide & Itinerary Planner for Incredible India

[![Live Demo](https://img.shields.io/badge/Live_Demo-wanderrai.netlify.app-047857?style=for-the-badge&logo=netlify&logoColor=white)](https://wanderrai.netlify.app)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

> **Live Platform URL**: [https://wanderrai.netlify.app](https://wanderrai.netlify.app)  
> **Lead Developer & Creator**: [Mayur Patil](mailto:mayur.patil.ac@gmail.com) (`mayur.patil.ac@gmail.com`)

---

## 📖 Overview

**WanderAI** (WanderAI Studio) is India's premier AI-powered intelligent travel companion and cultural exploration ecosystem. Crafted with a luxury Indian Emerald (`#0f3e2e`) & Saffron (`#f97316`) glassmorphic design system, WanderAI empowers solo travelers, backpackers, families, and global tourists to discover both iconic national monuments and untamed, hidden heritage sites across all 28 Indian states and Union Territories.

From the majestic Sahyadri mountain fortresses of Maharashtra and snowy Himalayan passes of Ladakh to sacred river ghats in Varanasi, serene Kerala backwaters, and vibrant tribal craft haats, WanderAI creates instant, highly realistic, day-by-day itineraries complete with transit routes, budget breakdowns in INR (₹), authentic culinary recommendations, and living festival calendars.

---

## 📊 Platform Catalog at a Glance

| Catalog | Count | Highlights |
| :--- | :---: | :--- |
| **🏰 Explore Destinations** | **1,111** | Full pan-India directory with Maharashtra's top forts, UNESCO caves, hill stations, and spiritual marvels leading at the top. |
| **🎪 Festivals & Cultural Fairs** | **111** | Living calendar with dates, sacred rituals, key highlights, and feast foods (*Ganesh Chaturthi, Pandharpur Wari, Durga Puja, Pushkar, Hornbill*). |
| **🛍️ Historic Marketplaces & Haats** | **111** | Iconic craft bazaars, jewelry lanes, spice alleys, and flea markets with opening hours, famous items, and bargaining tips. |
| **🤖 AI Suggestions & Prompts** | **50%+ MH** | Tailored prompt suggestions, curated circuits, and starting cities highlighting Maharashtra's heritage alongside national circuits. |

---

## ⚡ Key Features

### 1. 🤖 WanderAI Conversational Travel Companion
- **Real-Time Interactive Travel Assistant**: Instant customized itineraries, offbeat recommendations, and local travel tips.
- **Smart Multi-Chat Session Management**: Create, switch, rename, and manage multiple trip discussions with automatic title generation.
- **Voice Narration (Text-to-Speech)**: Integrated browser speech synthesis for hands-free audio itinerary playback.
- **1-Click Copy & Save**: Instantly copy formatted markdown or store plans directly into your private tourist workspace.
- **Dynamic AI Server Protection**: Graceful server busy and high-load status rotations with zero exposure of API quotas or internal limits.

### 2. 🗺️ Smart AI Trip Planner
- **Multi-Parameter Customization**: Configure duration (1 to 14 days), travel style (*Adventure, Cultural, Relaxation, Budget, Family, Luxury, Romantic, Offbeat*), budget tier, and pace.
- **Detailed Day-by-Day Schedules**: Delivers Morning, Afternoon, Evening, and Night activity breakdowns with budget estimates in ₹.
- **Direct Navigation**: Immediate Google Maps links for on-ground routing.

### 3. 🏛️ Destination Explorer (1,111 Verified Places)
- **Maharashtra Prioritization**: Features legendary Sahyadri forts (*Raigad, Sinhagad, Murud Janjira, Pratapgad, Rajgad, Shivneri*), UNESCO rock-cut caves (*Ajanta, Ellora, Elephanta*), hill stations (*Mahabaleshwar, Matheran, Lonavala, Kaas Plateau*), and spiritual landmarks (*Shirdi, Trimbakeshwar, Bhimashankar*) at the top.
- **Pan-India Coverage**: Includes iconic national wonders (*Amer Fort, Taj Mahal, Varanasi Ghats, Munnar, Hampi, Pangong Tso, Qutub Minar, Golden Temple*).
- **Fast Tag Filters**: Filter seamlessly by *Forts, Spiritual / Temples, Nature, Wildlife, Waterfalls, Hill Stations, Beaches, Caves, Tribal & Craft, Heritage, and Hidden Gems*.

### 4. 🎭 Cultural Festivals & Living Heritage (111 Celebrations)
- Detailed guides to India's harvest festivals, sacred temple gatherings, and tribal conclaves.
- Filter by *All, Festivals, Fairs, Cultural, and Sports* with instant state and keyword searching.

### 5. 🛍️ Traditional Bazaars & Craft Haats (111 Markets)
- Directory of century-old spice alleys, gemstone markets, handloom haats, and flea markets (*Colaba Causeway, Crawford Market, Chor Bazaar, Fashion Street, Zaveri Bazaar, Laxmi Road Pune, Dilli Haat, Johari Bazaar Jaipur*).

### 6. 📱 Responsive Mobile Experience & Navigation
- **Fixed Bottom Navigation Bar**: Easy one-thumb access on mobile devices to Home, Itinerary/AI Studio, and Feedback.
- **Closeable AI Workspace Drawer**: Slide-in mobile drawer for chat history and saved plans with a dedicated Close (✖) button and backdrop overlay.
- **Floating Detail Modals**: Responsive dialogs (`DetailModal.tsx`) with directions, sharing, and 1-click AI trip planning.

### 7. 💌 Verified Traveler Feedback Portal
- Secure feedback channel for authenticated tourists to report issues, suggest features, or share appreciation.
- Submissions include verified profile details (*Full Name, Username, Account Email, Tourist ID*) and dispatch directly to **`mayur.patil.ac@gmail.com`** via FormSubmit AJAX with Supabase logging.

### 8. 🔐 Authentication & Private Workspaces
- **1-Click Instant Demo Login**: Frictionless tourist test login.
- **Email & Password Authentication**: Supabase Auth integration with secure profile state.

---

## 🛠️ Technology & Architecture

- **Frontend Framework**: React 18 with TypeScript & Vite
- **Styling & UI**: Tailwind CSS, Lucide Icons, Glassmorphic Emerald & Saffron theme
- **Routing**: React Router v7
- **Data Engine**: Static zero-latency catalogs (`destinations1111.ts`, `mockData.ts`, `aiData.ts`)
- **Database & Auth**: Supabase PostgreSQL with isolated `travel_*` schema
- **Deployment**: Netlify

---

## 🚀 Getting Started Locally

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
VITE_GEMINI_API_KEYS=your_gemini_api_key
VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup (Optional)
Run the migration script from [`supabase_schema.sql`](./supabase_schema.sql) in your **Supabase SQL Editor** to initialize the `travel_*` tables (`travel_chats`, `travel_messages`, `travel_itineraries`, `travel_feedback`).

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
├── public/                     # Static assets (favicons, images, logos)
├── src/
│   ├── components/             # Reusable UI components (Navbar, Footer, DetailModal, FormattedMarkdown)
│   ├── contexts/               # AuthContext (Supabase Auth) & ThemeContext (Light/Dark)
│   ├── pages/                  # Page views (Home, Login, Register, CultureEvents, Feedback, NotFound)
│   ├── services/               # supabaseService.ts (Auth, Chats, Feedback, Saved Itineraries)
│   ├── types/                  # TypeScript interface definitions (Destination, Event, Marketplace, Chat)
│   ├── utils/
│   │   ├── aiData.ts           # System prompts, AI suggestions, and platform knowledge
│   │   ├── destinations1111.ts # 1,111 Verified Indian destinations (Maharashtra-prioritized)
│   │   ├── mockData.ts         # 111 Festivals & Fairs, 111 Marketplaces, and Mock Data
│   │   └── supabaseClient.ts   # Supabase client initializer
│   ├── Ai.tsx                  # WanderAI Studio (Chat, Planner, Explore, Festivals, Saved)
│   ├── App.tsx                 # Route declarations & global layout
│   └── main.tsx                # React application entry point
├── supabase_schema.sql         # Non-destructive Supabase SQL migration script
├── tailwind.config.js          # Theme colors (Forest Emerald, Saffron, Sand, Obsidian)
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 👨‍💻 Developer & Support Contact

- **Developer**: **Mayur Patil**
- **Email**: [mayur.patil.ac@gmail.com](mailto:mayur.patil.ac@gmail.com)
- **Repository**: [https://github.com/mayur-web9/WanderAI.git](https://github.com/mayur-web9/WanderAI.git)

---

<p align="center">
  <b>WanderAI — Discover the Soul of Incredible India 🇮🇳</b><br>
  Built with ❤️ by Mayur Patil. All rights reserved.
</p>
