import connectDB from "@/app/api/config/db";
import Payment from "@/app/api/models/Payment";
import User from "@/app/api/models/User";

export async function GET(req, { params }) {
  await connectDB();
  const { userEmail } = params;
  try {
    // Find user by email (case-insensitive)
    const user = await User.findOne({ email: userEmail });
    if (!user) return Response.json({ error: "User not found" }, { status: 404 });

    // Find all payments for this user
    const transactions = await Payment.find({ email: user.email }).sort({ dateTime: -1 });
    return Response.json({
      transactions,
      balance: user.amount || 0,
      user: {
        name: user.name,
        email: user.email,
        phone: user.mobileNumber,
        membershipType: user.membershipType,
      }
    });
  } catch (e) {
    return Response.json({ error: "Failed to fetch history" }, { status: 500 });
  }
}