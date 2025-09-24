import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SkillItem from "./SkillItem";
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skills = [
    {
      title: "Backend",
      tools: [
        { name: "Laravel", logo: "./laravel.png" },
        { name: "Flask", logo: "./flask.png" },
        { name: "MySQL", logo: "./mysql.png" },
        { name: "PostgreSQL", logo: "./postgres.png" },
      ],
    },
    {
      title: "Frontend",
      tools: [
        { name: "React", logo: "./react.png" },
        { name: "Tailwind", logo: "./tailwind.png" },
      ],
    },
    {
      title: "Tools",
      tools: [
        { name: "Git", logo: "./git.png" },
        { name: "Postman", logo: "./postman.png" },
        { name: "Docker", logo: "./docker.png" },
      ],
    },
  ];

  return (
    <div className="flex w-full h-full py-24 max-md:py-1 justify-center items-center" id="skills">
      <div className="flex flex-col w-full h-full items-center tracking-wider">
        <p className="text-2xl lg:text-4xl font-semibold mb-8 text-center">
          Skills
        </p>
        <p className="text-md lg:text-lg mb-8 text-center">
          Here's the tech stack I use to build my projects...
        </p>
        
        {/* Card Layout */}
        <div className="w-full max-w-3xl">
          {skills.map((skill, i) => (
            <SkillItem key={i} title={skill.title} tools={skill.tools} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Skills;
