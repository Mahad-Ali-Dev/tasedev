import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  User,
  Mail,
  Building,
  MessageSquare,
} from "lucide-react";
import axios from "axios";
import { SERVICES } from "./constants";

export default function BookingForm({
  open,
  onClose,
  onSubmit,
  selectedService,
  setSelectedService,
  form,
  setForm,
}) {
  const formRef = useRef(null);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   // Basic validation
  //   if (!selectedService || !form.name || !form.email) {
  //     alert("Please fill in all required fields");
  //     return;
  //   }

  //   // Email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(form.email)) {
  //     alert("Please enter a valid email address");
  //     return;
  //   }

  //   onSubmit({ ...form, service: selectedService });
  //   setForm({ name: "", email: "", company: "", comment: "" });
  //   setSelectedService("");
  // };

  const handleFormSubmit = async (e) => {
  // e.preventDefault();

  if (!selectedService) {
    alert("❌ Please select a service");
    return;
  }

  if (!form.name || !form.email || !form.comment) {
    alert("❌ Please fill in all required fields");
    return;
  }

  const payload = {
    selectedService,
    name: form.name,
    email: form.email,
    company: form.company,
    comment: form.comment,
  };

  console.log("📤 Sending payload:", payload);

  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/inquiry/submit",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000 // 10 second timeout
      }
    );

    console.log("📨 Response received:", response.data);

    if (response.data.success) {
      alert("✅ Your inquiry has been submitted successfully!");
      setFormOpen(false);
      setForm({ name: "", email: "", company: "", comment: "" });
      setSelectedService("");
    } else {
      alert("❌ Submission failed: " + response.data.message);
    }
  } catch (error) {
    console.error("❌ Full error object:", error);
    
    if (error.response) {
      // Server responded with error status
      console.error("❌ Server Error Response:", error.response.data);
      console.error("❌ Status Code:", error.response.status);
      alert(`❌ Server Error (${error.response.status}): ${error.response.data.message || 'Unknown error'}`);
    } else if (error.request) {
      // Request made but no response received
      console.error("❌ No Response from Server:", error.request);
      alert("❌ Cannot connect to server. Please check if the server is running.");
    } else {
      // Something else caused the error
      console.error("❌ Request Setup Error:", error.message);
      alert("❌ Error setting up request: " + error.message);
    }
  }
};

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Handle scroll events on the form
  const handleScroll = (e) => {
    const container = formRef.current;
    if (container) {
      // Use deltaY for modern browsers, fallback to wheelDelta for older browsers
      const scrollAmount = e.deltaY || e.detail || e.wheelDelta || 0;
      container.scrollTop += scrollAmount;
    }
  };

  // Handle touch scroll
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const container = formRef.current;
    if (container) {
      container.touchStartY = touch.clientY;
    }
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const container = formRef.current;
    if (container && container.touchStartY !== undefined && touch) {
      const deltaY = container.touchStartY - touch.clientY;
      container.scrollTop += deltaY;
      container.touchStartY = touch.clientY;
    }
  };

  // Block page scroll when form is open
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={handleBackdropClick}
        >
          <motion.div
            id="lets-work-modal"
            className="bg-gradient-to-br from-[#DFE0E2] to-[#B8BCC3] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#787A84]/20 relative flex flex-col overflow-hidden"
            style={{
              fontFamily: "'Averta CY', sans-serif",
              width: "95vw",
              height: "90vh",
              minWidth: "320px",
              maxWidth: "650px",
              minHeight: "600px",
              maxHeight: "850px",
            }}
            initial={{ opacity: 0, scale: 0.85, y: 120 }}
            animate={{
              opacity: 1,
              scale: 1.02,
              y: -8,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 120,
              transition: { duration: 0.35, ease: "easeIn" },
            }}
          >
            {/* Decorative Header */}
            <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-[#787A84] via-[#B8BCC3] to-[#DFE0E2]"></div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[#787A84] bg-white/80 hover:bg-[#787A84] hover:text-white focus:bg-[#787A84] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#787A84]/50 text-lg sm:text-xl transition-all duration-300 rounded-full p-2 sm:p-2.5 shadow-lg border border-[#787A84]/20 z-10 backdrop-blur-sm"
              aria-label="Close form"
              tabIndex={0}
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Content Container */}
            <div
              ref={formRef}
              className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto cursor-auto"
              onWheel={handleScroll}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Header Section */}
              <motion.div
                className="text-center mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.1,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 40,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#787A84] to-[#B8BCC3] rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-[#787A84] tracking-tight">
                  Let's get started
                </h2>
                <p className="text-[#787A84]/80 text-sm sm:text-base md:text-lg font-medium max-w-sm sm:max-w-md mx-auto leading-relaxed px-2">
                  We'll walk you through what's possible — and how we make it
                  real.
                </p>
              </motion.div>

              {/* Service Selection */}
              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.2,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 40,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
              >
                <div className="text-[#787A84] font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">
                  What services are you interested in?
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-2">
                  {SERVICES.map((service, i) => (
                    <motion.button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      required
                      className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                        selectedService === service
                          ? "bg-gradient-to-r from-[#787A84] to-[#B8BCC3] text-white border-[#787A84] shadow-lg transform scale-105"
                          : "bg-white/70 text-[#787A84] border-[#B8BCC3] hover:bg-[#B8BCC3] hover:text-white hover:border-[#787A84] hover:shadow-md"
                      }`}
                      style={{ minWidth: "80px", maxWidth: "120px" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Form Section */}
              <motion.div
                className="flex-1 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 40,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
              >
                <div className="text-[#787A84] font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">
                  More about you
                </div>

                <form
                  onSubmit={handleFormSubmit}
                  className="flex-1 flex flex-col gap-3 sm:gap-4"
                >
                  {/* Name and Email */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="relative">
                      <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#787A84]/60" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleFormChange}
                        placeholder="Your name"
                        required
                        className="w-full border-2 border-[#B8BCC3] rounded-lg sm:rounded-xl pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#787A84]/30 focus:border-[#787A84] text-[#787A84] bg-white/80 shadow-sm transition-all duration-300 placeholder-[#787A84]/50"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#787A84]/60" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleFormChange}
                        placeholder="Your email"
                        required
                        className="w-full border-2 border-[#B8BCC3] rounded-lg sm:rounded-xl pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#787A84]/30 focus:border-[#787A84] text-[#787A84] bg-white/80 shadow-sm transition-all duration-300 placeholder-[#787A84]/50"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <Building className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#787A84]/60" />
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleFormChange}
                      placeholder="Your company (optional)"
                      className="w-full border-2 border-[#B8BCC3] rounded-lg sm:rounded-xl pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#787A84]/30 focus:border-[#787A84] text-[#787A84] bg-white/80 shadow-sm transition-all duration-300 placeholder-[#787A84]/50"
                    />
                  </div>

                  {/* Project Description */}
                  <div className="flex-1 relative">
                    <MessageSquare className="absolute left-3 sm:left-4 top-3 sm:top-4 w-4 h-4 sm:w-5 sm:h-5 text-[#787A84]/60" />
                    <textarea
                      name="comment"
                      value={form.comment}
                      onChange={handleFormChange}
                      placeholder="Tell us about your project (optional)"
                      className="w-full h-full border-2 border-[#B8BCC3] rounded-lg sm:rounded-xl pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#787A84]/30 focus:border-[#787A84] resize-none text-[#787A84] bg-white/80 shadow-sm transition-all duration-300 placeholder-[#787A84]/50 min-h-[100px] sm:min-h-[120px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-[#787A84] to-[#B8BCC3] text-white rounded-lg sm:rounded-xl px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base shadow-lg border-2 border-[#787A84] transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#787A84]/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      Schedule a Call
                    </div>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
