import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  district: { type: String, required: true },
  category: { type: String, required: true, enum: ['waterfall', 'temple', 'wildlife', 'tribal', 'historical', 'park'] },
  description: { type: String, required: true },
  short_description: { type: String, required: true },
  latitude: { type: Number, required: false },
  longitude: { type: Number, required: false },
  images: { type: [String], required: true, default: [] },
  best_time: { type: String, required: false },
  entry_fee: { type: Number, required: true, default: 0 },
  is_featured: { type: Boolean, default: false },
  created_at: { type: Date, default: () => new Date() },
  updated_at: { type: Date, default: () => new Date() },
});

destinationSchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.models.Destination || mongoose.model('Destination', destinationSchema);
