import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Marquee from "react-fast-marquee";
import { FaCode, FaNodeJs, FaReact, FaDatabase, FaServer, FaCloud, FaLaptopCode } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

import Loading from "../Loading"; // Import the Loading component
import Navbar from "../Nav";

gsap.registerPlugin(ScrollToPlugin);

function Hero() {
    const [loading, setLoading] = useState(true);
    const fullStackText = useRef(null);
    const scrollButton = useRef(null);
    const marqueeRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    useLayoutEffect(() => {
        if (!loading) {
            const ctx = gsap.context(() => {
                gsap.set([fullStackText.current, scrollButton.current, marqueeRef.current], { visibility: "visible" });

                gsap.timeline()
                    .from(fullStackText.current, { opacity: 0, duration: 1.2, ease: "power2.out" })
                    .from(scrollButton.current, { opacity: 0, y: 10, duration: 1.2, ease: "power2.out" }, "-=0.5")
                    .from(marqueeRef.current, { y: 50, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5");
            });

            return () => ctx.revert();
        }
    }, [loading]);

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

    if (loading) return <Loading />;

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center text-white relative px-4" id="Home">
         <Navbar/>

            <div className="h-[70vh] w-full flex flex-col justify-center items-center text-center">
                <h1
                    ref={fullStackText}
                    className="dynamic-text leading-none uppercase font-black sm:cursor-pointer"
                    style={{ visibility: "hidden" }}
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
                        onClick={handleScroll}
                        className="px-4 py-4 border text-lg sm:text-2xl rounded-full bg-[#ffffff70] text-[#161818] w-fit transition-transform hover:scale-110"
                        style={{ visibility: "hidden" }}
                    >
                        <FaArrowDownLong />
                    </button>
                </div>
            </div>

            <div ref={marqueeRef} className="w-full absolute bottom-0 py-4" style={{ visibility: "hidden" }}>
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