import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(Draggable);

const TASE_LETTERS = ["T", "A", "S", "E"];

function DragText({ showTagline = true, splitRows = false }) {
  const letterRefs = useRef([]);
  const dragLabelRef = useRef(null);
  const [showDrag, setShowDrag] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Function to prevent page scrolling
  const preventScroll = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Function to block scroll when dragging starts
  const blockScroll = () => {
    setIsDragging(true);
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.body.style.userSelect = "none";
  };

  // Function to restore scroll when dragging ends
  const restoreScroll = () => {
    setIsDragging(false);
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    const moveDragLabel = (e) => {
      if (dragLabelRef.current) {
        dragLabelRef.current.style.left = `${e.clientX + 8}px`;
        dragLabelRef.current.style.top = `${e.clientY - 10}px`;
      }
    };

    window.addEventListener("pointermove", moveDragLabel);
    return () => {
      window.removeEventListener("pointermove", moveDragLabel);
    };
  }, []);

  useEffect(() => {
    let isDragging = false;
    let originalBodyStyle = "";

    // Function to prevent page scrolling
    const preventScroll = (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Function to block scrolling
    const blockScroll = () => {
      isDragging = true;
      originalBodyStyle = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.body.style.userSelect = "none";
    };

    // Function to restore scrolling
    const restoreScroll = () => {
      isDragging = false;
      document.body.style.overflow = originalBodyStyle;
      document.body.style.touchAction = "";
      document.body.style.userSelect = "";
    };

    letterRefs.current.forEach((ref, i) => {
      if (!ref) return;

      const proxy = document.createElement("div");
      document.body.appendChild(proxy);

      Draggable.create(proxy, {
        type: "x,y",
        inertia: true,
        onDragStart() {
          blockScroll();
        },
        onDrag() {
          gsap.to(ref, {
            x: this.x,
            y: this.y,
            duration: 0.2,
            ease: "power2.out",
          });

          // ✅ Move custom cursor along with dragged letter
          const customCursor = document.querySelector("[data-cursor]");
          if (customCursor) {
            customCursor.style.left = `${this.pointerX}px`;
            customCursor.style.top = `${this.pointerY}px`;
          }

          // ✅ Also move drag label with it (same logic)
          if (dragLabelRef.current) {
            dragLabelRef.current.style.left = `${this.pointerX + 8}px`;
            dragLabelRef.current.style.top = `${this.pointerY - 10}px`;
          }
        },
        onDragEnd() {
          restoreScroll();
        },
      });

      const dragInstance = Draggable.get(proxy);

      ref.addEventListener("pointerdown", (e) => {
        dragInstance.startDrag(e);
      });

      ref.addEventListener("pointerenter", () => setShowDrag(true));
      ref.addEventListener("pointerleave", () => setShowDrag(false));
    });

    // Add event listeners to prevent scrolling during drag
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("scroll", preventScroll, { passive: false });

    return () => {
      // Clean up event listeners
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("scroll", preventScroll);

      // Restore body styles
      restoreScroll();

      letterRefs.current.forEach((ref) => {
        if (ref) ref.replaceWith(ref.cloneNode(true));
      });
    };
  }, []);

  return (
    <>
      {/* Drag superscript label */}
      <div
        ref={dragLabelRef}
        className={`pointer-events-none fixed z-[9999] px-2 py-0.5 text-xs font-semibold uppercase bg-white text-black rounded-sm transition-opacity duration-200 ${
          showDrag ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: "0 0 4px rgba(0,0,0,0.1)",
          userSelect: "none",
          mixBlendMode: "difference",
        }}
      >
        drag
      </div>

      {/* Main Content */}
      <div
        className="relative z-20 flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ touchAction: "none" }}
      >
        {showTagline && (
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-black text-center w-full leading-tight">
            Where Ideas Meet Innovation
          </h2>
        )}

        {splitRows ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="relative inline-block group w-fit h-fit"
                >
                  <span
                    ref={(el) => (letterRefs.current[i] = el)}
                    className="inline-block text-[25vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] 2xl:text-[14vw] font-[Righteous] font-black leading-[0.8] select-none"
                    style={{ color: "#F3F3F3" }}
                  >
                    {TASE_LETTERS[i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-row">
              {[2, 3].map((i) => (
                <div
                  key={i}
                  className="relative inline-block group w-fit h-fit"
                >
                  <span
                    ref={(el) => (letterRefs.current[i] = el)}
                    className="inline-block text-[25vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] 2xl:text-[14vw] font-[Righteous] font-black leading-[0.8] select-none"
                    style={{ color: "#F3F3F3" }}
                  >
                    {TASE_LETTERS[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h1 className="text-[25vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] 2xl:text-[14vw] font-black leading-[0.8] text-white text-center tracking-tight select-none">
            {TASE_LETTERS.map((letter, i) => (
              <div key={i} className="relative inline-block group w-fit h-fit">
                <span
                  ref={(el) => (letterRefs.current[i] = el)}
                  className="inline-block text-[25vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] 2xl:text-[14vw] font-[Righteous] font-black leading-[0.8] select-none"
                  style={{ color: "#23232B" }}
                >
                  {letter}
                </span>
              </div>
            ))}
          </h1>
        )}
      </div>
    </>
  );
}

export default DragText;
