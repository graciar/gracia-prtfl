import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <motion.div
      className="fixed top-0 left-0 w-10 h-10 opacity-50 dark:border-white rounded-full pointer-events-none z-[9999] 
                shadow-[inset_0_0_5px_rgba(255,193,7,0.6),_0_0_10px_rgba(255,193,7,1)]" //there are no spaces inside the rgba(...), or Tailwind will not compile it
        animate={{ x: position.x - 30, y: position.y - 30 }}
        transition={{ type: "spring", stiffness: 50, damping: 12 }}
      />

      {/* Inner Circle */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#FFC107] rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_rgba(255,193,7,1)]"
        animate={{ x: position.x - 8, y: position.y - 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 35 }}
      />
    </>
  );
}
