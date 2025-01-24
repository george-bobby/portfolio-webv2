import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background effect
      gsap.to(parallaxBgRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 200,
        scale: 1.1,
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
      {/* Parallax Background */}
      <div ref={parallaxBgRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
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
          <h1 ref={headingRef} className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Hi, I'm <span className="text-primary">John Doe</span>.<br />
            Let's Build Something Extraordinary.
          </h1>
          <p ref={textRef} className="text-xl md:text-2xl text-muted-foreground mb-8">
            I build exceptional digital experiences that inspire and innovate.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group relative overflow-hidden"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </div>

      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;