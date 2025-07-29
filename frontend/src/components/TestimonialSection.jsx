import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// ✅ Testimonials with 3-column assignment
const testimonials = [
  // Column 1
  {
    text: "TASE delivered user-focused designs that not only looked stunning but also significantly improved our product’s usability.",
    name: "Felix Andersson",
    role: "PixelTree, CTO",
    avatar: "/profiles/profile1-min.png",
    platform: "/upwork-min.png",
    column: 1,
  },
  {
    text: "I strongly recommend TASE to anyone looking for high-quality design services. They go beyond surface-level design to craft strategic outcomes.",
    name: "Emma Carlson",
    role: "BrightWave, CMO",
    avatar: "/profiles/Profile2-min.png",
    platform: "/fiverr-min.png",
    column: 1,
  },
  {
    text: "For the past few years, TASE has been our go-to design partner. Their creativity and adaptability are unmatched.",
    name: "Noah Bennett",
    role: "SparkHub, CEO",
    avatar: "/profiles/Profile3-min.png",
    platform: "/fiverr-min.png",
    column: 1,
  },

  // Column 2
  {
    text: "Working with TASE was smooth, professional, and truly rewarding. Their team took time to understand our vision and turned it into designs that exceeded expectations. They communicated clearly, listened carefully, and delivered high-quality results on time. Throughout the process, they remained responsive, creative, and efficient. We appreciated their attention to detail and thoughtful approach. TASE has become a trusted partner, and we look forward to future collaborations.",
    name: "Liam Chen",
    role: "OrbitSoft, Co-Founder",
    avatar: "/profiles/Profile4-min.png",
    platform: "/upwork-min.png",
    column: 2,
  },
  {
    text: "TASE went above and beyond our expectations. They shared smart ideas and executed everything with great care and precision. Their focus on user-friendly design helped our product do well on all platforms. The team was easy to work with—always on time, clear in communication, and full of useful suggestions. We really enjoyed the process and would definitely choose to work with TASE again in the future.",
    name: "Olivia Martinez",
    role: "COO, Vortex Systems",
    avatar: "/profiles/Profile5-min.png",
    platform: "/goodfirms-min.png",
    column: 2,
  },
  {
    text: "From start to finish, working with TASE was a fantastic experience. Their dedication, attention to detail, and creativity set them apart from every other agency we’ve worked with.",
    name: "Emma Carter",
    role: "Product Lead, LumaTech",
    avatar: "/profiles/Profile6-min.png",
    platform: "/upwork-min.png",
    column: 2,
  },

  // Column 3
  {
    text: "Their flexibility, creativity, and commitment to quality impressed us every step of the way.",
    name: "Isla Rodriguez",
    role: "FlowTech, Product Manager",
    avatar: "/profiles/Profile7-min.png",
    platform: "/goodfirms-min.png",
    column: 3,
  },
  {
    text: "They go beyond surface-level design, delivering thoughtful, strategic solutions that truly reflect our brand and business goals.",
    name: "Sofia Becker",
    role: "Zenith Labs, Founder",
    avatar: "/profiles/Profile8-min.png",
    platform: "/fiverr-min.png",
    column: 3,
  },
  {
    text: "We loved working with TASE. Their team is incredibly easy to communicate with and exceeded our expectations.",
    name: "Daniel Thompson",
    role: "CEO, CloudNova",
    avatar: "/profiles/Profile9-min.png",
    platform: "/upwork-min.png",
    column: 3,
  },
];

const starIcon = "/star-min.png";

// 3D Tilt Card Component
const tiltTransition = { type: "spring", stiffness: 300, damping: 20 };
function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [12, -12]);
  const rotateY = useTransform(x, [-60, 60], [-12, 12]);
  return (
    <motion.div
      style={{ rotateX, rotateY, z: 10 }}
      className="w-full" // Let the card content control its own size
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
      }}
    >
      {children}
    </motion.div>
  );
}

// ✅ Card Component
const TestimonialCard = ({ testimonial }) => (
  <TiltCard>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative bg-[#0D0D0D] border border-[#31313E] rounded-[25px] flex flex-col px-8 pt-8 pb-6 mb-10 "
      style={{ width: 380, minHeight: 300 }}
    >
      {/* Stars and platform logo */}
      <div className="relative mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={starIcon}
              alt="star"
              style={{ width: 24, height: 24 }}
            />
          ))}
        </div>
        {testimonial.platform && (
          <img
            src={testimonial.platform}
            alt="platform"
            className="absolute right-0 top-0"
            style={{ width: 32, height: 32 }}
          />
        )}
      </div>

      {/* Testimonial text */}
      <p className="text-[#CECED1] mb-6 text-[18px] leading-snug tracking-wide font-light">
        {testimonial.text}
      </p>

      {/* User info */}
      <div className="flex items-center gap-3 mt-auto">
        <div
          className="rounded-full bg-[#E4E5DE] flex items-center justify-center"
          style={{ width: 44, height: 44 }}
        >
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="rounded-full object-cover"
            style={{ width: 42, height: 42 }}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-semibold text-[18px]">
            {testimonial.name}
          </span>
          <span className="text-[#CECED1] text-[15px] mt-1">
            {testimonial.role}
          </span>
        </div>
      </div>
    </motion.div>
  </TiltCard>
);

// ✅ Section Component
const TestimonialSection = () => {
  const columns = [1, 2, 3];

  return (
    <section
      className="w-full flex flex-col items-center justify-center py-20 bg-[#181818] px-4 relative overflow-hidden"
      style={{
        background: "#181818",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 opacity-30 rounded-full blur-3xl z-0"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #B8BCC3 0%, #23232B 100%)",
        }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 opacity-30 rounded-full blur-3xl z-0"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, #DFE0E2 0%, #23232B 100%)",
        }}
      />
      <div className="mb-12 text-center">
        <h2 className="text-[40px] font-bold text-[#f5f5f5f5] leading-tight">
          Elevating ideas with bold teams
        </h2>
        <p className="text-[#bbb9b9] text-[20px] mt-2 mb-10">
          Supporting startups and established brands on their journey
        </p>
      </div>

      {/* ✅ 3-column flex layout */}
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-center gap-4">
        {columns.map((col) => (
          <div
            key={col}
            className={`flex flex-col items-center ${
              col === 2 ? "lg:mt-[-40px] " : "lg:mt-0"
            }`}
          >
            {testimonials
              .filter((t) => t.column === col)
              .map((t, i) => (
                <TestimonialCard testimonial={t} key={i} />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
