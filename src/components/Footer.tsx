import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const copyrightRef = useRef<HTMLParagraphElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: 0,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background effect
      gsap.to(parallaxBgRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
        scale: 1.1,
      });

      // Content animations
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Social icons animation
      gsap.from(socialsRef.current?.children || [], {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-20 overflow-hidden bg-background">
      {/* Parallax Background */}
      <div ref={parallaxBgRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div ref={contentRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always excited to collaborate on new projects and ideas
          </p>
          <Button
            size="lg"
            className="group relative overflow-hidden"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>

        <div ref={socialsRef} className="flex justify-center gap-6 mb-8">
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

        <div className="flex flex-col items-center gap-4">
          <button
            ref={backToTopRef}
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </button>
          <p ref={copyrightRef} className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;