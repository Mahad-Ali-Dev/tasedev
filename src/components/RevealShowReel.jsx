import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

// Custom event to show cursor
function showCustomCursor() {
  const event = new CustomEvent("showCustomCursor");
  window.dispatchEvent(event);
}

function RevealShowreel() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlay, setShowPlay] = useState(false);

  useEffect(() => {
    if (revealed) return; // Don't reapply mask if already revealed
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);

    // Draw the top mask
    ctx.fillStyle = "#dbdbdb";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "destination-out";

    let drawing = false;

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
      return { x, y };
    };

    const draw = (e) => {
      if (!drawing) return;
      const { x, y } = getPos(e);
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
    };

    const start = (e) => {
      drawing = true;
      draw(e);
    };

    const stop = () => {
      drawing = false;
      // Check how much is scratched
      const imageData = ctx.getImageData(0, 0, width, height);
      let transparent = 0;
      for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) transparent++;
      }
      const percent = (transparent / (width * height)) * 100;
      if (percent > 50) setRevealed(true);
    };

    // Add listeners
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stop);
    canvas.addEventListener("mouseleave", stop);
    canvas.addEventListener("touchstart", start);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", stop);

    // Cleanup
    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stop);
      canvas.removeEventListener("mouseleave", stop);
      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", draw);
      canvas.removeEventListener("touchend", stop);
    };
  }, [revealed]);

  // Play/pause video after reveal
  const handlePlay = () => {
    if (!revealed) return;
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="w-full min-h-[350px] bg-[#dbdbdb] flex flex-col items-start lg:items-center justify-center px-2 sm:px-8 py-8 sm:py-12 mt-[150px]">
      <div className="sm:mb-8 mb-4 w-full">
        <div className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[20vh] font-serif tracking-tight text-[#2d2c32] leading-none text-center lg:text-left">
          REVEAL
        </div>
        <div className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[20vh] font-bold tracking-tight text-[#2d2c32] leading-none sm:-mt-2 -mt-1 text-center lg:text-left">
          SHOWREEL
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          className="relative w-full max-w-2xl lg:max-w-3xl h-[50vw] max-h-[400px] lg:max-h-[520px] min-h-[180px] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-black"
          onMouseEnter={showCustomCursor}
        >
          <video
            ref={videoRef}
            src="/test.mp4"
            autoPlay={false}
            loop
            muted
            playsInline
            className="w-full h-full object-cover bg-black"
            onClick={handlePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{ cursor: revealed ? "pointer" : "not-allowed" }}
            onMouseEnter={showCustomCursor}
          />
          {/* Scratch Layer */}
          {!revealed && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full touch-none z-10"
            />
          )}
          {/* Play icon overlay after reveal, before play */}
          {revealed && !isPlaying && (
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/40 transition z-20"
              onClick={handlePlay}
              onMouseEnter={showCustomCursor}
              onMouseLeave={showCustomCursor}
              tabIndex={-1}
            >
              <FaPlay className="text-white text-6xl opacity-90" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default RevealShowreel;
