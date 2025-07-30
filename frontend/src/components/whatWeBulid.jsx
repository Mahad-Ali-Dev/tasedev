import Navbar from "./navbar";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import BookingSection from "./BookingSection";
import Footer from "./Footer";
import projects from "./projectData";
import { Link } from "react-router-dom";

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
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

export default function WhatWeBuild() {
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
          className="max-w-5xl mx-auto px-4 pt-12 pb-6"
          style={{ position: "relative" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h4
            className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight text-[#23232B] mb-6 sm:mb-8 text-center"
            variants={textReveal}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(35, 35, 43, 0.3)",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            Wondering what happens,
            <br className="hidden sm:block" />
            when vision meets execution?
          </motion.h4>
        </motion.div>

        {/* Hero Video with Hashtag Overlay */}
        <motion.div
          className="w-full px-4 mb-10 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <div className="w-full flex justify-center items-center bg-[#00e6c7] relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-xl">
            <motion.video
              src="/reel.mp4"
              className="absolute inset-0 w-full h-full object-cover rounded-xl cursor-pointer"
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
          </div>
        </motion.div>

        <motion.h4
          className="text-xl sm:text-3xl md:text-5xl mt-10 sm:mt-16 font-semibold leading-tight text-[#23232B] mb-6 sm:mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textReveal}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 30px rgba(35, 35, 43, 0.3)",
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          These aren't concepts ___ they're
          <br className="hidden sm:block" />
          the comebacks to every 'what if'.
        </motion.h4>

        {/* Enhanced Marquee/Carousel */}
        <motion.div
          className="w-full mt-10 sm:mt-16 mb-10 sm:mb-16 flex flex-col bg-[#f7f7f7] gap-4 sm:gap-6 relative"
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

        <ProjectSection />
        <BookingSection />
        <Footer />
      </section>
    </>
  );
}

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Floating animation keyframes
  const floatTransition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2.5,
    ease: "easeInOut",
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full bg-[#f6f6f6] py-10 sm:py-16 md:py-20 px-2 sm:px-4 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.7 }}
      variants={staggerContainer}
    >
      {/* Scroll Progress Line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#ddd] -translate-x-1/2 z-0">
        <motion.div
          style={{ height }}
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#a259ff] to-[#5b6eff] animate-pulse"
        />
      </div>

      {/* Section Heading */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto mb-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-lg sm:text-2xl md:text-3xl font-bold text-[#23232B] mb-2"
          variants={textReveal}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 30px rgba(35, 35, 43, 0.3)",
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          Ideas turned real, designs turned results
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-[#888]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          variants={textReveal}
          whileHover={{
            scale: 1.02,
            color: "#23232B",
            transition: { duration: 0.3 },
          }}
        >
          See what happens when vision meets execution
        </motion.p>
      </motion.div>

      {/* Projects */}
      <motion.div
        className="relative z-10 flex flex-col gap-32 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        variants={staggerContainer}
      >
        {projects.map((project, i) => {
          const isLeft = i % 2 === 1;

          // 3D Tilt Motion Values
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          const rotateX = useTransform(y, [-50, 50], [12, -12]);
          const rotateY = useTransform(x, [-50, 50], [-12, 12]);
          const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
          const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

          // Parallax for info block
          const infoParallax = useTransform(
            scrollYProgress,
            [0, 1],
            [isLeft ? 40 : -40, 0]
          );

          return (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center ${
                isLeft ? "md:flex-row-reverse" : ""
              } gap-8 sm:gap-10 md:gap-16 relative`}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              {/* Image with 3D tilt and floating */}
              <motion.div
                className="w-full max-w-full md:w-2/3"
                style={{
                  rotateX: springX,
                  rotateY: springY,
                  z: 10,
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  x.set(e.clientX - rect.left - rect.width / 2);
                  y.set(e.clientY - rect.top - rect.height / 2);
                }}
                onMouseLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
                animate={{
                  y: [0, -12, 0],
                  transition: floatTransition,
                }}
              >
                <motion.img
                  src={project.heroImage}
                  alt={project.title}
                  className="rounded-xl shadow-lg w-full max-w-[420px] md:max-w-full object-cover cursor-pointer"
                  style={{ aspectRatio: "16/9" }}
                  draggable={false}
                  whileHover={imageHover.hover}
                />
              </motion.div>

              {/* Info Block with parallax */}
              <motion.div
                className={`w-full md:w-1/3 flex flex-col items-${
                  isLeft ? "end" : "start"
                } mt-6 md:mt-0`}
                style={{ y: infoParallax }}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <div
                  className={`text-left ${
                    isLeft ? "md:text-right" : ""
                  } text-sm sm:text-base md:text-lg`}
                >
                  <motion.div
                    className="text-xs text-[#888] font-semibold tracking-widest uppercase mb-2 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      color: "#23232B",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {project.label}
                  </motion.div>
                  <motion.div
                    className="text-lg md:text-xl font-bold text-[#23232B] cursor-pointer"
                    whileHover={{
                      scale: 1.02,
                      textShadow: "0 0 30px rgba(35, 35, 43, 0.3)",
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    }}
                  >
                    {project.title}
                  </motion.div>
                  <motion.div
                    className="text-sm text-[#23232B] mb-4 cursor-pointer"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {project.subtitle}
                  </motion.div>
                  <Link to={`/projects/${project.slug}`}>
                    <motion.button
                      className="bg-[#23232B] text-white text-xs font-semibold px-5 py-2 rounded-full shadow transition relative overflow-hidden"
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "#EBEBEB",
                        color: "#23232B",
                        boxShadow: "0 0 0 4px #EBEBEB33, 0 8px 25px #23232B66",
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      }}
                    >
                      {project.button || "View project"}
                      {/* Glow effect */}
                      <span
                        className="absolute inset-0 pointer-events-none rounded-full"
                        style={{
                          boxShadow: "0 0 24px 8px #22222222",
                          opacity: 0.18,
                        }}
                      />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};
