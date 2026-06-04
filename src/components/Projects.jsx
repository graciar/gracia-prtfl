import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import projectsList from "./ProjectDetailsList";
import ProjectModal from "./ProjectModal";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

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
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="max-w-6xl mx-auto px-6 py-12 lg:py-24"
        id="projects"
      >
        {/* 1. Header Section with a more "Designer" layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                03. Selected Works
              </span>
            </div>
            <h2 className="text-6xl lg:text-[6rem] font-medium tracking-tighter leading-[0.9] text-[#111] dark:text-[#f3f3f3]">
              Project <br className="hidden lg:block" /> Archive.
            </h2>
          </div>

          <p className="max-w-xs text-base text-gray-500 dark:text-gray-400 leading-[1.8] font-light pb-2">
            A curated selection of recent projects and technical explorations.
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
              <div
                onClick={() => setSelectedProject(project)}
                className="block cursor-pointer"
              >
                <ProjectCard {...project} index={index} />
              </div>
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

      {/* Floating Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}