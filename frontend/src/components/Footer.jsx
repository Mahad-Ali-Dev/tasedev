import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const socials = [
  { name: "Linkedin", url: "https://www.linkedin.com/company/tase-llc" },
  { name: "Instagram", url: "https://www.instagram.com/tasellc/" },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~015a829d8ac87ae855?mp_source=share",
  },
  { name: "Twitter", url: "https://x.com/TASELLC" },
  { name: "Facebook", url: "https://www.facebook.com/61578235896698/" },
  { name: "Fiverr", url: "https://www.fiverr.com/gakharabdul" },
];

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-transparent flex justify-center items-center py-2 px-2 mt-[40px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={fadeInUp}
    >
      <motion.div
        className="w-full max-w-7xl bg-black rounded-[32px] px-4 md:px-16 py-8 md:py-12 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        {/* Logo and tagline */}
        <motion.div
          className="flex flex-row items-center"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInUp}
        >
          <motion.img
            src="/logo_white-min.png"
            alt="TASE logo"
            className="w-20 h-20 mb-2"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.7 }}
            variants={fadeInUp}
          />
          <motion.h1
            className="text-white text-5xl font-extrabold tracking-wider ml-6"
            style={{ letterSpacing: 2 }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.7 }}
            variants={fadeInUp}
          >
            TASE
          </motion.h1>
        </motion.div>
        <motion.div
          className="flex flex-col items-center mb-6"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInUp}
        >
          {/* Logo */}

          <motion.div
            className="text-white text-base tracking-widest font-semibold mb-4"
            style={{ letterSpacing: 2 }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.7 }}
            variants={fadeInUp}
          >
            FROM VISION TO IMPACT
          </motion.div>
          {/* Email button */}
          <motion.a
            href="mailto:contact.tase.llc@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-lg font-medium shadow mb-2 hover:bg-[#F3F3F3] hover:text-[#23232b] hover:scale-105 transition-all duration-200 group"
            style={{ boxShadow: "0 2px 15px rgba(255, 255, 255, 0.18)" }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.7 }}
            variants={fadeInUp}
            whileHover={{ scale: 1.08, boxShadow: "0 4px 24px 0 #23232b22" }}
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.75-.5 7.25 6.5L19.25 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-200 group-hover:stroke-[#23232b]"
              />
            </svg>
            contact.tase.llc@gmail.com
          </motion.a>
        </motion.div>
        {/* Contact and Socials */}
        <motion.div
          className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mt-6 mb-2 gap-8 md:gap-0"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInUp}
        >
          {/* Left: Contact Info */}
          <motion.div
            className="flex flex-col items-center md:items-start text-left mb-4 md:mb-0"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.7 }}
            variants={fadeInUp}
          >
            <motion.div
              className="text-[#BDBDBD] text-sm mb-1"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.7 }}
              variants={fadeInUp}
            >
              Tap. Ring. Connect.
            </motion.div>
            <motion.div
              className="text-white text-lg font-semibold mb-3"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.7 }}
              variants={fadeInUp}
            >
              +44 <span className="font-bold">735 432 8258</span>
            </motion.div>
            <motion.div
              className="text-[#BDBDBD] text-sm mb-1"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.7 }}
              variants={fadeInUp}
            >
              Map. Mark. Meet.
            </motion.div>
            <motion.div
              className="text-white text-lg font-semibold"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.7 }}
              variants={fadeInUp}
            >
              TASE DEVS — St. Peter’s Square, Manchester · UK
            </motion.div>
          </motion.div>
          {/* Right: Socials */}
          <motion.div
            className="flex flex-col items-center md:items-end"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.7 }}
            variants={fadeInUp}
          >
            <div className="text-[#BDBDBD] text-sm mb-2">
              Swipe. Click. Discover.
            </div>
            <motion.div
              className="grid grid-cols-3 gap-x-8 gap-y-1 text-white text-base font-medium"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.7 }}
              variants={fadeInUp}
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  className="text-center min-w-[80px] transition-all duration-200"
                  initial="hidden"
                  whileInView="visible"
                  exit="hidden"
                  viewport={{ once: false, amount: 0.7 }}
                  variants={fadeInUp}
                  whileHover={{ scaleX: 1.25 }}
                  transition={{ duration: 0.18, ease: "easeInOut" }}
                >
                  {s.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Copyright */}
        <motion.div
          className="w-full text-center text-[#BDBDBD] text-xs mt-8"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInUp}
        >
          ©2025 TASE All rights reserved
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
