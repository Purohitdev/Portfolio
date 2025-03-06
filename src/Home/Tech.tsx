"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaReact, FaNodeJs, FaPhp, FaPython, FaHtml5, FaGitAlt, FaAws } from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiNextdotjs, SiNestjs, SiJquery, SiLaravel, SiWordpress, SiDjango, SiPostman, SiMui, SiTailwindcss, SiCss3, SiBootstrap, SiDocker, SiExpress } from "react-icons/si";

const techSkills = [
    { category: "Languages", items: [{ name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> }, { name: "ES6", icon: <SiJavascript className="text-yellow-400" /> }, { name: "PHP", icon: <FaPhp className="text-blue-600" /> }, { name: "Python", icon: <FaPython className="text-blue-400" /> }, { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> }] },
    { category: "Database", items: [{ name: "MySQL", icon: <SiMysql className="text-blue-500" /> }, { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }] },
    { category: "JS /Frameworks", items: [{ name: "ReactJS", icon: <FaReact className="text-blue-400" /> }, { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> }, { name: "ExpressJS", icon: <SiExpress className="text-gray-300" /> }, { name: "NextJS", icon: <SiNextdotjs className="text-white" /> }, { name: "NestJS", icon: <SiNestjs className="text-red-500" /> }, { name: "jQuery", icon: <SiJquery className="text-blue-400" /> }] },
    { category: "Frameworks", items: [{ name: "Laravel", icon: <SiLaravel className="text-red-500" /> }, { name: "WordPress", icon: <SiWordpress className="text-blue-500" /> }, { name: "Django", icon: <SiDjango className="text-green-500" /> }] },
    { category: "Other Tech", items: [{ name: "REST APIs", icon: <SiPostman className="text-orange-500" /> }, { name: "Postman", icon: <SiPostman className="text-orange-500" /> }, { name: "Git", icon: <FaGitAlt className="text-orange-500" /> }, { name: "MUI", icon: <SiMui className="text-blue-500" /> }, { name: "Tailwind", icon: <SiTailwindcss className="text-blue-300" /> }, { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> }, { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> }, { name: "Docker", icon: <SiDocker className="text-blue-400" /> }, { name: "AWS", icon: <FaAws className="text-yellow-500" /> }] }
];

const TechnicalSkills: React.FC = () => {
    const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeCategory, setActiveCategory] = useState(techSkills[0].category);

    useEffect(() => {
        boxRefs.current.forEach((box) => {
            if (box) {
                const tl = gsap.timeline({ paused: true });
                tl.to(box, { scale: 1.1, y: -5, duration: 0.3, ease: "power2.out" });

                box.addEventListener("mouseenter", () => tl.play());
                box.addEventListener("mouseleave", () => tl.reverse());
            }
        });

        return () => {
            boxRefs.current.forEach((box) => {
                if (box) {
                    box.removeEventListener("mouseenter", () => {});
                    box.removeEventListener("mouseleave", () => {});
                }
            });
        };
    }, []);

    const filteredSkills = techSkills.find(cat => cat.category === activeCategory)?.items || [];

    return (
        <section className="w-full py-20 px-6 text-white relative z-[20]">
            <div className="flex justify-center items-center">
                <div className="w-full max-w-2xl flex flex-col items-center justify-center text-center">
                    <p className="font-extralight opacity-50 text-[1rem]">SKILLS</p>
                    <h1 className="font-light text-[2.5rem] sm:text-[3rem] mt-2">Technical Skills</h1>
                    <hr className="w-[40%] mt-2" />
                    <p className='text-center mt-[3rem] opacity-50 text-[1rem]'>
                        The technologies and tools I use to bring ideas to life. My stack is constantly evolving as I explore new ways to create better solutions.
                    </p>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex justify-center gap-3 flex-wrap mt-8">
                {techSkills.map(({ category }) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-lg transition-all text-sm sm:text-base ${
                            activeCategory === category ? "bg-white text-black" : "bg-[#222] text-gray-300 hover:bg-[#ffffff7e] hover:text-black"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto px-4 sm:px-0">
                {filteredSkills.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) boxRefs.current.push(el);
                        }}
                        className="bg-[#111] rounded-xl p-6 flex flex-col items-center gap-3 shadow-md transition-transform duration-300 hover:shadow-lg box"
                    >
                        <div className="text-4xl">{item.icon}</div>
                        <p className="text-lg font-semibold text-gray-300">{item.name}</p>
                        <span className="text-xs text-gray-400">{activeCategory}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalSkills;
