import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  file: { type: String }, // file path or URL
});

const Record = mongoose.model('Record', recordSchema);

export default Record; 