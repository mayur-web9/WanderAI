import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  user_email: { type: String, required: true },
  user_name: { type: String, required: true },
  message: { type: String, required: true },
  category: { type: String, required: true, enum: ['bug', 'suggestion', 'praise', 'other'] },
  created_at: { type: Date, default: () => new Date() },
});

feedbackSchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);
