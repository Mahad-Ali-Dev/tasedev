import { useEffect, useRef, useState } from "react";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let rafId;

    const moveCursor = (e) => {
      if (e && typeof e.clientX === 'number' && typeof e.clientY === 'number') {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!rafId) rafId = requestAnimationFrame(updateCursor);
      }
    };

    const updateCursor = () => {
      if (cursor && typeof mouseX === 'number' && typeof mouseY === 'number') {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
      rafId = null;
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target && typeof target.closest === 'function') {
        const isInteractive = target.closest(
          "button, a, .nav-item, .cursor-hover, [role='button'], [tabindex], .menu, .dropdown, .modal"
        );

        if (isInteractive) {
          setIsHovering(true);
          setIsHidden(true);
        }
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target && typeof target.closest === 'function') {
        const isInteractive = target.closest(
          "button, a, .nav-item, .cursor-hover, [role='button'], [tabindex], .menu, .dropdown, .modal"
        );

        if (isInteractive) {
          // Clear any existing timeout
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
          }

          // Add a small delay to ensure the cursor reappears
          hoverTimeoutRef.current = setTimeout(() => {
            setIsHovering(false);
            setIsHidden(false);
          }, 100);
        }
      }
    };

    const handleMouseDown = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
      }
    };

    const handleMouseUp = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
        setIsHovering(false);
      }
    };

    const handleShowCustomCursor = () => {
      setIsHidden(false);
      setIsHovering(false);
    };

    // Reset cursor state when page becomes visible
    const handlePageShow = () => {
      setIsHidden(false);
      setIsHovering(false);
    };

    // Reset cursor state on navigation
    const handlePopState = () => {
      setIsHidden(false);
      setIsHovering(false);
    };

    // Force cursor to show when mouse moves
    const handleMouseMove = (e) => {
      if (e && typeof e.clientX === 'number' && typeof e.clientY === 'number') {
        moveCursor(e);
        // Always ensure cursor is visible when mouse moves
        if (isHidden) {
          setIsHidden(false);
        }
      }
    };

    // Handle clicks to reset cursor state
    const handleClick = () => {
      // Reset cursor state after a short delay
      setTimeout(() => {
        setIsHidden(false);
        setIsHovering(false);
      }, 150);
    };

    // Listen for menu state changes
    const handleMenuStateChange = () => {
      // Reset cursor when menu state changes
      setTimeout(() => {
        setIsHidden(false);
        setIsHovering(false);
      }, 200);
    };

    // Force cursor to show after any interaction
    const forceShowCursor = () => {
      setTimeout(() => {
        setIsHidden(false);
        setIsHovering(false);
      }, 100);
    };

    // Listen for various events that should show the cursor
    const handleInteraction = () => {
      forceShowCursor();
    };

        document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("keydown", handleInteraction);
    document.addEventListener("scroll", handleInteraction);
    window.addEventListener("showCustomCursor", handleShowCustomCursor);
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("resize", handleInteraction);
    
    // Listen for custom menu events
    window.addEventListener("menuOpened", handleMenuStateChange);
    window.addEventListener("menuClosed", handleMenuStateChange);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("keydown", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("showCustomCursor", handleShowCustomCursor);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("resize", handleInteraction);
      window.removeEventListener("menuOpened", handleMenuStateChange);
      window.removeEventListener("menuClosed", handleMenuStateChange);
      if (rafId) cancelAnimationFrame(rafId);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      data-cursor
      className={`
        fixed z-[9999] pointer-events-none transition-all duration-150 ease-out 
        mix-blend-difference rounded-full
        ${isHidden ? "opacity-0 scale-50" : "opacity-100 w-3.5 h-3.5"}
        ${isHovering ? "scale-150" : ""}
        bg-[#F3F3F3]
      `}
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};

export default CustomCursor;
