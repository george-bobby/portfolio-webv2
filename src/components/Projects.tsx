import { useEffect } from "react";
import { motion } from "framer-motion";
import { CustomButton } from "@/components/ui/custom-button";
import { BUTTON_ICONS } from "@/constants/buttons";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-12"
        >
          <CustomButton
            onClick={() => navigate('/')}
            variant="ghost"
            className="group"
            icon={BUTTON_ICONS.arrowLeft}
            iconPosition="left"
          >
            Back Home
          </CustomButton>
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-8"
        >
          Our Projects
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mb-16"
        >
          Explore our portfolio of innovative projects spanning various technologies and industries.
          Each project showcases our commitment to excellence and cutting-edge solutions.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="project-card group relative bg-secondary/20 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-secondary/30 transition-all duration-500"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                      className="px-3 py-1 text-sm bg-primary/20 text-primary-foreground rounded-full transform transition-all duration-300 hover:bg-primary/40"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <CustomButton
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="group relative bg-primary/20 hover:bg-primary text-primary-foreground transition-all duration-500 overflow-hidden w-full"
                  icon={BUTTON_ICONS.arrowRight}
                  iconPosition="right"
                >
                  View Case Study
                </CustomButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
