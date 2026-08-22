import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';
import adminRoutes from './routes/admin.js';
import historyRoutes from './routes/history.js';
import { createDefaultAdmin, seedDefaultContent } from './utils/seed.js';

dotenv.config();

const app = express();
const apiPort = Number(process.env.PORT || 4000);
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jharyatra';
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: '5mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/history', historyRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', backend: true });
});

mongoose.connect(mongoUri)
  .then(async () => {
    console.log('Connected to MongoDB');
    await createDefaultAdmin();
    await seedDefaultContent();
    app.listen(apiPort, () => {
      console.log(`Backend server running at http://localhost:${apiPort}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });
