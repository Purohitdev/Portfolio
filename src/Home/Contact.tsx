import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { useState } from "react";

const socialLinks = [
  { name: "Send an email", icon: FaEnvelope, url: "mailto:shilwantgupta147@gmail.com", bg: "#353535" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/shilwantgupta/", bg: "#353535" },
  { name: "X (Twitter)", icon: FaTwitter, url: "https://twitter.com/yourprofile", bg: "#353535" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/shilwantgupta", bg: "#353535" }
];

const Contact = () => {
  const [email] = useState("");

  return (
    <section className="w-full py-16 px-6 text-white relative" id="Contact">
      <div className="flex flex-col items-center text-center">
        <p className="font-extralight opacity-50 text-lg sm:text-base">CONTACT</p>
        <h1 className="font-light text-[2.5rem] sm:text-[3rem] mt-2">Let's Connect</h1>

        <hr className="w-[30%] mt-2" />

        <p className="text-center mt-8 opacity-50 text-lg sm:text-sm w-[100%] sm:w-[50%]">
          I'm always interested in hearing about new opportunities and connecting with fellow developers. 
          Whether you want to discuss a project or just say hello, feel free to reach out!
        </p>

        

        {/* Contact Buttons */}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          {socialLinks.map(({ name, icon: Icon, url, bg }, index) => (
            <a
              key={index}
              href={name === "Send an email" ? `${url}${email}` : url}
              target={name !== "Send an email" ? "_blank" : ""}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition text-sm sm:text-xs"
              style={{ background: bg, color: "#fff" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#161818";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = bg;
                e.currentTarget.style.color = "#fff";
              }}
            >
              <Icon size={18} />
              {name}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-600 text-sm sm:text-xs text-center">
          <a href="https://dev.impic.tech/">
            <p>Designed & Built by <span className="text-gray-400">dev.impic.tech</span></p>
          </a>
          <p>© 2025 - All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
