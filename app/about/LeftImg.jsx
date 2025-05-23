"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LeftImg = ({ sampleImg, heading, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  const [showFull, setShowFull] = useState(false);
  const words = description.split(" ");
  const showTrimmed = words.length > 8 && !showFull;
  const trimmedDescription = words.slice(0, words.length - 8).join(" ") + " ...";

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <div className="h-auto w-full bg-[#a10550] py-12">
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto gap-8 items-center"
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="bg-white rounded shadow-md overflow-hidden"
        >
         <Image
  src={sampleImg}
  alt="Salon Service"
  className="w-full h-auto rounded-t"
  layout="responsive"
  objectFit="cover"
/>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded shadow-md p-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#a10550] mb-4">
            {heading}
          </h2>
          <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-700 mb-4">
            {showTrimmed ? trimmedDescription : description}
          </p>
          {words.length > 8 && !showFull && (
            <button
              onClick={() => setShowFull(true)}
              className="bg-[#a10550] hover:bg-[#87053f] text-white font-semibold py-2 px-6 rounded-xl transition"
            >
              Read More
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LeftImg;
