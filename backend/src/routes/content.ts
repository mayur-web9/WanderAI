import express from 'express';
import Destination from '../models/Destination.js';
import Event from '../models/Event.js';
import Marketplace from '../models/Marketplace.js';
import Feedback from '../models/Feedback.js';

const router = express.Router();

router.get('/destinations', async (_req, res) => {
  const destinations = await Destination.find().sort({ created_at: -1 }).lean();
  res.json(destinations);
});

router.get('/events', async (_req, res) => {
  const events = await Event.find().sort({ date_start: 1 }).lean();
  res.json(events);
});

router.get('/marketplaces', async (_req, res) => {
  const marketplaces = await Marketplace.find().sort({ created_at: -1 }).lean();
  res.json(marketplaces);
});

router.post('/feedback', async (req, res) => {
  const { user_name, user_email, message, category } = req.body;
  if (!user_name || !user_email || !message || !category) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const feedback = await Feedback.create({
    user_name,
    user_email,
    message,
    category,
  });

  res.status(201).json(feedback);
});

export default router;
