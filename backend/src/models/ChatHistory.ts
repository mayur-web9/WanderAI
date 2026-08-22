import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  role: { type: String, required: true, enum: ['user', 'assistant'] },
  content: { type: String, required: true },
});

const chatHistorySchema = new mongoose.Schema({
  session_id: { type: String, required: true },
  user_email: { type: String, required: false },
  messages: { type: [messageSchema], default: [] },
  created_at: { type: Date, default: () => new Date() },
  updated_at: { type: Date, default: () => new Date() },
});

chatHistorySchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.models.ChatHistory || mongoose.model('ChatHistory', chatHistorySchema);
