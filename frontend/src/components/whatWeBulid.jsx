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

export default function WhatWeBuild() {
  return (
    <>
      <Navbar />
      <motion.div
        className="mt-20 max-w-5xl mx-auto px-4 pt-12 pb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        variants={containerVariants}
      >
        <motion.h4
          className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight text-[#222] mb-6 sm:mb-8 text-center md:text-left"
          variants={fadeInUp}
        >
          Wondering what happens,
          <br className="hidden sm:block" />
          when vision meets execution?
        </motion.h4>
      </motion.div>

      {/* Hero Video with Hashtag Overlay - Updated to match content width */}
      <motion.div
        className="max-w-5xl mx-auto px-4 mb-10 sm:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        variants={fadeInUp}
      >
        <div className="w-full flex justify-center items-center bg-[#00e6c7] relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-xl">
          <motion.video
            src="/reel.mp4"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            style={{ filter: "brightness(0.85) contrast(1.1)" }}
            autoPlay
            loop
            muted
            playsInline
            variants={fadeInUp}
          />
          <motion.span
            className="absolute left-1/2 bottom-6 sm:bottom-10 -translate-x-1/2 text-white font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-7xl drop-shadow-lg select-none z-10"
            style={{ letterSpacing: "-0.04em" }}
            variants={fadeInUp}
          >
            #stylistic
          </motion.span>
        </div>
      </motion.div>

      <motion.h4
        className="text-xl sm:text-3xl md:text-5xl mt-10 sm:mt-16 font-semibold leading-tight text-[#222] mb-6 sm:mb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        variants={fadeInUp}
      >
        These aren't concepts ___ they're
        <br className="hidden sm:block" />
        the comebacks to every 'what if'.
      </motion.h4>

      {/* Marquee/Carousel */}
      <motion.div
        className="w-full mt-10 sm:mt-16 mb-10 sm:mb-16 flex flex-col gap-6 sm:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        variants={containerVariants}
      >
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
      </motion.div>
      <ProjectSection />
      <BookingSection />
      <Footer />
    </>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const imageVariants = (isLeft) => ({
  hidden: {
    opacity: 0,
    x: isLeft ? 80 : -80,
    scale: 0.95,
    rotate: isLeft ? 4 : -4,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
});

const infoVariants = (isLeft) => ({
  hidden: { opacity: 0, x: isLeft ? -80 : 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
});

const buttonVariants = {
  hover: {
    scale: 1.08,
    backgroundColor: "#5b6eff",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

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

  // Use the full projects array for the project showcase
  // In the ProjectSection or wherever you map over projects, use projects instead of homepageProjects or any filtered array.

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full bg-[#f6f6f6] py-10 sm:py-16 md:py-20 px-2 sm:px-4 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.7 }}
      variants={containerVariants}
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
          className="text-lg sm:text-2xl md:text-3xl font-bold text-[#222] mb-2"
          variants={fadeInUp}
        >
          Ideas turned real, designs turned results
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-[#888]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
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
        variants={containerVariants}
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
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="rounded-xl shadow-lg w-full max-w-[420px] md:max-w-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                  draggable={false}
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
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.12,
                }}
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <div
                  className={`text-left ${
                    isLeft ? "md:text-right" : ""
                  } text-sm sm:text-base md:text-lg`}
                >
                  <div className="text-xs text-[#888] font-semibold tracking-widest uppercase mb-2">
                    {project.label}
                  </div>
                  <div className="text-lg md:text-xl font-bold text-[#222]">
                    {project.title}
                  </div>
                  <div className="text-sm text-[#222] mb-4">
                    {project.subtitle}
                  </div>
                  <Link to={`/projects/${project.slug}`}>
                    <motion.button
                      className="bg-[#222] text-white text-xs font-semibold px-5 py-2 rounded-full shadow hover:bg-[#444] transition relative overflow-hidden"
                      whileHover={{
                        scale: 1.08,
                        boxShadow: "0 0 0 4px #22222233, 0 2px 16px #44444433",
                        backgroundColor: "#444",
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
