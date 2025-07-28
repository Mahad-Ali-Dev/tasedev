import ShopifyIcon from "/Shopify_logo-min.png";
import GradientBorderMotion from "./GradientBorderMotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const features = [
  ["Brand Guidelines", "Shopify Theme"],
  ["Design System", "MoodBoard"],
  ["Key Pages", "Funnel building"],
];

const Shopifysection = () => (
  <section className="w-full min-h-[60vh] bg-[#181818] flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-20 py-12">
    {/* Left Side */}
    <div className="flex flex-col items-center md:items-start w-full md:w-[45%]">
      <img src={ShopifyIcon} alt="Mobile Icon" className="w-8 h-8 mb-4" />
      <h2
        className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-center md:text-left mb-10"
        style={{
          background: "linear-gradient(90deg, #fff 60%, #888 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        SHOPFIY DESIGN
      </h2>
      <p className="text-[#bdbdbd] text-lg text-center md:text-left mb-10 max-w-lg">
        We craft visually striking Shopify stores that blend your brand identity
        with seamless shopping experiences—driving conversions while staying
        true to your brand's essence.
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-base text-[#bdbdbd]">
        <ul className="space-y-2">
          <li>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="s"
              style={{
                color: "#000000",
                background: "white",
                borderRadius: 50,
                marginRight: 8,
              }}
            />{" "}
            Brand guidelines{" "}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="s"
              style={{
                color: "#000000",
                background: "white",
                borderRadius: 50,
                marginRight: 8,
              }}
            />{" "}
            Shooify theme
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="s"
              style={{
                color: "#000000",
                background: "white",
                borderRadius: 50,
                marginRight: 8,
              }}
            />{" "}
            Design system{" "}
          </li>
        </ul>
        <ul className="space-y-2">
          <li>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="s"
              style={{
                color: "#000000",
                background: "white",
                borderRadius: 50,
                marginRight: 8,
              }}
            />{" "}
            Moodboard
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="s"
              style={{
                color: "#000000",
                background: "white",
                borderRadius: 50,
                marginRight: 8,
              }}
            />{" "}
            Key pages
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="s"
              style={{
                color: "#000000",
                background: "white",
                borderRadius: 50,
                marginRight: 8,
              }}
            />{" "}
            Funnel building
          </li>
        </ul>
      </div>
    </div>
    {/* Right Side */}
    <div className="w-full md:w-[55%] flex justify-center md:justify-end mt-8 md:mt-0">
      <GradientBorderMotion>
        <video
          src="/ShopifyDesign_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[90vw] max-w-[700px] h-[220px] md:w-[700px] md:h-[420px] object-cover"
        />
      </GradientBorderMotion>

      {/* <GradientBorderMotion>
        <GridMotion />
      </GradientBorderMotion> */}
    </div>
  </section>
);

export default Shopifysection;
