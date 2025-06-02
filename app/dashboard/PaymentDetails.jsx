import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const fadeIn = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
};

const PaymentDetails = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white p-10 rounded-3xl w-full max-w-[700px] max-h-[80vh] overflow-y-auto shadow-2xl relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pink-600 hover:text-pink-800 text-3xl transition-all"
          aria-label="Close payment details"
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>

        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-pink-600 mb-8 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          Payment Details
        </motion.h2>

        {/* Info Section */}
        <motion.div
          className="space-y-5 text-lg text-gray-800"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <p><strong>Service:</strong> Hair Spa</p>
          <p><strong>Price:</strong> ₹500</p>
          <p><strong>Payment ID:</strong> #12345</p>
          <p><strong>Date:</strong> 2024-06-01</p>
          <p><strong>Time:</strong> 10:00 AM</p>
        </motion.div>

        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="mt-10 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-full transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PaymentDetails;
