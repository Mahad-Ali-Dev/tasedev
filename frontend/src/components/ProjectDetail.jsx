import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "./projectData";
import BookingSection from "./BookingSection";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="text-center text-2xl mt-20">
        <div>Project not found</div>
        <div className="text-sm text-gray-500 mt-2">Slug: {slug}</div>
        <div className="text-sm text-gray-500">
          Available slugs: {projects.map((p) => p.slug).join(", ")}
        </div>
      </div>
    );
  }

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

  const buttonHover = {
    hover: {
      scale: 1.05,
      backgroundColor: "#EBEBEB",
      color: "#23232B",
      boxShadow: "0 0 0 4px #EBEBEB33, 0 8px 25px #23232B66",
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00e6c7] to-[#667eea] z-50 origin-left"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <section className="w-full bg-[#f7f7f7] py-12 px-2 sm:px-8 font-sans mt-16 sm:mt-20">
        {/* Hero Section */}
        <motion.div
          className="w-full flex flex-col items-center pt-12 pb-8 bg-[#f7f7f7]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl w-full px-4">
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#23232B] mb-2 text-left"
              variants={textReveal}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 30px rgba(35, 35, 43, 0.3)",
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#444] font-normal mb-6 sm:mb-8 text-left"
              variants={textReveal}
              whileHover={{
                scale: 1.02,
                color: "#23232B",
                transition: { duration: 0.3 },
              }}
            >
              {project.subtitle}
            </motion.p>
          </div>
          <motion.div className="w-full flex justify-center" variants={floatIn}>
            <motion.img
              src={project.heroImage}
              alt={project.title}
              className="rounded-2xl shadow-lg w-full max-w-2xl sm:max-w-3xl md:max-w-5xl object-contain cursor-pointer"
              variants={scaleIn}
              whileHover={imageHover.hover}
              onError={(e) => {
                console.error("Failed to load hero image:", project.heroImage);
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <div
              className="rounded-2xl shadow-lg w-full max-w-2xl sm:max-w-3xl md:max-w-5xl bg-gray-200 flex items-center justify-center text-gray-500"
              style={{ display: "none", minHeight: "300px" }}
            >
              Image failed to load: {project.heroImage}
            </div>
          </motion.div>
        </motion.div>

        {/* Subtitle Section */}
        <motion.div
          className="max-w-5xl mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#23232B] mb-2 text-left"
            variants={textReveal}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(35, 35, 43, 0.3)",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            {project.title}
          </motion.h2>
          <motion.div
            className="text-base sm:text-lg md:text-xl text-[#444] font-normal mb-6 sm:mb-8 text-left"
            variants={textReveal}
            whileHover={{
              scale: 1.02,
              color: "#23232B",
              transition: { duration: 0.3 },
            }}
          >
            {project.subtitle}
          </motion.div>
        </motion.div>

        {/* Details Card */}
        <motion.div
          className="flex justify-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="bg-[#f8f7f6] rounded-xl p-4 sm:p-6 max-w-xl w-full shadow-sm"
            variants={fadeInScale}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <motion.div className="flex mb-2" variants={textReveal}>
              <span className="w-32 text-xs font-light text-gray-500 tracking-wide">
                Year
              </span>
              <span className="text-base font-normal text-gray-800">
                {project.year}
              </span>
            </motion.div>
            <motion.div className="flex mb-2" variants={textReveal}>
              <span className="w-32 text-xs font-light text-gray-500 tracking-wide">
                Services
              </span>
              <span className="text-base font-normal text-gray-800">
                {project.services.join(", ")}
              </span>
            </motion.div>
            <motion.div className="flex mb-4" variants={textReveal}>
              <span className="w-32 text-xs font-light text-gray-500 tracking-wide">
                Introduction
              </span>
              <span className="text-base font-normal text-gray-800 flex flex-col gap-2">
                {project.introduction.map((text, i) => (
                  <span className="block" key={i}>
                    {text}
                  </span>
                ))}
              </span>
            </motion.div>
            <div className="flex gap-4 mt-2">
              <motion.a
                href={project.launchUrl}
                className="border border-gray-400 rounded-full px-6 py-2 font-semibold text-gray-700 bg-white transition-all duration-200"
                whileHover={buttonHover.hover}
              >
                Launch Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Gallery - visually attractive, max width, staggered, after Details Card */}
        <motion.div
          className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-end gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {project.gallery.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`${project.title} ${i + 1}`}
              className={`w-full md:w-[60%] h-[180px] sm:h-[220px] md:h-[260px] object-cover rounded-xl shadow cursor-pointer ${
                i === 0 ? "mt-0 mb-4 md:mb-8" : "mt-4 md:mt-8 mb-0"
              }`}
              variants={fadeInScale}
              whileHover={imageHover.hover}
            />
          ))}
        </motion.div>

        {/* Admin Panel Section */}
        <motion.div
          className="w-full flex flex-col items-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl w-full flex flex-col md:flex-row mb-6 md:mb-8"
            variants={floatIn}
          >
            <motion.div
              className="md:w-1/3 text-gray-500 text-sm sm:text-base font-light mb-2 md:mb-0 md:pr-8"
              variants={slideInLeft}
              whileHover={{
                scale: 1.02,
                color: "#23232B",
                transition: { duration: 0.3 },
              }}
            >
              {project.adminPanel.heading}
            </motion.div>
            <motion.div
              className="md:w-2/3 text-gray-700 text-sm sm:text-base font-normal leading-relaxed"
              variants={slideInRight}
              whileHover={{
                scale: 1.02,
                color: "#23232B",
                transition: { duration: 0.3 },
              }}
            >
              {project.adminPanel.description}
            </motion.div>
          </motion.div>
          <motion.div
            className="max-w-5xl w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center"
            variants={staggerContainer}
          >
            {project.adminPanel.images &&
              project.adminPanel.images.map((img, i) => (
                <motion.div
                  key={i}
                  className={`rounded-xl flex items-center justify-center p-4 md:p-6 w-full md:w-1/2`}
                  variants={fadeInScale}
                >
                  <motion.img
                    src={img}
                    alt={`Admin Panel ${i + 1}`}
                    className="max-h-48 sm:max-h-60 md:max-h-72 w-auto rounded-lg shadow-lg cursor-pointer"
                    variants={scaleIn}
                    whileHover={imageHover.hover}
                  />
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* Tracking System Section */}
        <motion.div
          className="w-full flex flex-col items-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl w-full flex flex-col sm:flex-row mb-8"
            variants={floatIn}
          >
            <motion.div
              className="sm:w-1/3 text-gray-500 text-base font-light mb-2 sm:mb-0 sm:pr-8"
              variants={slideInLeft}
              whileHover={{
                scale: 1.02,
                color: "#23232B",
                transition: { duration: 0.3 },
              }}
            >
              {project.trackingSystem.heading}
            </motion.div>
            <motion.div
              className="sm:w-2/3 text-gray-700 text-base font-normal leading-relaxed"
              variants={slideInRight}
              whileHover={{
                scale: 1.02,
                color: "#23232B",
                transition: { duration: 0.3 },
              }}
            >
              {project.trackingSystem.description}
            </motion.div>
          </motion.div>
          <motion.div
            className="max-w-5xl w-full flex flex-col sm:flex-row gap-8 justify-center"
            variants={staggerContainer}
          >
            {project.trackingSystem.images &&
              project.trackingSystem.images.map((img, i) => (
                <motion.div
                  key={i}
                  className={`rounded-xl flex items-center justify-center p-6 sm:w-1/2`}
                  variants={fadeInScale}
                >
                  <motion.img
                    src={img}
                    alt={`Tracking System ${i + 1}`}
                    className="max-h-72 w-auto rounded-lg shadow-lg cursor-pointer"
                    variants={scaleIn}
                    whileHover={imageHover.hover}
                  />
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* Final Showcase */}
        <motion.div
          className="w-full flex flex-col items-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-5xl w-full mb-6 md:mb-8"
            variants={floatIn}
          >
            <motion.h2
              className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#23232B] text-left"
              variants={textReveal}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 30px rgba(35, 35, 43, 0.3)",
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              And then it all
              <br />
              comes together
            </motion.h2>
          </motion.div>
          <img
            src={project.finalShowcase}
            alt="Project Feature"
            className="rounded-xl shadow-lg w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto object-contain mt-6 md:mt-8 mb-6 md:mb-8"
          />
        </motion.div>
      </section>
      <BookingSection />
      <Footer />
    </>
  );
}
