// File: /app/api/forgotPass/route.js

import { NextResponse } from "next/server";
import connectDB from "../config/db"; // adjust if path differs
import User from "../models/User";
import Otp from "../models/Otp";
import { emailRegistration } from "../utils/emailRegistration";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    await connectDB();

    // Check if user exists in the DB
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Reuse existing OTP or generate a new one
    let otpDoc = await Otp.findOne({ email });
    const otp = otpDoc
      ? otpDoc.otp
      : Math.floor(100000 + Math.random() * 900000);

    // Send OTP via email
    await emailRegistration(email, otp, "Apsara Unisex Salon - Password Reset");

    // Save OTP only if it's a new one
    if (!otpDoc) {
      otpDoc = new Otp({
        name: user.fullName,
        email,
        mobileNumber: user.phone||"9999999999",
        otp,
        createdAt: new Date(),
      });
      await otpDoc.save();
    }

    return NextResponse.json({
      message: "OTP sent successfully",
      success: true,
    }, { status: 200 });

  } catch (err) {
    console.error("Forgot password error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
