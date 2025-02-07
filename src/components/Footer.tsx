import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { toast } = useToast();
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLParagraphElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("george.bobby@example.com");
    toast({
      title: "Email copied to clipboard",
      description: "You can now paste it anywhere!",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "563e657c-2024-43e0-aef1-585384939075");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      if (parallaxBgRef.current) {
        const layers = parallaxBgRef.current.querySelectorAll('.parallax-layer');
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
      }

      const floatingElements = document.querySelectorAll('.floating-element');
      if (floatingElements.length > 0) {
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
      }

      if (contentRef.current && socialsRef.current) {
        gsap.from([contentRef.current, socialsRef.current], {
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
      }
    });

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-heading font-bold">
              Get in Touch
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Contact Form Submission" />
              <input type="hidden" name="redirect" value="false" />

              <motion.div variants={itemVariants}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  disabled={isSubmitting}
                  className="min-h-[150px] transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Social Links and Contact Info */}
          <div ref={socialsRef} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect With Me</h3>
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

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
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
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-6 pt-8 mt-12 border-t border-border/50">
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
