import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
  paymentId: { type: String, required: true, unique: true },
  dateTime: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['credit', 'debit'], required: true },
  email: { type: String, required: true },
  number: { type: String },
  name: { type: String, required: true },
  note: { type: String },
  service: { type: String },
  serviceDate: { type: Date }
})

export default mongoose.models.Payment || mongoose.model('Payment', paymentSchema)
