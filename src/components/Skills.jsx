import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SkillItem from "./SkillItem";
import { Hammer } from "lucide-react"; // Simple icon for header

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);
  const skills = [
  {
    title: "Languages & Frameworks",
    description: "The core technologies I build applications with.",
    tools: [
      { name: "Laravel (PHP)", logo: "./laravel.png" },
      { name: "Flask (Python)", logo: "./flask.png" },
      { name: "Django (Python)", logo: "./django.png" }, 
      { name: "React (JS)", logo: "./react.png" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Handling both structured and flexible data.",
    tools: [
      { name: "PostgreSQL", logo: "./postgres.png" },
      { name: "MySQL", logo: "./mysql.png" },
      // { name: "MongoDB", logo: "./mongo.png" }, 
      { name: "Supabase", logo: "./supabase.png" },
    ],
  },
  {
    title: "Tools",
    description: "Tools for deployment, testing, and team collaboration.",
    tools: [
      { name: "Docker", logo: "./docker.png" },
      { name: "Git", logo: "./git.png" },
      { name: "Jira", logo: "./jira.png" }, 
      { name: "Postman", logo: "./postman.png" },
    ],
  },
];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-row", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-auto py-24 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        
        {/* Modern Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Hammer size={16} className="text-gray-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                Capabilities
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-black leading-none">
              Technical <br /> 
            </h2>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {skills.map((skill, i) => (
            <div key={i} className="skill-row">
              <SkillItem title={skill.title} tools={skill.tools} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;