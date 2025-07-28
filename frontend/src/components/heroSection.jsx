import DragText from "./DragText";
import Navbar from "./navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#f7f7ee] text-[#222] overflow-hidden">
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/bg_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Main Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
          {/* DragText Component */}
          <div className="w-full flex justify-center items-center mb-6 sm:mb-8 lg:mb-12">
            <DragText />
          </div>

          {/* Desktop Description */}
          <div className="hidden lg:flex mt-4 z-20 backdrop-blur-md bg-white/20 shadow-lg border border-white/20 rounded-3xl px-8 py-6 max-w-4xl text-xl lg:text-2xl font-bold text-[#222] text-left leading-relaxed">
            <div>
              We blend creativity, precision, and speed to craft digital
              experiences that captivate and convert.
              <br />
              From bold brands to seamless platforms — we turn your ideas into
              impact.
            </div>
          </div>

          {/* Tablet Description */}
          <div className="hidden md:flex lg:hidden mt-4 z-20 backdrop-blur-md bg-white/20 shadow-lg border border-white/20 rounded-2xl px-6 py-5 max-w-3xl text-lg font-bold text-[#222] text-left leading-relaxed">
            <div>
              We blend creativity, precision, and speed to craft digital
              experiences that captivate and convert.
              <br />
              From bold brands to seamless platforms — we turn your ideas into
              impact.
            </div>
          </div>

          {/* Mobile Description */}
          <div className="md:hidden w-full px-4 sm:px-6 py-4 sm:py-5 backdrop-blur-md bg-white/20 shadow-lg border border-white/20 rounded-2xl text-base sm:text-lg font-bold text-[#222] text-left leading-relaxed z-20">
            <div>
              We blend creativity, precision, and speed to craft digital
              experiences that captivate and convert.
              <br />
              From bold brands to seamless platforms — we turn your ideas into
              impact.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
