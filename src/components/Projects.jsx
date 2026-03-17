import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import projectsList from "./ProjectDetailsList";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Staggered Fade-in Animation
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="max-w-6xl mx-auto px-6 py-12 lg:py-24" 
      id="projects"
    >
      {/* 1. Header Section with a more "Designer" layout */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
            Project <span className="text-gray-300 italic font-light">Archive.</span>
          </h2>
        </div>
        
        <p className="max-w-xs text-sm text-gray-500 leading-relaxed font-medium">
          A collection of projects.
        </p>
      </div>

      {/* 2. Optimized Grid */}
      {/* sm:grid-cols-2 for tablet, lg:grid-cols-3 for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7">
        {projectsList.map((project, index) => (
          <div 
            key={project.id || index} 
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <Link 
              to={`/gracia-prtfl/project/${project.id}`} 
              className="block"
            >
              <ProjectCard {...project} index={index} />
            </Link>
          </div>
        ))}
      </div>

      {/* 3. Bottom Decorative element (Optional) */}
      <div className="mt-24 flex justify-center">
        <div className="px-6 py-2 border border-gray-100 rounded-full bg-white shadow-sm">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            More coming soon
          </span>
        </div>
      </div>
    </section>
  );
}