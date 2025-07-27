import webIcon from "/Website_logo-min.png";
import GradientBorderMotion from "./GradientBorderMotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const features = [
  ["Mobile first", "Cross-Platform Design"],
  ["Responsive", "Dashboards"],
  ["Framer", "Web 3.0"],
];

const Websection = () => (
  <section className="w-full min-h-[60vh] bg-[#181818] flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-20 py-12">
    {/* Left Side */}
    <div className="flex flex-col items-center md:items-start w-full md:w-[45%]">
      <img src={webIcon} alt="Mobile Icon" className="w-8 h-8 mb-4" />
      <h2
        className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-center md:text-left mb-10"
        style={{
          background: "linear-gradient(90deg, #fff 60%, #888 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        WEBSITES
      </h2>
      <p className="text-[#bdbdbd] text-lg text-center md:text-left mb-10 max-w-lg">
        We craft user-friendly websites that fuse your brand identity with
        cutting-edge technology—helping you captivate audiences and elevate your
        online presence.
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-base text-[#bdbdbd]">
        <ul className="space-y-2">
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="s"
              style={{
                color: "#000000",
                background: "white",
                borderRadius: 50,
                marginRight: 8,
              }}
            />
            Mobile first
          </li>
          <li>
            {" "}
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
            Cross-Platform Design
          </li>
          <li>
            {" "}
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
            Responsive
          </li>
        </ul>
        <ul className="space-y-2">
          <li>
            {" "}
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
            Dashboards
          </li>
          <li>
            {" "}
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
            Framer
          </li>
          <li>
            {" "}
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
            Web 3.0
          </li>
        </ul>
      </div>
    </div>
    {/* Right Side */}
    <div className="w-full md:w-[55%] flex justify-center md:justify-end mt-8 md:mt-0">
      <GradientBorderMotion>
        <video
          src="/websites_video.mp4"
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

export default Websection;
