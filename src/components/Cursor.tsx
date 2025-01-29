import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const trail = trailRef.current;

    if (!cursor || !follower || !trail) return;

    document.body.style.cursor = "none";

    const updatePosition = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Smooth transitions using GSAP
      gsap.to(cursor, { x: x - 6, y: y - 6, duration: 0.1 });
      gsap.to(follower, { x: x - 10, y: y - 10, duration: 0.2 });
      gsap.to(trail, { x: x - 15, y: y - 15, duration: 0.4 });
    };

    const handleIdleState = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      setIsIdle(false);

      idleTimerRef.current = window.setTimeout(() => {
        setIsIdle(true);
        gsap.to(cursor, { scale: 1.2, opacity: 0.5, duration: 0.4 });
      }, 3000);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Add null check and ensure target is an HTMLElement
      if (!target || !(target instanceof HTMLElement)) return;
      
      const tagName = target.tagName.toLowerCase();

      const cursorStyles: Record<string, any> = {
        a: { scale: 1.5, backgroundColor: "rgba(147, 51, 234, 0.4)" },
        button: { scale: 1.5, backgroundColor: "rgba(147, 51, 234, 0.4)" },
        img: { scale: 1.3, borderColor: "rgba(147, 51, 234, 0.8)" },
        p: { width: "3px", height: "24px", backgroundColor: "rgb(147, 51, 234)" },
        h1: { width: "3px", height: "24px", backgroundColor: "rgb(147, 51, 234)" },
      };

      if (cursorStyles[tagName]) {
        gsap.to(cursor, { ...cursorStyles[tagName], duration: 0.3 });
      }
    };

    const resetCursor = () => {
      gsap.to(cursor, {
        scale: 2,
        width: "12px",
        height: "12px",
        backgroundColor: "rgba(147, 51, 234, 0.2)",
        borderColor: "rgba(147, 51, 234, 0.5)",
        duration: 0.3,
      });
    };

    const handleClick = () => {
      gsap.fromTo(
        cursor,
        { scale: 0.8 },
        { scale: 1, duration: 0.2, ease: "power2.out" }
      );
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousemove", handleIdleState);
    document.addEventListener("mouseenter", handleHover, true);
    document.addEventListener("mouseleave", resetCursor, true);
    document.addEventListener("click", handleClick);

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousemove", handleIdleState);
      document.removeEventListener("mouseenter", handleHover, true);
      document.removeEventListener("mouseleave", resetCursor, true);
      document.removeEventListener("click", handleClick);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={cn(
          "fixed pointer-events-none z-50 w-3 h-3 rounded-full bg-primary/20 border border-primary/50 mix-blend-difference scale-100",
          isIdle && "opacity-50"
        )}
      />
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-40 w-5 h-5 rounded-full bg-primary/10 mix-blend-difference transition-transform"
      />
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-30 w-8 h-8 rounded-full bg-primary/5 mix-blend-difference transition-transform"
      />
    </>
  );
};

export default CustomCursor;