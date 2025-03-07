


import { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";

const projects = [
    {
        year: "2024",
        title: "Medium Clone",
        description: "A full-stack blogging platform inspired by Medium with authentication, rich text editing, and responsive design.",
        techStack: ["Express.js", "Node.js", "MongoDB", "TailwindCSS", "EJS"]
    },
    {
        year: "2023",
        title: "Portfolio Website",
        description: "Designed and developed a sleek, interactive portfolio to showcase projects and skills.",
        techStack: ["React", "Next.js", "TailwindCSS", "Vercel"]
    },
    {
        year: "2024",
        title: "Medium Clone",
        description: "A full-stack blogging platform inspired by Medium with authentication, rich text editing, and responsive design.",
        techStack: ["React", "Firebase", "Chakra UI"]
    }
];

const Projects: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize(); // Check on initial load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='min-h-screen w-full relative z-[20] text-white px-6 sm:px-12 lg:px-26 flex flex-col gap-8 items-center pb-12'id="Project">
            <div className="w-full sm:w-2/3 flex flex-col items-center justify-center text-center">
                <p className='font-extralight opacity-50 text-sm sm:text-[1rem]'>SHOWCASE</p>
                <h1 className='font-light text-2xl sm:text-[3rem] mt-2'>Featured Projects</h1>
                <hr className='w-[30%] mt-2' />
                <p className='mt-6 sm:mt-[3rem] opacity-50 text-sm sm:text-[1rem]'>
                    A showcase of my recent work, featuring full-stack applications and innovative solutions.
                    Each project represents a unique challenge and demonstrates my commitment to clean code and user experience.
                </p>
            </div>

            <VerticalTimeline layout={isMobile ? "1-column" : "2-columns"}>
                {projects.map((project, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1a1a1a", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
                        date={project.year}
                        position={isMobile ? "right" : index % 2 === 0 ? "left" : "right"}
                        iconStyle={{ background: "#fff", color: "#000" }}
                        icon={<FaReact />}
                    >
                        <h3 className="text-sm sm:text-[0.8rem] mb-2 sm:mb-4">Featured Project {index + 1}</h3>
                        <h1 className="text-lg sm:text-xl font-semibold">{project.title}</h1>
                        <p className="opacity-70 text-sm sm:text-base">{project.description}</p>

                        {/* TECH STACK */}
                        <div className="flex flex-wrap mt-4 gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="bg-white opacity-70 text-xs px-3 py-1 rounded-full text-black">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Projects;
