
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projectsdata } from "@/data/projects";
import { useIsMobile } from "@/utils/use-mobile";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projects = projectsdata.slice(0, 3);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP animation for heading
  useEffect(() => {
    if (!headingRef.current) return;

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
    });

    return () => ctx.revert();
  }, [isMobile]);

  // Horizontal scroll effect
  useEffect(() => {
    if (typeof window === 'undefined' || isMobile) return;

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Calculate total width needed for horizontal scroll
    const totalWidth = projects.length * window.innerWidth;
    container.style.width = `${totalWidth}px`;

    const ctx = gsap.context(() => {
      // Create horizontal scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: `+=${totalWidth - window.innerWidth}`,
          scrub: 1,
        }
      });

      // Move container horizontally
      tl.to(container, {
        x: `-${totalWidth - window.innerWidth}px`,
        ease: "none",
      });

      // Add parallax effects to individual project backgrounds
      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: `+=${totalWidth - window.innerWidth}`,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const yPos = (progress - 0.5) * 30; // Subtle parallax movement

            gsap.set(projectRef.querySelector('.parallax-bg'), {
              y: yPos,
              ease: "none"
            });
          }
        });
      });
    }, section);

    return () => ctx.revert();
  }, [isMobile, projects.length]);

  return (
    <>
      <section
        ref={sectionRef}
        className={`relative ${isMobile ? 'py-20' : 'h-screen'} bg-gradient-to-br from-background via-background/90 to-background overflow-hidden`}
      >
        <div className="container mx-auto px-4 pt-20 mb-8 pb-10">
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl font-heading font-bold mb-16 text-center"
          >
            Project Case Studies
          </h2>
        </div>

        {/* Horizontal scrolling container */}
        <div
          ref={containerRef}
          className={`${isMobile ? 'flex flex-col space-y-16 px-4' : 'flex h-[calc(100%-9rem)] absolute top-36 left-0'} will-change-transform`}
          style={{ willChange: "transform" }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`${isMobile ? 'w-full' : 'w-screen h-full'} flex items-center justify-center px-8`}
            >
              <div
                className="group cursor-pointer w-full max-w-6xl"
                onClick={() => navigate(`/project/${project.slug}`)}
              >
                <div className="relative bg-secondary/10 rounded-3xl overflow-hidden hover:bg-secondary/20 transition-all duration-500 min-h-[500px] md:min-h-[600px]">
                  {/* Parallax Background */}
                  <div className="parallax-bg absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/90" />
                  </div>

                  {/* CTA Button bottom-left */}
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
                    <Button
                      size="lg"
                      className="group/btn bg-primary/20 hover:bg-primary"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                    <div className="transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                        {project.title}
                      </h3>

                      <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tools.slice(0, 6).map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1.5 text-sm bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors duration-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* View All Projects - centered as its own small section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex justify-center">
          <Button
            onClick={() => navigate("/project")}
            className="group bg-primary/50 hover:bg-primary text-primary-foreground transition-all duration-500 overflow-hidden px-8 py-4 rounded-lg shadow-lg flex items-center gap-3 text-lg"
          >
            View All Projects
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Project;
