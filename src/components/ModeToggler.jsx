import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useDarkMode } from "../context/ThemeContext";

const ModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  const animateThemeIcons = (isDark) => {
    // Kill any ongoing animations
    gsap.killTweensOf([sunRef.current, moonRef.current]);

    if (isDark) {
      gsap.set(sunRef.current, { opacity: 0, y: 100 });
      gsap.fromTo(
        moonRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
    } else {
      gsap.set(moonRef.current, { opacity: 0, y: -100 });
      gsap.fromTo(
        sunRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
    }
  };

  // inital mode
  useEffect(() => {
    animateThemeIcons(darkMode);
  }, []);

  const handleClick = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    animateThemeIcons(nextMode);
  };

  return (
    <div className="relative w-10 h-10 overflow-hidden">
      <div
        className="flex items-center justify-center w-full h-full text-2xl font-bold cursor-pointer"
        onClick={handleClick}
      >
        <span ref={sunRef} className="absolute opacity-0">
          🔆
        </span>
        <span ref={moonRef} className="absolute opacity-0 ">
          🌙
        </span>
      </div>
    </div>
  )
}

export default ModeToggler