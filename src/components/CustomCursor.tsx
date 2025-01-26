import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(true);
  const [isIdle, setIsIdle] = useState(false);
  let idleTimer: number;

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = cursorTrailRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !trail || !follower) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    // GSAP animations setup
    const cursorAnimation = gsap.to(cursor, {
      duration: 0.5,
      ease: "power2.out",
      paused: true,
    });

    const followerAnimation = gsap.to(follower, {
      duration: 1,
      ease: "power2.out",
      paused: true,
    });

    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      // Reset idle timer
      clearTimeout(idleTimer);
      setIsIdle(false);
      
      // Set new idle timer
      idleTimer = window.setTimeout(() => setIsIdle(true), 3000);

      // Animate cursor position
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // Animate follower with slight delay
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });

      // Animate trail with more delay
      gsap.to(trail, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
      });
    };

    // Click animation
    const onClick = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
        onComplete: () => {
          gsap.to(cursor, {
            scale: 1,
            duration: 0.2,
          });
        },
      });

      // Create ripple effect
      const ripple = document.createElement("div");
      ripple.className = "ripple-effect";
      ripple.style.left = `${cursor.offsetLeft}px`;
      ripple.style.top = `${cursor.offsetTop}px`;
      document.body.appendChild(ripple);

      gsap.to(ripple, {
        scale: 2,
        opacity: 0,
        duration: 0.6,
        onComplete: () => ripple.remove(),
      });
    };

    // Hover effects
    const onElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "rgba(147, 51, 234, 0.3)",
          duration: 0.3,
        });
      } else if (target.tagName === "IMG") {
        gsap.to(cursor, {
          scale: 1.2,
          borderColor: "rgba(147, 51, 234, 0.8)",
          duration: 0.3,
        });
      } else if (target.tagName === "P" || target.tagName === "H1" || target.tagName === "H2" || target.tagName === "H3") {
        gsap.to(cursor, {
          width: "3px",
          height: "24px",
          backgroundColor: "rgb(147, 51, 234)",
          duration: 0.3,
        });
      }
    };

    const onElementLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        width: "12px",
        height: "12px",
        backgroundColor: "rgba(147, 51, 234, 0.2)",
        borderColor: "rgba(147, 51, 234, 0.5)",
        duration: 0.3,
      });
    };

    // Event listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("click", onClick);
    document.addEventListener("mouseenter", onElementHover, true);
    document.addEventListener("mouseleave", onElementLeave, true);

    // Cleanup
    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
      document.removeEventListener("mouseenter", onElementHover, true);
      document.removeEventListener("mouseleave", onElementLeave, true);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={cn(
          "fixed pointer-events-none z-50 w-3 h-3 rounded-full bg-primary/20 border border-primary/50 mix-blend-screen transition-transform duration-300",
          isCompact ? "scale-75" : "scale-100",
          isIdle && "animate-pulse"
        )}
      />
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-40 w-5 h-5 rounded-full bg-primary/10 mix-blend-screen transition-transform duration-500"
      />
      <div
        ref={cursorTrailRef}
        className="fixed pointer-events-none z-30 w-8 h-8 rounded-full bg-primary/5 mix-blend-screen transition-transform duration-700"
      />
      <button
        onClick={() => setIsCompact(!isCompact)}
        className="fixed bottom-4 right-4 z-50 px-3 py-1 text-xs bg-secondary/50 rounded-full hover:bg-secondary/70 transition-colors"
      >
        {isCompact ? "Expand" : "Compact"} Cursor
      </button>
      <style jsx global>{`
        .ripple-effect {
          position: fixed;
          pointer-events: none;
          z-index: 45;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(147, 51, 234, 0.4);
          transform-origin: center;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;