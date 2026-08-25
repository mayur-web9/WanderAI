/**
 * Unsplash Image Service for WanderAI
 * - Free Unsplash API (50 req/hour on demo, 5000/hour on production)
 * - Results are cached in localStorage for 24 hours to avoid repeated calls
 * - Falls back to a curated static Unsplash URL if API is unavailable
 */

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;
const BASE_URL = 'https://api.unsplash.com';
const CACHE_PREFIX = 'wanderai_img_';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface UnsplashPhoto {
  id: string;
  urls: { regular: string; small: string; thumb: string };
  alt_description: string | null;
  links: { html: string };
  user: { name: string; links: { html: string } };
}

interface CacheEntry {
  url: string;
  thumb: string;
  alt: string;
  credit: { name: string; link: string };
  cachedAt: number;
}

function getCacheKey(query: string): string {
  return CACHE_PREFIX + query.toLowerCase().replace(/\s+/g, '_');
}

function getFromCache(query: string): CacheEntry | null {
  try {
    const key = getCacheKey(query);
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.cachedAt > CACHE_TTL_MS) {
      localStorage.removeItem(key);
      return null;
    }
    return entry;
  } catch {
    return null;
  }
}

function setCache(query: string, entry: CacheEntry): void {
  try {
    localStorage.setItem(getCacheKey(query), JSON.stringify(entry));
  } catch {
    // localStorage full — ignore
  }
}

/**
 * Fetch a single highly-relevant photo from Unsplash for a given search query.
 * Results are cached 24h in localStorage.
 */
export async function fetchUnsplashImage(query: string): Promise<CacheEntry | null> {
  // Return cache immediately
  const cached = getFromCache(query);
  if (cached) return cached;

  if (!ACCESS_KEY || ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY') {
    return null; // No key configured
  }

  try {
    const params = new URLSearchParams({
      query,
      per_page: '1',
      orientation: 'landscape',
      content_filter: 'high',
    });

    const res = await fetch(`${BASE_URL}/search/photos?${params}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
        'Accept-Version': 'v1',
      },
    });

    if (!res.ok) return null;
    const data = await res.json();
    const photo: UnsplashPhoto = data?.results?.[0];
    if (!photo) return null;

    // Trigger Unsplash download event (required by API guidelines)
    fetch(`${BASE_URL}/photos/${photo.id}/download`, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    }).catch(() => {});

    const entry: CacheEntry = {
      url: photo.urls.regular + '&w=800&q=80',
      thumb: photo.urls.small,
      alt: photo.alt_description ?? query,
      credit: {
        name: photo.user.name,
        link: photo.user.links.html + '?utm_source=wanderai&utm_medium=referral',
      },
      cachedAt: Date.now(),
    };

    setCache(query, entry);
    return entry;
  } catch {
    return null;
  }
}

// ─── Curated search terms for every item in WanderAI ────────────────────────
// Each is a precise English search phrase that gives maximum relevance on Unsplash

export const DESTINATION_QUERIES: Record<string, string> = {
  'taj-mahal':           'Taj Mahal Agra India sunrise',
  'varanasi-ghats':      'Varanasi Ganga ghats aarti India',
  'kerala-backwaters':   'Kerala backwaters houseboat India',
  'hampi-ruins':         'Hampi ruins stone chariot Karnataka India',
  'leh-ladakh':          'Pangong Tso lake Ladakh mountains India',
  'golden-temple':       'Golden Temple Amritsar Harmandir Sahib',
  'munnar-tea-gardens':  'Munnar tea plantation Kerala rolling hills',
  'mysore-palace':       'Mysore Palace illuminated Karnataka India',
  'amer-fort':           'Amer Fort Jaipur Rajasthan hilltop',
  'konark-sun-temple':   'Konark Sun Temple Odisha stone chariot',
  'ranthambore':         'Bengal tiger wildlife Ranthambore India',
  'victoria-memorial':   'Victoria Memorial Kolkata white marble',
  'ajanta-ellora':       'Ellora Ajanta caves rock cut temple India',
  'meenakshi-temple':    'Meenakshi Amman Temple Madurai gopuram',
  'qutub-minar':         'Qutub Minar Delhi minaret India heritage',
  'sundarbans':          'Sundarbans mangrove forest Bengal tiger delta',
  'rishikesh-ganga':     'Rishikesh Ganga river bridge yoga ashram',
  'cherrapunji-bridges': 'living root bridge Meghalaya Cherrapunji',
  'jaisalmer-fort':      'Jaisalmer golden fort desert Rajasthan',
  'kaziranga-park':      'Kaziranga one horned rhino Assam India',
  'goa-coastal':         'Goa beach sunset palm fort coastal India',
  'valley-of-flowers':   'Valley of Flowers Uttarakhand alpine meadow',
  'jonha-falls':         'waterfall Jharkhand forest India cascade',
  'betla-national-park': 'Betla national park elephant forest India',
  'baidyanath-dham':     'Baidyanath Dham temple Deoghar Jharkhand',
  'netarhat-hills':      'Netarhat sunrise hills Jharkhand India',
  'ranchi-lake':         'Ranchi lake boating Jharkhand India',
};

export const EVENT_QUERIES: Record<string, string> = {
  'Sarhul Festival':    'Sarhul tribal festival flowers India spring',
  'Karma Festival':     'tribal harvest festival India dance ritual',
  'Tusu Parab':         'Makar Sankranti India festival lamps celebration',
  'Chhath Puja':        'Chhath puja river sunrise devotees India',
  'Rohini Festival':    'Indian agriculture sowing festival rural fields',
  'Bandna Festival':    'decorated cattle festival India Santhal rural',
  'Mysore Dussehra':    'Mysore Dussehra elephant procession palace Karnataka',
  'Pushkar Camel Fair': 'Pushkar camel fair Rajasthan desert India',
  'Hornbill Festival':  'Hornbill festival Nagaland tribal dance Northeast India',
};

export const MARKETPLACE_QUERIES: Record<string, string> = {
  'Dilli Haat, Delhi':                    'Dilli Haat Delhi handicraft market India',
  'Colaba Causeway, Mumbai':              'Colaba Causeway Mumbai street market India',
  'Johari Bazaar, Jaipur':               'Johari Bazaar Jaipur jewelry gemstone market',
  'Anjuna Flea Market, Goa':             'Anjuna flea market Goa beach bohemian',
  'Laad Bazaar, Hyderabad':              'Laad Bazaar Hyderabad bangles colorful Charminar',
  'Floating Vegetable Market, Srinagar': 'Dal Lake shikara boat vegetable market Srinagar',
  'Police Bazar, Shillong':              'Shillong market Meghalaya Northeast India shopping',
  'Janpath Market, Delhi':               'Janpath market Delhi ethnic jewelry handicraft',
  'Pondy Bazaar, Chennai':               'Pondy Bazaar Chennai T Nagar shopping saree',
};
