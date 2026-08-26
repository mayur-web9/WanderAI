/**
 * Unsplash Image Service for WanderAI
 * ─────────────────────────────────────────────────────────────────────────────
 * ZERO API KEY NEEDED — Uses Unsplash Source URLs.
 *
 * Format: https://source.unsplash.com/{w}x{h}/?{search+terms}
 *
 * - Works instantly, no registration, no rate limits for display
 * - Each unique query returns a consistent, relevant photo
 * - Auto-query builders construct perfect search terms from item metadata
 * - Adding any new destination/event/marketplace = image auto-appears
 * ─────────────────────────────────────────────────────────────────────────────
 */

const UNSPLASH_SOURCE = 'https://source.unsplash.com';

/**
 * Build an Unsplash Source URL for a given search query.
 * Returns a direct image URL — use as <img src={...} />
 */
export function getUnsplashUrl(query: string, width = 800, height = 500): string {
  const encoded = encodeURIComponent(query.trim().replace(/\s+/g, ','));
  return `${UNSPLASH_SOURCE}/${width}x${height}/?${encoded}`;
}

// ─── Category keyword maps ────────────────────────────────────────────────────

const DEST_CATEGORY_KW: Record<string, string> = {
  historical: 'heritage monument',
  temple:     'temple shrine Hindu',
  wildlife:   'wildlife national park animal',
  park:       'nature landscape scenic',
  beach:      'beach coastal sea',
  spiritual:  'spiritual pilgrimage holy',
  fort:       'fort palace royal',
  waterfall:  'waterfall cascade forest',
  lake:       'lake water scenic',
  forest:     'forest jungle green',
};

const EVENT_CATEGORY_KW: Record<string, string> = {
  festival:  'festival colorful celebration',
  cultural:  'cultural dance tradition',
  fair:      'fair mela carnival',
  religious: 'religious ceremony ritual',
  tribal:    'tribal indigenous festival',
};

// ─── AUTO QUERY BUILDERS ──────────────────────────────────────────────────────
// Pass any object from your database or mockData — no manual config needed.

/**
 * Auto-generate Unsplash Source URL for any DESTINATION.
 * Works for existing AND any new destination added to DB/mockData.
 */
export function getDestinationImageUrl(destination: {
  name: string;
  district?: string;
  category?: string;
}): string {
  const parts: string[] = [destination.name];

  if (
    destination.district &&
    !destination.name.toLowerCase().includes(destination.district.toLowerCase())
  ) {
    parts.push(destination.district);
  }

  const catKw = destination.category
    ? (DEST_CATEGORY_KW[destination.category.toLowerCase()] ?? 'India travel')
    : 'India tourism';

  parts.push(catKw);
  parts.push('India');

  return getUnsplashUrl(parts.join(' '));
}

/**
 * Auto-generate Unsplash Source URL for any EVENT or FESTIVAL.
 * Works for existing AND any new event added to DB/mockData.
 */
export function getEventImageUrl(event: {
  name: string;
  location?: string;
  category?: string;
}): string {
  const parts: string[] = [event.name];

  const city = event.location?.split(',')[0]?.trim();
  if (city && !event.name.toLowerCase().includes(city.toLowerCase())) {
    parts.push(city);
  }

  const catKw = event.category
    ? (EVENT_CATEGORY_KW[event.category.toLowerCase()] ?? 'festival India')
    : 'festival India';

  parts.push(catKw);

  return getUnsplashUrl(parts.join(' '));
}

/**
 * Auto-generate Unsplash Source URL for any MARKETPLACE or BAZAAR.
 * Works for existing AND any new marketplace added to DB/mockData.
 */
export function getMarketplaceImageUrl(marketplace: {
  name: string;
  location?: string;
  tags?: string[];
}): string {
  // "Dilli Haat, Delhi" → extract city from name
  const nameParts = marketplace.name.split(',');
  const baseName = nameParts[0].trim();
  const city =
    nameParts[1]?.trim() ??
    marketplace.location?.split(',')[0]?.trim() ??
    '';

  const parts: string[] = [baseName];
  if (city && !baseName.toLowerCase().includes(city.toLowerCase())) {
    parts.push(city);
  }

  const tag = marketplace.tags?.[0];
  if (tag) parts.push(tag);

  parts.push('market bazaar India');

  return getUnsplashUrl(parts.join(' '));
}
