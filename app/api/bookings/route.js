import { NextResponse } from "next/server";
import Booking from "../models/Booking";
import connectDB from "../config/db";
import {sendBookingDetailsEmail} from "../utils/emailBooking";

// @api   - /api/bookings
// @method - POST
// @access - PUBLIC
export async function POST(request) {
  try {
    await connectDB();

    const { name, phone, email, date, time, serviceId, serviceName, servicePrice } = await request.json();

    if (!name || !phone || !email || !date || !time || !serviceId || !serviceName || !servicePrice) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const newBooking = new Booking({
      name,
      phone,
      email,
      date,
      time,
      serviceId,
      serviceName,
      servicePrice,
    });

    await newBooking.save();
await sendBookingDetailsEmail(
  email,                   // to
  `Booking Confirmed - Apsara Salon (Service ID- ${ serviceId})`,      // subject
    name,                         // name
    phone,                           // phone
   email,                    // email
   date,
      time,                                 // time
  serviceName,                              // serviceName
  499,                                     // servicePrice
  "vatsalrishabh2022@gmail.com"                      // cc (optional)
);
    return NextResponse.json(
      { message: "Booking successful", booking: newBooking },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
