import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faQrcode, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { QRCode } from 'qrcode.react';
import qr from "@/public/images/qrcode.png";

const QRCodeModal = ({ onClose }) => {
  const upiUrl = "upi://pay?pa=vatsal123@okicici&pn=Vatsal%20Pandey&am=500&cu=INR";
  return (
    <motion.div
      className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="relative bg-neutral-50 px-8 py-10 rounded-2xl w-[95%] max-w-[500px] shadow-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 transition-all"
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>

        {/* Header */}
        <motion.h2
          className="text-2xl font-bold text-neutral-800 mb-6 flex justify-center items-center gap-3"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <FontAwesomeIcon icon={faQrcode} className="text-2xl" />
          Scan to Pay
        </motion.h2>

        {/* QR Image */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={qr} // Replace with actual path
            width={200}
            height={200}
            alt="QR Code"
            className="rounded-xl shadow-md"
          />
          {/* <QRCode value={upiUrl} size={200} /> */}
        </motion.div>

        {/* Price */}
        <motion.p
          className="text-xl font-semibold text-neutral-800 mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <FontAwesomeIcon icon={faIndianRupeeSign} className="text-neutral-800 text-xl" />
          10,000 / Card
        </motion.p>

        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="block mx-auto bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-8 rounded-full transition-all text-lg"
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default QRCodeModal;
