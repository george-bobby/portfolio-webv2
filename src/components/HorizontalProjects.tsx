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
    image: "/placeholder.svg",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    link: "/projects/e-commerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    image: "/placeholder.svg",
    technologies: ["React", "Firebase", "TypeScript"],
    link: "/projects/task-manager",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with advanced animations.",
    image: "/placeholder.svg",
    technologies: ["React", "GSAP", "Tailwind CSS"],
    link: "/projects/portfolio",
  },
  {
    title: "AI Chat Interface",
    description: "An intelligent chat interface powered by machine learning for natural conversations.",
    image: "/placeholder.svg",
    technologies: ["Python", "TensorFlow", "React"],
    link: "/projects/ai-chat",
  },
];

const HorizontalProjects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const element = scrollRef.current;
    const progress = progressRef.current;
    if (!element || !progress) return;

    const updateProgress = () => {
      const scrollWidth = element.scrollWidth - element.clientWidth;
      const scrolled = element.scrollLeft;
      const percentage = (scrolled / scrollWidth) * 100;
      progress.style.width = `${percentage}%`;
    };

    element.addEventListener("scroll", updateProgress);
    return () => element.removeEventListener("scroll", updateProgress);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold mb-12 animate-fade-up opacity-0">
          Featured Projects
        </h2>
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {projects.map((project, index) => (
            <div key={project.title} className="snap-start">
              <ProjectCard {...project} />
            </div>
          ))}
          <div className="flex items-center justify-center min-w-[300px] snap-start">
            <Button
              size="lg"
              onClick={() => navigate("/projects")}
              className="bg-primary/20 hover:bg-primary text-primary-foreground group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
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