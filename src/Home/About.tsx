import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  { name: "Send an email", icon: FaEnvelope, url: "mailto:shilwantgupta147@gmail.com" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/shilwantgupta/" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/shilwantgupta" } // Add your GitHub URL
];

function About() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          ease: "power2.out",
          paused: true,
          overwrite: "auto"
        }
      );

      imgRef.current.addEventListener("mouseenter", () => gsap.to(imgRef.current, { scale: 1.1 }));
      imgRef.current.addEventListener("mouseleave", () => gsap.to(imgRef.current, { scale: 1 }));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center text-white px-6 sm:px-12 lg:px-26 z-[20] relative mb-20 lg:mb-6" id="About">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
        
        {/* Image Section */}
        <div className="p-2 border border-[#343333] rounded-2xl overflow-hidden bg-cover bg-center w-full sm:w-[80%] lg:w-[40%]">
          <div className="border border-[#343333] overflow-hidden rounded-3xl">
            <img
              ref={imgRef}
              src="https://i.pinimg.com/736x/7c/8a/67/7c8a67c3242f50448bcefaa553f61cf2.jpg"
              alt="Shilwant Kumar Gupta"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center items-start px-4 sm:px-8">
          <button className="border border-[#343333] px-4 py-2 rounded-2xl bg-[#343333] font-light">
            About Me
          </button>
          <h3 className="text-lg sm:text-xl mt-6 leading-tight">Hey, I'm</h3>
          <h1 className="text-3xl sm:text-5xl font-bold cursor-pointer leading-tight my-3">
            Shilwant Kumar Gupta
          </h1>
          <p className="text-sm sm:text-base">
            Versatile Full Stack Software Developer with 5 years of hands-on experience across a spectrum of
            web and app technologies. Proficient in NodeJS, ReactJS, NextJS, NestJS, MySQL, MongoDB, core PHP, and frameworks including Laravel, CodeIgniter, and Magento2. Skilled in MERN and MEAN stack development and experienced in Django projects. Seeking opportunities to leverage diverse expertise in full stack development roles. 🚀
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap mt-5 gap-3 sm:gap-5">
            {socialLinks.map(({ name, icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fffb] rounded-2xl text-black px-4 py-2 text-xs sm:text-sm flex items-center gap-2 transition hover:bg-[#343333] hover:text-white"
              >
                <Icon size={16} /> {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
