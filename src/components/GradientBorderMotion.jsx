import React from "react";
import { motion } from "framer-motion";

const GradientBorderMotion = ({ children }) => (
  <div className="relative flex items-center justify-center">
    {/* Animated Gradient Border */}
    <motion.div
      className="absolute inset-0"
      style={{
        borderRadius: 24,
        padding: 4,
        background:
          "linear-gradient(225deg, #faf5ff 0%, #d096ff 4%, #8f42d4 22%, #414141 43.6%)",
        filter: "blur(0px)",
        opacity: 1,
      }}
      initial={{ scale: 1, opacity: 0.85 }}
      animate={{ scale: [1, 1.015, 1], opacity: [0.85, 1, 0.85] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Content */}
    <div className="relative z-10 rounded-[20px] overflow-hidden bg-[#181818]">
      {children}
    </div>
  </div>
);

export default GradientBorderMotion;
