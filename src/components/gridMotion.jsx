import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GRID_COLS = 3;
const GRID_ROWS = 2;
const CARD_WIDTH = 180;
const CARD_HEIGHT = 360;
const GRID_ROTATION = -15;

const defaultImages = [
  // Replace with your actual phone screenshots
  "https://framerusercontent.com/images/XB5jVhoGAfmfRcdnEsJHyOYzM.png",
  "https://framerusercontent.com/images/luQthZxBMFIeKBNbzLwATZGxI.png",
  "https://framerusercontent.com/images/rgr7gKKbhwJET2YPs4dAcPSYYE-min.png",
  "https://framerusercontent.com/images/zkuwCvpFVOGeP2STQUUmKf1lELE.png",
  "https://framerusercontent.com/images/afqtrxpmZXAhM9K7GlrzCWQfb2Y.png",
  "https://framerusercontent.com/images/iXTHeAbzhP2oaQQ4et8CEm1wM.png",
];

const GridMotion = ({ images = defaultImages }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { left, top, width, height } = grid.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      gsap.to(grid, {
        x: x * 40,
        y: y * 40,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    grid.addEventListener("mousemove", handleMouseMove);
    grid.addEventListener("mouseleave", () => {
      gsap.to(grid, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
    });

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove);
      grid.removeEventListener("mouseleave", () => {
        gsap.to(grid, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
      });
    };
  }, []);

  // Build grid
  const gridItems = [];
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      const idx = row * GRID_COLS + col;
      if (images[idx]) {
        gridItems.push(
          <div
            key={idx}
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              borderRadius: 24,
              overflow: "hidden",
              boxShadow:
                "0 4px 32px 0 rgba(0,0,0,0.18), 0 0 0 4px rgba(255,255,255,0.10)",
              background: "#181818",
              position: "relative",
            }}
          >
            <img
              src={images[idx]}
              alt={`screen-${idx}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 24,
                display: "block",
              }}
            />
          </div>
        );
      }
    }
  }

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: GRID_COLS * CARD_WIDTH + 48,
        height: GRID_ROWS * CARD_HEIGHT + 48,
        borderRadius: 32,
        background: "#121212",
        overflow: "hidden",
        boxShadow: "0 0 40px 10px #a259ff55",
        position: "relative",
      }}
    >
      {/* Gradient Border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          borderRadius: 32,
          background:
            "linear-gradient(225deg, #faf5ff 0%, #d096ff 4%, #8f42d4 22%, #414141 43.6%)",
          filter: "blur(0px)",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />
      {/* Grid */}
      <div
        ref={gridRef}
        className="relative z-10 grid"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          gap: 24,
          width: GRID_COLS * CARD_WIDTH + (GRID_COLS - 1) * 24,
          height: GRID_ROWS * CARD_HEIGHT + (GRID_ROWS - 1) * 24,
          transform: `rotate(${GRID_ROTATION}deg)`,
          margin: "auto",
        }}
      >
        {gridItems}
      </div>
    </div>
  );
};

export default GridMotion;
