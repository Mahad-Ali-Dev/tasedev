import { useRef, useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function DraggableVideo({ src = "/navbar-video.mp4", className = "" }) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={`rounded-2xl shadow-2xl bg-black object-cover ${className}`}
      style={{ width: "340px", height: "200px" }}
    />
  );
}

function DraggableMenuVideo() {
  const wrapperRef = useRef(null);
  useEffect(() => {
    if (!wrapperRef.current) return;
    Draggable.create(wrapperRef.current, {
      type: "x,y",
      inertia: true,
      edgeResistance: 0.8,
      bounds: window,
      zIndexBoost: true,
    });
  }, []);
  return (
    <div
      ref={wrapperRef}
      className="video-wrapper bottom-2 z-40 mt-16 aspect-video w-full md:bottom-6 md:left-6 md:mt-3 lg:absolute lg:bottom-9 lg:left-9 lg:w-[23rem] xl:bottom-20 xl:left-20 xl:w-[28rem]"
      style={{
        touchAction: "none",
        cursor: "grab",
        userSelect: "none",
        zIndex: 1013,
      }}
    >
      <div
        className="overflow-hidden rounded-2xl"
        style={{ touchAction: "none" }}
      >
        <video
          src="/navbar-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{ touchAction: "none" }}
        />
      </div>
    </div>
  );
}
export default DraggableVideo;
