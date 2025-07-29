import React from "react";
import BookingSection from "./BookingSection";
import Footer from "./Footer";
import Navbar from "./navbar";
import { motion } from "framer-motion";

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100, rotateY: 15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
    },
  },
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.3, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.2,
    },
  },
};

const floatIn = {
  hidden: { opacity: 0, y: 30, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageHover = {
  hover: {
    scale: 1.08,
    rotateY: 5,
    boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const numberGlow = {
  hover: {
    scale: 1.2,
    textShadow: "0 0 20px rgba(35, 35, 43, 0.8)",
    WebkitTextStroke: "2px #23232B",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const listItemHover = {
  hover: {
    x: 15,
    color: "#23232B",
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Define slower animation variants for sections 01, 02, 03
const fadeInUpSlow = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};
const fadeInScaleSlow = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// Add new rotate-in animation variants
const rotateInLeft = {
  hidden: { opacity: 0, x: -80, rotate: -8 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
const rotateInRight = {
  hidden: { opacity: 0, x: 80, rotate: 8 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function WhatWeDo() {
  return (
    <>
      <Navbar />
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00e6c7] to-[#667eea] z-50 origin-left"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      {/* Main section */}
      <section className="w-full bg-[#f7f7f7] font-sans px-3 sm:px-6 md:px-8 py-4 sm:py-8 md:py-12 mt-16 sm:mt-20">
        {/* Top Section: Headings */}
        <motion.div
          className="max-w-5xl mx-auto px-4 pb-4 sm:pb-6"
          style={{ position: "relative" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-gray-700 text-base sm:text-lg lg:text-2xl font-normal mb-2 text-center md:text-left"
            variants={textReveal}
            whileHover={{
              scale: 1.02,
              color: "#23232B",
              transition: { duration: 0.3 },
            }}
          >
            You had the vision. You built the business.
          </motion.div>
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-[#23232B] mb-6 text-center md:text-left animate-float"
            variants={textReveal}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(35, 35, 43, 0.3)",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            Now let’s shape it to lead,
            <br className="hidden sm:block" />
            last, and leave a mark.
          </motion.h1>
        </motion.div>
        {/* Hero Video with Hashtag Overlay */}
        <motion.div
          className="w-full flex justify-center items-center bg-[#23232B] relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
          style={{ position: "relative" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <motion.video
            src="/reel.mp4"
            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            style={{ filter: "brightness(0.85) contrast(1.1)" }}
            autoPlay
            loop
            muted
            playsInline
            variants={fadeInScale}
            whileHover={{
              scale: 1.05,
              filter: "brightness(0.9) contrast(1.2)",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
          />
          <motion.span
            className="absolute left-1/2 bottom-6 sm:bottom-8 md:bottom-10 -translate-x-1/2 text-white font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg select-none z-10 cursor-pointer"
            style={{ letterSpacing: "-0.04em" }}
            variants={bounceIn}
            whileHover={{
              scale: 1.15,
              textShadow: "0 0 40px rgba(255,255,255,0.9)",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            #stylistic
          </motion.span>
        </motion.div>
        {/* Stats Section */}
        <motion.div
          className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-12 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-12"
          style={{ position: "relative" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full text-center"
            variants={floatIn}
          >
            <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
              <motion.span
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold align-baseline cursor-pointer"
                style={{
                  fontFamily: "'Outfit', 'Montserrat', sans-serif",
                  color: "transparent",
                  WebkitTextStroke: "1.2px #222",
                  fontWeight: 400,
                  lineHeight: 1,
                  display: "inline-block",
                }}
                variants={bounceIn}
                whileHover={numberGlow.hover}
              >
                6+
              </motion.span>
              <motion.span
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#23232B]"
                variants={textReveal}
                whileHover={{ scale: 1.1, color: "#23232B" }}
              >
                years.
              </motion.span>
              <motion.span
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold align-baseline cursor-pointer"
                style={{
                  fontFamily: "'Outfit', 'Montserrat', sans-serif",
                  color: "transparent",
                  WebkitTextStroke: "1.2px #222",
                  fontWeight: 400,
                  lineHeight: 1,
                  display: "inline-block",
                }}
                variants={bounceIn}
                whileHover={numberGlow.hover}
              >
                100+
              </motion.span>
              <motion.span
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#23232B]"
                variants={textReveal}
                whileHover={{ scale: 1.1, color: "#23232B" }}
              >
                projects.
              </motion.span>
            </div>
            <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
              <motion.span
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold align-baseline cursor-pointer"
                style={{
                  fontFamily: "'Outfit', 'Montserrat', sans-serif",
                  color: "transparent",
                  WebkitTextStroke: "1.2px #222",
                  fontWeight: 400,
                  lineHeight: 1,
                  display: "inline-block",
                }}
                variants={bounceIn}
                whileHover={numberGlow.hover}
              >
                One
              </motion.span>
              <motion.span
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#23232B]"
                variants={textReveal}
                whileHover={{ scale: 1.1, color: "#23232B" }}
              >
                standard. excellence.
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
        {/* Overview Section */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-4 sm:py-6 md:py-8 lg:py-12 px-3 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6 md:mb-8 lg:mb-10"
            variants={floatIn}
          >
            {/* Left: Heading */}
            <motion.div
              className="md:w-1/3 w-full text-center md:text-left flex-shrink-0"
              variants={slideInLeft}
            >
              <motion.div
                className="text-xl sm:text-2xl font-normal text-[#23232B] cursor-pointer"
                variants={textReveal}
                whileHover={{
                  scale: 1.05,
                  color: "#23232B",
                  transition: { duration: 0.3 },
                }}
              >
                The overview
              </motion.div>
            </motion.div>
            {/* Right: Overview Text */}
            <motion.div
              className="md:w-2/3 w-full text-center md:text-left text-base sm:text-lg font-normal text-[#23232B] space-y-4"
              variants={slideInRight}
            >
              <motion.div
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                We design and develop world-class websites, apps, branding, and
                marketing — all tailor-made for your business.
              </motion.div>
              <motion.div className="space-y-2" variants={staggerContainer}>
                <motion.div
                  className="italic font-medium text-lg sm:text-xl text-[#444] cursor-pointer"
                  variants={textReveal}
                  whileHover={{
                    scale: 1.05,
                    color: "#23232B",
                    transition: { duration: 0.3 },
                  }}
                >
                  Call it strategy. Call it style.
                </motion.div>
                <motion.div
                  className="font-extrabold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-[#23232B] to-[#4A4A5A] bg-clip-text text-transparent tracking-tight mt-2 cursor-pointer"
                  style={{ fontFamily: "'Outfit', 'Montserrat', sans-serif" }}
                  variants={bounceIn}
                  whileHover={{
                    scale: 1.05,
                    background: "linear-gradient(90deg, #23232B, #23232B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: { duration: 0.4 },
                  }}
                >
                  We call it digital craftsmanship.
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Web & Mobile Development Section (01) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
            variants={floatIn}
          >
            {/* Left: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left order-2 md:order-1">
              <motion.div
                className="flex items-center mb-2"
                variants={slideInLeft}
              >
                <motion.span
                  className="text-lg sm:text-xl font-normal text-[#222] mr-2 cursor-pointer"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={bounceIn}
                  whileHover={numberGlow.hover}
                >
                  01
                </motion.span>
                <motion.span
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-[#23232B] cursor-pointer"
                  variants={textReveal}
                  whileHover={{
                    color: "#23232B",
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  Web & Mobile Development.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#23232B] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                High-performance websites, mobile apps, and digital platforms —
                built to scale, built to last.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#23232B] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                We blend engineering with creativity to deliver custom solutions
                tailored to your business goals.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#23232B] font-semibold mb-2"
                variants={textReveal}
                whileHover={{
                  color: "#23232B",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Custom Website Development
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Web Application Development
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Mobile App Development (iOS & Android)
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  SaaS Platform Development
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Shopify & eCommerce Solutions
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Headless CMS Development
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  API Integration & Development
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Website Optimization & Maintenance
                </motion.li>
              </motion.ul>
            </div>
            {/* Right: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center items-center order-2 md:order-2"
              variants={slideInRight}
            >
              <motion.img
                src="/Tase_web-min.png"
                alt="Web & Mobile Development Mockup"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] max-w-xs sm:max-w-sm rounded-2xl shadow-lg object-cover cursor-pointer"
                variants={scaleIn}
                whileHover={imageHover.hover}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Design & User Experience Section (02) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
            variants={floatIn}
          >
            {/* Left: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-start items-center order-2 md:order-1"
              variants={slideInLeft}
            >
              <motion.img
                src="/Tase_userExp-min.png"
                alt="Design & User Experience Mockup"
                className="w-full h-[500px] max-w-sm rounded-2xl shadow-lg object-cover cursor-pointer"
                variants={scaleIn}
                whileHover={imageHover.hover}
              />
            </motion.div>
            {/* Right: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left order-1 md:order-2">
              <motion.div
                className="flex items-center mb-2"
                variants={slideInRight}
              >
                <motion.span
                  className="text-lg sm:text-xl font-normal text-[#222] mr-2 cursor-pointer"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={bounceIn}
                  whileHover={numberGlow.hover}
                >
                  02
                </motion.span>
                <motion.span
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-[#222] cursor-pointer"
                  variants={textReveal}
                  whileHover={{
                    color: "#23232B",
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  Design & User Experience.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#23232B] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                Design that's not just beautiful — it's strategic,
                user-centered, and conversion-focused.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#23232B] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                From wireframes to polished interfaces, we craft digital
                experiences that engage and inspire.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={textReveal}
                whileHover={{
                  color: "#23232B",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  UI/UX Design for Web & Mobile
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Prototyping & Wireframing
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Visual Design Systems
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  3D Mockups & Interactive Assets
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Motion & Animated Interface Design
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Packaging & Print Design
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Branding & Identity Section (03) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
            variants={floatIn}
          >
            {/* Left: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left order-2 md:order-1">
              <motion.div
                className="flex items-center mb-2"
                variants={slideInLeft}
              >
                <motion.span
                  className="text-xl font-normal text-[#222] mr-2 cursor-pointer"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={bounceIn}
                  whileHover={numberGlow.hover}
                >
                  03
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl font-bold text-[#222] cursor-pointer"
                  variants={textReveal}
                  whileHover={{
                    color: "#23232B",
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  Branding & Identity.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#23232B] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                We help you become more than just a business — we build your
                brand from the inside out.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#23232B] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                Memorable logos, clear messaging, and a visual identity system
                that speaks your story.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={textReveal}
                whileHover={{
                  color: "#23232B",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Brand Strategy & Positioning
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Logo Design & Visual Identity
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Brand Guidelines & Typography
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Naming & Brand Messaging
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Rebranding & Brand Refresh
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Pitch Deck & Presentation Design
                </motion.li>
              </motion.ul>
            </div>
            {/* Right: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center items-center order-2 md:order-2"
              variants={slideInRight}
            >
              <motion.img
                src="/Tase_BI-min.png"
                alt="Branding & Identity Mockup"
                className="w-full h-[500px] max-w-sm rounded-2xl shadow-lg object-cover cursor-pointer"
                variants={scaleIn}
                whileHover={imageHover.hover}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Marketing & Growth Section (04) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
            variants={floatIn}
          >
            {/* Left: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-start items-center order-2 md:order-1"
              variants={slideInLeft}
            >
              <motion.img
                src="/Tase_Mark&Grow-min.png"
                alt="Marketing & Growth Mockup"
                className="w-full h-[500px] max-w-sm rounded-2xl shadow-lg object-cover cursor-pointer"
                variants={scaleIn}
                whileHover={imageHover.hover}
              />
            </motion.div>
            {/* Right: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left order-1 md:order-2">
              <motion.div
                className="flex items-center mb-2"
                variants={slideInRight}
              >
                <motion.span
                  className="text-xl font-normal text-[#222] mr-2 cursor-pointer"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={bounceIn}
                  whileHover={numberGlow.hover}
                >
                  04
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl font-bold text-[#222] cursor-pointer"
                  variants={textReveal}
                  whileHover={{
                    color: "#23232B",
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  Marketing & Growth.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#23232B] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                Digital strategies that attract, convert, and grow your
                audience.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#23232B] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                From performance ads to SEO and email — we drive meaningful
                results across platforms.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={textReveal}
                whileHover={{
                  color: "#23232B",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Performance Marketing (Meta, Google, TikTok)
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  SEO (On-page, Technical, Content)
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Social Media Strategy & Content
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Email & Content Marketing
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Conversion Rate Optimization (CRO)
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Influencer Campaign Strategy
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Cloud & Infrastructure Section (05) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
            variants={floatIn}
          >
            {/* Left: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left order-2 md:order-1">
              <motion.div
                className="flex items-center mb-2"
                variants={slideInLeft}
              >
                <motion.span
                  className="text-lg sm:text-xl font-normal text-[#222] mr-2 cursor-pointer"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={bounceIn}
                  whileHover={numberGlow.hover}
                >
                  05
                </motion.span>
                <motion.span
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-[#222] cursor-pointer"
                  variants={textReveal}
                  whileHover={{
                    color: "#23232B",
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  Cloud & Infrastructure.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                Scalable cloud solutions and backend architecture to keep your
                business online, fast, and secure.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                We handle the tech so you can focus on growth.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={textReveal}
                whileHover={{
                  color: "#23232B",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Cloud Hosting (AWS, Vercel, Firebase)
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Serverless Architecture & Deployment
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Docker & CI/CD Pipeline Setup
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Domain, DNS & SSL Configuration
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  API Hosting & Scaling
                </motion.li>
              </motion.ul>
            </div>
            {/* Right: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center items-center order-2 md:order-2"
              variants={slideInRight}
            >
              <motion.img
                src="/Tase_devOps-min.png"
                alt="Cloud & Infrastructure Mockup"
                className="w-full h-[500px] max-w-sm rounded-2xl shadow-lg object-cover cursor-pointer"
                variants={scaleIn}
                whileHover={imageHover.hover}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Integration & Automation Section (06) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
            variants={floatIn}
          >
            {/* Left: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-start items-center order-2 md:order-1"
              variants={slideInLeft}
            >
              <motion.img
                src="/Tase_Ai-min.png"
                alt="Tech Integration & Automation Mockup"
                className="w-full h-[500px] max-w-sm rounded-2xl shadow-lg object-cover cursor-pointer"
                variants={scaleIn}
                whileHover={imageHover.hover}
              />
            </motion.div>
            {/* Right: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left order-1 md:order-2">
              <motion.div
                className="flex items-center mb-2"
                variants={slideInLeft}
              >
                <motion.span
                  className="text-lg sm:text-xl font-normal text-[#222] mr-2 cursor-pointer"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={bounceIn}
                  whileHover={numberGlow.hover}
                >
                  06
                </motion.span>
                <motion.span
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-[#222] cursor-pointer"
                  variants={textReveal}
                  whileHover={{
                    color: "#23232B",
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  Tech Integration & Automation.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                We connect the tools that power your workflow and automate what
                slows you down.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                Smarter systems. Seamless integrations. Less manual, more
                impact.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={textReveal}
                whileHover={{
                  color: "#23232B",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  CRM & ERP Integration
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Payment Gateway Integration
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Real-time Databases (Firebase, Redis)
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  CMS Development (WordPress, Strapi, Sanity)
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Analytics & Tracking Setup
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
        {/* Creative Media & Production Section (07) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
            variants={floatIn}
          >
            {/* Left: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left order-2 md:order-1">
              <motion.div
                className="flex items-center mb-2"
                variants={slideInLeft}
              >
                <motion.span
                  className="text-lg sm:text-xl font-normal text-[#222] mr-2 cursor-pointer"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={bounceIn}
                  whileHover={numberGlow.hover}
                >
                  07
                </motion.span>
                <motion.span
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-[#222] cursor-pointer"
                  variants={textReveal}
                  whileHover={{
                    color: "#23232B",
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  Creative Media & Production.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                Stories that move. Content that converts.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={textReveal}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                From scroll-stopping social videos to cinematic edits, we bring
                your brand to life on screen.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={textReveal}
                whileHover={{
                  color: "#23232B",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Video Editing & Post Production
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Social Reels, Ads & Promos
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Product Showcases & Trailers
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Motion Graphics & Animated Assets
                </motion.li>
                <motion.li
                  variants={textReveal}
                  whileHover={listItemHover.hover}
                  className="cursor-pointer"
                >
                  Commercials & Brand Videos
                </motion.li>
              </motion.ul>
            </div>
            {/* Right: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center items-center order-2 md:order-2"
              variants={slideInRight}
            >
              <motion.img
                src="/Tase_Prod-min.png"
                alt="Creative Media & Production Mockup"
                className="w-full h-[500px] max-w-sm rounded-2xl shadow-lg object-cover cursor-pointer"
                variants={scaleIn}
                whileHover={imageHover.hover}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Carousel/Marquee */}
        <motion.div
          className="w-full mt-6 sm:mt-8 mb-8 sm:mb-12 flex flex-col bg-[#f7f7f7] gap-4 sm:gap-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Fade overlay for left edge */}
          <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-r from-[#f7f7f7] to-transparent z-10 pointer-events-none"></div>

          {/* Fade overlay for right edge */}
          <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-l from-[#f7f7f7] to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="overflow-x-hidden whitespace-nowrap w-full mb-3 sm:mb-4 relative"
            style={{ willChange: "transform" }}
            variants={floatIn}
          >
            <div className="inline-block animate-marquee-left">
              {Array.from({ length: 20 }, (_, idx) => (
                <span
                  key={idx}
                  className="inline-flex gap-3 sm:gap-4 md:gap-5 lg:gap-6"
                >
                  <motion.img
                    src="/About/1-min.png"
                    alt="Project 1"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                  <motion.img
                    src="/About/2-min.png"
                    alt="Project 2"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                  <motion.img
                    src="/About/3-min.png"
                    alt="Project 3"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                  <motion.img
                    src="/About/4-min.png"
                    alt="Project 4"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                  <motion.img
                    src="/About/5-min.png"
                    alt="Project 5"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block mr-10 cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="overflow-x-hidden whitespace-nowrap w-full relative"
            style={{ willChange: "transform" }}
            variants={floatIn}
          >
            <div className="inline-block animate-marquee-right">
              {Array.from({ length: 20 }, (_, idx) => (
                <span
                  key={idx}
                  className="inline-flex gap-3 sm:gap-4 md:gap-5 lg:gap-6"
                >
                  <motion.img
                    src="/About/6-min.png"
                    alt="Project 6"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                  <motion.img
                    src="/About/7-min.png"
                    alt="Project 7"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                  <motion.img
                    src="/About/8-min.png"
                    alt="Project 8"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                  <motion.img
                    src="/About/9-min.png"
                    alt="Project 9"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                  <motion.img
                    src="/About/10-min.png"
                    alt="Project 10"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block mr-10 cursor-pointer"
                    whileHover={imageHover.hover}
                  />
                </span>
              ))}
            </div>
          </motion.div>
          <style>{`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            @keyframes pulse-glow {
              0%, 100% { box-shadow: 0 0 20px rgba(0, 230, 199, 0.3); }
              50% { box-shadow: 0 0 30px rgba(0, 230, 199, 0.6); }
            }
            .animate-marquee-left {
              animation: marquee-left 25s linear infinite;
              will-change: transform;
            }
            .animate-marquee-right {
              animation: marquee-right 25s linear infinite;
              will-change: transform;
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            .animate-pulse-glow {
              animation: pulse-glow 2s ease-in-out infinite;
            }
            @media (max-width: 640px) {
              .animate-marquee-left, .animate-marquee-right {
                animation-duration: 20s;
              }
            }
            @media (max-width: 768px) {
              .animate-marquee-left, .animate-marquee-right {
                animation-duration: 18s;
              }
            }
            @media (max-width: 1024px) {
              .animate-marquee-left, .animate-marquee-right {
                animation-duration: 22s;
              }
            }
          `}</style>
        </motion.div>
        <BookingSection />
        <Footer />
      </section>
    </>
  );
}
