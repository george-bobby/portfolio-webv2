import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-secondary/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {project.title}
          </h1>

          <div className="aspect-video w-full bg-secondary/20 rounded-lg mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>Overview</h2>
            <p>{project.overview}</p>

            <h2>Challenges</h2>
            <ul>
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>

            <h2>Solution</h2>
            <p>{project.solution}</p>

            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPost;
