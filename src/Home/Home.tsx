import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Nav from "../Nav";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Tech from "./Tech";
import Exp from "./Exp";
import Contact from "./Contact";
import Education from "./Education";
import Loading from "../Loading";

function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const updateCursorEffect = () => {
      const elements = document.querySelectorAll("h1, p, img, .box, span");
      const navSpans = document.querySelectorAll("#Nav span");

      elements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          gsap.to(cursorRef.current, {
            scale: 4,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            duration: 0.2,
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(cursorRef.current, {
            scale: 1,
            backgroundColor: "transparent",
            duration: 0.2,
          });
        });
      });

      navSpans.forEach((navSpan) => {
        navSpan.addEventListener("mouseenter", () => {
          gsap.to(cursorRef.current, {
            scale: 2, // Smaller scale for nav spans
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            duration: 0.2,
          });
        });

        navSpan.addEventListener("mouseleave", () => {
          gsap.to(cursorRef.current, {
            scale: 1,
            backgroundColor: "transparent",
            duration: 0.2,
          });
        });
      });
    };

    updateCursorEffect();

    const observer = new MutationObserver(() => {
      updateCursorEffect();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
         <Loading/>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Education/>
      <Exp />
      <Contact />

      {/* Cursor Follower */}
      <div
        ref={cursorRef}
        className="cursor h-[30px] w-[30px] border border-white rounded-full fixed top-0 left-0 z-[50] pointer-events-none mix-blend-difference"
      ></div>
    </>
  );
}

export default Home;
