import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import projects from "./projectData";
import { Link } from "react-router-dom";

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

  // For the homepage, only show the first 4 projects
  const homepageProjects = projects.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f6f6f6] py-10 sm:py-16 md:py-24 px-2 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Horizontal Divider */}
      <div className="w-1/2 md:w-1/3 mx-auto border-t border-[#ddd] mb-8" />

      {/* Section Heading */}
      <div className="relative z-10 max-w-2xl mx-auto mb-10 sm:mb-16 text-center">
        <motion.h2
          className="text-base sm:text-lg md:text-2xl font-bold text-[#222] mb-2 sm:mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Ideas turned real, designs turned results
        </motion.h2>
        <motion.p
          className="text-xs sm:text-sm md:text-base text-[#888]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          See what happens when vision meets execution
        </motion.p>
      </div>

      {/* Projects */}
      <div className="relative z-10 flex flex-col gap-8 md:gap-16 max-w-5xl mx-auto">
        {homepageProjects.map((project, i) => {
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
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center ${
                isLeft ? "md:flex-row-reverse" : ""
              } gap-4 sm:gap-8 md:gap-16 relative`}
            >
              {/* Image with 3D tilt and floating */}
              <motion.div
                className="w-full max-w-xs sm:max-w-md md:max-w-none md:w-2/3"
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
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                animate={{
                  y: [0, -12, 0],
                  transition: floatTransition,
                }}
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="rounded-xl shadow-lg w-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                  draggable={false}
                />
              </motion.div>

              {/* Info Block with parallax */}
              <motion.div
                className={`w-full md:w-1/3 flex flex-col items-center md:items-${
                  isLeft ? "end" : "start"
                } text-center md:text-${isLeft ? "right" : "left"}`}
                style={{ y: infoParallax }}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.12,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div>
                  <div className="text-[10px] sm:text-xs text-[#888] font-semibold tracking-widest uppercase mb-2">
                    {project.label}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-[#222]">
                    {project.title}
                  </div>
                  <div className="text-xs sm:text-xs md:text-sm text-[#222] mb-4">
                    {project.subtitle}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Explore More Button */}
      <motion.div
        className="relative z-10 flex justify-center mt-10 md:mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.button
          onClick={() => (window.location.href = "/what-we-build")}
          className="block mx-auto bg-[#222] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold shadow hover:bg-[#111] hover:text-white transition relative overflow-hidden"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 0 4px #1112, 0 2px 16px #1114",
            backgroundColor: "#111",
            color: "#fff",
          }}
        >
          Explore more projects
          <span
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              boxShadow: "0 0 24px 8px #1112",
              opacity: 0.15,
            }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
