import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text for letter animations
      const titleText = new SplitType(headingRef.current!, {
        types: "chars",
        tagName: "span"
      });

      // Letter hover animation
      titleText.chars?.forEach((char) => {
        char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            scale: 1.4,
            color: "#9333EA",
            duration: 0.3,
            ease: "power2.out"
          });
        });

        char.addEventListener("mouseleave", () => {
          gsap.to(char, {
            scale: 1,
            color: "inherit",
            duration: 0.3,
            ease: "power2.in"
          });
        });
      });

      // Parallax layers
      const layers = document.querySelectorAll(".parallax-layer");
      layers.forEach((layer, i) => {
        const depth = (i + 1) * 0.1;
        gsap.to(layer, {
          y: `${100 * depth}%`,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Initial animations
      const tl = gsap.timeline();
      
      tl.from(socialsRef.current, {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.5")
      .from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.7")
      .from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.5");

      // Floating animation for buttons
      gsap.to(buttonsRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center relative overflow-hidden">
      {/* Parallax Background Layers */}
      <div ref={parallaxBgRef} className="absolute inset-0">
        <div className="parallax-layer absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="parallax-layer absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="parallax-layer absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20" />
        </div>
      </div>

      {/* Social Links */}
      <div ref={socialsRef} className="absolute top-8 right-8 flex gap-6 z-10">
        {[
          { icon: Github, href: "https://github.com" },
          { icon: Linkedin, href: "https://linkedin.com" },
          { icon: Twitter, href: "https://twitter.com" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 
            ref={headingRef} 
            className="text-5xl md:text-7xl font-heading font-bold mb-6 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Hi, I'm <span className="text-primary">John Doe</span>.<br />
            Let's Build Something Extraordinary.
            <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/50 transform origin-left transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
          </h1>
          <p ref={textRef} className="text-xl md:text-2xl text-muted-foreground mb-8 hover:scale-105 transition-transform duration-300">
            I build exceptional digital experiences that inspire and innovate.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group relative overflow-hidden hover:scale-105 transition-transform duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
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
      </div>

      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-sm text-muted-foreground">Scroll Down</span>
        <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;