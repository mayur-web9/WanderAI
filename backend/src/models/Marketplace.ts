import mongoose from 'mongoose';

const marketplaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: false },
  tags: { type: [String], default: [] },
  created_at: { type: Date, default: () => new Date() },
  updated_at: { type: Date, default: () => new Date() },
});

marketplaceSchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.models.Marketplace || mongoose.model('Marketplace', marketplaceSchema);
