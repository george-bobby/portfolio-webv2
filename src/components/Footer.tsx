import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const copyrightRef = useRef<HTMLParagraphElement>(null);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: 0,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from(socialsRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(backToTopRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(copyrightRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        y: 10,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      // Parallax effect for background
      gsap.to(".footer-bg", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-12 bg-secondary/20 overflow-hidden">
      <div className="footer-bg absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center gap-6">
          <div ref={socialsRef} className="flex gap-6">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Twitter, href: "https://twitter.com" },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-200"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <button
            ref={backToTopRef}
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 group"
          >
            Back to Top
            <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300" />
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