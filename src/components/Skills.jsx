import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skills = [
    { title: "Backend", tools: ["Laravel", "Flask", "SQL"] },
    { title: "Frontend", tools: ["React", "Tailwind"] },
    { title: "Tools", tools: ["Git", "Github"] }
  ];

  const toolRefs = useRef([]);
  const cardRefs = useRef([]); // Add this

  useEffect(() => {
    // Animate each tool <li>
    // toolRefs.current.forEach((el) => {
    //   if (!el) return;
    //   ScrollTrigger.create({
    //     trigger: el,
    //     start: "top 55%",
    //     end: "bottom 45%",
    //     onEnter: () => el.classList.add("text-white"),
    //     onLeave: () => el.classList.remove("text-white"),
    //     onEnterBack: () => el.classList.add("text-white"),
    //     onLeaveBack: () => el.classList.remove("text-white"),
    //   });
    // });

    // Animate each card scale
    // cardRefs.current.forEach((el) => {
    //   if (!el) return;
    //   gsap.fromTo(
    //     el,
    //     { scale: 1 },
    //     {
    //       scale: 1.05,
    //       scrollTrigger: {
    //         trigger: el,
    //         start: "top center",
    //         end: "bottom 45%",
    //         toggleActions: "play reverse play reverse",
    //         // markers:true,
    //       },
    //       duration: 0.1,
    //       // delay: 0.9,
    //       ease: "power2.out",
    //     }
    //   );
    // });

    // return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="flex w-full h-full py-15 justify-center items-center" id="skills">
      <div className="flex flex-col w-full h-full items-center tracking-wider">
        <p className="text-2xl lg:text-4xl font-semibold mb-8 text-center">
          Skills
        </p>
        <p className="text-md lg:text-lg mb-8 text-center">
          Here's the tech stack I use to build my web projects...
        </p>
        <div className="w-full max-w-3xl">
          {skills.map((skill, i) => (
            <div key={i} className="w-full">
              <div
                ref={(el) => (cardRefs.current[i] = el)}
                className="m-5 px-5 py-3 transition-transform rounded-2xl overflow-hidden shadow-lg dark:border"
              >
                <div className="h-7 p-5 flex items-center text-xl xl:text-2xl font-semibold">
                  {skill.title}
                </div>
                <div className="p-3 text-lg xl:text-xl">
                  <ul className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, j) => (
                      <li
                        key={j}
                        // ref={(el) => (toolRefs.current[i * 10 + j] = el)}
                        className="px-2 py-1 hover:bg-amber-300 hover:scale-[1.1] dark:text-black bg-gray-200 rounded transition-all duration-300"
                      >
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

export default Skills;
