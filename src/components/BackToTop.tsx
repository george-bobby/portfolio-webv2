import { ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const BackToTop = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const showButton = () => {
      if (!buttonRef.current) return;
      
      if (window.scrollY > 500) {
        buttonRef.current.classList.remove('opacity-0');
        buttonRef.current.classList.add('opacity-100');
      } else {
        buttonRef.current.classList.remove('opacity-100');
        buttonRef.current.classList.add('opacity-0');
      }
    };

    window.addEventListener('scroll', showButton);
    return () => window.removeEventListener('scroll', showButton);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary/90 text-primary-foreground opacity-0 transition-opacity duration-300 hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;