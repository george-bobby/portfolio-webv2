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
  Mail,
  Linkedin,
  Briefcase,
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
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 50 + 40,
    }));
    setIconPositions(positions);

    const ctx = gsap.context(() => {
      const titleText = new SplitType(headingRef.current!, {
        types: "chars",
        tagName: "span",
      });

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

      gsap.to(".floating-icon", {
        y: "-=30",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3,
      });

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

      <div className="relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
        >
          Hi, I'm <span className="text-primary">George Bobby</span>.
          <br />
          Let's Build Something <span className="whitespace-nowrap">Extraordinary.</span>
        </h1>
        <div
          ref={buttonsRef}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Button size="lg" variant="outline" className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2" onClick={() => window.location.href = "mailto:your.email@example.com"}>
            <Mail className="w-5 h-5 group-hover:text-primary" />
            <span className="relative z-10">Email Me</span>
          </Button>
          <Button size="lg" className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            <Briefcase className="w-5 h-5 text-white group-hover:text-gray-300" />
            <span className="relative z-10">View My Work</span>
          </Button>
          <Button size="lg" variant="outline" className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2" onClick={() => window.open("https://linkedin.com", "_blank")}>
            <Linkedin className="w-5 h-5 group-hover:text-primary" />
            <span className="relative z-10">Connect on LinkedIn</span>
          </Button>
        </div>
      </div>

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
    </section>
  );
};

export default Hero;
