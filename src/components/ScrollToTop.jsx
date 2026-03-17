// components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollSmoother from "gsap/ScrollSmoother";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, false); // false = no animation, instant jump
    } else {
      window.scrollTo(0, 0); // fallback if smoother isn't ready
    }
  }, [pathname]);

  return null;
}