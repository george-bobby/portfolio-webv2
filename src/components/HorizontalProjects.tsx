import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe integration for seamless payments.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    link: "/projects/e-commerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["React", "Firebase", "TypeScript"],
    link: "/projects/task-manager",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with advanced animations.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["React", "GSAP", "Tailwind CSS"],
    link: "/projects/portfolio",
  },
  {
    title: "AI Chat Interface",
    description: "An intelligent chat interface powered by machine learning for natural conversations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["Python", "TensorFlow", "React"],
    link: "/projects/ai-chat",
  },
];

const HorizontalProjects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const element = scrollRef.current;
    const container = containerRef.current;
    const progress = progressRef.current;
    if (!element || !container || !progress) return;

    // Initialize GSAP animations
    gsap.fromTo(
      container,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=100",
          end: "top center",
          scrub: 1,
        },
      }
    );

    // Update progress bar
    const updateProgress = () => {
      const scrollWidth = element.scrollWidth - element.clientWidth;
      const scrolled = element.scrollLeft;
      const percentage = (scrolled / scrollWidth) * 100;
      progress.style.width = `${percentage}%`;
    };

    // Smooth scroll handling
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;
      gsap.to(element, {
        scrollLeft: `+=${delta * 2}`,
        duration: 0.5,
        ease: "power2.out",
      });
      updateProgress();
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    element.addEventListener("scroll", updateProgress);

    return () => {
      element.removeEventListener("wheel", handleWheel);
      element.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background opacity-20" />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold mb-12 animate-fade-up opacity-0">
          Featured Projects
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {projects.map((project, index) => (
            <div key={project.title} className="snap-center min-w-[calc(50%-1rem)] md:min-w-[calc(50%-2rem)]">
              <ProjectCard {...project} />
            </div>
          ))}
          <div className="snap-center min-w-[calc(50%-1rem)] md:min-w-[calc(50%-2rem)] flex items-center justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/projects")}
              className="bg-primary/20 hover:bg-primary text-primary-foreground group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
        <div className="w-full h-1 bg-secondary/20 mt-4 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalProjects;