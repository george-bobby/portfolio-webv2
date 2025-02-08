
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Download } from "lucide-react";
import gsap from "gsap";

const HeroButtons = () => {
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonsRef.current) return;

    gsap.from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div
      ref={buttonsRef}
      className="flex flex-wrap gap-4 justify-center items-center"
    >
      <Button
        size="lg"
        className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        onClick={() => window.open("https://github.com/george-bobby/", "_blank")}
      >
        <Github className="w-5 h-5 text-white group-hover:text-gray-300" />
        <span className="relative z-10">View on GitHub</span>
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1w4ijqOQZ0H0P1J4brWwQfOyEZkr5IttU/view?usp=drive_link",
            "_blank"
          )
        }
      >
        <Download className="w-5 h-5 group-hover:text-primary" />
        <span className="relative z-10">Download CV</span>
      </Button>
    </div>
  );
};

export default HeroButtons;
