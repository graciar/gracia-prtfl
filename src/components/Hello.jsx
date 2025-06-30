import { useRef, useState, useEffect, useContext } from "react";
import gsap from "gsap";
import AnimatedText from "./AnimatedText.jsx";
import ModeToggler from "./ModeToggler.jsx";

export default function Hello() {    
  const greetings = [
    "Hi 👋",
    "Halo 👋",
    "Hola 👋",
    // "Nǐ hǎo 👋",
    "Ciao 👋",
    "Olá 👋",
    "Hoi 👋",
  ];
  const greetingsRef = useRef(null);
//   const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setNextIndex] = useState(1);

    useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
        );
        setNextIndex((prevIndex) =>
          prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
        );
      },
    });

    tl.fromTo(
    greetingsRef.current,
    { y: 150 },
    {
        y: 0,
        duration: 1,
        ease: "power2.inOut",
    }
    ).to(greetingsRef.current, {
        y: -150,
        duration: 1.2,
        delay: 1.5,
        ease: "power2.inOut",
    });
    }, [currentIndex, greetings.length]);


    return (
        <div className="relative flex w-full h-full flex-col px:5 lg:px-30 justify-center items-center min-h-screen">
            
            <div className="flex w-9/12 flex-col justify-center items-center">
                <div className="relative w-full h-40 flex justify-center items-center overflow-hidden">
                    <div
                    ref={greetingsRef}
                    style={{ willChange: "transform, opacity"}}
                    className="absolute max-sm:text-7xl text-8xl z-20 lg:text-9xl font-black font-[barriecito] flex justify-start items-start transition-colors duration-300 ease-in-out"
                    >
                    <p> {greetings[currentIndex]}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-9/12 text-2xl py-7 font-normal tracking-widest mb-6">
                    <p >Welcome to my digital space!</p>
                    {/* <p>Thanks for visiting — take a look around</p> */}
                </div>
            </div>
            <div className="absolute bottom-7 animate-bounce">
                {/* Scroll down to see more 👇 */}
                <AnimatedText/>
                </div>
            
        </div>
    );
}