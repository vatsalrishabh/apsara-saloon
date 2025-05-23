// File: /app/api/resetPasswordWithOtp/route.js

import { NextResponse } from "next/server";
import connectDB from "../config/db";
import User from "../models/User";
import Otp from "../models/Otp";


export async function POST(request) {
  try {
    const { email, otp, newPassword } = await request.json();
    console.log(email)
console.log(otp)
    console.log(newPassword)
    if (!email || !otp || !newPassword) {
      return NextResponse.json({ message: "Email, OTP and new password are required" }, { status: 400 });
    }

    await connectDB();

    const otpRecord = await Otp.findOne({ email });
    if (!otpRecord) {
      return NextResponse.json({ message: "OTP not found, please request a new one" }, { status: 404 });
    }

    if (otpRecord.otp !== Number(otp)) {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 401 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Directly update the password without hashing (not secure)
    user.password = newPassword;
    await user.save();

    await Otp.deleteOne({ email });

    return NextResponse.json({ message: "Password reset successful", success: true }, { status: 200 });

  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

