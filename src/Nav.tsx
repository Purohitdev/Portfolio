
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaHome, FaUser, FaBriefcase, FaWrench, FaEnvelope, FaFolderOpen, FaUniversity } from "react-icons/fa";
import { ReactNode } from "react"; // Import ReactNode

gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin for smooth scrolling

const Navbar = () => {
  // Smooth Scroll Function
  const handleScroll = (id: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: window.innerHeight * 0.12 }, // Moves 20vh above the section
      ease: "power2.inOut"
    });
  };


  return (
    <div className="fixed top-0 right-0 w-full flex items-center text-white py-6 px-3 sm:px-28 backdrop-blur-md bg-black-400/10 z-[50] 
                justify-center sm:justify-between" id="Nav">
      <h1 className="font-bold text-[1.5rem] capitalize sm:block hidden">
        <a href="/">
        Shilwant
        </a>
      </h1>

      {/* Nav Items - Scrollable on small screens */}
      <div className="flex bg-[#161818] items-center gap-2 px-4 sm:px-6 py-2 border border-white/20 shadow-lg rounded-full 
                      overflow-x-auto flex-nowrap max-w-fit sm:max-w-none">
        <NavItem icon={<FaHome />} label="Home" onClick={() => handleScroll("Home")} />
        <NavItem icon={<FaUser />} label="About" onClick={() => handleScroll("About")} />
        <NavItem icon={<FaFolderOpen />} label="Projects" onClick={() => handleScroll("Project")} />
        <NavItem icon={<FaWrench />} label="Tools" onClick={() => handleScroll("Tech")} />
        <NavItem icon={<FaUniversity />} label="Education" onClick={() => handleScroll("Education")} />



        <NavItem icon={<FaBriefcase />} label="Experience" onClick={() => handleScroll("Exp")} />
        <NavItem icon={<FaEnvelope />} label="Contact" onClick={() => handleScroll("Contact")} />
      </div>

      {/* Profile Icon */}
      <div className="hidden sm:flex h-[40px] w-[40px] rounded-full border border-white bg-white overflow-hidden ">
        <img src="https://i.pinimg.com/736x/7c/8a/67/7c8a67c3242f50448bcefaa553f61cf2.jpg" alt="Shilwant image" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, onClick }: { icon: ReactNode; label: string; onClick: () => void }) => {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 text-white hover:bg-white/20 transition rounded-full cursor-pointer"
      onClick={onClick} // Call the scroll function
    >
      {icon}
      <span className="hidden sm:block text-sm font-medium">{label}</span> {/* Hide text on small screens */}
    </div>
  );
};

export default Navbar;
