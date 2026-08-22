import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Destination from '../models/Destination.js';
import Event from '../models/Event.js';
import Marketplace from '../models/Marketplace.js';

const defaultDestinationData = [
  {
    name: 'Hundru Falls',
    district: 'Ranchi',
    category: 'waterfall',
    description: 'A spectacular waterfall formed by Subarnarekha River, cascading from a height of 98 meters. Surrounded by dense forests, it offers a mesmerizing view especially during monsoon.',
    short_description: 'Spectacular 98m waterfall on the Subarnarekha River',
    latitude: 23.4415,
    longitude: 85.5936,
    images: ['/assets/destinations/Download3.jpg'],
    best_time: 'July to October',
    entry_fee: 30,
    is_featured: true,
  },
  {
    name: 'Betla National Park',
    district: 'Latehar',
    category: 'wildlife',
    description: 'One of the first national parks in India to become a tiger reserve. Home to tigers, elephants, leopards, and various species of flora and fauna.',
    short_description: 'Premier tiger reserve with rich biodiversity',
    latitude: 23.8667,
    longitude: 84.1833,
    images: ['/assets/destinations/download2.jpg'],
    best_time: 'November to June',
    entry_fee: 200,
    is_featured: true,
  },
  {
    name: 'Baidyanath Temple',
    district: 'Deoghar',
    category: 'temple',
    description: 'One of the twelve Jyotirlingas, this ancient temple is a major pilgrimage site. The temple complex is known for its spiritual significance and architectural beauty.',
    short_description: 'Sacred Jyotirlinga shrine and pilgrimage center',
    latitude: 24.4844,
    longitude: 86.6993,
    images: ['/assets/destinations/download.jpg'],
    best_time: 'October to March',
    entry_fee: 0,
    is_featured: true,
  },
];

const defaultEventData = [
  {
    name: 'Sarhul Festival',
    description: 'A spring festival celebrated by the tribal communities of India, marking the worship of nature and the blossoming of Sal trees.',
    category: 'festival',
    date_start: '2026-03-25',
    date_end: '2026-03-27',
    location: 'Jharkhand',
    image_url: '/assets/events/fest1.jpg',
  },
  {
    name: 'Karma Festival',
    description: 'A harvest festival celebrated with traditional dance, music, and rituals to worship the Karma deity for good harvest and prosperity.',
    category: 'cultural',
    date_start: '2026-09-15',
    date_end: '2026-09-16',
    location: 'Tribal Villages',
    image_url: '/assets/events/fest2.jpg',
  },
  {
    name: 'Tusu Parab',
    description: 'A festival dedicated to Goddess Tusu, celebrated during Makar Sankranti with colorful processions and folk songs.',
    category: 'festival',
    date_start: '2026-01-14',
    date_end: '2026-01-15',
    location: 'Purulia',
    image_url: '/assets/events/fest3.jpg',
  },
];

const defaultMarketplaceData = [
  {
    name: 'Dilli Haat, Delhi',
    description: 'An open-air food plaza and craft bazaar that offers a taste of India\'s cultural diversity.',
    location: 'INA, New Delhi',
    image: '/assets/marketplaces/dilli_haat.jpg',
    tags: ['Crafts', 'Food', 'Culture'],
  },
  {
    name: 'Colaba Causeway, Mumbai',
    description: 'The shopping soul of Mumbai. From trendy accessories and clothing to antique clocks and vintage collectibles.',
    location: 'Colaba, Mumbai',
    image: '/assets/marketplaces/colaba_causeway.jpg',
    tags: ['Antiques', 'Fashion', 'Street Food'],
  },
  {
    name: 'Johari Bazaar, Jaipur',
    description: 'Famous for its stunning collection of precious and semi-precious gemstones, traditional jewelry, and authentic Rajasthani textiles.',
    location: 'Pink City, Jaipur',
    image: '/assets/marketplaces/johari_bazaar.jpg',
    tags: ['Jewelry', 'Textiles', 'Heritage'],
  },
];

export const createDefaultAdmin = async () => {
  const adminEmail = (process.env.ADMIN_EMAIL || 'mayurpatil23.ca@jspmuni.ac.in').trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || '$$$Mayur629877';
  const existing = await User.findOne({ email: adminEmail });
  if (existing) return;

  const password_hash = await bcrypt.hash(adminPassword, 10);
  await User.create({
    email: adminEmail,
    full_name: 'Site Administrator',
    password_hash,
    role: 'admin',
  });
  console.log('Default admin user created:', adminEmail);
};

export const seedDefaultContent = async () => {
  const [destCount, eventCount, marketCount] = await Promise.all([
    Destination.countDocuments(),
    Event.countDocuments(),
    Marketplace.countDocuments(),
  ]);

  if (destCount === 0) {
    await Destination.create(defaultDestinationData);
    console.log('Seeded default destinations.');
  }

  if (eventCount === 0) {
    await Event.create(defaultEventData);
    console.log('Seeded default events.');
  }

  if (marketCount === 0) {
    await Marketplace.create(defaultMarketplaceData);
    console.log('Seeded default marketplaces.');
  }
};
