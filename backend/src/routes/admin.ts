import express from 'express';
import Destination from '../models/Destination.js';
import Event from '../models/Event.js';
import Marketplace from '../models/Marketplace.js';
import Feedback from '../models/Feedback.js';
import ChatHistory from '../models/ChatHistory.js';
import TripPlan from '../models/TripPlan.js';
import { authMiddleware, adminMiddleware } from '../middleware/auth.js';

const router = express.Router();
router.use(authMiddleware, adminMiddleware);

router.get('/summary', async (_req, res) => {
  const [destCount, eventCount, marketCount, feedbackCount, chatCount, planCount] = await Promise.all([
    Destination.countDocuments(),
    Event.countDocuments(),
    Marketplace.countDocuments(),
    Feedback.countDocuments(),
    ChatHistory.countDocuments(),
    TripPlan.countDocuments(),
  ]);
  res.json({ destCount, eventCount, marketCount, feedbackCount, chatCount, planCount });
});

router.get('/destinations', async (_req, res) => {
  const destinations = await Destination.find().sort({ created_at: -1 }).lean();
  res.json(destinations);
});

router.post('/destinations', async (req, res) => {
  const dest = await Destination.create({ ...req.body });
  res.status(201).json(dest);
});

router.put('/destinations/:id', async (req, res) => {
  const dest = await Destination.findByIdAndUpdate(req.params.id, { ...req.body, updated_at: new Date() }, { new: true }).lean();
  if (!dest) return res.status(404).json({ message: 'Destination not found.' });
  res.json(dest);
});

router.delete('/destinations/:id', async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

router.get('/events', async (_req, res) => {
  const events = await Event.find().sort({ date_start: 1 }).lean();
  res.json(events);
});

router.post('/events', async (req, res) => {
  const event = await Event.create({ ...req.body });
  res.status(201).json(event);
});

router.put('/events/:id', async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, { ...req.body, updated_at: new Date() }, { new: true }).lean();
  if (!event) return res.status(404).json({ message: 'Event not found.' });
  res.json(event);
});

router.delete('/events/:id', async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

router.get('/marketplaces', async (_req, res) => {
  const marketplaces = await Marketplace.find().sort({ created_at: -1 }).lean();
  res.json(marketplaces);
});

router.post('/marketplaces', async (req, res) => {
  const market = await Marketplace.create({ ...req.body });
  res.status(201).json(market);
});

router.put('/marketplaces/:id', async (req, res) => {
  const market = await Marketplace.findByIdAndUpdate(req.params.id, { ...req.body, updated_at: new Date() }, { new: true }).lean();
  if (!market) return res.status(404).json({ message: 'Marketplace not found.' });
  res.json(market);
});

router.delete('/marketplaces/:id', async (req, res) => {
  await Marketplace.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

router.get('/feedback', async (_req, res) => {
  const feedbacks = await Feedback.find().sort({ created_at: -1 }).lean();
  res.json(feedbacks);
});

router.delete('/feedback/:id', async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

router.get('/chats', async (_req, res) => {
  const chats = await ChatHistory.find().sort({ created_at: -1 }).lean();
  res.json(chats);
});

router.get('/plans', async (_req, res) => {
  const plans = await TripPlan.find().sort({ created_at: -1 }).lean();
  res.json(plans);
});

export default router;
