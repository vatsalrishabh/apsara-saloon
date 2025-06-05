import connectDB from "../config/db";
import User from '@/app/api/models/User';

export async function GET(req) {
  await connectDB();
  try {
    const users = await User.find({});
    if (!users || users.length === 0) {
      return Response.json({ message: 'No users found' }, { status: 404 });
    }
    console.log(users);
    // Optionally, you can format the user data before returning
    const finalUsers = users.filter(user => user.typeOfUser === 'Customer').map(user => ({
      userId: user.userId,
      name: user.name,
      email: user.email,
      dpUrl: user.dpUrl,
      mobileNumber: user.mobileNumber,
      memberShip: user.memberShip,
      membershipType: user.membershipType,
      startDate: user.startDate,
      endDate: user.endDate,
      amount: user.amount,
      remaining: user.remaining
    }));
    return Response.json({ users:finalUsers }, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}