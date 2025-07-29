import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import DraggableVideo from "./DraggableVideo";
import DragText from "./DragText";
import BookingForm from "./BookingForm";

const NAV_LINKS = [
  { name: "Who We Are", href: "/who-we-are" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "What We Have Built", href: "/what-we-build" },
];
const SOCIALS = [
  { name: "Linkedin", href: "https://www.linkedin.com/company/tase-llc" },
  { name: "Instagram", href: "https://www.instagram.com/tasellc/" },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~015a829d8ac87ae855?mp_source=share",
  },
  { name: "Twitter", href: "https://x.com/TASELLC" },
  { name: "Facebook", href: "https://www.facebook.com/61578235896698/" },
  { name: "Fiverr", href: "https://www.fiverr.com/gakharabdul" },
  {
    name: "Email",
    href: "mailto:contact.tase.llc@gmail.com",
  },
];

const SERVICES = [
  "Web Design",
  "Web Development",
  "Web App",
  "3D",
  "Shopify",
  "Other",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    comment: "",
  });

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

  // Rectangle animation config
  const RECT_COUNT = 5;
  const rects = Array.from({ length: RECT_COUNT });
  const [menuPhase, setMenuPhase] = useState("closed"); // "closed", "animating-open", "open", "animating-close"
  const [rectsDone, setRectsDone] = useState(false);

  const rectVariants = {
    initial: { y: "100%" },
    animate: (i) => ({
      y: 0,
      transition: { delay: 0.08 * i, duration: 0.45, ease: "easeInOut" },
    }),
    exit: (i) => ({
      y: "100%",
      transition: {
        delay: 0.08 * (RECT_COUNT - 1 - i),
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  // Open menu handler
  const handleOpenMenu = () => {
    window.scrollTo(0, 0);
    setMenuPhase("animating-open");
    setMenuOpen(true);
    setRectsDone(false);
    // Dispatch custom event for cursor
    window.dispatchEvent(new CustomEvent("menuOpened"));
  };
  // Close menu handler
  const handleCloseMenu = () => {
    setMenuPhase("animating-close");
    setRectsDone(false);
    // Dispatch custom event for cursor
    window.dispatchEvent(new CustomEvent("menuClosed"));
  };

  // When rectangles finish rising, show menu content
  useEffect(() => {
    if (menuPhase === "animating-open") {
      const timeout = setTimeout(() => {
        setRectsDone(true);
        setMenuPhase("open");
      }, 0.08 * RECT_COUNT * 1000 + 500); // total animation time
      return () => clearTimeout(timeout);
    }
    if (menuPhase === "animating-close") {
      const timeout = setTimeout(() => {
        setMenuOpen(false);
        setMenuPhase("closed");
      }, 0.08 * RECT_COUNT * 1000 + 400);
      return () => clearTimeout(timeout);
    }
  }, [menuPhase]);

  // Block page scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-black font-sans shadow-none ">
      <div className="w-full flex justify-center px-2 sm:px-4 md:px-6">
        <div className="backdrop-blur-md bg-white/20 shadow-lg border border-white/20 rounded-full px-3 sm:px-6 md:px-8 py-1.5 sm:py-2 mt-3 sm:mt-6 flex items-center w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px]">
          <nav className="w-full flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img
                src="/blacklogo.png"
                alt="Logo"
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
            </a>
            {/* Desktop Right Side */}
            <div className="flex items-center gap-3 sm:gap-6 ml-auto">
              <button
                className="px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 bg-white/20 text-black shadow-lg backdrop-blur-md hover:bg-[#3A3A3A] hover:text-white hover:shadow-xl hover:scale-105"
                style={{ fontWeight: 600, backdropFilter: "blur(8px)" }}
                onClick={() => setFormOpen(true)}
              >
                Let's work
              </button>
              <button
                className="flex items-center gap-1 sm:gap-2 text-[#23232b] text-base sm:text-lg md:text-xl font-medium focus:outline-none group relative transition-transform duration-150 active:scale-95 hover:scale-105"
                onClick={handleOpenMenu}
                aria-label="Open menu"
                type="button"
              >
                <span>Menu</span>
                <span className="relative flex items-center justify-center ml-1 sm:ml-2">
                  <span className="block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#23232b] transition-all duration-200 group-hover:w-6 group-hover:h-6 sm:group-hover:w-9 sm:group-hover:h-9 group-hover:bg-[#23232b] group-hover:shadow-lg group-active:w-6 group-active:h-6 sm:group-active:w-9 sm:group-active:h-9 group-active:bg-[#23232b] group-active:shadow-lg"></span>

                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-150">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-6 sm:h-6"
                    >
                      <rect
                        x="5"
                        y="8"
                        width="14"
                        height="2"
                        rx="1"
                        fill="white"
                      />
                      <rect
                        x="5"
                        y="14"
                        width="14"
                        height="2"
                        rx="1"
                        fill="white"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-overlay"
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: "transparent",
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {/* Animated Rectangles */}
            <div className="absolute inset-0 flex flex-row w-full h-full z-10">
              {rects.map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="initial"
                  animate={
                    menuPhase === "animating-open" || menuPhase === "open"
                      ? "animate"
                      : "initial"
                  }
                  exit={menuPhase === "animating-close" ? "exit" : false}
                  variants={rectVariants}
                  style={{
                    flex: 1,
                    background: "#000",
                    margin: 0,
                    borderRadius: 0,
                    zIndex: 10,
                  }}
                />
              ))}
            </div>
            {/* Menu Content: only show after rectangles have risen */}
            {rectsDone && menuPhase === "open" && (
              <motion.div
                className="absolute left-0 top-0 w-full h-full flex animate-fadeIn z-20"
                style={{ width: "100vw", height: "100vh" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
                exit={{ opacity: 0 }}
              >
                {/* Menu Items and Social Links side by side */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start mt-10 pl-4 md:pl-12 lg:pl-24 gap-6 md:gap-8 w-full">
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 w-full">
                    <div className="flex flex-col gap-4">
                      {NAV_LINKS.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="animated-nav-link group relative font-light text-white text-2xl sm:text-4xl md:text-4xl lg:text-5xl mb-2 transition-transform duration-150 hover:scale-105 active:scale-95"
                          onClick={handleCloseMenu}
                        >
                          {link.name}
                          <span className="underline-animation absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full group-active:w-full transition-all duration-300"></span>
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-col gap-4 md:ml-8">
                      {SOCIALS.map((s) => (
                        <a
                          key={s.name}
                          href={s.href}
                          className="animated-nav-link group relative text-base sm:text-lg md:text-xl text-white transition-transform duration-150 hover:scale-105 active:scale-95"
                          onClick={handleCloseMenu}
                        >
                          {s.name}
                          <span className="underline-animation absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full group-active:w-full transition-all duration-300"></span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="mt-12">
                    <DraggableVideo />
                  </div>
                </div>
                {/* Right side empty for spacing */}
                <div className="hidden md:flex-1" />
                {/* Top right: Close and Let's work button side by side */}
                <div className="absolute top-6 right-4 sm:right-8 md:right-12 flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      className={`px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-3.5 rounded-full font-semibold text-base sm:text-lg md:text-xl transition active:scale-95 shadow-[0_2px_16px_0_#23232b22] bg-[#1A1A1A] text-white hover:bg-[#F3F3F3] hover:text-black border-0`}
                      style={{ backdropFilter: "blur(8px)" }}
                      onClick={() => {
                        setFormOpen(true);
                        handleCloseMenu();
                      }}
                    >
                      Let's work
                    </button>
                    <button
                      className="rounded-full p-2 transition ml-2 bg-[#1A1A1A] text-white hover:bg-[#F3F3F3] hover:text-black"
                      onClick={handleCloseMenu}
                      aria-label="Close menu"
                    >
                      <X size={32} />
                    </button>
                  </div>
                  <div className="mt-20 w-full flex justify-end aling-end">
                    <DragText showTagline={false} splitRows={true} />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <BookingForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        form={form}
        setForm={setForm}
      />
    </header>
  );
};

export default Navbar;
