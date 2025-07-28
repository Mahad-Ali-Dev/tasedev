import React, { useState } from "react";
import { motion } from "framer-motion";
import BookingForm from "./BookingForm";
import { useMotionValue, useTransform, useSpring } from "framer-motion";
import { BANNER_TEXT } from "./constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const BookingSection = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    comment: "",
  });

  // 3D Tilt Motion Values for the card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleFormSubmit = (formData) => {
    // Handle form submission - you can add API call here
    console.log("Form submitted:", formData);
    setFormOpen(false);
    setForm({ name: "", email: "", company: "", comment: "" });
    setSelectedService("");
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#ffffff] overflow-hidden py-10 md:py-20" style={{ position: 'relative' }}>
      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-5xl mx-auto px-2 md:px-0">
        {/* Left: Heading */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center w-full md:w-auto mb-8 md:mb-0 mx-auto max-w-full md:max-w-[420px]"
          style={{ position: 'relative' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInUp}
        >
          <motion.h2
            className="hidden md:block text-[#222] font-bold text-[36px] xs:text-4xl md:text-5xl mb-2 sm:mt-12 text-center"
            style={{
              fontFamily: "'Averta CY', sans-serif",
              letterSpacing: 1.08,
              lineHeight: 1.1,
            }}
            variants={fadeInUp}
          >
            Why be shy
            <br />
            Say hi.
          </motion.h2>
        </motion.div>
        
        {/* Right: Card with GIF */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center min-w-[90vw] sm:min-w-[340px] md:min-w-[500px] h-auto md:h-[650px] max-w-[700px] w-full"
          style={{ position: 'relative' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={fadeInUp}
        >
          <motion.div
            className="relative bg-black rounded-[32px] pt-8 pb-8 px-4 xs:px-6 md:px-8 flex flex-col items-start w-full max-w-[95vw] sm:max-w-[420px] sm:mb-10 md:w-[33vw] md:min-h-[420px] shadow-xl card-pop"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.7 }}
            variants={fadeInUp}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{ rotateX: springX, rotateY: springY, z: 10 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              x.set(e.clientX - rect.left - rect.width / 2);
              y.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
          >
            {/* Character GIF absolutely attached to card top center */}
            <motion.img
              src="/calluser.gif"
              alt="Book a call character"
              className="absolute left-0 -top-[40px] sm:-top-[60px] md:-top-[80px] lg:-top-[100px] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto z-20"
              style={{ pointerEvents: "none", position: 'absolute' }}
              animate={{ y: [0, -18, 0, 18, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              variants={fadeInUp}
            />
            <p
              className="text-white text-base xs:text-lg md:text-xl mb-8"
              style={{ fontFamily: "'Averta CY', sans-serif" }}
            >
              <span className="mb-4 font-bold block">
                One meeting. All clarity.
              </span>
              We'll walk you through what's
              <br /> possible — and how we make it real.
              <br />
            </p>

            <button
              className="mt-auto text-white text-lg md:text-xl font-medium flex items-center gap-2 pb-1 px-4 sm:px-6 py-1.5 sm:py-2 bg-black rounded-full shadow-lg transition-all duration-200 group"
              style={{
                fontWeight: 600,
                fontFamily: "'Averta CY', sans-serif",
              }}
              onClick={() => setFormOpen(true)}
            >
              <span className="flex items-center transition-all duration-200 origin-left group-hover:scale-x-125">
                <span>BOOK MEETING</span>
                <span className="text-2xl md:text-3xl ml-2">→</span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Marquee Animations */}
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
          animation: marquee-left 18s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 18s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee-left, .animate-marquee-right {
            animation-duration: 10s;
          }
        }
      `}</style>
      
      {/* Top Diagonal Banner (Marquee) */}
      <div
        className="absolute mt-[130px] left-[-10vw] top-0 w-[120vw] h-14 sm:h-16 flex items-center z-10"
        style={{
          transform: "rotate(-3deg)",
          transformOrigin: "top left",
          background: "#212121",
        }}
      >
        <div className="w-full h-full flex items-center overflow-hidden">
          <div className="whitespace-nowrap text-white text-lg sm:text-xl font-bold font-sans tracking-wider uppercase animate-marquee-left flex items-center justify-center w-full">
            {BANNER_TEXT}
          </div>
        </div>
      </div>
      
      {/* Bottom Diagonal Banner (Marquee) */}
      <div
        className="absolute left-[-10vw] bottom-0 w-[120vw] h-14 sm:h-16 flex items-center"
        style={{
          transform: "rotate(-3deg)",
          transformOrigin: "top left",
          background: "#212121",
          zIndex: 20,
        }}
      >
        <div className="w-full h-full flex items-center overflow-hidden">
          <div className="whitespace-nowrap text-white text-lg sm:text-xl font-bold font-sans tracking-wider uppercase animate-marquee-right flex items-center justify-center w-full">
            {BANNER_TEXT}
          </div>
        </div>
      </div>
      
      <BookingForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        form={form}
        setForm={setForm}
      />
    </section>
  );
};

export default BookingSection;
