import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import FloatingIcons from "./elements/FloatingIcons";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const glowRef = useRef<HTMLDivElement>(null);

  // Track mouse position for the glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update glow position based on mouse movement
  useEffect(() => {
    if (glowRef.current && sectionRef.current) {
      const { x, y } = mousePosition;
      const sectionRect = sectionRef.current.getBoundingClientRect();

      gsap.to(glowRef.current, {
        x: x - sectionRect.left,
        y: y - sectionRect.top,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  }, [mousePosition]);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !buttonsRef.current || !scrollIndicatorRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Split text animation
      const titleText = new SplitType(headingRef.current!, {
        types: "chars",
        tagName: "span",
      });

      if (titleText.chars) {
        // Initial animation for each character
        gsap.from(titleText.chars, {
          opacity: 0,
          y: gsap.utils.random(20, 80, 10),
          rotationX: gsap.utils.random(-90, 90, 10),
          stagger: 0.03,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.2
        });

        // Interactive hover effect
        titleText.chars.forEach((char) => {
          char.addEventListener("mouseenter", () => {
            gsap.to(char, {
              scale: 1.4,
              color: "#9333EA",
              duration: 0.3,
              ease: "power2.out",
              yoyo: true,
              repeat: 1,
              repeatDelay: 0.1
            });
          });

          char.addEventListener("mouseleave", () => {
            gsap.to(char, {
              scale: 1,
              color: "inherit",
              duration: 0.3,
              ease: "power2.in",
            });
          });
        });
      }

      // Button hover effects
      const buttons = buttonsRef.current.querySelectorAll('button');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            boxShadow: '0 0 15px rgba(147, 51, 234, 0.5)',
            duration: 0.3
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            boxShadow: 'none',
            duration: 0.3
          });
        });

        button.addEventListener('mousedown', () => {
          gsap.to(button, {
            scale: 0.95,
            duration: 0.1
          });
        });

        button.addEventListener('mouseup', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.1
          });
        });
      });

      // Scroll indicator pulse animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      });

      // Main entrance animation
      const tl = gsap.timeline();

      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          buttonsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          scrollIndicatorRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center px-4"
    >
      {/* Glow effect that follows cursor */}
      <div
        ref={glowRef}
        className="absolute w-[300px] h-[300px] rounded-full bg-primary/20 blur-[80px] pointer-events-none opacity-70"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      <FloatingIcons />

      <div className="relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
        >
          Hi, I'm <span className="text-primary">George Bobby</span>.
          <br />
          Turning Projects Into Products
        </h1>
        <div
          ref={buttonsRef}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            onClick={() => window.open("https://github.com/george-bobby/", "_blank")}
          >
            <Github className="w-5 h-5 text-white group-hover:text-gray-300 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">
              View on GitHub
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            onClick={() => window.open("https://drive.google.com/file/d/1w4ijqOQZ0H0P1J4brWwQfOyEZkr5IttU/view?usp=drive_link", "_blank")}
          >
            <Download className="w-5 h-5 group-hover:text-primary group-hover:translate-y-[2px] transition-all duration-300" />
            <span className="relative z-10">
              Download CV
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Button>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
          Scroll
        </span>
        <ArrowDown className="w-6 h-6 text-primary animate-bounce hover:text-white transition-colors duration-300" />
      </div>
    </section>
  );
};

export default Hero;
