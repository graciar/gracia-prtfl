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
        { name: "Laravel (PHP)", logo: "./laravel.png", desc: "Built full-stack applications and RESTful APIs for university projects." },
        { name: "Flask (Python)", logo: "./flask.png", desc: "Developed lightweight web services and backend logic." },
        { name: "Django (Python)", logo: "./django.png", desc: "Created robust and scalable web applications." },
        { name: "React (JS)", logo: "./react.png", desc: "Used for building dynamic and responsive user interfaces." },
        { name: "Java", logo: "./java.png", desc: "Utilized to implement core Object-Oriented Programming (OOP) principles." },
      ],
    },
    {
      title: "Databases & Storage",
      description: "Handling both structured and flexible data.",
      tools: [
        { name: "PostgreSQL", logo: "./postgres.png", desc: "Utilized for web application projects." },
        { name: "MySQL", logo: "./mysql.png", desc: "Utilized for web application projects." },
        { name: "Supabase", logo: "./supabase.png", desc: "Integrated for cloud file storage and media management." },
      ],
    },
    {
      title: "DevOps",
      description: "Systems I am actively learning and implementing to automate development workflows.",
      tools: [
        { name: "CI/CD", logo: "./gitlab.png", desc: "Currently exploring CI/CD concepts by building a custom pipeline for my latest project." },
        // { name: "Docker", logo: "./docker.png", desc: "" },
      ],
    },
    {
      title: "Tools & Collaboration", // <-- Cleaned up the name
      description: "Tools for version control, API testing, and agile team workflows.",
      tools: [
        { name: "Git", logo: "./git.png", desc: "Version control for personal and collaborative projects." },
        { name: "Jira", logo: "./jira.png", desc: "Used for agile project management and issue tracking." },
        { name: "Postman", logo: "./postman.png", desc: "Tested and documented REST APIs during development." },
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                02. Capabilities
              </span>
            </div>
            <h2 className="text-6xl lg:text-[6rem] font-medium tracking-tighter leading-[0.9] text-[#111] dark:text-[#f3f3f3]">
              Technical <br /> Skills.
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