import mongoose from 'mongoose';

const serviceHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // or whatever your user model is called
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  serviceCharge: {
    type: Number,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
    unique: true,
  },
  serviceDate: {
    type: Date,
    required: true,
  },
  serviceTime: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const ServiceHistory = mongoose.models.ServiceHistory || mongoose.model('ServiceHistory', serviceHistorySchema);

export default ServiceHistory;
