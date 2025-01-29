import { Github, Linkedin, Twitter, ArrowUp, Mail, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Button } from "./ui/button";
import { useToast } from "@/utils/use-toast";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Footer = () => {
  const { toast } = useToast();
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const copyrightRef = useRef<HTMLParagraphElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: 0,
        autoKill: false
      },
      ease: "power3.inOut",
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("george.bobby@example.com");
    toast({
      title: "Email copied to clipboard",
      description: "You can now paste it anywhere!",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background layers
      const layers = parallaxBgRef.current?.querySelectorAll('.parallax-layer');
      layers?.forEach((layer, i) => {
        const depth = (i + 1) * 0.1;
        gsap.to(layer, {
          y: `-${50 * depth}%`,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Floating animations for decorative elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 1,
          from: "random",
        },
      });

      // Content animations on scroll
      gsap.from([contentRef.current, socialsRef.current, skillsRef.current], {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-20 overflow-hidden bg-background">
      {/* Parallax Background Layers */}
      <div ref={parallaxBgRef} className="absolute inset-0 pointer-events-none">
        <div className="parallax-layer absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="parallax-layer absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="parallax-layer absolute inset-0">
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]" />
        </div>

        {/* Decorative floating elements */}
        <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
        <div className="floating-element absolute top-1/3 right-1/4 w-24 h-24 bg-primary/5 rounded-full blur-lg" />
        <div className="floating-element absolute bottom-1/4 left-1/3 w-40 h-40 bg-primary/20 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <div ref={contentRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always excited to collaborate on new projects and ideas
          </p>
          <Button
            size="lg"
            className="group relative overflow-hidden hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Social Links */}
          <div ref={socialsRef} className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold mb-2">Connect With Me</h3>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              george.bobby@example.com
            </button>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              +1 (234) 567-890
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "#", label: "Home" },
                { href: "#projects", label: "Projects" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="flex flex-col items-center gap-6 pt-8 border-t border-border/50">
          <button
            ref={backToTopRef}
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </button>
          <p ref={copyrightRef} className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} George Bobby. All rights reserved.
            <span className="block md:inline md:ml-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              {" • "}
              <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;