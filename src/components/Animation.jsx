import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Animation() {
  const planeRef = useRef(null);
  const planeeRef = useRef(null);

  useEffect(() => {
    gsap.to(planeRef.current, {
      duration: 12,
      ease: "power1.inOut",
      repeat: -1,
      motionPath: {
        path: "#flightPath",
        align: "#flightPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });

    gsap.to(planeeRef.current, {
      duration: 12,
      ease: "power1.inOut",
      repeat: -1,
      delay: 2, 
      motionPath: {
        path: "#flightPathh",
        align: "#flightPathh",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);

  return (
    <div className="relative w-full h-screen  overflow-hidden">
      {/* 🟥 SVG path for visualization */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
        <path
          id="flightPath"
          d="
            M 0 0
            Q 300 200, 600 300
            C 1000 400, 1100 100, 700 200
            C 400 300, -300 700, 500 600
            Q 900 500, 1200 700
          "         
       stroke="transparent"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* ✈️ The plane that moves */}
      <div
        ref={planeRef}
        className="absolute w-10 h-10 bg-pink-600 text-white font-bold flex items-center justify-center rounded-full shadow-lg"
      >
        ✈
      </div>

      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
        <path
          id="flightPathh"
          d="
            M 1200 0
            Q 1000 250, 700 200
            C 600 150, 400 100, 500 300
            C 600 500, 900 400, 800 500
            Q 600 650, 200 700
          "         
       stroke="transparent"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* ✈️ The plane that moves */}
      <div
        ref={planeeRef}
        className="absolute w-10 h-10 bg-pink-600 text-white font-bold flex items-center justify-center rounded-full shadow-lg"
      >
        ✈
      </div>
    </div>
  );
}
