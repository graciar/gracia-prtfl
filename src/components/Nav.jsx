import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ModeToggler from "./ModeToggler";

gsap.registerPlugin(ScrollTrigger);

function Nav() {
  const menuRef = useRef(null);
  const underlineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null); // start as null

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const moveUnderline = (el) => {
    if (!el || !underlineRef.current || !menuRef.current) return;

    const menuBox = menuRef.current.getBoundingClientRect();
    const elBox = el.getBoundingClientRect();
    const x = elBox.left - menuBox.left;

    gsap.to(underlineRef.current, {
      x,
      width: el.offsetWidth,
      autoAlpha: 1, // fade in
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });
  };

  useEffect(() => {
    menuItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item.href,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (activeIndex !== null) {
      const activeLink = menuRef.current?.querySelectorAll("a")[activeIndex];
      if (activeLink) moveUnderline(activeLink);
    }
  }, [activeIndex]);

  return (
    <div className="fixed max-md:hidden top-0 left-0 w-full z-50 flex justify-between px-6 py-3 bg-[rgba(243,244,246,0.5)] dark:bg-[rgba(24,27,26,0.7)] backdrop-blur">
      {/* Brand */}
      <div className="text-2xl font-bold text-black dark:text-white">
        gracia
      </div>

      {/* Menu */}
      <ul ref={menuRef} className="relative flex space-x-4 items-center px-5 py-2">
        {menuItems.map((item, index) => (
          <li key={index} className="relative">
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index); // update active index
                const target = document.querySelector(item.href);
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-2 py-1 font-medium text-black dark:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}

        {/* Underline */}
        <li
          ref={underlineRef}
          className="absolute h-[3px] bg-[#543d13] dark:bg-[#fffde0] bottom-0 left-0 rounded opacity-0"
          style={{ width: "0px" }}
        />
      </ul>
    </div>
  );
}

export default Nav;
