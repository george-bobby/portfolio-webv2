
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="py-20 bg-gradient-to-br from-background via-background/90 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
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
