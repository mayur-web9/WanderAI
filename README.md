# 🌍 WanderAI — AI-Powered Travel Intelligence & Itinerary Engine

[![Live Demo](https://img.shields.io/badge/Live_Demo-wanderrai.netlify.app-047857?style=for-the-badge&logo=netlify&logoColor=white)](https://wanderrai.netlify.app)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

> **Live Deployment**: [https://wanderrai.netlify.app](https://wanderrai.netlify.app)  
> **Lead Developer**: [Mayur Patil](mailto:mayur.patil.ac@gmail.com) (`mayur.patil.ac@gmail.com`)

---

## ⚡ Technical Architecture & AI Features

### 1. 🤖 Conversational AI Travel Companion
- **Real-Time Natural Language Processing**: Context-aware travel guide capable of generating dynamic multi-day itineraries, regional transit logistics, cultural etiquette advice, and localized culinary recommendations.
- **Smart Title Generation Engine**: Analyzes first-turn prompt semantics and automatically derives concise, content-based session titles for persistent chat histories.
- **Integrated Web Speech Synthesis**: Native client-side speech engine providing hands-free audio playback and voice narration for AI responses.
- **Interactive Markdown Parser**: Custom inline tokenizer rendering rich structured schedules, bullet points, code blocks, bold callouts, and clean typographic hierarchies.
- **1-Click Plan Archival & Clipboard Export**: Instant conversion of unstructured AI output into persistent database records and clipboard text.

### 2. 🗺️ Multi-Parameter AI Trip Planner
- **Algorithmic Itinerary Customization**: Generates highly realistic, structured travel schedules customized by:
  - **Duration**: Flexible multi-day scheduling (1 to 14 days).
  - **Travel Styles**: *Adventure, Cultural, Relaxation, Budget, Family, Luxury, Romantic, Offbeat*.
  - **Budget Allocation**: Automated tiering in INR (₹) including food, entry fees, and local transit.
  - **Pacing**: *Fast-Paced, Moderate, Relaxed*.
- **Structured Day Breakdowns**: Granular morning, afternoon, evening, and night logistics with integrated external navigation links.

### 3. 🛡️ Multi-Model Pool & Dynamic Load Protection
- **Multi-Key Load Balancing Pool**: Client-side load balancing distributing inference requests randomly across an active key pool.
- **Multi-Model Fallback Hierarchy**: Sequential fallback mechanism automatically cycling through multiple models to guarantee high availability.
- **Graceful Load Masking**: Automatic interception of network anomalies or service latency, dynamically rotating through realistic server status notifications without exposing internal quotas or raw error codes.

### 4. 🧭 Intelligent Dynamic Prompt Recommendation System
- **Curated Prompt Matrix**: Categorized recommendation carousel filtering prompts across *Itineraries, Food & Markets, Budget & Transit, and Temples & Culture*.
- **Randomized Query Generator ("Surprise Me")**: Algorithmic prompt selector providing diverse discovery triggers across regions and travel themes.

### 5. 📱 Reactive State & Mobile Viewport Engine
- **Unified Workspace Switcher**: Seamless single-page tab switching (*Chat Companion, Trip Planner, Explore Catalog, Cultural Events, Saved Itineraries*).
- **Responsive Stacking & Drawer Architecture**: Mobile slide-in workspace drawer with backdrop isolation and touch-friendly controls.
- **Fixed Viewport Calculation**: Dynamic height adjustments (`h-[calc(100vh-...)]`) preventing virtual keyboard and bottom navigation clipping on mobile viewports.

### 6. 🔐 Cloud Data Layer & Authentication (Supabase)
- **Isolated Schema Architecture**: Uses scoped `travel_*` tables (`travel_chats`, `travel_messages`, `travel_itineraries`, `travel_feedback`) preventing namespace collisions.
- **Row Level Security (RLS)**: Fine-grained PostgreSQL policies securing tourist chat history and saved plans.
- **1-Click Instant Demo Authentication**: Low-friction guest testing flow with session persistence.
- **Verified Feedback Pipeline**: Authenticated form submission embedding tourist identity details with automated dispatch to the developer.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | React 18, TypeScript | Strongly typed component architecture |
| **Build & Bundler** | Vite 5 | Fast HMR and optimized production bundling |
| **Styling & Theme** | Tailwind CSS, PostCSS | Custom glassmorphic Emerald & Saffron design system |
| **Icons & UI** | Lucide React | Lightweight vector iconography |
| **Routing** | React Router v7 | Client-side routing and deep-link query parameter parsing |
| **Cloud Backend** | Supabase (PostgreSQL) | Authentication, session persistence, and feedback logging |
| **Voice & Speech** | Web Speech API | Client-side text-to-speech audio synthesis |
| **Deployment** | Netlify | Continuous deployment with automated production builds |

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

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEYS=your_api_key
VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup (Optional)
Execute the SQL migration from [`supabase_schema.sql`](./supabase_schema.sql) in your **Supabase SQL Editor** to initialize the required tables and security policies.

### 5. Start Development Server
```bash
npm run dev
```
The application will be running at `http://localhost:5173`.

### 6. Production Build & Verification
```bash
npm run build
npm run preview
```

---

## 📂 Codebase Structure

```
├── public/                     # Static assets, logos, favicons
├── src/
│   ├── components/             # Reusable UI components (Navbar, Footer, DetailModal, FormattedMarkdown)
│   ├── contexts/               # AuthContext (Supabase Auth) & ThemeContext (Light/Dark mode)
│   ├── pages/                  # Views (Home, Login, Register, CultureEvents, Feedback, About, NotFound)
│   ├── services/               # supabaseService.ts (Cloud database queries, auth, feedback)
│   ├── types/                  # TypeScript interface definitions (Destination, Event, Marketplace, Chat)
│   ├── utils/                  # aiData.ts, destinations1111.ts, mockData.ts, supabaseClient.ts
│   ├── Ai.tsx                  # WanderAI Studio workspace (Chat, Planner, Catalogs, Saved Vault)
│   ├── App.tsx                 # Route declarations & global layout wrapper
│   └── main.tsx                # Application bootstrap
├── supabase_schema.sql         # Non-destructive Supabase SQL schema & RLS policies
├── tailwind.config.js          # Design system color tokens & glassmorphic utilities
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite bundler configuration
```

---

## 👨‍💻 Developer & Contact

- **Developer**: **Mayur Patil**
- **Email**: [mayur.patil.ac@gmail.com](mailto:mayur.patil.ac@gmail.com)
- **Repository**: [https://github.com/mayur-web9/WanderAI.git](https://github.com/mayur-web9/WanderAI.git)

---

<p align="center">
  <b>WanderAI Engine — Built by Mayur Patil</b>
</p>
