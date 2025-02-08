
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingIcons from "./hero/FloatingIcons";
import HeroTitle from "./hero/HeroTitle";
import HeroButtons from "./hero/HeroButtons";
import ScrollIndicator from "./hero/ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [iconPositions] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 50 + 40,
    }))
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center px-4"
    >
      <FloatingIcons iconPositions={iconPositions} />
      <div className="relative z-10">
        <HeroTitle />
        <HeroButtons />
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
