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
  const [isGrabbing, setIsGrabbing] = useState(false);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  // Add global CSS to override all cursor settings
  useEffect(() => {
    if (isTouch) return;

    // Create and inject global CSS to override all cursor settings
    const style = document.createElement("style");
    style.textContent = `
      * {
        cursor: none !important;
      }
      
      /* Ensure no element can override the cursor */
      *, *::before, *::after {
        cursor: none !important;
      }
      
      /* Override any framework or library cursor styles */
      button, a, [role="button"], [tabindex], input, textarea, select {
        cursor: none !important;
      }
      
      /* Override any hover states */
      *:hover {
        cursor: none !important;
      }
      
      /* Override any focus states */
      *:focus {
        cursor: none !important;
      }
      
      /* Override any active states */
      *:active {
        cursor: none !important;
      }
      
      /* Override any disabled states */
      *:disabled {
        cursor: none !important;
      }
      
      /* Override any visited states */
      a:visited {
        cursor: none !important;
      }
      
      /* Override any pseudo-elements */
      *::before, *::after {
        cursor: none !important;
      }
      
      /* Override any specific cursor classes */
      .cursor-pointer, .cursor-grab, .cursor-pointer, .cursor-text, .cursor-move {
        cursor: none !important;
      }
      
      /* Override any inline styles */
      [style*="cursor"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) return;

    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let rafId;

    const moveCursor = (e) => {
      if (e && typeof e.clientX === "number" && typeof e.clientY === "number") {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!rafId) rafId = requestAnimationFrame(updateCursor);
      }
    };

    const updateCursor = () => {
      if (cursor && typeof mouseX === "number" && typeof mouseY === "number") {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
      rafId = null;
    };

    const checkIfInteractive = (element) => {
      if (!element) return false;

      // Check if the element itself is interactive
      const tagName = element.tagName?.toLowerCase();
      const isInteractiveTag = [
        "button",
        "a",
        "input",
        "textarea",
        "select",
        "label",
        "option",
        "fieldset",
        "legend",
      ].includes(tagName);

      // Check for interactive attributes
      const hasInteractiveAttr =
        element.hasAttribute("role") ||
        element.hasAttribute("tabindex") ||
        element.hasAttribute("onclick") ||
        element.hasAttribute("href") ||
        element.hasAttribute("type") ||
        element.type === "submit" ||
        element.type === "button" ||
        element.type === "text" ||
        element.type === "email" ||
        element.type === "password" ||
        element.type === "number" ||
        element.type === "tel" ||
        element.type === "url" ||
        element.type === "search" ||
        element.type === "checkbox" ||
        element.type === "radio" ||
        element.type === "file";

      // Check for interactive classes
      const hasInteractiveClass =
        element.classList?.contains("nav-item") ||
        element.classList?.contains("cursor-hover") ||
        element.classList?.contains("menu") ||
        element.classList?.contains("dropdown") ||
        element.classList?.contains("modal") ||
        element.classList?.contains("clickable") ||
        element.classList?.contains("interactive") ||
        element.classList?.contains("form-control") ||
        element.classList?.contains("form-input") ||
        element.classList?.contains("form-field") ||
        element.classList?.contains("input-field") ||
        element.classList?.contains("form-element");

      // Check if element is clickable via closest
      const closestInteractive = element.closest(
        "button, a, .nav-item, .cursor-hover, [role='button'], [tabindex], .menu, .dropdown, .modal, input, textarea, select, label, .clickable, .interactive, form, .form-control, .form-input, .form-field, .input-field, .form-element, [type], [name]"
      );

      // Special check for form elements
      const isFormElement =
        element.closest("form") ||
        element.tagName?.toLowerCase() === "form" ||
        element.hasAttribute("name") ||
        (element.hasAttribute("id") && element.id.includes("form"));

      return (
        isInteractiveTag ||
        hasInteractiveAttr ||
        hasInteractiveClass ||
        closestInteractive ||
        isFormElement
      );
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (checkIfInteractive(target)) {
        setIsHovering(true);
        setIsHidden(false);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (checkIfInteractive(target)) {
        // Clear any existing timeout
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }

        // Immediate response for better UX
        setIsHovering(false);
        setIsHidden(false);
      }
    };

    const handleMouseDown = () => {
      setIsGrabbing(true);
    };

    const handleMouseUp = () => {
      setIsGrabbing(false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
        setIsHovering(false);
        setIsGrabbing(false);
      }
    };

    const handleShowCustomCursor = () => {
      setIsHidden(false);
      setIsHovering(false);
      setIsGrabbing(false);
    };

    // Reset cursor state when page becomes visible
    const handlePageShow = () => {
      setIsHidden(false);
      setIsHovering(false);
      setIsGrabbing(false);
    };

    // Reset cursor state on navigation
    const handlePopState = () => {
      setIsHidden(false);
      setIsHovering(false);
      setIsGrabbing(false);
    };

    // Force cursor to show when mouse moves
    const handleMouseMove = (e) => {
      if (e && typeof e.clientX === "number" && typeof e.clientY === "number") {
        moveCursor(e);
        // Always ensure cursor is visible when mouse moves
        if (isHidden) {
          setIsHidden(false);
        }
      }
    };

    // Handle clicks to reset cursor state
    const handleClick = () => {
      setIsGrabbing(false);
    };

    // Listen for menu state changes
    const handleMenuStateChange = () => {
      // Reset cursor when menu state changes
      setTimeout(() => {
        setIsHidden(false);
        setIsHovering(false);
        setIsGrabbing(false);
      }, 200);
    };

    // Force cursor to show after any interaction
    const forceShowCursor = () => {
      setIsHidden(false);
    };

    // Listen for various events that should show the cursor
    const handleInteraction = () => {
      forceShowCursor();
    };

    // Handle form submissions
    const handleSubmit = () => {
      setTimeout(() => {
        setIsHidden(false);
        setIsHovering(false);
        setIsGrabbing(false);
      }, 300);
    };

    // Handle focus events
    const handleFocus = () => {
      setIsHidden(false);
      setIsHovering(true);
    };

    // Handle blur events
    const handleBlur = () => {
      setIsHovering(false);
    };

    // Handle window focus/blur
    const handleWindowFocus = () => {
      setIsHidden(false);
      setIsHovering(false);
      setIsGrabbing(false);
    };

    const handleWindowBlur = () => {
      setIsHidden(true);
    };

    // Handle beforeunload event
    const handleBeforeUnload = () => {
      setIsHidden(false);
      setIsHovering(false);
      setIsGrabbing(false);
    };

    // Handle load event
    const handleLoad = () => {
      setIsHidden(false);
      setIsHovering(false);
      setIsGrabbing(false);
    };

    // Handle DOMContentLoaded event
    const handleDOMContentLoaded = () => {
      setIsHidden(false);
      setIsHovering(false);
      setIsGrabbing(false);
    };

    // Handle any animation or transition end
    const handleTransitionEnd = () => {
      setIsHidden(false);
    };

    // Handle any scroll events
    const handleScroll = () => {
      setIsHidden(false);
    };

    // Handle any resize events
    const handleResize = () => {
      setIsHidden(false);
      setIsHovering(false);
      setIsGrabbing(false);
    };

    // Handle any touch events (for non-touch devices)
    const handleTouchStart = () => {
      setIsHidden(false);
    };

    const handleTouchEnd = () => {
      setIsHidden(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("keydown", handleInteraction);
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("focus", handleFocus, true);
    document.addEventListener("blur", handleBlur, true);
    document.addEventListener("submit", handleSubmit, true);
    document.addEventListener("transitionend", handleTransitionEnd);
    document.addEventListener("animationend", handleTransitionEnd);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    window.addEventListener("showCustomCursor", handleShowCustomCursor);
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("resize", handleResize);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("load", handleLoad);
    window.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

    // Listen for custom menu events
    window.addEventListener("menuOpened", handleMenuStateChange);
    window.addEventListener("menuClosed", handleMenuStateChange);

    // Listen for form events
    window.addEventListener("formSubmitted", handleSubmit);
    window.addEventListener("formReset", handleInteraction);

    // Listen for navigation events
    window.addEventListener("navigationStart", handleInteraction);
    window.addEventListener("navigationEnd", handleInteraction);

    // Listen for any custom events that might affect cursor
    window.addEventListener("cursorReset", handleShowCustomCursor);
    window.addEventListener("cursorShow", handleShowCustomCursor);

    // Force cursor to show initially
    setTimeout(() => {
      setIsHidden(false);
    }, 100);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("keydown", handleInteraction);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("focus", handleFocus, true);
      document.removeEventListener("blur", handleBlur, true);
      document.removeEventListener("submit", handleSubmit, true);
      document.removeEventListener("transitionend", handleTransitionEnd);
      document.removeEventListener("animationend", handleTransitionEnd);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);

      window.removeEventListener("showCustomCursor", handleShowCustomCursor);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
      window.removeEventListener("menuOpened", handleMenuStateChange);
      window.removeEventListener("menuClosed", handleMenuStateChange);
      window.removeEventListener("formSubmitted", handleSubmit);
      window.removeEventListener("formReset", handleInteraction);
      window.removeEventListener("navigationStart", handleInteraction);
      window.removeEventListener("navigationEnd", handleInteraction);
      window.removeEventListener("cursorReset", handleShowCustomCursor);
      window.removeEventListener("cursorShow", handleShowCustomCursor);

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
        fixed z-[9999] pointer-events-none transition-transform duration-100 ease-out will-change-transform
        mix-blend-difference rounded-full
        ${isHidden ? "opacity-0 scale-50" : "opacity-100 w-3 h-3"}
        bg-[#F3F3F3]
      `}
      style={{
        transform: `translate(-50%, -50%) ${
          isHovering ? "scale(2)" : isGrabbing ? "scale(0.8)" : "scale(1)"
        }`,
        cursor: isHovering ? "grab" : "none",
      }}
    />
  );
};

export default CustomCursor;
