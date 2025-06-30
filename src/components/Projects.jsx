import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ProjectList }  from "./ProjectsList";
import { div, ul } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${(ProjectList.length) * 400}vh`, // total scroll length
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });

    sectionRefs.current.forEach((el, i) => {
      // if (i === 0) return; // first section is visible already
      gsap.set(el, { xPercent:  (ProjectList.length - i - 1 ) * 1}); // offscreen right

      tl.to(el, {
        xPercent: 98 - (i * 2) ,
        duration: 3,
        stagger: 5,
        ease: "none",
      },
      "+=0.5" 
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen flex justify-center overflow-hidden" id='projects'>
    {/* <div className="w-8/12 h-full relative overflow-hidden"> */}
      <div className="h-screen font-[barriecito] flex flex-col justify-center items-start px-20">
        <p className="text-6xl xl:text-9xl">PORTFOLIO.</p><br />
        <p className="text-2xl xl:text-3xl">Here are some of the projects I've built to sharpen my skills.</p>
      </div>
      <div className="z-11 absolute border bottom-0 right-0 m-7 text-2xl py-2 px-3 text-white">
        <p>Projects</p>
      </div>

      {ProjectList.map((project, i) => (
      <div
        key={i}
        ref={(el) => (sectionRefs.current[i] = el)}
        className = { `absolute top-0 left-0 w-full rounded-3xl h-screen flex items-center justify-center text-white text-4xl font-bold overflow-hidden`}
        style={{ zIndex:  ProjectList.length - i }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: project.bgImage,
          }}
        />
        <div className="absolute inset-0 bg-[#181C14] opacity-75 z-10" />
        <div className="z-20 flex flex-col items-center text-center px-20">
          <div>
            {project.text}
          </div>
          <div className="text-lg font-normal mt-7">
            {project.desc}
          </div>
          <ul className="flex flex-wrap gap-2 mt-3">
            {project.tools.map((tool, i) => (
              <li key={i} className="px-2 py-1 rounded tracking-widest text-xl">
                {tool}
              </li>
            ))}
          </ul>
        </div>

      </div>
      ))}
      </div>
    // </div>
  );
}

