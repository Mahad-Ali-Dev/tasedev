import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  User,
  Mail,
  Building,
  MessageSquare,
  CheckCircle,
  XCircle,
  Sparkles,
} from "lucide-react";
import axios from "axios";
import { SERVICES } from "./constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const BookingSection = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
  const formRef = useRef(null);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  const validateCompany = (company) => {
    return company.trim().length >= 2;
  };

  const validateComment = (comment) => {
    return comment.trim().length >= 10;
  };

  const validateForm = () => {
    const newErrors = {};

    // Service validation
    if (!selectedService) {
      newErrors.service = "Please select a service";
    }

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!validateName(form.name)) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Company validation (optional)
    if (form.company.trim() && !validateCompany(form.company)) {
      newErrors.company = "Company name must be at least 2 characters long";
    }

    // Comment validation
    if (!form.comment.trim()) {
      newErrors.comment = "Message is required";
    } else if (!validateComment(form.comment)) {
      newErrors.comment = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if all fields are valid for button state
  const isFormValid = () => {
    return (
      selectedService &&
      form.name.trim() &&
      validateName(form.name) &&
      form.email.trim() &&
      validateEmail(form.email) &&
      form.comment.trim() &&
      validateComment(form.comment)
    );
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    if (errors.service) {
      setErrors({ ...errors, service: "" });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      selectedService,
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      comment: form.comment.trim(),
    };

    console.log("📤 Sending payload:", payload);

    try {
      const response = await axios.post(
        "https://tase-portfolio.onrender.com/api/v1/inquiry/submit",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 second timeout
        }
      );

      console.log("📨 Response received:", response.data);

      if (response.data.success) {
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("❌ Full error object:", error);

      if (error.response) {
        // Server responded with error status
        console.error("❌ Server Error Response:", error.response.data);
        console.error("❌ Status Code:", error.response.status);
        setSubmissionStatus("error");
      } else if (error.request) {
        // Request made but no response received
        console.error("❌ No Response from Server:", error.request);
        setSubmissionStatus("error");
      } else {
        // Something else caused the error
        console.error("❌ Request Setup Error:", error.message);
        setSubmissionStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedService("");
    setForm({ name: "", email: "", company: "", comment: "" });
    setErrors({});
    setSubmissionStatus(null);
  };

  const handleClose = () => {
    setFormOpen(false);
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

  // Success State Component
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center py-12"
    >
      {/* Animated Success Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        {/* Animated rings */}
        <div className="absolute inset-0 w-24 h-24 mx-auto border-4 border-green-300 rounded-full animate-ping opacity-30"></div>
        <div
          className="absolute inset-0 w-24 h-24 mx-auto border-2 border-green-200 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "0.5s" }}
        ></div>
        {/* Sparkles */}
        <div className="absolute -top-2 -right-2">
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Sparkles
            className="w-5 h-5 text-yellow-400 animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>

      {/* Success Text */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-bold text-[#23232B] mb-4"
      >
        🎉 Message Sent Successfully!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-gray-600 mb-8 text-lg leading-relaxed"
      >
        Thank you for reaching out! We're excited to work with you.
        <br />
        <span className="font-semibold text-[#23232B]">
          We'll get back to you within 24 hours.
        </span>
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={resetForm}
          className="bg-gradient-to-r from-[#23232B] to-[#23232B]/90 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-[#23232B]"
        >
          Send Another Message
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white text-[#23232B] px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-[#23232B]"
        >
          Back to Top
        </button>
      </motion.div>
    </motion.div>
  );

  // Error State Component
  const ErrorMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center py-12"
    >
      {/* Animated Error Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
          <XCircle className="w-12 h-12 text-white" />
        </div>
        {/* Animated rings */}
        <div className="absolute inset-0 w-24 h-24 mx-auto border-4 border-red-300 rounded-full animate-ping opacity-30"></div>
        <div
          className="absolute inset-0 w-24 h-24 mx-auto border-2 border-red-200 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Error Text */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-bold text-[#23232B] mb-4"
      >
        😔 Connection Issue
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-gray-600 mb-8 text-lg leading-relaxed"
      >
        We're having trouble connecting to our server right now.
        <br />
        <span className="font-semibold text-[#23232B]">
          Please try again or contact us directly via email.
        </span>
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={resetForm}
          className="bg-gradient-to-r from-[#23232B] to-[#23232B]/90 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-[#23232B]"
        >
          Try Again
        </button>
        <a
          href={`mailto:contact.tase.llc@gmail.com?subject=Project Inquiry from ${form.name}&body=Hi TASE Team,%0D%0A%0D%0AI'm interested in your services.%0D%0A%0D%0AName: ${form.name}%0D%0AEmail: ${form.email}%0D%0ACompany: ${form.company}%0D%0AService: ${selectedService}%0D%0A%0D%0AMessage:%0D%0A${form.comment}%0D%0A%0D%0AThanks!`}
          className="bg-white text-[#23232B] px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-[#23232B]"
        >
          Email Us Directly
        </a>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="booking-section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "#F3F3F3", position: "relative" }}
    >
      {/* Main Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left: Heading */}
        <div
          className="flex-1 flex flex-col items-center lg:items-start justify-center w-full lg:w-auto mb-12 lg:mb-0 mx-auto max-w-full lg:max-w-[500px]"
          style={{ position: "relative" }}
        >
          <div className="text-center lg:text-left">
            <h2
              className="text-[#23232B] font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight"
              style={{
                fontFamily: "'Averta CY', sans-serif",
                letterSpacing: -0.02,
                lineHeight: 0.9,
              }}
            >
              Why be shy
              <br />
              <span className="bg-gradient-to-r from-[#23232B] to-[#C2C2C2] bg-clip-text text-transparent">
                Say hi.
              </span>
            </h2>
            <p className="text-[#23232B]/70 text-lg sm:text-xl lg:text-2xl font-medium max-w-md lg:max-w-lg leading-relaxed">
              Ready to turn your ideas into reality? Let's start the
              conversation.
            </p>
          </div>
        </div>

        {/* Right: Card with Form */}
        <div
          className="flex-1 flex flex-col items-center justify-center w-full lg:w-auto max-w-[500px] lg:max-w-[600px]"
          style={{ position: "relative" }}
        >
          <div
            className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-8 sm:px-10 lg:px-12 flex flex-col items-start w-full shadow-2xl"
            style={{
              z: 10,
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Character GIF - Larger and better positioned */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 sm:-top-12 lg:-top-16 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#23232B]/20 to-[#C2C2C2]/20 rounded-full blur-xl scale-110"></div>
                <img
                  src="/calluser.gif"
                  alt="Book a call character"
                  className="relative w-32 sm:w-40 lg:w-48 xl:w-56 h-auto drop-shadow-2xl"
                  style={{ pointerEvents: "none" }}
                />
              </div>
            </div>

            {/* Form Content */}
            <div className="w-full flex flex-col">
              {submissionStatus === "success" ? (
                <SuccessMessage />
              ) : submissionStatus === "error" ? (
                <ErrorMessage />
              ) : (
                <>
                  {/* Header Section */}
                  <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#23232B] tracking-tight">
                      Let's get started
                    </h2>
                    <p className="text-[#23232B]/70 text-sm sm:text-base lg:text-lg font-medium max-w-sm sm:max-w-md mx-auto leading-relaxed">
                      We'll walk you through what's possible — and how we make
                      it real.
                    </p>
                  </div>

                  {/* Service Selection */}
                  <div className="mb-8 sm:mb-10">
                    <div className="text-[#23232B] font-semibold mb-4 sm:mb-5 text-center text-sm sm:text-base lg:text-lg">
                      What services are you interested in?
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                      {SERVICES.map((service, i) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceSelect(service)}
                          required
                          className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 ${
                            selectedService === service
                              ? "bg-[#23232B] text-white border-[#23232B] shadow-lg"
                              : "bg-white/90 text-[#23232B] border-[#C2C2C2] hover:bg-[#23232B] hover:text-white hover:border-[#23232B] hover:shadow-md"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                    {errors.service && (
                      <div className="flex items-center gap-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <p className="text-red-600 text-xs font-medium">
                          {errors.service}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Form Section */}
                  <div className="flex-1 flex flex-col">
                    <div className="text-[#23232B] font-semibold mb-4 sm:mb-5 text-center text-sm sm:text-base lg:text-lg">
                      More about you
                    </div>

                    <form
                      onSubmit={handleFormSubmit}
                      className="flex-1 flex flex-col gap-4 sm:gap-5"
                      noValidate
                    >
                      {/* Name and Email */}
                      <div className="flex flex-col gap-4 sm:gap-5">
                        <div className="relative group">
                          <User
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                              errors.name
                                ? "text-red-500"
                                : "text-[#23232B]/50 group-focus-within:text-[#23232B]"
                            }`}
                          />
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleFormChange}
                            placeholder="Your name"
                            className={`w-full border-2 rounded-xl pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 placeholder-[#23232B]/50 shadow-sm ${
                              errors.name
                                ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50"
                                : "border-[#C2C2C2]/50 focus:border-[#23232B] focus:ring-[#23232B]/20 bg-white/90 hover:border-[#23232B]/30"
                            } text-[#23232B]`}
                          />
                          {errors.name && (
                            <div className="flex items-center gap-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <p className="text-red-600 text-xs font-medium">
                                {errors.name}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="relative group">
                          <Mail
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                              errors.email
                                ? "text-red-500"
                                : "text-[#23232B]/50 group-focus-within:text-[#23232B]"
                            }`}
                          />
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleFormChange}
                            placeholder="Your email"
                            className={`w-full border-2 rounded-xl pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 placeholder-[#23232B]/50 shadow-sm ${
                              errors.email
                                ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50"
                                : "border-[#C2C2C2]/50 focus:border-[#23232B] focus:ring-[#23232B]/20 bg-white/90 hover:border-[#23232B]/30"
                            } text-[#23232B]`}
                          />
                          {errors.email && (
                            <div className="flex items-center gap-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <p className="text-red-600 text-xs font-medium">
                                {errors.email}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Company */}
                      <div className="relative group">
                        <Building
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            errors.company
                              ? "text-red-500"
                              : "text-[#23232B]/50 group-focus-within:text-[#23232B]"
                          }`}
                        />
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleFormChange}
                          placeholder="Your company name (optional)"
                          className={`w-full border-2 rounded-xl pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 placeholder-[#23232B]/50 shadow-sm ${
                            errors.company
                              ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50"
                              : "border-[#C2C2C2]/50 focus:border-[#23232B] focus:ring-[#23232B]/20 bg-white/90 hover:border-[#23232B]/30"
                          } text-[#23232B]`}
                        />
                        {errors.company && (
                          <div className="flex items-center gap-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <p className="text-red-600 text-xs font-medium">
                              {errors.company}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Project Description */}
                      <div className="flex-1 relative group">
                        <MessageSquare
                          className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                            errors.comment
                              ? "text-red-500"
                              : "text-[#23232B]/50 group-focus-within:text-[#23232B]"
                          }`}
                        />
                        <textarea
                          name="comment"
                          value={form.comment}
                          onChange={handleFormChange}
                          placeholder="Tell us about your project"
                          className={`w-full h-full border-2 rounded-xl pl-12 pr-4 py-4 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 placeholder-[#23232B]/50 resize-none shadow-sm min-h-[100px] sm:min-h-[120px] ${
                            errors.comment
                              ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50"
                              : "border-[#C2C2C2]/50 focus:border-[#23232B] focus:ring-[#23232B]/20 bg-white/90 hover:border-[#23232B]/30"
                          } text-[#23232B]`}
                        />
                        {errors.comment && (
                          <div className="flex items-center gap-2 mt-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <p className="text-red-600 text-xs font-medium">
                              {errors.comment}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`rounded-xl px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base shadow-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 mt-4 ${
                          isSubmitting
                            ? "bg-gray-400 text-gray-600 border-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-[#23232B] to-[#23232B]/90 text-white border-[#23232B] hover:shadow-xl hover:scale-105 focus:ring-[#23232B]/50 hover:from-[#23232B]/90 hover:to-[#23232B]"
                        }`}
                      >
                        <div className="flex items-center justify-center gap-3">
                          <Clock className="w-5 h-5" />
                          {isSubmitting ? "Sending..." : "Schedule a Call"}
                        </div>
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
