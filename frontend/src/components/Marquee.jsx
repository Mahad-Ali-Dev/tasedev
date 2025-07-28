// direction: 'left' (default) or 'right'
import React, { useRef, useEffect, useState, Children } from "react";

function Marquee({ direction = "left", speed = 20, children, className = "" }) {
  // For the upper line (direction left), repeat all logos 10 times and set speed to 60s
  let content = children;
  let duration = speed;
  if (direction === "left" || direction === "right") {
    const childArray = Children.toArray(children);
    const repeated = [];
    for (let i = 0; i < 10; i++) {
      repeated.push(
        ...childArray.map((child, idx) =>
          React.cloneElement(child, { key: `marquee-${direction}-${i}-${idx}` })
        )
      );
    }
    content = repeated;
    duration = 40;
  }
  const anim = direction === "left" ? "marquee-left" : "marquee-right";
  return (
    <div
      aria-label="Our partners"
      className={`overflow-hidden w-full ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className={`flex whitespace-nowrap animate-${anim}`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {content}
        {/* Duplicate for seamless loop */}
        {content}
      </div>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Marquee;

// Demo usage with logos
export function MarqueeDemo() {
  return (
    <div className="w-full flex flex-col gap-12 items-center h-[7vh] sm:h-[8vh] md:h-[10vh] ">
      <div className="w-full flex items-center py-4 ">
        <Marquee direction="left" speed={10}>
          <img
            src="/Amazon_logo.svg"
            alt="Amazon"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Dukin_logo.svg"
            alt="Dukin"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Chase_logo.svg"
            alt="Chase"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Delta_logo.svg"
            alt="Delta"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Prestigio_logo.svg"
            alt="Prestigio"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Nike_logo.svg"
            alt="Nike"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Amazon_logo.svg"
            alt="Amazon"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/vodafone_logo.svg"
            alt="Vodafone"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Steelseries_logo.svg"
            alt="Steelseries"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/UEFA-Logo.svg"
            alt="UEFA"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
        </Marquee>
      </div>
      <div className="w-full flex items-center py-4">
        <Marquee direction="right" speed={20}>
          <img
            src="/Walmart_logo.svg"
            alt="Walmart"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Eurocontrol-Logo.svg"
            alt="Eurocontrol"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Channel_logo.svg"
            alt="Channel"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/ups_logo.svg"
            alt="Ups"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/awwwards-website-logo.svg"
            alt="Awards"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/cssmatic.svg"
            alt="CSSMATIC"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/singsafe_logo.svg"
            alt="Ups"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/udemy_logo.svg"
            alt="Udemy"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/pixabay.svg"
            alt="pixabay"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
          <img
            src="/Linkedin-logo.svg"
            alt="LinkedIn"
            className="h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
          />
        </Marquee>
      </div>
    </div>
  );
}
