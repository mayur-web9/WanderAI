import mongoose from 'mongoose';

const tripPlanSchema = new mongoose.Schema({
  session_id: { type: String, required: true },
  user_email: { type: String, required: false },
  request_info: { type: Object, required: true },
  response_text: { type: String, required: true },
  created_at: { type: Date, default: () => new Date() },
  updated_at: { type: Date, default: () => new Date() },
});

tripPlanSchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.models.TripPlan || mongoose.model('TripPlan', tripPlanSchema);
