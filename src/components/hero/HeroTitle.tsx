
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const HeroTitle = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const titleText = new SplitType(headingRef.current, {
      types: "chars",
      tagName: "span",
    });

    if (titleText.chars) {
      titleText.chars.forEach((char) => {
        char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            scale: 1.4,
            color: "#9333EA",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        char.addEventListener("mouseleave", () => {
          gsap.to(char, {
            scale: 1,
            color: "inherit",
            duration: 0.3,
            ease: "power2.in",
          });
        });
      });
    }

    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <h1
      ref={headingRef}
      className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
    >
      Hi, I'm <span className="text-primary">George Bobby</span>.
      <br />
      Let's Build Something{" "}
      <span className="whitespace-nowrap">Extraordinary.</span>
    </h1>
  );
};

export default HeroTitle;
