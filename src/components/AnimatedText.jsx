import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chroma from "chroma-js";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText() {
  const textRef = useRef();

  useEffect(() => {
    const chars = textRef.current.querySelectorAll("span");
    const endGradient = chroma.scale(["#F9D371", "#F47340", "#EF2F88", "#8843F2"]);

    gsap.set(textRef.current, { opacity: 0 });

    gsap.to(textRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    let tl = gsap.timeline({
      repeat: -1,
      delay: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 100%",
      },
    });

    tl.to(chars, {
      duration: 0.5,
      scaleY: 0.6,
      ease: "power3.out",
      stagger: 0.04,
      transformOrigin: "center bottom",
    })
      .to(
        chars,
        {
          yPercent: -10,
          ease: "elastic",
          stagger: 0.03,
          duration: 0.8,
        },
        0.5
      )
      .to(
        chars,
        {
          scaleY: 1,
          ease: "elastic.out(2, 0.2)",
          stagger: 0.03,
          duration: 1.5,
        },
        0.5
      )
      .to(
        chars,
        {
          color: (i, el, arr) => {
            return endGradient(i / arr.length).hex();
          },
          ease: "power2.out",
          stagger: 0.03,
          duration: 0.3,
        },
        0.5
      )
      .to(
        chars,
        {
          yPercent: 0,
          ease: "back",
          stagger: 0.03,
          duration: 0.8,
        },
        0.7
      )
      .to(chars, {
        color: "hsl(0,0,0)",
        duration: 0.7,
        stagger: 0.05,
      });
  }, []);

  const text = "scroll down";

  return (
    <div>
        <div className="end z-0 text-md md:text-lg dark:text-black" ref={textRef}>
          {text.split("").map((char, i) => (
            <span key={i} style={{ display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
    </div>
  );
}
