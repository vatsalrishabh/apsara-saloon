import { NextResponse } from "next/server";
import Otp from "../models/Otp";
import User from "../models/User";
import connectDB from "../config/db";
import { generateToken } from "../config/jwtGenerator";

// @api - api/users/verifyOtp
// @method - POST
// @access - PUBLIC
export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log("Received Data:", reqBody);

    await connectDB();

    const otpNumber = Number(reqBody.otp);
    console.log("Converted OTP:", otpNumber);

    const otpEntry = await Otp.findOne({ email: reqBody.email, otp: otpNumber });
    console.log("Found OTP Entry:", otpEntry);

    if (!otpEntry) {
      return NextResponse.json({ message: "Invalid or Expired OTP" }, { status: 400 });
    }

    // Destructure expected fields
    const { fullName, email, phone, password } = reqBody;

    if (!password) {
      return NextResponse.json({ message: "Password is required" }, { status: 400 });
    }

    // Generate a unique user ID
    const userCount = await User.countDocuments();
    const userId = `USR${String(userCount + 1).padStart(4, "0")}`;

    let newUser;
    try {
      newUser = await User.create({
        userId,
        email,
        name: fullName,
        mobileNumber: phone,
        password,
      });
    } catch (error) {
      console.log("Error creating user:", error);
      return NextResponse.json({ message: "Failed to create user" }, { status: 500 });
    }

    await Otp.deleteOne({ email });

    const token = generateToken({
      email: newUser.email,
      name: newUser.name,
      mobile: newUser.mobileNumber,
      isLoggedIn: true,
    });

    const userResponse = {
      userId: newUser.userId,
      email: newUser.email,
      name: newUser.name,
      mobileNumber: newUser.mobileNumber,
    };

    return NextResponse.json(
      {
        message: "User created successfully",
        token,
        user: userResponse,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error in verifyOtp:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
