import express from 'express';
import ChatHistory from '../models/ChatHistory.js';
import TripPlan from '../models/TripPlan.js';

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { session_id, user_email, messages } = req.body;
  if (!session_id || !Array.isArray(messages)) {
    return res.status(400).json({ message: 'Session ID and messages are required.' });
  }

  const history = await ChatHistory.create({
    session_id,
    user_email,
    messages,
  });

  res.status(201).json(history);
});

router.post('/plan', async (req, res) => {
  const { session_id, user_email, request_info, response_text } = req.body;
  if (!session_id || !request_info || !response_text) {
    return res.status(400).json({ message: 'Session ID, request info, and response text are required.' });
  }

  const plan = await TripPlan.create({
    session_id,
    user_email,
    request_info,
    response_text,
  });

  res.status(201).json(plan);
});

export default router;
