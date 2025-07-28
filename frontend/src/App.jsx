import { StrictMode, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";

import HeroSection from "./components/heroSection";
import { MarqueeDemo } from "./components/Marquee";
import RevealShowreel from "./components/RevealShowReel";
import Services from "./components/Services";
import OurTechStack from "./components/OurTechStack";
import AwardSection from "./components/AwardSection";
import ProjectSection from "./components/projects";
import TestimonialSection from "./components/TestimonialSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import WhatWeBuild from "./components/whatWeBulid";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import { motion, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";

function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeDemo />
      <RevealShowreel />
      <Services />
      <OurTechStack />
      <AwardSection />
      <ProjectSection />
      <TestimonialSection />
      <BookingSection />
      <Footer />
    </>
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#a259ff] to-[#5b6eff] z-[9999]"
      style={{ width: scrollYProgress }}
    />
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // Fix for scroll offset calculation error
  useEffect(() => {
    const fixScrollContainers = () => {
      // Find all elements that might be scroll targets
      const scrollTargets = document.querySelectorAll(
        "[ref], [data-ref], [data-scroll], [data-motion]"
      );
      scrollTargets.forEach((element) => {
        if (getComputedStyle(element).position === "static") {
          element.style.position = "relative";
        }
      });
    };

    // Run after a short delay to ensure DOM is ready
    const timer = setTimeout(fixScrollContainers, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.04, // Lower value for maximum smoothness
      syncTouch: true,
      gestureOrientation: "vertical",
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 0.5+0.5+0.5+1.0 = 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <div className="relative w-full min-h-screen">
            <CustomCursor />
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/what-we-build" element={<WhatWeBuild />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route
                path="*"
                element={
                  <div className="text-center text-2xl mt-20">
                    404 — Page Not Found
                  </div>
                }
              />
            </Routes>
          </div>
        </Router>
      )}
    </StrictMode>
  );
}

export default App;
