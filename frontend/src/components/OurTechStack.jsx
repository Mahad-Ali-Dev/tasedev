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
  "/TechStack/tailwind-css-seeklogo-min.png",
  "/TechStack/svelte-seeklogo-min.png",
  "/TechStack/n8n-seeklogo-min.png",
];

const shadowColors = [
  "#7952B3", // Bootstrap
  "#DC382D", // Redis
  "#43B02A", // Selenium
  "#F5792A", // Blender
  "#42B883", // Vue.js
  "#DD0031", // Angular
  "#00758F", // MySQL
  "#000000", // Next.js
  "#FF9A00", // Adobe Illustrator
  "#F24E1E", // Adobe Premiere
  "#F24E1E", // Figma
  "#FF9900", // AWS
  "#000000", // Express.js
  "#FFCA28", // Firebase
  "#0078D4", // Microsoft Azure
  "#F7DF1E", // JavaScript
  "#02569B", // Flutter
  "#336791", // PostgreSQL
  "#339933", // Node.js
  "#3178C6", // TypeScript
  "#FF6B35", // Ahrefs
  "#21759B", // WordPress
  "#95BF47", // Shopify
  "#2496ED", // Docker
  "#3776AB", // Python
  "#FC6D26", // GitLab
  "#31A8FF", // Adobe Photoshop
  "#00599C", // C++
  "#178600", // C#
  "#FF6C37", // REST API
  "#000000", // Splunk
  "#47A248", // MongoDB
  "#61DAFB", // React
  "#0055FF", // Framer Motion
  "#4285F4", // Google Ads
  "#4285F4", // Google Cloud
  "#ED8B00", // Java
  "#7F52FF", // Kotlin
  "#6DB33F", // Spring Boot
  "#326CE5", // Kubernetes
  "#1877F2", // Meta/Facebook
  "#4353FF", // Webflow
  "#000000", // Vercel
  "#7B42BC", // Terraform
  "#06B6D4", // Tailwind CSS
  "#FF3E00", // Svelte
  "#FF6C37", // n8n
];

const OurTechStack = () => (
  <>
    {/* Our Tech Stack Section (dark, attached to services) */}
    <section
      className="w-full min-h-[80vh] bg-[#181818] flex flex-col items-center justify-center py-10 px-2 sm:px-4 relative overflow-hidden"
      style={{
        background: "#181818",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 opacity-30 rounded-full blur-3xl z-0"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #B8BCC3 0%, #23232B 100%)",
        }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 opacity-30 rounded-full blur-3xl z-0"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, #DFE0E2 0%, #23232B 100%)",
        }}
      />
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
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 w-full">
          {techIcons.map((icon, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.13,
                boxShadow: `0 0 18px ${shadowColors[i % shadowColors.length]}`,
              }}
              whileTap={{ scale: 0.97 }}
              className="aspect-square flex items-center justify-center rounded-lg bg-[#23272b] border border-[#232323] transition duration-300 group w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
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
