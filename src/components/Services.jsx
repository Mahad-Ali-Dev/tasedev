import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: ``,
    title: (
      <>
        WHAT <span className="ml-2">WE DO</span>
      </>
    ),
    description: "",
    features: [],
    video: "/what_we_do.mp4",
  },
  {
    icon: "/Mobile_logo-min.png",
    title: (
      <>
        MOBILE{" "}
        <span className="ml-4 bg-gradient-to-r from-[#FFFFFF] to-[#BEB8B8] bg-clip-text text-transparent">
          APPS
        </span>
      </>
    ),
    description:
      "We turn simple app ideas into engaging, user-centered mobile designs with seamless, tap-first experiences.",
    features: [
      ["iOS App Design", "Cross-Platform Design", "Design Systems"],
      ["Android App Design", "Interactive Prototypes", "Micro-Interactions"],
    ],
    video: "/mobile_video.mp4",
  },
  {
    icon: "/Website_logo-min.png",
    title: (
      <>
        WEB{" "}
        <span className="ml-4 bg-gradient-to-r from-[#FFFFFF] to-[#BEB8B8] bg-clip-text text-transparent">
          SITES
        </span>
      </>
    ),
    description:
      "We craft user-first websites that connect brand identity with advanced tech—driving engagement and conversions.",
    features: [
      ["Mobile First", "Landings", "Responsive"],
      ["Dashboards", "Framer", "Web 3.0"],
    ],
    video: "/websites_video.mp4",
  },
  {
    icon: "/Shopify_logo-min.png",
    title: (
      <>
        SHOPIFY{" "}
        <span className="ml-4 bg-gradient-to-r from-[#FFFFFF] to-[#BEB8B8] bg-clip-text text-transparent">
          DESIGN
        </span>
      </>
    ),
    description:
      "Visually rich Shopify experiences blending identity, clarity, and conversion-optimized flow.",
    features: [
      ["Brand guidelines", "Shopify theme", "Design system"],
      ["Moodboard", "Key pages", "Web 3.0"],
    ],
    video: "/ShopifyDesign_video.mp4",
  },
  {
    icon: "/Product_logo-min.png",
    title: (
      <>
        PRODUCT{" "}
        <span className="ml-4 bg-gradient-to-r from-[#FFFFFF] to-[#BEB8B8] bg-clip-text text-transparent">
          DESIGN
        </span>
      </>
    ),
    description:
      "From idea to pixel-perfect experience—UX, strategy, and impactful design that serves real-world needs.",
    features: [
      ["Strategy & Design", "Business goals", "Competitive research"],
      ["Moodboard", "Design system", "Prototyping"],
    ],
    video: "/ProductDesign_video.mp4",
  },
];

const checkIcon = (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#232323] mr-2">
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className="text-white"
    >
      <path
        d="M4 8.5l2.5 2.5 5-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export default function ServicesHorizontalScroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".hs-item");
    const total = sections.length;

    const tween = gsap.to(sections, {
      xPercent: -100 * (total - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${total * window.innerHeight}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="hs-container w-full bg-[#0e0e0e] overflow-hidden"
      ref={containerRef}
    >
      <div className="hs-inner flex">
        {services.map((service, idx) => (
          <section
            key={idx}
            className={`hs-item w-full min-w-[100vw] px-3 sm:px-4 md:px-8 lg:px-16 py-8 sm:py-12 md:py-20 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 bg-[#181818] ${
              idx === 0 ? "relative" : ""
            }`}
          >
            {/* First Card: Custom Layout */}
            {idx === 0 ? (
              <>
                {/* Left: Label + Heading */}
                <div className="w-full md:w-[45%] max-w-[600px] flex flex-col items-start justify-center mb-8 md:mb-0">
                  <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#232323] text-[#bdbdbd] text-xs tracking-widest font-black uppercase shadow">
                    • SERVICES
                  </span>
                  <h2
                    className="text-[2.2rem] sm:text-4xl md:text-5xl font-black tracking-wide leading-tight uppercase mb-0 bg-gradient-to-r from-[#fff] to-[#BEB8B8] bg-clip-text text-transparent"
                    style={{ letterSpacing: 2 }}
                  >
                    WHAT <span className="ml-2">WE DO</span>
                  </h2>
                </div>
                {/* Right: Glowing Video Card */}
                <div className="w-full md:w-[55%] flex justify-center md:justify-end">
                  <div
                    className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[540px] aspect-[16/9] bg-black flex items-center justify-center relative"
                    style={{
                      boxShadow:
                        "0 0 40px 0 #fff2, 0 1.5px 8px 0 rgba(0,0,0,0.18)",
                    }}
                  >
                    {service.video && (
                      <video
                        src={service.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                        style={{ filter: "brightness(1.1) contrast(1.2)" }}
                      />
                    )}
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ boxShadow: "0 0 60px 10px #fff3" }}
                    ></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Text Content */}
                <div className="w-full md:w-[45%] max-w-[600px] text-left mb-8 md:mb-0">
                  {service.icon && (
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#232323] shadow-[0_0_16px_2px_rgba(255,255,255,0.08)] mb-6">
                      <img
                        src={service.icon}
                        alt=""
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>
                  )}
                  <h2 className="text-[1.7rem] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight uppercase mb-6 bg-gradient-to-r from-[#FFFFFF] to-[#BEB8B8] bg-clip-text text-transparent">
                    {service.title}
                  </h2>
                  <p className="text-[#bdbdbd] text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                    {service.description}
                  </p>
                  {service.features.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-base text-[#cccccc]">
                      {service.features.map((col, i) => (
                        <ul key={i} className="space-y-2">
                          {col.map((item, j) => (
                            <li key={j} className="flex items-center">
                              {checkIcon}
                              {item}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </div>
                {/* Media Block */}
                <div className="w-full md:w-[55%] flex justify-center md:justify-end">
                  <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-[95vw] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] h-[180px] xs:h-[220px] sm:h-[260px] md:h-auto md:aspect-[16/9] bg-[#222]">
                    {service.video ? (
                      <video
                        src={service.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    ) : (
                      <img
                        src={service.image || "/placeholder-min.png"}
                        alt="Service visual"
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
