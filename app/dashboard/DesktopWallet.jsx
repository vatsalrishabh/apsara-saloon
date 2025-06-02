import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory, faQrcode, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const allPayments = [
  { id: 1, date: "2024-06-01", time: "10:00 AM", amount: 500 },
  { id: 2, date: "2024-06-02", time: "2:00 PM", amount: 700 },
  { id: 3, date: "2024-06-03", time: "1:30 PM", amount: 600 },
];

const totalSpent = allPayments.reduce((sum, p) => sum + p.amount, 0);

const DesktopWallet = () => {
  return (
    <div className=" flex-col max-w-4xl mx-auto bg-blue-900 text-white rounded-xl shadow-lg p-8 gap-8 min-h-[600px]">
      
      {/* Header */}
      <header className="flex justify-between items-center border-b border-blue-700 pb-4">
        <h1 className="text-3xl font-bold">Payment History & QR Code</h1>
        <div className="text-xl font-medium">Hi, Riya 👋</div>
      </header>

      {/* Main content */}
      <div className="flex gap-10 flex-1">
        
        {/* Payment History */}
        <section className="flex-1 bg-blue-800 rounded-lg p-6 shadow-inner overflow-y-auto max-h-[450px]">
          <h2 className="flex items-center gap-3 text-xl font-semibold mb-4">
            <FontAwesomeIcon icon={faHistory} />
            Payment History
          </h2>
          <ul className="space-y-4">
            {allPayments.map(({ id, date, time, amount }) => (
              <li
                key={id}
                className="flex justify-between items-center bg-blue-700 rounded-md p-3 hover:bg-blue-600 cursor-pointer transition"
              >
                <div>
                  <p className="text-sm">{date} at {time}</p>
                  <p className="text-md font-semibold">Payment ID: #{id}</p>
                </div>
                <div className="flex items-center gap-1 text-green-400 font-bold text-lg">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  ₹{amount}
                </div>
              </li>
            ))}
          </ul>

          {/* Total Spent */}
          <div className="mt-6 text-right text-lg font-bold border-t border-blue-700 pt-4">
            Total Spent: ₹{totalSpent}
          </div>
        </section>

        {/* QR Code & Membership */}
        <section className="w-80 bg-blue-800 rounded-lg p-6 shadow-inner flex flex-col items-center">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <FontAwesomeIcon icon={faQrcode} />
            Scan to Pay
          </h2>
          
          {/* QR Code Image */}
          <div className="mb-6">
            <Image
              src="/images/qr-placeholder.png" // Replace with actual image path
              width={180}
              height={180}
              alt="QR Code"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Price */}
          <p className="text-lg font-semibold mb-6">
            ₹999 / month
          </p>

          {/* Buy Membership Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors rounded-full py-3 font-semibold text-white"
            type="button"
          >
            Buy Membership
          </button>
        </section>

      </div>
    </div>
  );
};

export default DesktopWallet;
