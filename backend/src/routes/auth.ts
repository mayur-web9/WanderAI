import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'jharyatra-secret';
const TOKEN_EXPIRES_IN = '7d';

const createToken = (userId: string) => jwt.sign({ userId }, JWT_SECRET, { expiresIn: TOKEN_EXPIRES_IN });

router.post('/register', async (req, res) => {
  const { email, password, full_name } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const existing = await User.findOne({ email: normalizedEmail });
  if (existing) {
    return res.status(409).json({ message: 'Email is already registered.' });
  }

  const password_hash = await bcrypt.hash(password, 10);
  const user = await User.create({ email: normalizedEmail, full_name, password_hash, role: 'tourist' });
  const token = createToken(user._id.toString());

  res.json({ user, token });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user = await User.findOne({ email: normalizedEmail });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const token = createToken(user._id.toString());
  res.json({ user, token });
});

router.get('/profile', authMiddleware, async (req, res) => {
  res.json({ user: req.user });
});

export default router;
