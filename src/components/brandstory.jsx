import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const BrandStory = () => {
  const ref = useRef(null);
  const text = `TASE was born out of an unshakable passion for design, innovation, and technology — a spark that quickly evolved into a full-service creative agency trusted by visionary brands around the world. What began as a bold idea has transformed into a powerhouse of digital creativity, where every pixel, every interaction, and every experience is crafted with purpose. From striking visual identities to immersive digital platforms, our work doesn't just look good — it moves people, drives results, and leaves a lasting mark. At TASE, every project begins with a bold vision and ends with measurable impact.`;

  // Responsive words per line and font size
  const [wordsPerLine, setWordsPerLine] = useState(10);
  const [fontSize, setFontSize] = useState("4rem");
  const [lineHeight, setLineHeight] = useState(1.05);
  const [marginBottom, setMarginBottom] = useState("mb-8");
  const [width, setWidth] = useState("w-[90vw]");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setWordsPerLine(4);
        setFontSize("0.9rem");
        setLineHeight(1.1);
        setMarginBottom("mb-4");
        setWidth("w-[98vw]");
      } else if (window.innerWidth < 1024) {
        setWordsPerLine(8);
        setFontSize("1.5rem");
        setLineHeight(1.1);
        setMarginBottom("mb-6");
        setWidth("w-[95vw]");
      } else {
        setWordsPerLine(10);
        setFontSize("4rem");
        setLineHeight(1.05);
        setMarginBottom("mb-8");
        setWidth("w-[90vw]");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const words = text.split(" ");
  const lines = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(" "));
  }

  // Use a persistent ref array
  const lineRefs = useRef([]);
  if (lineRefs.current.length !== lines.length) {
    lineRefs.current = Array(lines.length)
      .fill()
      .map((_, i) => lineRefs.current[i] || React.createRef());
  }

  const [centerIdx, setCenterIdx] = useState(0);

  useEffect(() => {
    function onScroll() {
      const viewportCenter = window.innerHeight / 2;
      let minDist = Infinity;
      let idx = 0;
      lineRefs.current.forEach((ref, i) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const lineCenter = rect.top + rect.height / 2;
          const dist = Math.abs(lineCenter - viewportCenter);
          if (dist < minDist) {
            minDist = dist;
            idx = i;
          }
        }
      });
      setCenterIdx(idx);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [lines.length]);

  return (
    <div className={`${width} mx-auto text-center relative`} ref={ref}>
      {/* Fade mask overlay */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(180deg, #DBDBDB 0%, #DBDBDBcc 8%, #DBDBDB00 20%, #DBDBDB00 80%, #DBDBDBcc 92%, #DBDBDB 100%)",
        }}
      />
      <div
        className={`font-extrabold text-[#181818] leading-tight flex flex-col items-center justify-center mb-2 relative z-20`}
        style={{
          fontSize,
          lineHeight,
          wordBreak: "break-word",
          fontFamily: "'Averta CY', 'Montserrat', sans-serif",
          textShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        {lines.map((line, i) => {
          const isCenter = i === centerIdx;
          let y = 0;
          if (i < centerIdx) y = -40 - 10 * (centerIdx - i);
          if (i > centerIdx) y = 40 + 10 * (i - centerIdx);
          return (
            <motion.div
              key={i}
              ref={lineRefs.current[i]}
              animate={isCenter ? { opacity: 1, y: 0 } : { opacity: 0.1, y }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className={`w-full ${marginBottom}`}
              style={{ minHeight: fontSize }}
            >
              {line.trim()}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandStory;
