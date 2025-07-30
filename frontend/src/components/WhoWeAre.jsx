import React from "react";
import Navbar from "./navbar";
import BookingSection from "./BookingSection";
import Footer from "./Footer";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

// Helper: AnimatedText for word-by-word or letter-by-letter reveal
function AnimatedText({ text, delay = 0, className = "", type = "word" }) {
  const items = type === "letter" ? text.split("") : text.split(" ");
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: delay + i * 0.07,
          }}
          viewport={{ once: false, amount: 0.7 }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {item + (type === "word" ? " " : "")}
        </motion.span>
      ))}
    </span>
  );
}

// Enhanced animation variants - More subtle and professional
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const bounceIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatIn = {
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

// New beautiful animations for section headings
const headingGlow = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const numberReveal = {
  hidden: { opacity: 0, x: -60, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentSlideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
    },
  },
};

const paragraphReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageHover = {
  hover: {
    scale: 1.05,
    rotateY: 2,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const numberGlow = {
  hover: {
    scale: 1.15,
    textShadow: "0 0 25px rgba(35, 35, 43, 0.9)",
    WebkitTextStroke: "2px #23232B",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const headingHover = {
  hover: {
    scale: 1.02,
    color: "#23232B",
    textShadow: "0 0 20px rgba(35, 35, 43, 0.3)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textHover = {
  hover: {
    scale: 1.02,
    color: "#23232B",
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listItemHover = {
  hover: {
    x: 12,
    color: "#23232B",
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Define slower animation variants for sections
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

const tiltTransition = { type: "spring", stiffness: 300, damping: 20 };

function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [8, -8]);
  const rotateY = useTransform(x, [-60, 60], [-8, 8]);
  return (
    <motion.div
      style={{ rotateX, rotateY, z: 10 }}
      className="w-full h-[320px] bg-[#e6eef6] rounded-[16px] flex items-center justify-center mb-4 relative shadow-lg transition-all duration-300"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      transition={tiltTransition}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      }}
    >
      {children}
    </motion.div>
  );
}

// SectionLabel: special left-aligned for 01 basics, centered for others
function SectionLabel({ num, word, dot = true, emoji, align = "center" }) {
  const isBasics = num === "01";
  if (isBasics) {
    // Special: 01 basics in two rows, left-aligned, baseline-aligned
    return (
      <motion.div
        className="w-full mb-2 items-start text-left flex flex-col self-baseline"
        style={{ position: "relative" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingGlow}
      >
        <div className="flex flex-row gap-2 items-baseline">
          <motion.span
            className="text-[30px] sm:text-[45px] align-baseline"
            style={{
              fontFamily: "'Outfit', 'Montserrat', sans-serif",
              color: "transparent",
              WebkitTextStroke: "1.5px #222",
              fontWeight: 400,
              lineHeight: 1,
              display: "inline-block",
            }}
            variants={numberReveal}
            whileHover={numberGlow.hover}
          >
            {num}
          </motion.span>
          <motion.span
            className="text-[45px] sm:text-[70px] align-baseline"
            style={{
              fontFamily: "'Outfit', 'Montserrat', sans-serif",
              color: "transparent",
              WebkitTextStroke: "1.5px #222",
              fontWeight: 400,
              lineHeight: 1,
              display: "inline-block",
            }}
            variants={numberReveal}
            whileHover={numberGlow.hover}
          >
            the
          </motion.span>
        </div>
        <motion.span
          className="block text-[45px] sm:text-[96px] font-extrabold text-[#222] leading-none mt-1 align-baseline"
          style={{
            fontFamily: "Averta CY",
            fontWeight: 700,
            lineHeight: 1.1,
            wordWrap: "break-word",
            textAlign: "left",
          }}
          variants={wordReveal}
          whileHover={headingHover.hover}
        >
          {word}
          {dot && "."}
          {emoji && <span className="ml-2"> {emoji}</span>}
        </motion.span>
      </motion.div>
    );
  }
  // All other sections: single row, centered, baseline-aligned
  return (
    <motion.div
      className="w-full mb-2 items-center text-center flex flex-col self-baseline"
      style={{ position: "relative" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={headingGlow}
    >
      <div className="flex flex-row gap-2 justify-center items-baseline">
        <motion.span
          className="lg:text-[24px] sm: text-[45px] align-baseline"
          style={{
            fontFamily: "'Outfit', 'Montserrat', sans-serif",
            color: "transparent",
            WebkitTextStroke: "1.5px #222",
            fontWeight: 400,
            lineHeight: 1,
            display: "inline-block",
          }}
          variants={numberReveal}
          whileHover={numberGlow.hover}
        >
          {num}
        </motion.span>
        <motion.span
          className="text-[36px] sm:text-[70px] align-baseline"
          style={{
            fontFamily: "'Outfit', 'Montserrat', sans-serif",
            color: "transparent",
            WebkitTextStroke: "1.5px #222",
            fontWeight: 400,
            lineHeight: 1,
            display: "inline-block",
          }}
          variants={numberReveal}
          whileHover={numberGlow.hover}
        >
          the
        </motion.span>
        <motion.span
          className="text-[40px] sm:text-[96px] font-extrabold text-[#222] leading-none align-baseline"
          style={{
            fontFamily: "Averta CY",
            fontWeight: 700,
            lineHeight: 1.1,
            wordWrap: "break-word",
            textAlign: "center",
          }}
          variants={wordReveal}
          whileHover={headingHover.hover}
        >
          {word}
          {dot && "."}
          {emoji && <span className="ml-2"> {emoji}</span>}
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function WhoWeAre() {
  // Parallax for hero image
  const heroImgRef = React.useRef(null);
  const { scrollY } = useScroll({ target: heroImgRef });
  const heroParallax = useTransform(scrollY, [0, 300], [0, 80]);

  // Parallax for rhythm image
  const rhythmImgRef = React.useRef(null);
  const { scrollY: rhythmScrollY } = useScroll({ target: rhythmImgRef });
  const rhythmParallax = useTransform(rhythmScrollY, [0, 300], [0, 60]);

  // Parallax for beginning image (unique ref)
  const beginningImgRef = React.useRef(null);

  // Section background color transitions (TODO: improve with section refs)
  const [sectionBg, setSectionBg] = React.useState("#fff");
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 600) setSectionBg("#fff");
      else if (y < 1400) setSectionBg("#f7f7f7");
      else if (y < 2200) setSectionBg("#f0f4fa");
      else setSectionBg("#fff");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      {/* Main Section Wrapper */}
      <section
        className="w-full font-sans transition-colors duration-700"
        style={{ background: sectionBg }}
      >
        {/* Hero Section */}
        <motion.div
          className="w-full flex flex-col items-center justify-center mt-8 mb-8"
          style={{ position: "relative" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="text-center mb-2">
            <motion.div
              className="lg:text-[70px] lg:mt-20 sm: text-[25px] sm: mt-20 text-black font-semibold mb-0 leading-tight"
              variants={textReveal}
              whileHover={headingHover.hover}
            >
              <AnimatedText
                text="Wondering who are these"
                delay={0}
                type="word"
              />
            </motion.div>
            <br />
            <motion.div
              className="lg:text-[70px] sm: text-[25px] text-black font-semibold mb-10 leading-tight"
              variants={textReveal}
              whileHover={headingHover.hover}
            >
              <AnimatedText
                text="bunch of handsome gentlemen?"
                delay={0.5}
                type="word"
              />
            </motion.div>
            {/* HERO IMAGE */}
            <motion.div
              className="flex flex-col w-[95vw] mb-20"
              style={{ position: "relative" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <motion.img
                className="object-cover shadow-xl sticky top-24 lg:w-full max-w-full lg:h-[500px] md:w-[700px] md:h-[400px] mx-auto sm: w-[400px]"
                src="/who-we-are-min.png"
                alt="Who We Are"
                ref={heroImgRef}
                style={{ y: heroParallax }}
                variants={fadeInScale}
                whileHover={imageHover.hover}
              />
            </motion.div>
            {/* Updated section with black color and larger margins */}
            <motion.div className="mt-40 mb-32" variants={floatIn}>
              <motion.div
                className="lg:text-[75px] sm: text-[25px] font-semibold leading-tight text-black"
                variants={textReveal}
                whileHover={headingHover.hover}
              >
                <AnimatedText
                  text="pinch of ordinary with"
                  delay={0.1}
                  type="word"
                />
              </motion.div>
              <br />
              <motion.div
                className="lg:text-[75px] sm: text-[25px] font-semibold leading-tight text-black"
                variants={textReveal}
                whileHover={headingHover.hover}
              >
                <AnimatedText
                  text="loads of extra-ordinary"
                  delay={0.3}
                  type="word"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* 01 the basics (left-aligned with paragraph) */}
        <motion.div
          className="lg:mt-[90px] flex flex-col sm: mt-20 items-center justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl px-4 w-full">
            {/* Custom single-line heading for basics */}
            <motion.div
              className="w-full mb-8 items-start text-left flex flex-row self-baseline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headingGlow}
            >
              <div className="flex flex-row gap-2 items-baseline">
                <motion.span
                  className="text-[30px] sm:text-[45px] align-baseline"
                  style={{
                    fontFamily: "'Outfit', 'Montserrat', sans-serif",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #222",
                    fontWeight: 400,
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                  variants={numberReveal}
                  whileHover={numberGlow.hover}
                >
                  01
                </motion.span>
                <motion.span
                  className="text-[36px] sm:text-[70px] align-baseline"
                  style={{
                    fontFamily: "'Outfit', 'Montserrat', sans-serif",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #222",
                    fontWeight: 400,
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                  variants={numberReveal}
                  whileHover={numberGlow.hover}
                >
                  the
                </motion.span>
                <motion.span
                  className="text-[40px] sm:text-[96px] font-extrabold text-[#222] leading-none align-baseline"
                  style={{
                    fontFamily: "Averta CY",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    wordWrap: "break-word",
                  }}
                  variants={wordReveal}
                  whileHover={headingHover.hover}
                >
                  basics.
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start justify-start w-full"
              variants={contentSlideUp}
            >
              {[
                "We're a full-service digital agency creating bold digital experiences across the globe. From design and development to strategy and scale, TASE helps brands grow with clarity and style. Our team delivers sharp solutions — on time, on point, and always with impact. And the name? TASE isn't an acronym — it's a statement. A brand built by Mahad, Abdul Rehman,  and Abubakar, shaped by vision, not just letters.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="w-full text-[18px] text-left sm:text-lg text-[#222] font-normal leading-relaxed mb-4"
                  style={{
                    fontFamily: "Outfit, Montserrat, Comfortaa, sans-serif",
                  }}
                  variants={paragraphReveal}
                >
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* 02 the team (centered) */}
        <motion.div
          className="mt-[120px] w-full flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <SectionLabel num="02" word="team" align="center" />
          <motion.div
            className="w-full max-w-5xl mt-12 flex flex-wrap justify-center gap-6 sm:gap-12"
            variants={floatIn}
          >
            {[
              {
                name: "Mahad Ali",
                img: "/profiles/mahad-min.png",
                role: "Chief Executive Officer",
                description:
                  "Visionary behind TASE. Leads strategy, creative direction, and client relationships with a focus on delivering bold digital experiences.",
              },
              {
                name: "Abdul Rehman",
                img: "/profiles/abdulrehman-min.png",
                role: "Chief Technology Officer",
                description:
                  "Oversees all things tech — from system architecture to performance. Drives innovation and ensures seamless, scalable development.",
              },
              {
                name: "Muhammad Abubakar",
                img: "/profiles/abubakar-min.png",
                role: "Head of Operations & Finance",
                description:
                  "Keeps the engine running. Manages timelines, finances, and internal workflows to ensure every project stays sharp and on track.",
              },
            ].map((member, i) => (
              <div
                key={member.name}
                className="flex flex-col items-center w-[220px] mb-6 group"
              >
                <div className="w-full h-[320px] bg-[#e6eef6] rounded-[16px] flex items-center justify-center mb-4 relative shadow-lg overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="lg:w-[300px] lg:h-[400px] object-cover shadow-lg rounded-[10px] max-w-full sm:w-[500px] sm: h-[400px] transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover overlay with member info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent rounded-[10px] flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-white text-center px-6 py-6 mb-2">
                      <div
                        className="text-[13px] leading-relaxed font-semibold drop-shadow-lg"
                        style={{
                          fontFamily:
                            "Outfit, Montserrat, Comfortaa, sans-serif",
                        }}
                      >
                        {member.description}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="text-[#222] text-[18px] font-medium text-center mt-10"
                  style={{
                    fontFamily: "Outfit, Montserrat, Comfortaa, sans-serif",
                  }}
                >
                  {member.name}
                </div>
                <div
                  className="text-[#888] text-[13px] font-light tracking-wide text-center mb-10"
                  style={{
                    fontFamily: "Outfit, Montserrat, Comfortaa, sans-serif",
                  }}
                >
                  {member.role}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 03 the beginning (left-aligned with paragraph) */}
        <motion.div
          className="flex flex-col items-center justify-center w-full mb-8 mt-[90px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl px-4 w-full">
            {/* Custom single-line heading for beginning */}
            <motion.div
              className="w-full mb-8 items-start text-left flex flex-row self-baseline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headingGlow}
            >
              <div className="flex flex-row gap-2 items-baseline">
                <motion.span
                  className="text-[30px] sm:text-[45px] align-baseline"
                  style={{
                    fontFamily: "'Outfit', 'Montserrat', sans-serif",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #222",
                    fontWeight: 400,
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                  variants={numberReveal}
                  whileHover={numberGlow.hover}
                >
                  03
                </motion.span>
                <motion.span
                  className="text-[36px] sm:text-[70px] align-baseline"
                  style={{
                    fontFamily: "'Outfit', 'Montserrat', sans-serif",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #222",
                    fontWeight: 400,
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                  variants={numberReveal}
                  whileHover={numberGlow.hover}
                >
                  the
                </motion.span>
                <motion.span
                  className="text-[40px] sm:text-[96px] font-extrabold text-[#222] leading-none align-baseline"
                  style={{
                    fontFamily: "Averta CY",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    wordWrap: "break-word",
                  }}
                  variants={wordReveal}
                  whileHover={headingHover.hover}
                >
                  beginning.
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start justify-start w-full"
              variants={contentSlideUp}
            >
              {[
                "A few years back, TASE started with nothing more than shared curiosity and a drive to build something meaningful. No clients, no funding — just a few friends taking on unpaid projects, learning through late nights and self-taught hustle. What began as passion projects soon grew into something real. We became obsessed with clean design, intuitive builds, and experiences that feel as good as they look. We're not the corporate type. We're creators first — builders, thinkers, and friends who still love what we do as much as we did on day one.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="w-full text-[15px] sm:text-lg text-[#222] font-normal leading-relaxed mb-4 text-left"
                  style={{
                    fontFamily: "Outfit, Montserrat, Comfortaa, sans-serif",
                  }}
                  variants={paragraphReveal}
                >
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="w-full flex flex-col items-center">
          {/* BEGINNING SECTION IMAGES */}
          <motion.div
            className="w-full max-w-3xl flex flex-row items-start justify-center gap-12 mt-12 min-h-[700px]"
            ref={beginningImgRef}
            style={{ y: heroParallax }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
          >
            <motion.img
              src="/TASE DEVS 1-min.png"
              alt="TASE workspace"
              className="sticky top-32 w-[400px] h-[650px] object-cover rounded-[2px] shadow mb-4 hidden sm:block"
              loading="eager"
              variants={fadeInScale}
              whileHover={imageHover.hover}
            />
            <motion.img
              src="/TASE DEVS OFFICE-min.png"
              alt="TASE project"
              className="sticky top-32 w-[400px] h-[650px] object-cover mt-20 rounded-[2px] shadow hidden sm:block"
              loading="eager"
              variants={fadeInScale}
              whileHover={imageHover.hover}
            />
            {/* Mobile fallback: show images stacked and scrollable */}
            <div className="flex flex-col gap-10 w-full sm:hidden">
              <motion.img
                src="/TASE DEVS 1-min.png"
                alt="TASE workspace"
                className="w-full h-auto object-cover rounded-[2px] shadow"
                loading="eager"
                variants={fadeInScale}
                whileHover={imageHover.hover}
              />
              <motion.img
                src="/TASE DEVS OFFICE-min.png"
                alt="TASE project"
                className="w-full h-auto object-cover rounded-[2px] shadow"
                loading="eager"
                variants={fadeInScale}
                whileHover={imageHover.hover}
              />
            </div>
          </motion.div>
        </div>

        {/* 04 the rhythm (left-aligned with paragraph) */}
        <motion.div
          className="flex flex-col items-center justify-center w-full mb-8 mt-[120px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl px-4 w-full">
            {/* Custom single-line heading for rhythm */}
            <motion.div
              className="w-full mb-8 items-start text-left flex flex-row self-baseline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headingGlow}
            >
              <div className="flex flex-row gap-2 items-baseline">
                <motion.span
                  className="text-[30px] sm:text-[45px] align-baseline"
                  style={{
                    fontFamily: "'Outfit', 'Montserrat', sans-serif",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #222",
                    fontWeight: 400,
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                  variants={numberReveal}
                  whileHover={numberGlow.hover}
                >
                  04
                </motion.span>
                <motion.span
                  className="text-[36px] sm:text-[70px] align-baseline"
                  style={{
                    fontFamily: "'Outfit', 'Montserrat', sans-serif",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #222",
                    fontWeight: 400,
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                  variants={numberReveal}
                  whileHover={numberGlow.hover}
                >
                  the
                </motion.span>
                <motion.span
                  className="text-[40px] sm:text-[96px] font-extrabold text-[#222] leading-none align-baseline"
                  style={{
                    fontFamily: "Averta CY",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    wordWrap: "break-word",
                  }}
                  variants={wordReveal}
                  whileHover={headingHover.hover}
                >
                  rhythm.
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start justify-start w-full"
              variants={contentSlideUp}
            >
              {[
                "TASE was built on consistency, not chaos. But we've never believed in rigid routines. Our rhythm blends discipline with freedom — we stay focused when it counts, and unstructured when it fuels creativity.",
                "Some of our best ideas come after midnight. Some during a ride, a lift, or a long drive. We believe inspiration doesn't live inside offices — it lives in moments, moods, and momentum.",
                "We love what we do, but we also love what fuels it: good design, clean code, loud bikes, deep films, harder workouts, and late-night gaming. That's the pulse behind the pixels.",
                "It's not just a culture. It's the rhythm that keeps us creating — sharp, curious, and always switched on.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="w-full text-[15px] sm:text-lg text-[#222] font-normal leading-relaxed mb-4 text-left"
                  style={{
                    fontFamily: "Outfit, Montserrat, Comfortaa, sans-serif",
                  }}
                  variants={paragraphReveal}
                >
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="w-full flex flex-col items-center">
          {/* RHYTHM SECTION IMAGE */}
          <motion.div
            className="w-full max-w-3xl flex flex-row items-start justify-center mt-12 min-h-[420px]"
            ref={rhythmImgRef}
            style={{ y: rhythmParallax }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
          >
            <motion.img
              src="/TASE DEVS 2-min.png"
              alt="TASE office"
              className="hidden sm:block object-cover rounded-[2px] shadow w-full md:h-[220px] lg:sticky lg:top-32 lg:w-[900px] lg:h-[420px]"
              variants={fadeInScale}
              whileHover={imageHover.hover}
            />
            {/* Mobile fallback */}
            <motion.img
              src="/TASE DEVS 2-min.png"
              alt="TASE office"
              className="w-full h-auto object-cover shadow sm:hidden"
              variants={fadeInScale}
              whileHover={imageHover.hover}
            />
          </motion.div>
        </div>

        {/* 05 the process (left-aligned with paragraph) */}
        <motion.div
          className="flex flex-col items-center justify-center w-full mb-8 lg:mt-[120px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl px-4 w-full">
            {/* Custom single-line heading for process */}
            <motion.div
              className="w-full mb-8 items-start text-left flex flex-row self-baseline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headingGlow}
            >
              <div className="flex flex-row gap-2 items-baseline">
                <motion.span
                  className="text-[30px] sm:text-[45px] align-baseline"
                  style={{
                    fontFamily: "'Outfit', 'Montserrat', sans-serif",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #222",
                    fontWeight: 400,
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                  variants={numberReveal}
                  whileHover={numberGlow.hover}
                >
                  05
                </motion.span>
                <motion.span
                  className="text-[36px] sm:text-[70px] align-baseline"
                  style={{
                    fontFamily: "'Outfit', 'Montserrat', sans-serif",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #222",
                    fontWeight: 400,
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                  variants={numberReveal}
                  whileHover={numberGlow.hover}
                >
                  the
                </motion.span>
                <motion.span
                  className="text-[40px] sm:text-[96px] font-extrabold text-[#222] leading-none align-baseline"
                  style={{
                    fontFamily: "Averta CY",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    wordWrap: "break-word",
                  }}
                  variants={wordReveal}
                  whileHover={headingHover.hover}
                >
                  process.
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start justify-start w-full"
              variants={contentSlideUp}
            >
              {[
                "Our process is simple — but never basic. Every project starts with listening: to the client, the challenge, and the opportunity beneath the surface.",
                "We don't rush in with templates or assumptions. We research, plan, sketch, question, and test. Strategy leads. Design follows. Development makes it real. From the first wireframe to the final pixel, we work in fast, focused cycles — always sharing, always refining. Clients aren't left out of the process — they're part of it.",
                "Because great work isn't just delivered — it's built together.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="w-full text-[15px] sm:text-lg text-[#222] font-normal leading-relaxed mb-4 text-left"
                  style={{
                    fontFamily: "Outfit, Montserrat, Comfortaa, sans-serif",
                  }}
                  variants={paragraphReveal}
                >
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </div>
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
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    src="/About/2-min.png"
                    alt="Project 2"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    src="/About/3-min.png"
                    alt="Project 3"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    src="/About/4-min.png"
                    alt="Project 4"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    src="/About/5-min.png"
                    alt="Project 5"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block mr-10"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    src="/About/7-min.png"
                    alt="Project 7"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    src="/About/8-min.png"
                    alt="Project 8"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    src="/About/9-min.png"
                    alt="Project 9"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    src="/About/10-min.png"
                    alt="Project 10"
                    className="w-[160px] h-[96px] sm:w-[200px] sm:h-[120px] md:w-[220px] md:h-[130px] lg:w-[280px] lg:h-[160px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] inline-block mr-10"
                    whileHover={imageHover.hover}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
