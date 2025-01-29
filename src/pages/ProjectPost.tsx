import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

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
            Project Title
          </h1>

          <div className="aspect-video w-full bg-secondary/20 rounded-lg mb-12">
            <img
              src="/placeholder.svg"
              alt="Project"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>Overview</h2>
            <p>
              This is a detailed description of the project, including its goals,
              challenges, and outcomes. The content will be dynamically loaded
              based on the project slug.
            </p>

            <h2>Challenges</h2>
            <ul>
              <li>Challenge 1: Description of the first challenge faced</li>
              <li>Challenge 2: Description of the second challenge faced</li>
              <li>Challenge 3: Description of the third challenge faced</li>
            </ul>

            <h2>Solution</h2>
            <p>
              Detailed explanation of how the challenges were addressed and what
              technologies were used to implement the solution.
            </p>

            <h2>Outcome</h2>
            <p>
              Description of the project's impact, including any metrics or
              testimonials that demonstrate its success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;