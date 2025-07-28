import React from "react";
import BookingSection from "./BookingSection";
import Footer from "./Footer";
import Navbar from "./navbar";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};
const fadeInScale = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

export default function WhatWeDo() {
  return (
    <>
      <Navbar />
      {/* Main section */}
      <section className="w-full bg-[#f7f7f7] font-sans px-4 py-6 sm:px-8 sm:py-12 mt-20">
        {/* Top Section: Headings */}
        <motion.div
          className="max-w-5xl mx-auto px-4 pb-4 sm:pb-6"
          style={{ position: "relative" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInUp}
        >
          <motion.div
            className="text-gray-700 text-base sm:text-lg lg:text-2xl font-normal mb-2 text-center md:text-left"
            variants={fadeInUp}
          >
            You had the vision. You built the business.
          </motion.div>
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-[#222] mb-6 text-center md:text-left"
            variants={fadeInUp}
          >
            Now let’s shape it to lead,
            <br className="hidden sm:block" />
            last, and leave a mark.
          </motion.h1>
        </motion.div>
        {/* Hero Video with Hashtag Overlay */}
        <motion.div
          className="w-full flex justify-center items-center bg-[#00e6c7] relative overflow-hidden min-h-[500px]"
          style={{ minHeight: "500px", position: "relative" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInScale}
        >
          <motion.video
            src="/reel.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.85) contrast(1.1)" }}
            autoPlay
            loop
            muted
            playsInline
            initial="hidden"
            animate="visible"
            variants={fadeInScale}
          />
          <motion.span
            className="absolute left-1/2 bottom-10 -translate-x-1/2 text-white font-extrabold text-4xl sm:text-6xl lg:text-7xl drop-shadow-lg select-none z-10"
            style={{ letterSpacing: "-0.04em" }}
            variants={fadeInUp}
          >
            #stylistic
          </motion.span>
        </motion.div>
        {/* Stats Section */}
        <motion.div
          className="max-w-5xl mx-auto px-4 py-6 sm:py-12 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12"
          style={{ position: "relative" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInUp}
        >
          <motion.div
            className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 md:gap-6 w-full text-center md:text-left"
            variants={fadeInUp}
          >
            <motion.span
              className="text-2xl sm:text-4xl lg:text-6xl font-bold align-baseline"
              style={{
                fontFamily: "'Outfit', 'Montserrat', sans-serif",
                color: "transparent",
                WebkitTextStroke: "1.2px #222",
                fontWeight: 400,
                lineHeight: 1,
                display: "inline-block",
              }}
              variants={fadeInUp}
            >
              6+
            </motion.span>
            <motion.span
              className="text-base sm:text-xl lg:text-2xl font-semibold text-[#2B2B2B]"
              variants={fadeInUp}
            >
              years.
            </motion.span>
            <motion.span
              className="text-2xl sm:text-4xl lg:text-6xl font-bold align-baseline"
              style={{
                fontFamily: "'Outfit', 'Montserrat', sans-serif",
                color: "transparent",
                WebkitTextStroke: "1.2px #222",
                fontWeight: 400,
                lineHeight: 1,
                display: "inline-block",
              }}
              variants={fadeInUp}
            >
              100+
            </motion.span>
            <motion.span
              className="text-base sm:text-xl lg:text-2xl font-semibold text-[#2B2B2B]"
              variants={fadeInUp}
            >
              projects.
            </motion.span>
            <motion.span
              className="text-2xl sm:text-4xl lg:text-6xl font-bold align-baseline"
              style={{
                fontFamily: "'Outfit', 'Montserrat', sans-serif",
                color: "transparent",
                WebkitTextStroke: "1.2px #222",
                fontWeight: 400,
                lineHeight: 1,
                display: "inline-block",
              }}
              variants={fadeInUp}
            >
              One
            </motion.span>
            <motion.span
              className="text-base sm:text-xl lg:text-2xl font-semibold text-[#2B2B2B]"
              variants={fadeInUp}
            >
              standard. excellence.
            </motion.span>
          </motion.div>
        </motion.div>
        {/* Overview Section */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-6 sm:py-12 px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInUp}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 mb-6 md:mb-10"
            variants={fadeInUp}
          >
            {/* Left: Heading */}
            <motion.div
              className="md:w-1/3 w-full text-center md:text-left flex-shrink-0"
              variants={fadeInUp}
            >
              <motion.div
                className="text-xl sm:text-2xl font-normal text-[#222]"
                variants={fadeInUp}
              >
                The overview
              </motion.div>
            </motion.div>
            {/* Right: Overview Text */}
            <motion.div
              className="md:w-2/3 w-full text-center md:text-left text-base sm:text-lg font-normal text-[#222] space-y-4"
              variants={fadeInUp}
            >
              <motion.div variants={fadeInUp}>
                We design and develop world-class websites, apps, branding, and
                marketing — all tailor-made for your business.
              </motion.div>
              <motion.div className="space-y-2" variants={fadeInUp}>
                <motion.div
                  className="italic font-medium text-lg sm:text-xl text-[#444]"
                  variants={fadeInUp}
                >
                  Call it strategy. Call it style.
                </motion.div>
                <motion.div
                  className="font-extrabold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-[#222] to-[#bdbdbd] bg-clip-text text-transparent tracking-tight mt-2"
                  style={{ fontFamily: "'Outfit', 'Montserrat', sans-serif" }}
                  variants={fadeInUp}
                >
                  We call it digital craftsmanship.
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Web & Mobile Development Section (01) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-6 sm:py-8 px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            {/* Left: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <motion.div
                className="flex items-center mb-2"
                variants={fadeInUp}
              >
                <motion.span
                  className="text-xl font-normal text-[#222] mr-2"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={fadeInUp}
                >
                  01
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl font-bold text-[#222]"
                  variants={fadeInUp}
                >
                  Web & Mobile Development.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                High-performance websites, mobile apps, and digital platforms —
                built to scale, built to last.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                We blend engineering with creativity to deliver custom solutions
                tailored to your business goals.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={fadeInUp}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#667eea]"
                >
                  Custom Website Development
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#4facfe]"
                >
                  Web Application Development
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#f093fb]"
                >
                  Mobile App Development (iOS & Android)
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#43e97b]"
                >
                  SaaS Platform Development
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fa709a]"
                >
                  Shopify & eCommerce Solutions
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#ffecd2]"
                >
                  Headless CMS Development
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#a8edea]"
                >
                  API Integration & Development
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#ff9a9e]"
                >
                  Website Optimization & Maintenance
                </motion.li>
              </motion.ul>
            </div>
            {/* Right: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center"
              variants={fadeInUp}
            >
              <motion.img
                src="/Tase_web-min.png"
                alt="Web & Mobile Development Mockup"
                className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                variants={fadeInUp}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Design & User Experience Section (02) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-6 sm:py-8 px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            {/* Text Content First */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <motion.div
                className="flex items-center mb-2"
                variants={fadeInUp}
              >
                <motion.span
                  className="text-xl font-normal text-[#222] mr-2"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={fadeInUp}
                >
                  02
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl font-bold text-[#222]"
                  variants={fadeInUp}
                >
                  Design & User Experience.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                Design that’s not just beautiful — it’s strategic,
                user-centered, and conversion-focused.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                From wireframes to polished interfaces, we craft digital
                experiences that engage and inspire.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={fadeInUp}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#ff6b6b]"
                >
                  UI/UX Design for Web & Mobile
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#74b9ff]"
                >
                  Prototyping & Wireframing
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fd79a8]"
                >
                  Visual Design Systems
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#00b894]"
                >
                  3D Mockups & Interactive Assets
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fdcb6e]"
                >
                  Motion & Animated Interface Design
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#6c5ce7]"
                >
                  Packaging & Print Design
                </motion.li>
              </motion.ul>
            </div>
            {/* Image Second */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0"
              variants={fadeInUp}
            >
              <motion.img
                src="/Tase_userExp-min.png"
                alt="Design & User Experience Mockup"
                className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                variants={fadeInUp}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Branding & Identity Section (03) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-6 sm:py-8 px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            {/* Left: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <motion.div
                className="flex items-center mb-2"
                variants={fadeInUp}
              >
                <motion.span
                  className="text-xl font-normal text-[#222] mr-2"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={fadeInUp}
                >
                  03
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl font-bold text-[#222]"
                  variants={fadeInUp}
                >
                  Branding & Identity.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                We help you become more than just a business — we build your
                brand from the inside out.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                Memorable logos, clear messaging, and a visual identity system
                that speaks your story.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={fadeInUp}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#ff7675]"
                >
                  Brand Strategy & Positioning
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#55a3ff]"
                >
                  Logo Design & Visual Identity
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#a29bfe]"
                >
                  Brand Guidelines & Typography
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fd79a8]"
                >
                  Naming & Brand Messaging
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#00b894]"
                >
                  Rebranding & Brand Refresh
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fdcb6e]"
                >
                  Pitch Deck & Presentation Design
                </motion.li>
              </motion.ul>
            </div>
            {/* Right: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center"
              variants={fadeInUp}
            >
              <div className="bg-[#e6f4ff] rounded-2xl p-4 flex items-center justify-center w-full max-w-xs h-auto">
                <motion.img
                  src="/Tase_BI-min.png"
                  alt="Branding & Identity Mockup"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                  variants={fadeInUp}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Marketing & Growth Section (04) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-6 sm:py-8 px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            {/* Text Content First */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <motion.div
                className="flex items-center mb-2"
                variants={fadeInUp}
              >
                <motion.span
                  className="text-xl font-normal text-[#222] mr-2"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={fadeInUp}
                >
                  04
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl font-bold text-[#222]"
                  variants={fadeInUp}
                >
                  Marketing & Growth.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                Digital strategies that attract, convert, and grow your
                audience.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                From performance ads to SEO and email — we drive meaningful
                results across platforms.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={fadeInUp}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#ff6b6b]"
                >
                  Performance Marketing (Meta, Google, TikTok)
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#4facfe]"
                >
                  SEO (On-page, Technical, Content)
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fd79a8]"
                >
                  Social Media Strategy & Content
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#00b894]"
                >
                  Email & Content Marketing
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fdcb6e]"
                >
                  Conversion Rate Optimization (CRO)
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#a29bfe]"
                >
                  Influencer Campaign Strategy
                </motion.li>
              </motion.ul>
            </div>
            {/* Image Second */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0"
              variants={fadeInUp}
            >
              <motion.img
                src="/Tase_Mark&Grow-min.png"
                alt="Marketing & Growth Mockup"
                className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                variants={fadeInUp}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Cloud & Infrastructure Section (05) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-6 sm:py-8 px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <motion.div
                className="flex items-center mb-2"
                variants={fadeInUp}
              >
                <motion.span
                  className="text-xl font-normal text-[#222] mr-2"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={fadeInUp}
                >
                  05
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl font-bold text-[#222]"
                  variants={fadeInUp}
                >
                  Cloud & Infrastructure.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                Scalable cloud solutions and backend architecture to keep your
                business online, fast, and secure.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                We handle the tech so you can focus on growth.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={fadeInUp}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#74b9ff]"
                >
                  Cloud Hosting (AWS, Vercel, Firebase)
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#00b894]"
                >
                  Serverless Architecture & Deployment
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fdcb6e]"
                >
                  Docker & CI/CD Pipeline Setup
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fd79a8]"
                >
                  Domain, DNS & SSL Configuration
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#a29bfe]"
                >
                  API Hosting & Scaling
                </motion.li>
              </motion.ul>
            </div>
            {/* Right: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center"
              variants={fadeInUp}
            >
              <motion.img
                src="/Tase_devOps-min.png"
                alt="Cloud & Infrastructure Mockup"
                className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                variants={fadeInUp}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Integration & Automation Section (06) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-6 sm:py-8 px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            {/* Text Content First */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <motion.div
                className="flex items-center mb-2"
                variants={fadeInUp}
              >
                <motion.span
                  className="text-xl font-normal text-[#222] mr-2"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={fadeInUp}
                >
                  06
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl font-bold text-[#222]"
                  variants={fadeInUp}
                >
                  Tech Integration & Automation.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                We connect the tools that power your workflow and automate what
                slows you down.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                Smarter systems. Seamless integrations. Less manual, more
                impact.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={fadeInUp}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#667eea]"
                >
                  CRM & ERP Integration
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#4facfe]"
                >
                  Payment Gateway Integration
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#00b894]"
                >
                  Real-time Databases (Firebase, Redis)
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fdcb6e]"
                >
                  CMS Development (WordPress, Strapi, Sanity)
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fd79a8]"
                >
                  Analytics & Tracking Setup
                </motion.li>
              </motion.ul>
            </div>
            {/* Image Second */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0"
              variants={fadeInUp}
            >
              <motion.img
                src="/Tase_Ai-min.png"
                alt="Tech Integration & Automation Mockup"
                className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                variants={fadeInUp}
              />
            </motion.div>
          </div>
        </motion.div>
        {/* Creative Media & Production Section (07) */}
        <motion.div
          className="w-full bg-[#f7f7f7] py-6 sm:py-8 px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <motion.div
                className="flex items-center mb-2"
                variants={fadeInUp}
              >
                <motion.span
                  className="text-xl  font-normal text-[#222] mr-2"
                  style={{
                    WebkitTextStroke: "1.2px #222",
                    color: "transparent",
                    fontFamily: "Outfit, Montserrat, sans-serif",
                  }}
                  variants={fadeInUp}
                >
                  07
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl font-bold text-[#222]"
                  variants={fadeInUp}
                >
                  {" "}
                  Creative Media & Production.
                </motion.span>
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                Stories that move. Content that converts.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-normal mb-4"
                variants={fadeInUp}
              >
                From scroll-stopping social videos to cinematic edits, we bring
                your brand to life on screen.
              </motion.div>
              <motion.div
                className="text-base sm:text-lg text-[#222] font-semibold mb-2"
                variants={fadeInUp}
              >
                Services:
              </motion.div>
              <motion.ul
                className="list-disc list-inside flex flex-col items-start text-base sm:text-lg text-[#222] space-y-2"
                variants={staggerContainer}
              >
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#ff6b6b]"
                >
                  Video Editing & Post Production
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#4facfe]"
                >
                  Social Reels, Ads & Promos
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#00b894]"
                >
                  Product Showcases & Trailers
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fdcb6e]"
                >
                  Motion Graphics & Animated Assets
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#fd79a8]"
                >
                  Commercials & Brand Videos
                </motion.li>
              </motion.ul>
            </div>
            {/* Right: Image */}
            <motion.div
              className="md:w-1/2 w-full flex justify-center"
              variants={fadeInUp}
            >
              <motion.img
                src="/Tase_Prod-min.png"
                alt="Creative Media & Production Mockup"
                className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                variants={fadeInUp}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel/Marquee */}
        <div className="w-full mt-8 mb-12 flex flex-col bg-[#f7f7f7] gap-6">
          <div
            className="overflow-x-hidden whitespace-nowrap w-full mb-4"
            style={{ willChange: "transform" }}
          >
            <div className="inline-block animate-marquee-left">
              {[1, 2].map((_, idx) => (
                <span key={idx} className="inline-flex gap-6">
                  <img
                    src="/About/1-min.png"
                    alt="Project 1"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block"
                  />
                  <img
                    src="/About/2-min.png"
                    alt="Project 2"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block"
                  />
                  <img
                    src="/About/3-min.png"
                    alt="Project 3"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block"
                  />
                  <img
                    src="/About/4-min.png"
                    alt="Project 4"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block"
                  />
                  <img
                    src="/About/5-min.png"
                    alt="Project 5"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block mr-10"
                  />
                </span>
              ))}
            </div>
          </div>
          <div
            className="overflow-x-hidden whitespace-nowrap w-full"
            style={{ willChange: "transform" }}
          >
            <div className="inline-block animate-marquee-right">
              {[1, 2].map((_, idx) => (
                <span key={idx} className="inline-flex gap-6">
                  <img
                    src="/About/6-min.png"
                    alt="Project 6"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block"
                  />
                  <img
                    src="/About/7-min.png"
                    alt="Project 7"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block"
                  />
                  <img
                    src="/About/8-min.png"
                    alt="Project 8"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block"
                  />
                  <img
                    src="/About/9-min.png"
                    alt="Project 9"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block"
                  />
                  <img
                    src="/About/10-min.png"
                    alt="Project 10"
                    className="w-[220px] h-[120px] object-cover rounded-[12px] inline-block mr-10"
                  />
                </span>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-left {
              animation: marquee-left 10s linear infinite;
              will-change: transform;
            }
            .animate-marquee-right {
              animation: marquee-right 10s linear infinite;
              will-change: transform;
            }
            @media (max-width: 768px) {
              .animate-marquee-left, .animate-marquee-right {
                animation-duration: 6s;
              }
            }
          `}</style>
        </div>
        <BookingSection />
        <Footer />
      </section>
    </>
  );
}
