import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ModeToggler from "./ModeToggler";
function Nav() {
  const menuRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    // Trigger initial position
    const firstItem = menuRef.current.querySelector("a");
    moveUnderline(firstItem);
  }, []);

  const moveUnderline = (el) => {
    const menuBox = menuRef.current.getBoundingClientRect();
    const elBox = el.getBoundingClientRect();

    const x = elBox.left - menuBox.left;
    // const y = el.offsetTop + el.offsetHeight;

    gsap.to(underlineRef.current, {
      x,
      // y,
      width: el.offsetWidth,
      duration: 1.7,
      ease: "elastic.out(1, 0.5)",
    });
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   moveUnderline(e.target);
  // };

  const menuItems = [
    { label: "About", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];


  return (
    <div className="fixed max-md:hidden top-0 left-0 w-full z-50 flex flex-row justify-between px-6 py-3 bg-[rgba(243,244,246,0.5)] dark:bg-[rgba(24,27,26,0.7)]">
      <div className="flex items-center justify-center">
        <div className="relative w-full flex justify-center gap-1 text-2xl font-bold text-black dark:text-white">            
          <span className=" flex flex-row">
              <p>gracia</p>
          </span>
        </div>
      </div>
     
      <ul ref={menuRef} className="relative inline-block px-5 py-2 space-x-4">
        {menuItems.map((item, index) => (
        <li className="inline-block relative" key={index}>
          <a
            href={item.href}
            onClick={(e) => {
              e.preventDefault(); // Smooth scroll fallback
              moveUnderline(e.target);
              // Optionally scroll to section manually if needed:
              const target = document.querySelector(item.href);
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-2 py-1 font-medium"
          >
            {item.label}
          </a>
        </li>
        ))}
        <li
          ref={underlineRef}
          className="absolute h-[3px] bg-[#543d13] dark:bg-[#fffde0] bottom-0 left-0 rounded"
          style={{ width: "40px"}}
        />
      </ul>
    </div>
  )
}

export default Nav