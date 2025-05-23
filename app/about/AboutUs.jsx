"use client";
import React from "react";
import { motion } from "framer-motion";
import aboutBg from "@/assets/images/ladies.png";

const AboutUs = () => {
  return (
    <div className="w-full">
      <motion.div
        className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${aboutBg.src})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="font-bold text-5xl md:text-6xl mb-4 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
         About Us
        </motion.h1>
        
        <motion.h2
          className="font-semibold text-3xl md:text-4xl drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         Apsara Unisex Salon
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default AboutUs;
