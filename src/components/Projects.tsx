import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe integration for seamless payments.",
    image: "/placeholder.svg",
    tools: ["React", "Next.js", "Stripe", "TailwindCSS"],
    slug: "e-commerce-platform"
  },
  {
    id: 2,
    title: "AI Chat Interface",
    description: "An intelligent chat interface powered by machine learning for natural conversations.",
    image: "/placeholder.svg",
    tools: ["Python", "TensorFlow", "React"],
    slug: "ai-chat-interface"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with advanced animations.",
    image: "/placeholder.svg",
    tools: ["React", "GSAP", "TailwindCSS"],
    slug: "portfolio-website"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sectionRef.current || !projectsRef.current) return;

    const section = sectionRef.current;
    const projects = projectsRef.current;

    // Create horizontal scroll animation
    gsap.to(projects, {
      xPercent: -100 * (projects.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${section.offsetWidth * (projects.children.length - 1)}`,
      },
    });

    // Animate project cards on scroll
    Array.from(projects.children).forEach((project, i) => {
      gsap.from(project, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: project,
          containerAnimation: ScrollTrigger.getById("projects"),
          start: "left center",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-background via-background/90 to-background"
    >
      <div 
        ref={projectsRef}
        className="flex h-full"
      >
        {projects.map((project) => (
          <div 
            key={project.id}
            className="relative min-w-screen h-full flex items-center justify-center p-8"
          >
            <div className="relative w-full max-w-4xl bg-secondary/20 rounded-xl overflow-hidden backdrop-blur-sm group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-heading font-bold mb-4 animate-fade-up">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 animate-fade-up">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm bg-primary/20 text-primary-foreground rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="group bg-primary/20 hover:bg-primary text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full bg-primary/20 ${
              i === 0 ? "bg-primary" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;