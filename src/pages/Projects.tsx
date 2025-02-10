
import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projectsdata } from "@/data/projects";

const Projects = () => {
  const projects = projectsdata;
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = prefersReducedMotion ? {} : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          {...fadeInUp}
          className="flex items-center mb-12"
        >
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back Home
          </Button>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl font-heading font-bold mb-8"
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeInUp}
              transition={{ duration: 0.3, delay: Math.min(index * 0.1, 0.3) }}
              className="group relative bg-secondary/20 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-secondary/30 transition-colors"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform will-change-transform group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm bg-primary/20 text-primary-foreground rounded-full transition-colors hover:bg-primary/40"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => navigate(`/project/${project.slug}`)}
                  className="group relative bg-primary/20 hover:bg-primary text-primary-foreground transition-colors w-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
