import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useSpring, animated } from "react-spring";
import FloatingIcons from "./FloatingIcons";
import { useIsMobile } from "@/utils/use-mobile";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const glowRef = useRef(null);
  const projectsRef = useRef(null);
  const productsRef = useRef(null);
  const arrowSvgRef = useRef(null);
  const arrowPathRef = useRef(null);
  const isMobile = useIsMobile();

  const [pathLength, setPathLength] = useState(0);
  const [arrowVisible, setArrowVisible] = useState(false);

  // Animation for drawing the arrow
  const arrowAnimation = useSpring({
    from: { strokeDashoffset: pathLength },
    to: { strokeDashoffset: arrowVisible ? 0 : pathLength },
    config: { duration: 800 },
    delay: 100
  });

  const throttle = (callback, delay) => {
    let lastCall = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      callback(...args);
    };
  };

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = throttle((e) => {
      if (glowRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        gsap.to(glowRef.current, {
          x: e.clientX - sectionRect.left,
          y: e.clientY - sectionRect.top,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }, 50);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Calculate and update the arrow path when elements are mounted
  useEffect(() => {
    if (!projectsRef.current || !productsRef.current || !arrowPathRef.current || !arrowSvgRef.current) {
      return;
    }

    const updateArrowPath = () => {
      const projectsRect = projectsRef.current.getBoundingClientRect();
      const productsRect = productsRef.current.getBoundingClientRect();

      // Starting point (first P of "Projects")
      const startX = projectsRect.left;
      const startY = projectsRect.top + projectsRect.height / 2;

      // Ending point (first P of "Products")
      const endX = productsRect.left;
      const endY = productsRect.top + productsRect.height / 2;

      // Get the position relative to the SVG
      const svgRect = arrowSvgRef.current.getBoundingClientRect();
      const relStartX = startX - svgRect.left;
      const relStartY = startY - svgRect.top;
      const relEndX = endX - svgRect.left;
      const relEndY = endY - svgRect.top;

      // Create a curved path
      // Using a quadratic bezier curve for a nice arch
      const controlX = (relStartX + relEndX) / 2;
      const controlY = Math.min(relStartY, relEndY) - 30; // Curve upward

      const path = `M ${relStartX} ${relStartY} Q ${controlX} ${controlY}, ${relEndX} ${relEndY}`;
      arrowPathRef.current.setAttribute("d", path);

      // Update SVG viewBox to fit the path
      const minX = Math.min(relStartX, relEndX, controlX) - 20;
      const minY = Math.min(relStartY, relEndY, controlY) - 20;
      const width = Math.max(relStartX, relEndX, controlX) - minX + 40;
      const height = Math.max(relStartY, relEndY, controlY) - minY + 40;

      arrowSvgRef.current.setAttribute("viewBox", `${minX} ${minY} ${width} ${height}`);
      arrowSvgRef.current.style.width = `${width}px`;
      arrowSvgRef.current.style.height = `${height}px`;

      // Update the path length for animation
      const pathLength = arrowPathRef.current.getTotalLength();
      setPathLength(pathLength);
      arrowPathRef.current.style.strokeDasharray = pathLength;
    };

    // Run once after mount
    updateArrowPath();

    // And whenever window is resized
    window.addEventListener("resize", updateArrowPath);
    return () => window.removeEventListener("resize", updateArrowPath);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !buttonsRef.current || !scrollIndicatorRef.current) {
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
            delay: 0.2
          });

          if (!isMobile) {
            titleText.chars.forEach((char) => {
              char.addEventListener("mouseenter", () => {
                gsap.to(char, {
                  scale: 1.2,
                  color: "#9333EA",
                  duration: 0.2,
                  ease: "power2.out"
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
        }
      } else {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      if (!isMobile) {
        const buttons = buttonsRef.current.querySelectorAll('button');
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, {
              boxShadow: '0 0 15px rgba(147, 51, 234, 0.5)',
              duration: 0.3
            });
          });

          button.addEventListener('mouseleave', () => {
            gsap.to(button, {
              boxShadow: 'none',
              duration: 0.3
            });
          });

          button.addEventListener('mousedown', () => {
            gsap.to(button, {
              scale: 0.95,
              duration: 0.1
            });
          });

          button.addEventListener('mouseup', () => {
            gsap.to(button, {
              scale: 1,
              duration: 0.1
            });
          });
        });
      }

      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center px-4"
    >
      {!isMobile && (
        <div
          ref={glowRef}
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/20 blur-[80px] pointer-events-none opacity-70"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      )}

      <FloatingIcons />

      <div className="relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          Hi, I'm <span className="text-primary">George Bobby</span>.
          <br />
          <div
            className="mt-4 md:mt-6 lg:mt-8 inline-block relative group w-fit mx-auto"
            onMouseEnter={() => setArrowVisible(true)}
            onMouseLeave={() => setArrowVisible(false)}
          >
            <span className="font-bold text-white relative z-10">
              <span
                ref={projectsRef}
                className="relative inline-block hover:text-primary transition-colors duration-300"
              >
                Projects
              </span>
              <span className="mx-2 text-muted-foreground">to</span>
              <span
                ref={productsRef}
                className="relative inline-block hover:text-primary transition-colors duration-300"
              >
                Products
              </span>
            </span>

            <animated.svg
              ref={arrowSvgRef}
              className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,10 L10,5 z" fill="#9333EA" />
                </marker>
              </defs>
              <animated.path
                ref={arrowPathRef}
                stroke="#9333EA"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                style={{
                  strokeDashoffset: arrowAnimation.strokeDashoffset
                }}
              />
            </animated.svg>
          </div>
        </h1>
        <div
          ref={buttonsRef}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            onClick={() => window.open("https://github.com/george-bobby/", "_blank")}
          >
            <FaGithub className="w-5 h-5 text-white group-hover:text-gray-300 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">
              View on GitHub
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            onClick={() => window.open("https://drive.google.com/file/d/1w4ijqOQZ0H0P1J4brWwQfOyEZkr5IttU/view?usp=drive_link", "_blank")}
          >
            <Download className="w-5 h-5 group-hover:text-primary group-hover:translate-y-[2px] transition-all duration-300" />
            <span className="relative z-10">
              Download CV
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Button>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
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