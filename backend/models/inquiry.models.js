import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  selectedService: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String }, // optional
  comment: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Inquiry", inquirySchema);
