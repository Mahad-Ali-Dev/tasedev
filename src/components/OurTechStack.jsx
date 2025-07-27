import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import BrandStory from "./brandstory.jsx";

const techIcons = [
  "/TechStack/bootstrap-min.png",
  "/TechStack/redis-seeklogo-min.png",
  "/TechStack/selenium-seeklogo-min.png",
  "/TechStack/blender-min.png",
  "/TechStack/vue-js-seeklogo-min.png",
  "/TechStack/angular-seeklogo-min.png",
  "/TechStack/mysql-seeklogo-min.png",
  "/TechStack/next-js-seeklogo-min.png",
  "/TechStack/adobe-illustrator-min.png",
  "/TechStack/adobe-premiere-seeklogo-min.png",
  "/TechStack/figma-seeklogo-min.png",
  "/TechStack/amazon-web-services-aws-seeklogo-min.png",
  "/TechStack/express-js-seeklogo-min.png",
  "/TechStack/firebase-icon-seeklogo-min.png",
  "/TechStack/microsoft-azure-seeklogo-min.png",
  "/TechStack/javascript-js-seeklogo-min.png",
  "/TechStack/flutter-seeklogo-min.png",
  "/TechStack/postgresql-seeklogo-min.png",
  "/TechStack/node-js-seeklogo(1)-min.png",
  "/TechStack/typescript-seeklogo-min.png",
  "/TechStack/ahrefs-seo-tool-seeklogo-min.png",
  "/TechStack/next-js-seeklogo-min.png",
  "/TechStack/wordpress-icon-seeklogo-min.png",
  "/TechStack/shopify-seeklogo-min.png",
  "/TechStack/docker-seeklogo-min.png",
  "/TechStack/python-seeklogo-min.png",
  "/TechStack/gitlab-seeklogo-min.png",
  "/TechStack/adobe-photoshop-seeklogo-min.png",
  "/TechStack/icons8-c++-480-min.png",
  "/TechStack/c-sharp-c-seeklogo-min.png",
  "/TechStack/icons8-rest-api-100-min.png",
  "/TechStack/icons8-splunk-480-min.png",
  "/TechStack/mongodb-seeklogo-min.png",
  "/TechStack/icons8-react-480-min.png",
  "/TechStack/framer-motion-seeklogo-min.png",
  "/TechStack/google-ads-seeklogo-min.png",
  "/TechStack/google-cloud-seeklogo-min.png",
  "/TechStack/java-seeklogo-min.png",
  "/TechStack/kotlin-seeklogo-min.png",
  "/TechStack/icons8-spring-boot-480-min.png",
  "/TechStack/kubernetes-min.png",
  "/TechStack/meta-icon-new-facebook-2021-seeklogo-min.png",
  "/TechStack/webflow-2023-seeklogo-min.png",
  "/TechStack/vercel-seeklogo-min.png",
  "/TechStack/terraform-seeklogo-min.png",
  "/TechStack/terraform-min.png",
  "/TechStack/tailwind-css-seeklogo-min.png",
  "/TechStack/svelte-seeklogo-min.png",
  "/TechStack/n8n-seeklogo-min.png",
  "/TechStack/icons8-react-480-min.png", // repeated for demo
];

const shadowColors = [
  "#7952B3",
  "#D82C20",
  "#43B02A",
  "#F5792A",
  "#41B883",
  "#DD0031",
  "#00758F",
  "#000000",
  "#FF9A00",
  "#F24E1E",
  "#FF9900",
  "#000000",
  "#FFCA28",
  "#007FFF",
  "#F0DB4F",
  "#02569B",
  "#336791",
  "#43853D",
  "#3178C6",
  "#00C3E6",
  "#000000",
  "#21759B",
  "#95BF47",
  "#2496ED",
  "#3572A5",
  "#FC6D26",
  "#001E36",
  "#00599C",
  "#178600",
  "#F24E1E",
  "#4DB33D",
  "#61DBFB",
  "#9B51E0",
  "#4285F4",
  "#4285F4",
  "#007396",
  "#A97BFF",
  "#326CE5",
  "#1877F2",
  "#4353FF",
  "#000000",
  "#7B42BC",
  "#06B6D4",
  "#FF3E00",
  "#F37626",
];

const OurTechStack = () => (
  <>
    {/* Our Tech Stack Section (dark, attached to services) */}
    <section className="w-full min-h-[80vh] bg-[#181818] flex flex-col items-center justify-center py-10 px-2 sm:px-4">
      <div className="max-w-2xl w-full mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white text-center break-words">
          Our Tech Stack
        </h2>
        <div className="text-base sm:text-xl md:text-2xl font-semibold text-[#e5e5e5] mb-2 text-center">
          Modern. Modular. Made to scale.
        </div>
        <div className="text-xs sm:text-base md:text-lg text-[#bdbdbd] font-normal text-center mb-6">
          Our toolkit evolves with every build.
        </div>
      </div>
      {/* Card with Icon Grid */}
      <div className="bg-[#181818] rounded-xl p-2 sm:p-4 md:p-8 max-w-6xl w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-6 xs:grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-3 md:gap-4 items-center justify-center w-full">
          {techIcons.map((icon, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.13,
                boxShadow: `0 0 18px ${shadowColors[i % shadowColors.length]}`,
              }}
              whileTap={{ scale: 0.97 }}
              className="aspect-square flex items-center justify-center rounded-lg bg-[#23272b] border border-[#232323] transition duration-300 group w-full h-full min-w-0 min-h-0"
            >
              <img
                src={icon}
                alt={icon
                  .split("/")
                  .pop()
                  .replace(/\.(svg|png|jpg|jpeg)$/i, "")}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mx-auto group-hover:scale-110 transition-transform duration-200"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Button */}
      <button
        className="block mx-auto mt-6 px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-bold rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none bg-white text-[#181818]"
        onClick={() => (window.location.href = "/what-we-do")}
      >
        Explore More Services
      </button>
    </section>
    {/* Brand Story Section (light, below tech stack) */}
    <section className="w-full bg-[#DBDBDB] py-20 px-4 flex flex-col items-center justify-center">
      <BrandStory />
    </section>
  </>
);

export default OurTechStack;
