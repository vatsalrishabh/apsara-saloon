// models/Booking.js
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  date: String,
  time: String,
  serviceId: String,
  serviceName:String,
  servicePrice:String,
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
