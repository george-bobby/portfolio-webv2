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
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const isMobile = useIsMobile();

  // All arrow-related logic removed

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !buttonsRef.current || !scrollIndicatorRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      if (!isMobile) {
        const titleText = new SplitType(headingRef.current, {
          types: "chars",
          tagName: "span",
        });
        if (titleText.chars) {
          gsap.from(titleText.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.02,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.2,
          });
          titleText.chars.forEach((char) => {
            char.addEventListener("mouseenter", () => {
              gsap.to(char, {
                scale: 1.2,
                color: "#9333EA",
                duration: 0.2,
                ease: "power2.out",
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
      } else {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // Button glow effects removed

      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline();
      tl.from(
        buttonsRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "+=0.3"
      ).from(
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
      {/* Background glow effect removed */}
      <FloatingIcons />
      <div className="relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          Hey, I'm <span className="text-primary">George Bobby</span>.
          <br />
          <div className="mt-4 md:mt-6 lg:mt-8 inline-block relative group w-fit mx-auto">
            <span className="font-bold text-white relative z-10">
              <span className="text-muted-foreground">Turning</span>
              <span className="mx-2 relative inline-block hover:text-primary transition-colors duration-300">
                Projects
              </span>
              <span className="text-muted-foreground">into</span>
              <span className="mx-2 relative inline-block hover:text-primary transition-colors duration-300">
                Products
              </span>
            </span>
          </div>
        </h1>
        <div
          ref={buttonsRef}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            onClick={() =>
              window.open("https://github.com/george-bobby/", "_blank")
            }
          >
            <FaGithub className="w-5 h-5 text-white group-hover:text-gray-300 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">
              View on GitHub
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1w8YZT6kKLhOoR_veMWPwlDrzVR3TqTLR/view?usp=sharing",
                "_blank"
              )
            }
          >
            <Download className="w-5 h-5 group-hover:text-primary group-hover:translate-y-[2px] transition-all duration-300" />
            <span className="relative z-10">
              Download Resume
            </span>
          </Button>
        </div>
      </div>
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
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