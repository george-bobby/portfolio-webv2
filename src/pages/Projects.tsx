import { useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projectsdata } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = projectsdata;
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  // Simplified animations for better performance
  const fadeInUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.3 }
  };

  const handleNavigateHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Button
            onClick={handleNavigateHome}
            variant="ghost"
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back Home
          </Button>
        </div>

        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl font-heading font-bold mb-8"
        >
          Projects
        </motion.h1>

        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;