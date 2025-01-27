import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  className?: string;
}

const ProjectCard = ({ title, description, image, technologies, link, className }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const techsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    const techs = techsRef.current;
    if (!card || !overlay || !techs) return;

    // Initial animation
    gsap.fromTo(
      card,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        duration: 0.3,
      });
      gsap.to(overlay, { opacity: 1, duration: 0.3 });
      gsap.to(techs, { y: 0, opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: "none",
        duration: 0.3,
      });
      gsap.to(overlay, { opacity: 0, duration: 0.3 });
      gsap.to(techs, { y: 10, opacity: 0, duration: 0.3 });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className={cn(
        "bg-secondary/50 backdrop-blur-sm transition-all duration-300 group",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20 opacity-0 transition-opacity flex items-center justify-center"
        >
          <span className="text-primary-foreground font-medium">View Case Study</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <div
          ref={techsRef}
          className="flex flex-wrap gap-2 mb-4 opacity-0 translate-y-2"
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-primary/20 text-primary-foreground px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          asChild
        >
          <a href={link}>
            Read Case Study
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;