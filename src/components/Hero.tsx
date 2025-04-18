import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import SplitType from "split-type";
import FloatingIcons from "./elements/FloatingIcons";
import { useIsMobile } from "@/utils/use-mobile";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Throttle function to limit the rate of function calls
  const throttle = (callback: Function, delay: number) => {
    let lastCall = 0;
    return (...args: any[]) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      callback(...args);
    };
  };

  // Track mouse position for the glow effect - with throttling for performance
  useEffect(() => {
    if (isMobile) return; // Skip on mobile devices

    const handleMouseMove = throttle((e: MouseEvent) => {
      // Update glow position directly without state update for better performance
      if (glowRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        gsap.to(glowRef.current, {
          x: e.clientX - sectionRect.left,
          y: e.clientY - sectionRect.top,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }, 50); // Throttle to 50ms

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !buttonsRef.current || !scrollIndicatorRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Projects to Products connector animation
      const projectsElement = headingRef.current?.querySelector('.projects-products-connector');
      const projectsSpan = headingRef.current?.querySelector('.group:first-of-type');
      const productsSpan = headingRef.current?.querySelector('.group:last-of-type');

      if (projectsElement && projectsSpan && productsSpan && !isMobile) {
        // Create the SVG arrow path
        const createArrowPath = () => {
          // Get positions
          const projectsRect = projectsSpan.getBoundingClientRect();
          const productsRect = productsSpan.getBoundingClientRect();

          // Calculate control points for the curve
          const startX = projectsRect.right - projectsRect.left;
          const endX = productsRect.left - projectsRect.left;
          const controlX = (startX + endX) / 2;
          const controlY = -40; // Curve height above the text

          // Create SVG path
          const svgWidth = endX;
          const svgHeight = Math.abs(controlY) * 2;

          // Create SVG element
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('width', `${svgWidth}px`);
          svg.setAttribute('height', `${svgHeight}px`);
          svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
          svg.style.position = 'absolute';
          svg.style.top = `${controlY}px`;
          svg.style.left = `${startX}px`;
          svg.style.overflow = 'visible';

          // Create path
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', `M0,${Math.abs(controlY)} Q${controlX - startX},0 ${endX - startX},${Math.abs(controlY)}`);
          path.setAttribute('stroke', '#9333EA');
          path.setAttribute('stroke-width', '2');
          path.setAttribute('fill', 'none');
          path.setAttribute('marker-end', 'url(#arrowhead)');
          path.style.strokeDasharray = '5,5';

          // Create defs for filters and markers
          const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

          // Add glow effect to the path
          const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
          filter.setAttribute('id', 'glow');
          filter.setAttribute('x', '-20%');
          filter.setAttribute('y', '-20%');
          filter.setAttribute('width', '140%');
          filter.setAttribute('height', '140%');

          const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
          feGaussianBlur.setAttribute('stdDeviation', '3');
          feGaussianBlur.setAttribute('result', 'blur');

          const feColorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
          feColorMatrix.setAttribute('in', 'blur');
          feColorMatrix.setAttribute('type', 'matrix');
          feColorMatrix.setAttribute('values', '0 0 0 0 0.576 0 0 0 0 0.2 0 0 0 0 0.917 0 0 0 0.7 0');

          filter.appendChild(feGaussianBlur);
          filter.appendChild(feColorMatrix);
          defs.appendChild(filter);

          path.setAttribute('filter', 'url(#glow)');

          // Create arrowhead marker
          const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
          marker.setAttribute('id', 'arrowhead');
          marker.setAttribute('markerWidth', '10');
          marker.setAttribute('markerHeight', '7');
          marker.setAttribute('refX', '9');
          marker.setAttribute('refY', '3.5');
          marker.setAttribute('orient', 'auto');

          const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
          polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
          polygon.setAttribute('fill', '#9333EA');

          marker.appendChild(polygon);
          defs.appendChild(marker);
          svg.appendChild(defs);
          svg.appendChild(path);

          // Clear previous SVG if exists
          while (projectsElement.firstChild) {
            projectsElement.removeChild(projectsElement.firstChild);
          }

          projectsElement.appendChild(svg);

          // Animate the path
          gsap.fromTo(path,
            { strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 1, ease: "power2.out" }
          );

          // Add floating icons along the path
          const addFloatingIcons = () => {
            const icons = [
              { icon: '💡', color: '#9333EA' },
              { icon: '⚙️', color: '#6366F1' },
              { icon: '🚀', color: '#EC4899' },
              { icon: '✨', color: '#F59E0B' },
              { icon: '📱', color: '#10B981' }
            ];

            icons.forEach((item, index) => {
              const iconElement = document.createElement('div');
              iconElement.textContent = item.icon;
              iconElement.style.position = 'absolute';
              iconElement.style.fontSize = '20px';
              iconElement.style.opacity = '0';
              iconElement.style.filter = 'drop-shadow(0 0 3px ' + item.color + ')';
              iconElement.style.zIndex = '20';

              projectsElement.appendChild(iconElement);

              // Position along the path and animate
              gsap.to(iconElement, {
                opacity: 1,
                scale: 1.2,
                motionPath: {
                  path: path,
                  align: path,
                  alignOrigin: [0.5, 0.5],
                  autoRotate: true,
                  start: 0,
                  end: 1
                },
                duration: 1.5,
                delay: 0.1 + (index * 0.15),
                ease: "power2.inOut",
                onComplete: () => {
                  // Add a little pop effect at the end
                  if (index === icons.length - 1) {
                    gsap.to(productsSpan, {
                      scale: 1.2,
                      color: '#9333EA',
                      duration: 0.3,
                      yoyo: true,
                      repeat: 1,
                      ease: "back.out(2)"
                    });
                  }

                  gsap.to(iconElement, {
                    opacity: 0,
                    scale: 1.5,
                    duration: 0.3,
                    delay: 0.2,
                    onComplete: () => {
                      iconElement.remove();
                    }
                  });
                }
              });
            });
          };

          // Add icons with a slight delay
          setTimeout(addFloatingIcons, 300);
        };

        // Initial creation
        createArrowPath();

        // Update on window resize
        const handleResize = () => {
          createArrowPath();
        };

        window.addEventListener('resize', handleResize);
        ctx.add(() => {
          window.removeEventListener('resize', handleResize);
        });

        // Add hover effect to the words
        projectsSpan.addEventListener('mouseenter', createArrowPath);
        productsSpan.addEventListener('mouseenter', createArrowPath);
      }

      // Split text animation - only on desktop for better performance
      if (!isMobile) {
        // Animate the first part of the heading ("Hi, I'm George Bobby")
        const firstLine = headingRef.current?.querySelector('span.text-primary')?.parentElement;
        if (firstLine) {
          const firstLineText = new SplitType(firstLine, {
            types: "chars",
            tagName: "span",
          });

          if (firstLineText.chars) {
            // Initial animation for each character
            gsap.from(firstLineText.chars, {
              opacity: 0,
              y: 20,
              stagger: 0.02,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: 0.2
            });

            // Interactive hover effect
            firstLineText.chars.forEach((char) => {
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

        // Animate the second line words (except Projects and Products which are handled separately)
        const secondLine = headingRef.current?.querySelector('span.mt-4');
        if (secondLine) {
          const secondLineWords = secondLine.childNodes;

          // Animate each text node
          secondLineWords.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
              const text = node.textContent;
              const span = document.createElement('span');
              span.textContent = text;
              node.parentNode?.replaceChild(span, node);

              gsap.from(span, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "back.out(1.7)",
                delay: 0.4
              });
            }
          });
        }
      } else {
        // Simple animation for mobile
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      // Button hover effects - only on desktop
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

      // Scroll indicator pulse animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      });

      // Main entrance animation - simplified for better performance
      const tl = gsap.timeline();

      // Skip heading animation as it's already handled above
      tl.from(
        buttonsRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "+=0.3"
      )
        .from(
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
      {/* Glow effect that follows cursor - only on desktop */}
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
          <span className="mt-4 md:mt-6 lg:mt-8 inline-block relative">
            Turning
            <span className="relative inline-block group cursor-pointer">
              <span className="text-primary-400 transition-colors duration-300 group-hover:text-primary relative">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
              <span className="projects-products-connector absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </span>
            Into
            <span className="relative inline-block group cursor-pointer">
              <span className="text-primary-400 transition-colors duration-300 group-hover:text-primary relative">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
            </span>
          </span>
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
