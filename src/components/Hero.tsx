import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import FloatingIcons from "./FloatingIcons";
import { useIsMobile } from "@/utils/use-mobile";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Throttle function to limit the rate of function calls
  const throttle = (callback: Function, delay: number) => {
    let lastCall = 0;
    return (...args: any[]) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      callback(...args);
    };
  };

  // Track mouse position for the glow effect - with throttling for performance
  useEffect(() => {
    if (isMobile) return; // Skip on mobile devices

    const handleMouseMove = throttle((e: MouseEvent) => {
      // Update glow position directly without state update for better performance
      if (glowRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        gsap.to(glowRef.current, {
          x: e.clientX - sectionRect.left,
          y: e.clientY - sectionRect.top,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }, 50); // Throttle to 50ms

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !buttonsRef.current || !scrollIndicatorRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Split text animation - only on desktop for better performance
      if (!isMobile) {
        const titleText = new SplitType(headingRef.current!, {
          types: "chars",
          tagName: "span",
        });

        if (titleText.chars) {
          // Initial animation for each character
          gsap.from(titleText.chars, {
            opacity: 0,
            y: 20, // Simplified animation
            stagger: 0.02, // Faster stagger
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.2
          });

          // Interactive hover effect - only add to desktop
          if (!isMobile) {
            titleText.chars.forEach((char) => {
              char.addEventListener("mouseenter", () => {
                gsap.to(char, {
                  scale: 1.2, // Reduced scale for better performance
                  color: "#9333EA",
                  duration: 0.2,
                  ease: "power2.out"
                });
              });

              char.addEventListener("mouseleave", () => {
                gsap.to(char, {
                  scale: 1,
                  color: "inherit",
                  duration: 0.2,
                  ease: "power2.in",
                });
              });
            });
          }
        }
      } else {
        // Simple animation for mobile
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      // Button hover effects - only on desktop
      if (!isMobile) {
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
      }

      // Scroll indicator pulse animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      });

      // Main entrance animation - simplified for better performance
      const tl = gsap.timeline();

      // Skip heading animation as it's already handled above
      tl.from(
        buttonsRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "+=0.3"
      )
        .from(
          scrollIndicatorRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center px-4"
    >
      {/* Glow effect that follows cursor - only on desktop */}
      {!isMobile && (
        <div
          ref={glowRef}
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/20 blur-[80px] pointer-events-none opacity-70"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      )}

      <FloatingIcons />

      <div className="relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          Hi, I'm <span className="text-primary">George Bobby</span>.
          <br />
          <span className="mt-4 md:mt-6 lg:mt-8 inline-block">Turning Projects Into Products</span>
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
            <FaGithub className="w-5 h-5 text-white group-hover:text-gray-300 group-hover:rotate-12 transition-transform duration-300" />
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
