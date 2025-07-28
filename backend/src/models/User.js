import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: Date },
  gender: { type: String },
  record: { type: mongoose.Schema.Types.ObjectId, ref: 'Record' },
  bloodGroup: { type: String },
  data: { type: mongoose.Schema.Types.Mixed },
});

const User = mongoose.model('User', userSchema);

export default User; 