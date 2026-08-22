import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, enum: ['festival', 'fair', 'cultural', 'sports'] },
  date_start: { type: String, required: true },
  date_end: { type: String, required: true },
  location: { type: String, required: true },
  image_url: { type: String, required: false },
  created_at: { type: Date, default: () => new Date() },
  updated_at: { type: Date, default: () => new Date() },
});

eventSchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.models.Event || mongoose.model('Event', eventSchema);
