import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  { text: "DESIGN", duration: 0.5 },
  { text: "DEVELOPMENT", duration: 0.5 },
  { text: "BRANDING", duration: 0.5 },
  { text: "WELCOME", duration: 1.0 },
];

const TOTAL_DURATION = WORDS.reduce((sum, w) => sum + w.duration, 0);

export default function Loader() {
  const [index, setIndex] = useState(0);
  // Remove barKey, only animate bar once

  useEffect(() => {
    let timeout;
    if (index < WORDS.length - 1) {
      timeout = setTimeout(() => {
        setIndex((i) => i + 1);
      }, WORDS[index].duration * 1000);
    }
    // No timeout for last word; stays until loader unmounts
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#f7f7f7] w-screen h-screen">
      <motion.img
        src="/logo.svg"
        alt="TASE Logo"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-24 h-24 mb-6"
        draggable={false}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={WORDS[index].text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={
            index === WORDS.length - 1
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8 text-center min-h-[2.5rem]"
        >
          <span
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-[#23232b]"
            style={{ letterSpacing: 6 }}
          >
            {WORDS[index].text}
          </span>
        </motion.div>
      </AnimatePresence>
      <div className="w-[220px] sm:w-[300px] md:w-[340px] h-8 flex flex-col items-center">
        <motion.div className="w-full h-[3px] bg-[#23232b]/20 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute left-0 top-0 h-full bg-[#23232b] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: TOTAL_DURATION, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
