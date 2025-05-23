// File: /app/api/users/registerUser/route.js
import { NextResponse } from "next/server";
import connectDB from "../config/db";
import { emailRegistration } from "../utils/emailRegistration";
import Otp from "../models/Otp";
import User from "../models/User";

// POST: /api/users/registerUser
export async function POST(request) {
  try {
    const data = await request.json(); // { fullName, email, phone, password }

    const { fullName, email, phone, password } = data;

    if (!fullName || !email || !phone || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await connectDB();

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    // Check if OTP already exists
    const existingOtp = await Otp.findOne({ email });

    if (existingOtp) {
      await emailRegistration(email, existingOtp.otp, "Apsara Salon OTP Verification");
      console.log("Resent existing OTP:", existingOtp.otp);
      return NextResponse.json({
        message: "OTP already sent",
        data: { fullName, email, phone, password },
      }, { status: 200 });
    }

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    await emailRegistration(email, otp, "Apsara Salon OTP Verification");

    const newOtp = new Otp({
      name: fullName,
      email,
      mobileNumber: phone,
      otp,
      createdAt: new Date(),
    });

    await newOtp.save();

    return NextResponse.json({
      message: "OTP sent successfully",
       success: true,
      data: { fullName, email, phone, password },
    }, { status: 201 });

  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
