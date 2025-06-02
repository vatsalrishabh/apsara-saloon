"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PaymentDetails from "./PaymentDetails";
import QRCodeModal from "./QRCodeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faClock,
  faCalendarAlt,
  faHashtag,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SmartPhoneWallet = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  const allPayments = [
    { id: 1, date: "2024-06-01", time: "10:00 AM", amount: 500 },
    { id: 2, date: "2024-06-02", time: "2:00 PM", amount: 700 },
    { id: 3, date: "2024-06-03", time: "1:30 PM", amount: 600 },
  ];

  const totalSpent = allPayments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="w-full h-auto p-4 bg-pink-50 animate__animated animate__fadeInUp rounded-xl shadow-md text-primary">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Link href="/">
        <FontAwesomeIcon icon={faArrowLeft} className="text-pink-500 text-xl" />
        </Link>
        <div className="text-lg font-semibold">Hi, Riya</div>
        <FontAwesomeIcon icon={faSearch} className="text-pink-500 text-xl" />
      </div>

      {/* Avatar and Balance */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-pink-200" />
        <div className="text-right">
          <p className="text-sm text-gray-500">Your Balance</p>
          <p className="text-lg font-bold text-pink-600">₹23,000</p>
        </div>
      </div>

      {/* Activities */}
      <div>
        <h3 className="text-pink-600 font-semibold mb-2">Your Activity</h3>
        <div className="space-y-3">
          {allPayments.map((p) => (
            <motion.div
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              key={p.id}
              onClick={() => setShowPaymentModal(true)}
              className="p-4 rounded-xl bg-white shadow-md hover:bg-pink-100 cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-1 text-gray-700">
                <div className="flex items-center gap-2 text-sm">
                  <FontAwesomeIcon icon={faHashtag} className="text-pink-500" />
                  <span className="font-medium">Payment ID:</span>
                  #{p.id}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-500" />
                  <span className="font-semibold text-pink-700">₹{p.amount}</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-pink-400" />
                  {p.date}
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faClock} className="text-pink-400" />
                  {p.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-5 p-3 rounded-xl bg-pink-100 text-right text-pink-800 font-bold">
          Total Spent: ₹{totalSpent}
        </div>
      </div>

      {/* Buy Membership Button */}
    <button
  onClick={() => setShowQRModal(true)}
  className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-pink-700 font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
>
  Buy Membership
</button>


      {/* Modals */}
      {showPaymentModal && (
        <PaymentDetails onClose={() => setShowPaymentModal(false)} />
      )}
      {showQRModal && (
        <QRCodeModal onClose={() => setShowQRModal(false)} />
      )}
    </div>
  );
};

export default SmartPhoneWallet;
