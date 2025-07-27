import React from "react";
import Navbar from "./navbar";
import BookingSection from "./BookingSection";
import Footer from "./Footer";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

// TODO: Make sure to load 'Outfit', 'Montserrat', and 'Averta CY' fonts in your project (Google Fonts or CSS import)

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeInScale = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const tiltTransition = { type: "spring", stiffness: 300, damping: 20 };

function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [12, -12]);
  const rotateY = useTransform(x, [-60, 60], [-12, 12]);
  return (
    <motion.div
      style={{ rotateX, rotateY, z: 10 }}
      className="w-full h-[320px] bg-[#e6eef6] rounded-[16px] flex items-center justify-center mb-4 relative shadow-lg transition-shadow duration-200 hover:shadow-2xl"
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
        scale: 1.045,
        boxShadow: "0 8px 32px 0 rgba(90,90,120,0.18)",
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
        viewport={{ once: false, amount: 0.7 }}
        variants={staggerContainer}
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
            variants={fadeInUp}
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
            variants={fadeInUp}
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
          variants={fadeInUp}
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
      viewport={{ once: false, amount: 0.7 }}
      variants={staggerContainer}
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
          variants={fadeInUp}
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
          variants={fadeInUp}
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
          variants={fadeInUp}
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
          animate="visible"
          variants={staggerContainer}
        >
          <div className="text-center mb-2">
            <AnimatedText
              text="Wondering who are these"
              className="lg:text-[70px] lg:mt-20 sm: text-[25px] sm: mt-20 text-black font-semibold mb-0 leading-tight"
              delay={0}
              type="word"
            />
            <br />
            <AnimatedText
              text="bunch of handsome gentlemen?"
              className="lg:text-[70px] sm: text-[25px] text-black font-semibold mb-10 leading-tight"
              delay={0.5}
              type="word"
            />
            {/* HERO IMAGE */}
            <motion.div
              className="flex flex-col w-[95vw] mb-20"
              style={{ position: "relative" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              variants={fadeInScale}
            >
              <motion.img
                className="object-cover shadow-xl sticky top-24 lg:w-full max-w-full lg:h-[500px] md:w-[700px] md:h-[400px] mx-auto sm: w-[400px]"
                src="/who-we-are-min.png"
                alt="Who We Are"
                ref={heroImgRef}
                style={{ y: heroParallax }}
                initial="hidden"
                animate="visible"
                variants={fadeInScale}
              />
            </motion.div>
            {/* Updated section with black color and larger margins */}
            <div className="mt-40 mb-32">
              <AnimatedText
                text="pinch of ordinary with"
                className="lg:text-[75px] sm: text-[25px] font-semibold leading-tight text-black"
                delay={0.1}
                type="word"
              />
              <br />
              <AnimatedText
                text="loads of extra-ordinary"
                className="lg:text-[75px] sm: text-[25px] font-semibold leading-tight text-black"
                delay={0.3}
                type="word"
              />
            </div>
          </div>
        </motion.div>

        {/* 01 the basics (left-aligned with paragraph) */}
        <motion.div
          className="lg:mt-[90px] flex flex-col sm: mt-20 items-center justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl px-4 w-full">
            {/* Custom single-line heading for basics */}
            <motion.div
              className="w-full mb-8 items-start text-left flex flex-row self-baseline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              variants={staggerContainer}
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
                  variants={fadeInUp}
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
                  variants={fadeInUp}
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
                  variants={fadeInUp}
                >
                  basics.
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start justify-start w-full"
              variants={staggerContainer}
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
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.7 }}
                  variants={fadeInUp}
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
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <SectionLabel num="02" word="team" align="center" />
          <motion.div
            className="w-full max-w-5xl mt-12 flex flex-wrap justify-center gap-6 sm:gap-12"
            variants={staggerContainer}
          >
            {[
              {
                name: "Mahad Ali",
                img: "/profiles/mahad-min.png",
                role: "Co-Founder",
              },
              {
                name: "Abdul Rehman",
                img: "/profiles/abdulrehman-min.png",
                role: "Co-Founder",
              },
              {
                name: "Muhammad Abubakar",
                img: "/profiles/abubakar-min.png",
                role: "Co-Founder",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                className="flex flex-col items-center w-[220px] mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.7 }}
                variants={fadeInScale}
                transition={{ delay: i * 0.18 }}
              >
                <TiltCard>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="lg:w-[300px] lg:h-[400px] object-cover shadow-lg rounded-[10px] max-w-full sm:w-[500px] sm: h-[400px]"
                  />
                </TiltCard>
                <div
                  className="text-[#222] text-[18px] font-medium text-center mt-10 "
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 03 the beginning (left-aligned with paragraph) */}
        <motion.div
          className="flex flex-col items-center justify-center w-full mb-8 mt-[90px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl px-4 w-full">
            {/* Custom single-line heading for beginning */}
            <motion.div
              className="w-full mb-8 items-start text-left flex flex-row self-baseline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              variants={staggerContainer}
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
                  variants={fadeInUp}
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
                  variants={fadeInUp}
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
                  variants={fadeInUp}
                >
                  beginning.
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start justify-start w-full"
              variants={staggerContainer}
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
                  variants={fadeInUp}
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
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.96 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <img
              src="/TASE DEVS 1-min.png"
              alt="TASE workspace"
              className="sticky top-32 w-[400px] h-[650px] object-cover rounded-[2px] shadow mb-4 hidden sm:block"
              loading="eager"
            />
            <img
              src="/TASE DEVS OFFICE-min.png"
              alt="TASE project"
              className="sticky top-32 w-[400px] h-[650px] object-cover mt-20 rounded-[2px] shadow hidden sm:block"
              loading="eager"
            />
            {/* Mobile fallback: show images stacked and scrollable */}
            <div className="flex flex-col gap-10 w-full sm:hidden">
              <img
                src="/TASE DEVS 1-min.png"
                alt="TASE workspace"
                className="w-full h-auto object-cover rounded-[2px] shadow"
                loading="eager"
              />
              <img
                src="/TASE DEVS OFFICE-min.png"
                alt="TASE project"
                className="w-full h-auto object-cover rounded-[2px] shadow"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* 04 the rhythm (left-aligned with paragraph) */}
        <motion.div
          className="flex flex-col items-center justify-center w-full mb-8 mt-[120px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl px-4 w-full">
            {/* Custom single-line heading for rhythm */}
            <motion.div
              className="w-full mb-8 items-start text-left flex flex-row self-baseline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              variants={staggerContainer}
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
                  variants={fadeInUp}
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
                  variants={fadeInUp}
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
                  variants={fadeInUp}
                >
                  rhythm.
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start justify-start w-full"
              variants={staggerContainer}
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
                  variants={fadeInUp}
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
            viewport={{ once: false, amount: 0.7 }}
            variants={fadeInScale}
          >
            <img
              src="/TASE DEVS 2-min.png"
              alt="TASE office"
              className="hidden sm:block object-cover rounded-[2px] shadow w-full md:h-[220px] lg:sticky lg:top-32 lg:w-[900px] lg:h-[420px]"
            />
            {/* Mobile fallback */}
            <img
              src="/TASE DEVS 2-min.png"
              alt="TASE office"
              className="w-full h-auto object-cover shadow sm:hidden"
            />
          </motion.div>
        </div>

        {/* 05 the process (left-aligned with paragraph) */}
        <motion.div
          className="flex flex-col items-center justify-center w-full mb-8 lg:mt-[120px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl px-4 w-full">
            {/* Custom single-line heading for process */}
            <motion.div
              className="w-full mb-8 items-start text-left flex flex-row self-baseline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              variants={staggerContainer}
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
                  variants={fadeInUp}
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
                  variants={fadeInUp}
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
                  variants={fadeInUp}
                >
                  process.
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start justify-start w-full"
              variants={staggerContainer}
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
                  variants={fadeInUp}
                >
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Marquee/Carousel */}
        <div className="w-full mt-10 mb-20 flex flex-col gap-8">
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
