import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Marquee from "react-fast-marquee";
import { FaCode, FaNodeJs, FaReact, FaDatabase, FaServer, FaCloud, FaLaptopCode } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin for smooth scrolling

function Hero() {
    const fullStackText = useRef<HTMLHeadingElement | null>(null);
    const scrollButton = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!fullStackText.current || window.innerWidth < 768) return; // Disable animation on small screens

        // Hover animation for "Full-Stack"
        const hoverAnimationFullStack = gsap.to(fullStackText.current, {
            fontSize: "12.1rem",
            opacity: 0.4,
            duration: 0.3,
            ease: "power2.out",
            paused: true,
        });

        // Event listeners for "Full-Stack"
        const handleMouseEnterFullStack = () => hoverAnimationFullStack.play();
        const handleMouseLeaveFullStack = () => hoverAnimationFullStack.reverse();

        fullStackText.current.addEventListener("mouseenter", handleMouseEnterFullStack);
        fullStackText.current.addEventListener("mouseleave", handleMouseLeaveFullStack);

        return () => {
            fullStackText.current?.removeEventListener("mouseenter", handleMouseEnterFullStack);
            fullStackText.current?.removeEventListener("mouseleave", handleMouseLeaveFullStack);
        };
    }, []);

    useEffect(() => {
        if (!scrollButton.current) return;

        // Scroll indication animation (bouncing effect)
        gsap.to(scrollButton.current, {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: "power1.inOut",
        });
    }, []);

    // Smooth Scroll Function
    const handleScroll = () => {
        gsap.to(window, { duration: 1, scrollTo: "#About", ease: "power2.inOut" });
    };

    const marqueeItems = [
        { name: "Full-Stack", icon: <FaCode /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Database", icon: <FaDatabase /> },
        { name: "Backend", icon: <FaServer /> },
        { name: "Cloud", icon: <FaCloud /> },
        { name: "Frontend", icon: <FaLaptopCode /> },
    ];

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center text-white relative px-4" id="Home">
            {/* Hero Content */}
            <div className="h-[70vh] w-full flex flex-col justify-center items-center text-center">
                <h1
                    ref={fullStackText}
                    className="dynamic-text leading-none uppercase font-black opacity-30 sm:cursor-pointer"
                >
                    Full-Stack
                </h1>
                <h1 className="dynamic-text leading-none uppercase font-black">
                    Developer
                </h1>

                <div className="mt-5 flex flex-col gap-4 items-center justify-center w-full max-w-[600px]">
                    <p className="text-sm sm:text-base">Scroll down for more information...</p>
                    <hr className="w-full border-t border-gray-300" />
                    <button 
                        ref={scrollButton}
                        onClick={handleScroll} // Call smooth scroll function
                        className="px-4 py-4 border text-lg sm:text-2xl rounded-full bg-[#ffffff70] text-[#161818] w-fit opacity-60 transition-transform hover:scale-110"
                    >
                        <FaArrowDownLong />
                    </button>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="w-full absolute bottom-0 py-4 opacity-70">
                <Marquee speed={50} gradient={false} autoFill={true} style={{ background: "linear-gradient(to right, #000000, #333333)" }} className="py-3">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="flex items-center text-white text-lg sm:text-2xl mx-4 sm:mx-10">
                            {item.icon} <span className="ml-2">{item.name}</span>
                        </div>
                    ))}
                </Marquee>
                <Marquee speed={50} gradient={false} direction="right" autoFill={true} style={{ background: "linear-gradient(to right, #000000, #333333)" }} className="py-3">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="flex items-center text-white text-lg sm:text-2xl mx-4 sm:mx-10">
                            {item.icon} <span className="ml-2">{item.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Hero;
