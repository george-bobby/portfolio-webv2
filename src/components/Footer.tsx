import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Footer = () => {
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
        <motion.h2
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center text-white animate-pulse"
        >
          Contact Me
        </motion.h2>
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
