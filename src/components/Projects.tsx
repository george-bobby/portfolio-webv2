import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    description: "A revolutionary healthcare platform that leverages artificial intelligence for early disease detection and personalized treatment recommendations.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tools: ["React", "TensorFlow", "Python", "AWS"],
    slug: "ai-healthcare"
  },
  {
    id: 2,
    title: "Smart Home Automation System",
    description: "An IoT-based home automation system that provides intelligent control over household devices with advanced energy management.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tools: ["React Native", "Node.js", "MongoDB", "IoT"],
    slug: "smart-home"
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "A comprehensive e-learning platform featuring interactive courses, real-time collaboration, and AI-powered personalized learning paths.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tools: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC"],
    slug: "e-learning"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;
    const projects = projectsRef.current;
    if (!section || !projects) return;

    // Create horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        snap: 1 / (projects.children.length - 1),
        end: () => `+=${section.offsetWidth * (projects.children.length - 1)}`,
      }
    });

    tl.to(projects, {
      xPercent: -100 * (projects.children.length - 1),
      ease: "none",
    });

    // Animate project cards on scroll
    Array.from(projects.children).forEach((project) => {
      gsap.from(project, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: project,
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
            className="relative w-screen h-full flex items-center justify-center p-8 shrink-0"
          >
            <div className="relative w-full max-w-6xl h-[70vh] bg-secondary/20 rounded-xl overflow-hidden backdrop-blur-sm group hover:bg-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
              <div className="relative h-[60%] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-8 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-3xl font-heading font-bold mb-4 animate-fade-up group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 animate-fade-up line-clamp-2 group-hover:line-clamp-none transition-all">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm bg-primary/20 text-primary-foreground rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-primary/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="group bg-primary/20 hover:bg-primary text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="relative w-screen h-full flex items-center justify-center shrink-0">
          <Button
            onClick={() => navigate('/projects')}
            size="lg"
            className="group bg-primary/20 hover:bg-primary text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;