
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

const ScrollIndicator = () => {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollIndicatorRef.current) return;

    gsap.from(scrollIndicatorRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
    });
  }, []);

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div
      ref={scrollIndicatorRef}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
    >
      <span
        className="text-sm text-muted-foreground cursor-pointer"
        onClick={handleScroll}
      >
        Scroll
      </span>
      <ArrowDown
        className="w-6 h-6 text-primary animate-bounce cursor-pointer"
        onClick={handleScroll}
      />
    </div>
  );
};

export default ScrollIndicator;
