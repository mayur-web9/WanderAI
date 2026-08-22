import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  full_name: { type: String, required: false, trim: true },
  password_hash: { type: String, required: true },
  role: { type: String, required: true, enum: ['tourist', 'guide', 'admin'], default: 'tourist' },
  phone: { type: String, required: false },
  avatar_url: { type: String, required: false },
  created_at: { type: Date, default: () => new Date() },
  updated_at: { type: Date, default: () => new Date() },
});

userSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.password_hash;
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
