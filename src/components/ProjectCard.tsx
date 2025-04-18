import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tools: string[];
    slug: string;
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative bg-secondary/20 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-secondary/30 transition-colors duration-300"
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width={400}
          height={225}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          className="group relative bg-primary/20 hover:bg-primary text-primary-foreground transition-colors duration-300 w-full"
        >
          <span className="relative z-10 flex items-center justify-center">
            View Case Study
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default memo(ProjectCard);
