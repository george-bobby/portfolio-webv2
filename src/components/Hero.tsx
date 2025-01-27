import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Database,
  PenTool,
  Figma,
  Code,
  Cpu,
  Layers,
  Server,
  Terminal,
  Globe,
  Cloud,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [iconPositions, setIconPositions] = useState<{ top: number; left: number; size: number }[]>(
    []
  );

  useEffect(() => {
    // Generate random positions and sizes for the icons once
    const positions = Array.from({ length: 10 }).map(() => ({
      top: Math.random() * 100, // Top percentage
      left: Math.random() * 100, // Left percentage
      size: Math.random() * 50 + 40, // Icon size between 40px to 90px
    }));
    setIconPositions(positions);

    const ctx = gsap.context(() => {
      // Split text for letter animations
      const titleText = new SplitType(headingRef.current!, {
        types: "chars",
        tagName: "span",
      });

      // Letter hover animation
      titleText.chars?.forEach((char) => {
        char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            scale: 1.4,
            color: "#9333EA",
            duration: 0.3,
            ease: "power2.out",
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

      // Floating icons animation
      gsap.to(".floating-icon", {
        y: "-=30", // Float up by 30px
        duration: 3, // Duration for the animation
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse animation
        ease: "power1.inOut", // Smooth floating
        stagger: 0.3, // Delay between icons
      });

      // Initial animations
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
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center"
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {iconPositions.map((position, index) => {
          const Icon = [
            Database,
            PenTool,
            Figma,
            Code,
            Cpu,
            Layers,
            Server,
            Terminal,
            Globe,
            Cloud,
          ][index % 10];

          return (
            <Icon
              key={index}
              className="floating-icon text-primary opacity-20 absolute"
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                transform: `translate(-50%, -50%)`,
                width: `${position.size}px`,
                height: `${position.size}px`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-heading font-bold mb-6"
        >
          Hi, I'm <span className="text-primary">John Doe</span>.
          <br />
          Let's Build Something Extraordinary.
        </h1>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span
            className="text-sm text-muted-foreground cursor-pointer"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          >
            Scroll
          </span>
          <ArrowDown
            className="w-6 h-6 text-primary animate-bounce cursor-pointer"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
