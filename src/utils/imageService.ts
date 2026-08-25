/**
 * Image Service for WanderAI
 * Uses curated Unsplash photo IDs for each destination, event, and marketplace.
 * All IDs are unique — no duplicates across categories.
 * Format: https://images.unsplash.com/photo-<ID>?w=800&q=80&auto=format&fit=crop
 */

const BASE = 'https://images.unsplash.com/photo-';
const Q = '?w=800&q=80&auto=format&fit=crop';

function u(id: string): string {
  return `${BASE}${id}${Q}`;
}

// ─── DESTINATIONS ──────────────────────────────────────────────────────────────
export const DESTINATION_IMAGES: Record<string, string> = {
  'taj-mahal':          u('1548013146-59c1e67e02a4'),
  'varanasi-ghats':     u('1587922547015-8ae2b155d6d2'),
  'kerala-backwaters':  u('1602216056096-3b40cc0c9944'),
  'hampi-ruins':        u('1564507592333-04cd2a2f359a'),
  'leh-ladakh':         u('1621786030484-4b5f5de4a788'),
  'golden-temple':      u('1585136917625-b29f83aa3174'),
  'munnar-tea-gardens': u('1571068316344-75bc3048de5e'),
  'mysore-palace':      u('1598091383021-15ddea64c8b0'),
  'amer-fort':          u('1524492412435-32cd049bde7d'),
  'konark-sun-temple':  u('1600100397608-f010f443b221'),
  'ranthambore':        u('1615279867456-1e2f5e9e2291'),
  'victoria-memorial':  u('1558431382-27e303142255'),
  'ajanta-ellora':      u('1563901014831-b26e5e98e20b'),
  'goa-beaches':        u('1512343879784-a960bf40e7f2'),
  'sundarbans':         u('1561731216-c3a4358a95f5'),
  'khajuraho-temples':  u('1599050751914-4ee52d0e5eca'),
  'andaman-islands':    u('1559827291-72ec740aa30c'),
  'jaisalmer-fort':     u('1578735427-9773f2469da8'),
  'coorg':              u('1598003131791-e1f7e6b8f94e'),
  'darjeeling':         u('1597662292849-6e56ef4b6f73'),
  'nalanda':            u('1603262110111-671a4c9bc9c1'),
  'ajmer-sharif':       u('1592389946522-a81c9d8ecad7'),
  'rishikesh':          u('1591033978777-34fd2b5e9c0e'),
  'spiti-valley':       u('1513002749332-7a1ee83e498b'),
  'kaziranga':          u('1616429462494-4b1adf3b3bec'),
  'hundru-falls':       u('1558882703-a71cbb2ef5fc'),
  'betla':              u('1574068468668-a05a1f81ad9f'),
  'dassam-falls':       u('1600369671611-57c29c2ac5b5'),
  'jamshedpur':         u('1464082354059-eda5b3e5a3fc'),
  'ranchi-lake':        u('1571003123894-1f0594d2b5d9'),
};

// ─── EVENTS ────────────────────────────────────────────────────────────────────
export const EVENT_IMAGES: Record<string, string> = {
  'Sarhul Festival':       u('1533104858776-4a00e0f44e63'),
  'Karma Festival':        u('1567337710282-87b0e0e5e1c5'),
  'Tusu Parab':            u('1519817298949-0e2a6e97c13f'),
  'Chhath Puja':           u('1604313741082-56d9c3a5e05e'),
  'Rohini Festival':       u('1416879595882-3373a0480b5b'),
  'Bandna Festival':       u('1516802273409-68526ee1bdd6'),
  'Mysore Dussehra':       u('1568454537842-d933259e7f6f'),
  'Pushkar Camel Fair':    u('1524749631380-db2f0b5dd9e2'),
  'Hornbill Festival':     u('1577644545636-f08b87f7736c'),
};

// ─── MARKETPLACES ──────────────────────────────────────────────────────────────
export const MARKETPLACE_IMAGES: Record<string, string> = {
  'Dilli Haat, Delhi':                    u('1586985289688-ca3cf47d3e6e'),
  'Colaba Causeway, Mumbai':              u('1558618666-fcd25c85cd64'),
  'Johari Bazaar, Jaipur':               u('1519058082350-fd9d1fe91489'),
  'Anjuna Flea Market, Goa':             u('1533050228-dc88c74e91ca'),
  'Laad Bazaar, Hyderabad':              u('1612528442702-28c6a0abb6f4'),
  'Floating Vegetable Market, Srinagar': u('1587502536263-c9b7ac76c3bc'),
  'Police Bazar, Shillong':              u('1524594152303-9fd13543fe96'),
  'Janpath Market, Delhi':               u('1575101600-7da29a27cb7b'),
  'Pondy Bazaar, Chennai':               u('1583391265427-83c9d9250f37'),
};

export function getDestinationImage(destinationId: string): string {
  return DESTINATION_IMAGES[destinationId] ?? u('1548013146-59c1e67e02a4');
}

export function getEventImage(eventName: string): string {
  return EVENT_IMAGES[eventName] ?? u('1533104858776-4a00e0f44e63');
}

export function getMarketplaceImage(marketplaceName: string): string {
  return MARKETPLACE_IMAGES[marketplaceName] ?? u('1586985289688-ca3cf47d3e6e');
}
