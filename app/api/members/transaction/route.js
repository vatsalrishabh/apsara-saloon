import Payment from "../../models/Payment";
import connectDB from "../../config/db";
import User from "../../models/User";

export async function POST(req) {
  try {
    // Connect to the database  
    await connectDB();
    // Parse the request body
    const { userId, amount, service, serviceDate, transactionId, note, membershipType, action = "add" } = await req.json();

    // Validate required fields
    if (!userId || !amount || !service || !serviceDate || !transactionId) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Find user
    const user = await User.findOne({ userId });
    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    // Prepare payment record
    const payment = new Payment({
      paymentId: transactionId,
      amount: Math.abs(amount),
      type: action === "remove" ? "debit" : "credit",
      email: user.email,
      number: user.mobileNumber,
      name: user.name,
      note,
      service,
      serviceDate,
    });

    // Handle wallet/membership logic
    if (action === "add") {
      user.amount = (user.amount || 0) + Math.abs(amount);
      user.remaining = (user.remaining || 0) + Math.abs(amount);
      user.startDate = new Date();
      user.endDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      user.memberShip = user.userId;
      user.membershipType = membershipType || user.membershipType || 'Silver';
    } else if (action === "remove") {
      user.amount = (user.amount || 0) - Math.abs(amount);
      user.remaining = (user.remaining || 0) - Math.abs(amount);
    } else if (action === "edit") {
      // For edit, you may want to update an existing payment record instead
      // This is a placeholder for edit logic
      // You can implement edit logic as per your requirements
    }

    // Save the updated user record
    await user.save();
    // Save the payment record to the database
    await payment.save();



    return Response.json({ message: 'Transaction processed successfully', payment, user }, { status: 201 });
  } catch (error) {
    console.error('Error processing transaction:', error);
    return Response.json({ error: 'Failed to process transaction' }, { status: 500 });
  }
}