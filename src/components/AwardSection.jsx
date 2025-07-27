import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const CARD_GAP = 24;
const awards = [
  "https://framerusercontent.com/images/ncI0CCJWjTgEeGVUahldmU1QTo.png?scale-down-to=512",
  "https://framerusercontent.com/images/zeZoisbfX9o1oSJqow72w0q03s.png?scale-down-to=512",
  "https://framerusercontent.com/images/XHljUTQdNH40P1nBQpYepAdGns.png?scale-down-to=512",
  "https://framerusercontent.com/images/tXBPVSzWrbrQzz7YXLJXXpLFUM.png?scale-down-to=512",
  "https://framerusercontent.com/images/OebwNI0DvuFRR4R3WmsxhwCLaM.png?scale-down-to=512",
  "https://framerusercontent.com/images/GwTIrADeac4MvzZtYWcRBFC5io.png?scale-down-to=512",
];

function useAwardCardSize() {
  const [size, setSize] = useState({
    cardW: 140,
    cardH: 90,
    layout: "desktop",
  });
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w < 640) setSize({ cardW: 70, cardH: 40, layout: "mobile" });
      else if (w < 1024) setSize({ cardW: 100, cardH: 60, layout: "tablet" });
      else setSize({ cardW: 140, cardH: 90, layout: "desktop" });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

function AwardsColumn({
  images,
  direction = "up",
  duration = 60,
  cardW,
  cardH,
  // pause, // Remove pause prop
}) {
  const columnRef = useRef(null);
  const tweenRef = useRef(null);
  useEffect(() => {
    const el = columnRef.current;
    if (!el) return;
    gsap.set(el, { yPercent: 0 });
    tweenRef.current = gsap.to(el, {
      yPercent: direction === "up" ? -50 : 50,
      duration,
      ease: "none",
      repeat: -1,
      modifiers: { yPercent: gsap.utils.wrap(-100, 0) },
    });
    return () => tweenRef.current && tweenRef.current.kill();
  }, [direction, duration]);
  // Remove pause effect
  // useEffect(() => {
  //   if (tweenRef.current) {
  //     if (pause) tweenRef.current.pause();
  //     else tweenRef.current.resume();
  //   }
  // }, [pause]);
  const loopImages = Array(25).fill(images).flat();
  return (
    <div
      className="overflow-hidden group"
      style={{
        height: `${(cardH * 2 + CARD_GAP) * 2.5}px`,
        width: `${cardW * 2}px`,
        maskImage:
          "linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <ul
        ref={columnRef}
        className="flex flex-col gap-y-6 m-0 p-0 list-none"
        style={{ willChange: "transform" }}
      >
        {loopImages.map((src, i) => (
          <li key={i} style={{ width: cardW * 2, height: cardH * 2 }}>
            <div
              className="w-full h-full rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
              style={{
                // No background, no border
                background: "none",
                border: "none",
                boxShadow: "none",
              }}
            >
              <img
                src={src}
                alt={`award-${i}`}
                className="w-full h-full object-contain p-2"
                draggable={false}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AwardSection() {
  const leftImages = awards;
  const rightImages = awards;
  // Double the card size
  const { cardW, cardH, layout } = useAwardCardSize();
  // Remove pause state
  // const [pauseLeft, setPauseLeft] = useState(false);
  // const [pauseRight, setPauseRight] = useState(false);

  return (
    <section
      className="w-full flex flex-col items-center justify-center px-2 sm:px-4 py-12 sm:py-16 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #23232B 0%, #23232B 60%, #787A84 100%)",
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
      {/* Desktop Layout: Text on left, two columns of images on right */}
      {layout === "desktop" ? (
        <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between gap-16 relative z-10">
          {/* Text Block - Left Side */}
          <div className="flex-1 text-left">
            <h2
              className="font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{ color: "#DFE0E2" }}
            >
              We win awards. <br />
              <span className="inline-block relative">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(90deg, #B8BCC3 0%, #DFE0E2 100%)",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Let's win one for you too.
                </span>
                <span
                  className="block h-1 w-24 rounded-full mt-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #B8BCC3 0%, #DFE0E2 100%)",
                  }}
                />
              </span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-lg"
              style={{ color: "#B8BCC3" }}
            >
              Turn your vision into something everyone will notice.
            </p>
          </div>
          {/* Awards Columns - Right Side (Two columns) */}
          <div className="flex flex-row gap-10 justify-center items-center">
            <AwardsColumn
              images={rightImages}
              direction="down"
              duration={70}
              cardW={cardW}
              cardH={cardH}
            />
            <AwardsColumn
              images={leftImages}
              direction="up"
              duration={90}
              cardW={cardW}
              cardH={cardH}
            />
          </div>
        </div>
      ) : (
        /* Mobile/Tablet Layout: Centered text and images */
        <>
          {/* Text Block */}
          <div className="w-full flex flex-col items-center justify-center text-center mb-8 relative z-10">
            <h2
              className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl mb-4"
              style={{ color: "#DFE0E2" }}
            >
              We win awards. <br />
              <span className="inline-block relative">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(90deg, #B8BCC3 0%, #DFE0E2 100%)",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Let's win one for you too.
                </span>
                <span
                  className="block h-1 w-16 rounded-full mt-2 mx-auto"
                  style={{
                    background:
                      "linear-gradient(90deg, #B8BCC3 0%, #DFE0E2 100%)",
                  }}
                />
              </span>
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl max-w-xl"
              style={{ color: "#B8BCC3" }}
            >
              Turn your vision into something everyone will notice.
            </p>
          </div>
          {/* Awards Columns */}
          <div className="flex flex-row gap-6 sm:gap-10 md:gap-14 justify-center items-center w-full relative z-10">
            <AwardsColumn
              images={rightImages}
              direction="down"
              duration={60}
              cardW={cardW}
              cardH={cardH}
            />
            <AwardsColumn
              images={leftImages}
              direction="up"
              duration={70}
              cardW={cardW}
              cardH={cardH}
            />
          </div>
        </>
      )}
    </section>
  );
}
