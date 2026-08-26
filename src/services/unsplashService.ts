/**
 * Unsplash Image Service for WanderAI
 * ─────────────────────────────────────────────────────────────────────────────
 * AUTOMATIC IMAGE FETCHING — no manual mapping ever needed.
 *
 * How it works:
 *   1. Pass any destination/event/marketplace object to buildQuery()
 *   2. It constructs the best possible Unsplash search term from the item's
 *      own metadata (name, location, category, type)
 *   3. fetchUnsplashImage() searches Unsplash API and returns the top result
 *   4. Results are cached in localStorage for 24 hours per unique query
 *   5. Falls back gracefully to a static URL if API is unavailable
 *
 * Adding a new destination/event/marketplace? Zero extra config needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;
const BASE_URL = 'https://api.unsplash.com';
const CACHE_PREFIX = 'wanderai_img_v2_';
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
  cachedAt: number;
}

// ─── Cache helpers ────────────────────────────────────────────────────────────
function getCacheKey(query: string): string {
  return CACHE_PREFIX + query.toLowerCase().replace(/[^a-z0-9]+/g, '_').slice(0, 80);
}

function getFromCache(query: string): CacheEntry | null {
  try {
    const raw = localStorage.getItem(getCacheKey(query));
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.cachedAt > CACHE_TTL_MS) {
      localStorage.removeItem(getCacheKey(query));
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
  } catch { /* localStorage full — ignore */ }
}

// ─── Core API fetch ───────────────────────────────────────────────────────────
/**
 * Fetch the single most relevant Unsplash photo for the given search query.
 * Results are cached 24h. Returns null if no key or request fails.
 */
export async function fetchUnsplashImage(query: string): Promise<CacheEntry | null> {
  const cached = getFromCache(query);
  if (cached) return cached;

  if (!ACCESS_KEY || ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY') return null;

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

    // Required by Unsplash API guidelines
    fetch(`${BASE_URL}/photos/${photo.id}/download`, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    }).catch(() => {});

    const entry: CacheEntry = {
      url: photo.urls.regular + '&w=800&q=80',
      thumb: photo.urls.small,
      alt: photo.alt_description ?? query,
      cachedAt: Date.now(),
    };

    setCache(query, entry);
    return entry;
  } catch {
    return null;
  }
}

// ─── AUTO QUERY BUILDERS ──────────────────────────────────────────────────────
// These functions automatically generate the best Unsplash search query from
// an item's own metadata. No lookup table needed — works for any new item.

/**
 * Category → Unsplash keyword mapping for Indian destinations.
 * Helps narrow results to the right type of photo.
 */
const CATEGORY_KEYWORDS: Record<string, string> = {
  historical: 'heritage monument India',
  temple:     'temple India Hindu shrine',
  wildlife:   'wildlife India national park',
  park:       'nature India landscape',
  beach:      'beach India coastal',
  hill:       'hill station India mountains',
  spiritual:  'spiritual India pilgrimage',
  fort:       'fort palace Rajasthan India',
  waterfall:  'waterfall India nature',
  lake:       'lake India scenic',
  forest:     'forest India jungle',
  museum:     'museum India architecture',
};

const EVENT_CATEGORY_KEYWORDS: Record<string, string> = {
  festival:   'Indian festival celebration colorful',
  cultural:   'Indian cultural event dance tradition',
  fair:       'India fair mela carnival',
  religious:  'India religious ceremony ritual',
  tribal:     'India tribal indigenous festival',
};

/**
 * Automatically build the best Unsplash search query for a DESTINATION.
 * Works for any destination — new ones included — with zero configuration.
 */
export function buildDestinationQuery(destination: {
  name: string;
  district?: string;
  category?: string;
}): string {
  const parts: string[] = [destination.name];

  if (destination.district && !destination.name.toLowerCase().includes(destination.district.toLowerCase())) {
    parts.push(destination.district);
  }

  const catKw = destination.category
    ? CATEGORY_KEYWORDS[destination.category.toLowerCase()] ?? 'India travel'
    : 'India tourism';

  parts.push(catKw);

  return parts.join(' ');
}

/**
 * Automatically build the best Unsplash search query for an EVENT/FESTIVAL.
 * Works for any event — new ones included — with zero configuration.
 */
export function buildEventQuery(event: {
  name: string;
  location?: string;
  category?: string;
}): string {
  const parts: string[] = [event.name];

  const locKw = event.location
    ? event.location.split(',')[0].trim()
    : 'India';

  if (!event.name.toLowerCase().includes(locKw.toLowerCase())) {
    parts.push(locKw);
  }

  const catKw = event.category
    ? EVENT_CATEGORY_KEYWORDS[event.category.toLowerCase()] ?? 'India festival'
    : 'India festival celebration';

  parts.push(catKw);

  return parts.join(' ');
}

/**
 * Automatically build the best Unsplash search query for a MARKETPLACE/BAZAAR.
 * Works for any marketplace — new ones included — with zero configuration.
 */
export function buildMarketplaceQuery(marketplace: {
  name: string;
  location?: string;
  tags?: string[];
}): string {
  // Extract city from "Market Name, City" format
  const nameParts = marketplace.name.split(',');
  const marketName = nameParts[0].trim();
  const city = nameParts[1]?.trim() ?? marketplace.location?.split(',')[0]?.trim() ?? '';

  const parts: string[] = [marketName];
  if (city && !marketName.toLowerCase().includes(city.toLowerCase())) {
    parts.push(city);
  }

  // Add most relevant tag as keyword
  const tag = marketplace.tags?.[0];
  if (tag) parts.push(tag);

  parts.push('market bazaar India shopping');

  return parts.join(' ');
}
