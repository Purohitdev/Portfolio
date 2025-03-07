"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaUniversity } from "react-icons/fa";

const educationData = [
    {
        degree: "Bachelor of Computer Application",
        university: "Vinoba Bhave University, Hazaribagh",
        duration: "March 2014 - Jul 2017",
        details: [
            "Aced training and coding tracks",
            "Developed School Management System Software which saved 40 man-hours per month.",
            "Developed Tourism android app which led to inception of a new startup",
        ],
    },
];

const Education: React.FC = () => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );
        }
    }, []);

    return (
        <section className="min-h-[70vh] w-full py-20 px-6 text-white relative z-[20]" id="Education">
            <div className="flex justify-center items-center">
                <div className="w-full max-w-2xl flex flex-col items-center justify-center text-center">
                    <p className="font-extralight opacity-50 text-[1rem] tracking-wide">EDUCATION</p>
                    <h1 className="font-light text-[2.5rem] sm:text-[3rem] mt-2">Academic Background</h1>
                    <hr className="w-[40%] mt-2 border-t-2 border-gray-500" />
                    <p className="text-center mt-[1rem] opacity-50 text-[1rem] ">
                        The knowledge and experiences that shaped my technical journey.  
                        My education provided the foundation for problem-solving and innovation.
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        ref={cardRef}
                        className="bg-[#111] rounded-xl p-6 flex flex-col gap-4 shadow-md max-w-3xl mx-auto transition-transform duration-300 hover:shadow-lg"
                    >
                        <div className="flex items-center gap-4">
                            <FaUniversity className="text-4xl text-yellow-500" />
                            <div>
                                <h2 className="text-xl font-semibold">{edu.degree}</h2>
                                <p className="text-gray-400">{edu.university}</p>
                                <p className="text-sm text-gray-500">{edu.duration}</p>
                            </div>
                        </div>
                        <ul className="list-disc pl-6 text-gray-300">
                            {edu.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
