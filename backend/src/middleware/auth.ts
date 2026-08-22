import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET || 'jharyatra-secret';

export interface AuthRequest extends Request {
  user?: { id: string; email: string; role: string; full_name?: string };
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await User.findById(payload.userId).select('-password_hash').lean();
    if (!user) {
      return res.status(401).json({ message: 'Invalid token.' });
    }
    req.user = {
      id: user._id.toString(),
      email: user.email,
      role: user.role,
      full_name: user.full_name,
    };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

export const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required.' });
  }
  next();
};
