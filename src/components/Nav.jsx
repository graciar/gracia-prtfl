import React, { useEffect, useState } from "react";

function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    // { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Find the currently active section
      menuItems.forEach((item, index) => {
        const section = document.querySelector(item.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Add a small buffer to make the transition feel more natural
          if (
            scrollPosition >= sectionTop - windowHeight / 3 &&
            scrollPosition < sectionTop + sectionHeight - windowHeight / 3
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-white/40 dark:bg-[#0a0a0a]/40 backdrop-blur-xl px-2 py-2 rounded-full border border-black/5 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)] flex items-center gap-1 sm:gap-2 transition-all">
        {menuItems.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`relative px-4 py-1.5 rounded-full text-[13px] uppercase tracking-widest font-medium transition-colors duration-500 ${isActive
                  ? "text-black dark:text-white"
                  : "text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white"
                }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute left-1/2 bottom-0 w-1 h-1 bg-black dark:bg-white rounded-full -translate-x-1/2 shadow-sm transition-all duration-500" />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Nav;
