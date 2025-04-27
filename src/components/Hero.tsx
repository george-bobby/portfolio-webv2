"use client";

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (
      !sectionRef.current ||
      !headingRef.current ||
      !buttonsRef.current ||
      !scrollIndicatorRef.current
    ) {
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

  // GIF arrow animation
  useEffect(() => {
    const projectsElement = document.querySelector(".projects-text");
    const productsElement = document.querySelector(".products-text");

    if (!projectsElement || !productsElement) return;

    // Create and append the GIF container
    const gifContainer = document.createElement("div");
    gifContainer.className =
      "gif-arrow-container absolute w-full flex justify-center";
    gifContainer.style.opacity = "0";
    gifContainer.style.pointerEvents = "none";
    // Position it between the text and buttons
    gifContainer.style.top = "100%";
    gifContainer.style.marginTop = "-200px";

    // Create and append the img element
    const img = document.createElement("img");
    img.src = "/anim.gif";
    img.alt = "Arrow animation";
    img.className = "h-auto w-auto"; // Maintain original size
    img.style.maxWidth = "600px"; // Control the size
    gifContainer.appendChild(img);

    // Find the container and append the GIF container
    const container = document.querySelector(".arrow-container");
    if (container) {
      // Remove any existing elements first
      const existingElements = container.querySelectorAll(
        ".gif-arrow-container, .hand-drawn-arrow"
      );
      existingElements.forEach((el) => el.remove());

      container.appendChild(gifContainer);
    }

    // Animation for when Projects is hovered
    projectsElement.addEventListener("mouseenter", () => {
      // Show the GIF container
      gsap.to(gifContainer, {
        opacity: 1,
        duration: 0.3,
      });

      // Highlight "Products" text
      gsap.to(productsElement, {
        color: "white",
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    projectsElement.addEventListener("mouseleave", () => {
      // Hide the GIF container
      gsap.to(gifContainer, {
        opacity: 0,
        duration: 0.3,
      });

      // Reset "Products" text
      gsap.to(productsElement, {
        color: "inherit",
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
    });

    // Cleanup
    return () => {
      if (gifContainer.parentNode) {
        gifContainer.parentNode.removeChild(gifContainer);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center px-4"
    >
      <FloatingIcons />
      <div className="relative z-10 flex flex-col items-center">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          Hey, I'm <span className="text-primary">George Bobby</span>.
          <br />
          <div className="mt-4 md:mt-6 lg:mt-8 inline-block relative group w-fit mx-auto">
            <span className="font-bold text-white relative z-10">
              <span className="text-muted-foreground">Turning</span>
              <span className="mx-2 relative inline-block hover:text-primary transition-colors duration-300 projects-text">
                Projects
              </span>
              <span className="text-muted-foreground">into</span>
              <span className="mx-2 relative inline-block hover:text-primary transition-colors duration-300 products-text">
                Products
              </span>
            </span>

            {/* Container for the GIF arrow - positioned relative to this text */}
            <div className="arrow-container relative w-full h-16"></div>
          </div>
        </h1>

        {/* Small gap between animation area and buttons */}
        <div className="h-6"></div>

        <div
          ref={buttonsRef}
          className="flex flex-wrap gap-4 justify-center items-center mt-6"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            onClick={() =>
              window.open("https://github.com/george-bobby/", "_blank")
            }
          >
            <FaGithub className="w-5 h-5 text-white group-hover:text-gray-300 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">View on GitHub</span>
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
            <span className="relative z-10">Download Resume</span>
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
