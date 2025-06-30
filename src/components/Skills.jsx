import React from 'react'
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import SkillItem from './SkillItem';

function Skills() {
  const skills = [
    {
      title: "Backend",
      tools: ["Laravel", "Flask", "SQL"]
    },
    {
      title: "Frontend",
      tools: ["React", "Tailwind"]
    },
    {
      title: "Tools",
      tools: ["Git/ Github"]
    },
  ]

  return (
    <div className="flex w-full min-h-screen justify-center items-center" id='skills'>
      <div className='flex flex-col w-full h-full items-center tracking-wider'>
        <div className=' '>
          <p className="text-2xl text-start lg:text-4xl font-semibold mb-8 tracking-wide lg:text-center">Here's the tech stack I use to build my web projects...</p>
        </div>

        
        <div className=''>
        {skills.map((skill, i) => (
          <div key={i}
           className="w-full">
          <div className="m-5 px-5 py-3 justify-center hover:scale-[1.05] transition-transform duration-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="h-7 p-5 flex items-center text-xl xl:text-2xl font-semibold">{skill.title}</div>

            <div className="overflow-hidden p-3 text-lg xl:text-xl">
              <ul className="flex flex-wrap gap-2">
                {skill.tools.map((tool, i) => (
                  <li key={i} className="px-2 py-1 bg-gray-200 rounded hover:bg-amber-400">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        ))}

        </div>
      </div>
      
      
    </div>
  );
}

export default Skills