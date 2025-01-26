import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code, Database, Cloud, PenTool, Server, Laptop, Rocket,
  GitBranch, Layers, FrameIcon, Type, Terminal, Database as DbIcon
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
  useCase: string;
  category: string;
};

const skills: Skill[] = [
  {
    name: "Next.js",
    icon: <Code className="h-10 w-10" />,
    description: "React framework for building server-rendered and static web applications",
    useCase: "Creating scalable, SEO-friendly web apps",
    category: "Frameworks",
  },
  {
    name: "Tailwind CSS",
    icon: <Terminal className="h-10 w-10" />,
    description: "Utility-first CSS framework for rapid UI development",
    useCase: "Styling with consistent design system",
    category: "Frameworks",
  },
  {
    name: "Google Cloud",
    icon: <Cloud className="h-10 w-10" />,
    description: "Suite of cloud computing services",
    useCase: "Deploying cloud infrastructure",
    category: "Cloud",
  },
  {
    name: "Figma",
    icon: <PenTool className="h-10 w-10" />,
    description: "Collaborative interface design tool",
    useCase: "Prototyping UI designs",
    category: "Design",
  },
  {
    name: "Docker",
    icon: <Server className="h-10 w-10" />,
    description: "Platform for developing and deploying applications",
    useCase: "Containerizing applications",
    category: "DevOps",
  },
  {
    name: "Neo4j",
    icon: <DbIcon className="h-10 w-10" />,
    description: "Graph database management system",
    useCase: "Handling complex connected data",
    category: "Database",
  },
  {
    name: "GSAP",
    icon: <Laptop className="h-10 w-10" />,
    description: "Professional-grade animation library",
    useCase: "Creating smooth animations",
    category: "Animation",
  },
  {
    name: "Vercel",
    icon: <Rocket className="h-10 w-10" />,
    description: "Platform for deploying web applications",
    useCase: "Seamless project hosting",
    category: "DevOps",
  },
  {
    name: "Git",
    icon: <GitBranch className="h-10 w-10" />,
    description: "Distributed version control system",
    useCase: "Tracking code changes and collaboration",
    category: "DevOps",
  },
  {
    name: "Kubernetes",
    icon: <Layers className="h-10 w-10" />,
    description: "Container orchestration platform",
    useCase: "Scaling and managing containerized apps",
    category: "Cloud",
  },
  {
    name: "React",
    icon: <FrameIcon className="h-10 w-10" />,
    description: "JavaScript library for building UIs",
    useCase: "Creating interactive web applications",
    category: "Frameworks",
  },
  {
    name: "TypeScript",
    icon: <Type className="h-10 w-10" />,
    description: "Typed superset of JavaScript",
    useCase: "Adding type safety to web projects",
    category: "Languages",
  },
];

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);
  const [animationSpeed, setAnimationSpeed] = useState(30); // Slower by default

  useEffect(() => {
    const duplicateSkills = (marqueeElement: HTMLDivElement) => {
      const originalContent = marqueeElement.innerHTML;
      marqueeElement.innerHTML += originalContent;
    };

    if (marqueeRef1.current) duplicateSkills(marqueeRef1.current);
    if (marqueeRef2.current) duplicateSkills(marqueeRef2.current);
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-heading font-bold mb-4"
        >
          Technologies I Use
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mb-12"
        >
          Tools and frameworks that power my creations
        </motion.p>

        {/* Marquee Container */}
        <div
          className="relative overflow-hidden py-12 flex flex-col gap-16"
          onMouseEnter={() => {
            setIsHovered(true);
            setAnimationSpeed(100); // Faster on hover
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setAnimationSpeed(30); // Slower default speed
          }}
        >
          <div
            ref={marqueeRef1}
            className="flex gap-8 w-max animate-marquee"
            style={{
              animationDuration: `${animationSpeed}s`,
            }}
          >
            <TooltipProvider>
              {skills.map((skill, index) => (
                <Tooltip key={`${skill.name}-${index}`}>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: 3,
                      }}
                      className="flex flex-col items-center gap-2 min-w-[120px]"
                    >
                      <div className="p-4 rounded-xl bg-card hover:shadow-2xl 
                        transition-all duration-300 
                        border border-primary/10 
                        hover:border-primary/30
                        hover:bg-primary/5
                        group">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[200px] p-4 z-10">
                    <div className="space-y-2">
                      <h3 className="font-bold">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                      <p className="text-xs text-muted-foreground italic">
                        {skill.useCase}
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
          <div
            ref={marqueeRef2}
            className="flex gap-8 w-max animate-marquee"
            style={{
              animationDuration: `${animationSpeed}s`,
              animationDirection: 'reverse',
            }}
          >
            <TooltipProvider>
              {skills.map((skill, index) => (
                <Tooltip key={`${skill.name}-reverse-${index}`}>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: -3,
                      }}
                      className="flex flex-col items-center gap-2 min-w-[120px]"
                    >
                      <div className="p-4 rounded-xl bg-card hover:shadow-2xl 
                        transition-all duration-300 
                        border border-primary/10 
                        hover:border-primary/30
                        hover:bg-primary/5
                        group">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[200px] p-4">
                    <div className="space-y-2">
                      <h3 className="font-bold">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                      <p className="text-xs text-muted-foreground italic">
                        {skill.useCase}
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="animate-pulse hover:animate-none"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore My Full Tech Stack
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;