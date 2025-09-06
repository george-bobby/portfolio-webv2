import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import gsap from "gsap";
import SplitType from "split-type";
import { useIsMobile } from "@/utils/use-mobile";
import { useRef } from "react";

const Footer = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();

  // GSAP animation for heading
  useEffect(() => {
    if (!headingRef.current) return;

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
    });

    return () => ctx.revert();
  }, [isMobile]);
  return (
    <footer className="py-20 bg-gradient-to-br from-background via-background/90 to-background relative overflow-hidden">
      {/* Animated background layer from footer-new */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] opacity-20">
        <div className="footer-bg">
          <div className="footer-bg-one" />
          <div className="footer-bg-two" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center text-white animate-pulse"
        >
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>

        <div className="flex justify-center pt-8 mt-12 border-t border-border/20">
          <p className="text-sm md:text-base text-muted-foreground">
            © {new Date().getFullYear()} George Bobby. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
