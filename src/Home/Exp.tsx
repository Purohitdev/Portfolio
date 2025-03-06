"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";

const experiences = [
  {
    company: "TechConative Pvt. Ltd.",
    role: "Software Engineer",
    duration: "Oct 2022 - Present",
    description: [
      "Developed customizable merchandise modules utilizing canvas technology for an e-commerce website, enhancing user experience and enabling personalized product design.",
      "Developed a Node package to facilitate the dynamic enabling and disabling of app preview functionality.",
      "Developed a dynamic web platform enabling users to effortlessly design personalized forms.",
      "Implemented seamless integration with diverse platforms for simultaneous data transmission.",
      "Worked on Prompt2code, an innovative ML model that translates natural language prompts into functional code, significantly improving coding efficiency and accessibility.",
    ],
    technologies: ["ReactJS", "NextJS", "JavaScript", "ES6", "NodeJS", "MySQL", "ExpressJS", "Git", "RestAPI"],
  },
  {
    company: "Bloombytes Pvt. Ltd.",
    role: "Software Developer",
    duration: "Feb 2020 - Oct 2022",
    description: [
      "Created complete Frontend for a Financial Website with an analytical dashboard.",
      "Developed features like File Uploads, complex API endpoints, dynamic and responsive charts and tables.",
      "Built a scalable e-commerce platform with payment gateway integration and inventory management.",
      "Optimized database of an existing system and reduced response time by 40%.",
    ],
    technologies: ["HTML5", "CSS3", "JS", "JQuery", "React", "Node", "Laravel", "Angular 6+", "MySQL", "RestAPI", "Git", "Jira"],
  },
  {
    company: "TLPGlobus Pvt. Ltd.",
    role: "Software Developer",
    duration: "Aug 2019 - Feb 2020",
    description: [
      "Developed several multi-vendor e-commerce systems.",
      "Built an EHR system for local doctors to operate on a single platform.",
    ],
    technologies: ["HTML5", "CSS3", "JS", "JQuery", "WordPress", "Laravel", "MySQL", "RestAPI", "Git", "UI/UX"],
  },
  {
    company: "TryCatch Training",
    role: "Web Development Intern",
    duration: "Nov 2018 - Aug 2019",
    description: [
      "Created a dynamic, user-friendly tour and tourism website featuring advanced search and booking functionalities.",
      "Built a scalable e-commerce platform with a robust bulk product upload system, facilitating efficient inventory management.",
      "Engineered a comprehensive online platform for home and villa rentals, including advanced search filters, booking systems, and user reviews.",
    ],
    technologies: ["HTML5", "CSS3", "JS", "JQuery", "WordPress", "Laravel", "MySQL", "RestAPI"],
  },
];

function Exp() {
  return (
    <section className="w-full py-20 px-6 text-white relative z-[20]">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-2xl flex flex-col items-center justify-center text-center">
          <p className="font-extralight opacity-50 text-[1rem]">EXPERIENCE</p>
          <h1 className="font-light text-[2.5rem] sm:text-[3rem] mt-2">Career Journey</h1>
          <hr className="w-[40%] mt-2" />
          <p className="text-center mt-[3rem] opacity-50 text-[1rem]">
            A timeline of my professional journey, highlighting key roles and achievements.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-12">
        <VerticalTimeline layout="1-column">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#181616", color: "#fff", borderRadius: "10px" }}
              contentArrowStyle={{ borderRight: "7px solid #181616" }}
              date={exp.duration}
              iconStyle={{
                background: "#ffff",
                color: "#000",
                width: "50px",
                height: "50px",
              }}
              icon={<CgWorkAlt size={24} />}
            >
              <h3 className="text-lg sm:text-xl font-semibold">{exp.company}</h3>
              <h4 className="text-sm sm:text-lg text-gray-300">{exp.role}</h4>
              <ul className="mt-2 text-gray-400 text-xs sm:text-sm list-disc list-inside space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Technologies as Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="bg-white opacity-70 text-[10px] sm:text-xs px-3 py-1 rounded-full text-black">
                    {tech}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Exp;
