import mongoose, { Schema } from 'mongoose';

const addressSchema = new Schema({
  latitude: Number,
  longitude: Number,
  zipcode: String,
  state: String,
  city: String,
  streetAddress: String,
  roomNumber: String,
  houseNumber: String,
  floor: String,
  category: String, // E.g., "Home", "Work", "Other"
});

const userSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dpUrl: String,
  addresses: [addressSchema],
  mobileNumber: { type: String, required: true },
  memberShip: { type: String },

  // 👇 Added Membership Info
  membershipType: { type: String }, // e.g., "Gold", "Silver", "Platinum"
  startDate: { type: Date },
  endDate: { type: Date },
  amount: { type: Number },
  remaining: { type: Number },

  typeOfUser: { 
    type: String, 
    enum: ["Customer", "Admin"], 
    default: "Customer"
  },
  gender: { type: String }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
