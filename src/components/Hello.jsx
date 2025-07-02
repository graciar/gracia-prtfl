import { useRef, useState, useEffect, useContext } from "react";
import gsap from "gsap";
import AnimatedText from "./AnimatedText.jsx";
import ModeToggler from "./ModeToggler.jsx";

export default function Hello() {    
    const greetings = [
    "Hi 👋",
    "Halo 👋",
    "Hola 👋",
    "Ciao 👋",
    "Olá 👋",
    "Hoi 👋",
    ];

    const greetingsRef = useRef(null);
    const currentIndexRef = useRef(0); // mutable reference for index
    const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

    useEffect(() => {
    const tl = gsap.timeline({
        repeat: -1,
        onRepeat: () => {
        // update index without causing re-render
        currentIndexRef.current =
            (currentIndexRef.current + 1) % greetings.length;
        setCurrentGreeting(greetings[currentIndexRef.current]);
        },
    });

    tl.fromTo(
        greetingsRef.current,
        { y: 150, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        }
    ).to(greetingsRef.current, {
        y: -150,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power2.in",
    });

    return () => tl.kill(); // clean up on unmount
    }, []);

    return (
        <div className="relative flex w-full h-full flex-col px:5 lg:px-30 justify-center items-center min-h-screen">
            
            <div className="flex w-9/12 flex-col justify-center items-center">
                <div className="relative w-full h-40 flex justify-center items-center overflow-hidden">
                    <div
                    ref={greetingsRef}
                    style={{ willChange: "transform, opacity"}}
                    className="absolute max-sm:text-7xl text-8xl z-20 lg:text-9xl font-black font-[barriecito] flex justify-start items-start transition-colors duration-300 ease-in-out"
                    >
                    <h1 ref={greetingsRef}>{currentGreeting}</h1>
                    </div>
                </div>
                <div className="flex justify-center w-9/12 text-3xl max-sm:text-lg pt-7 font-normal tracking-widest mb-3">
                    <p className="">I’m <strong>Gracia</strong>, and welcome to my portfolio.</p>
                </div>
                <div className="text-gray-700"><p>I’m a student learning web development and working on projects to grow my skills.</p></div>
                <div className="m-3"><ModeToggler /></div>
            </div>
            <div className="absolute bottom-7 animate-bounce">
                {/* Scroll down to see more 👇 */}
                <AnimatedText/>
                </div>
            
        </div>
    );
}