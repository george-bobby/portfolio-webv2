import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, Figma, Server, Laptop, Rocket } from "lucide-react";
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
    icon: <Code2 className="h-16 w-16" />,
    description: "React framework for building server-rendered and static web applications",
    useCase: "Used for creating scalable, SEO-friendly web apps",
    category: "Frameworks",
  },
  {
    name: "Tailwind CSS",
    icon: <Code2 className="h-16 w-16" />,
    description: "Utility-first CSS framework for rapid UI development",
    useCase: "Used for styling this portfolio and ensuring a consistent design system",
    category: "Frameworks",
  },
  {
    name: "Google Cloud",
    icon: <Cloud className="h-16 w-16" />,
    description: "Suite of cloud computing services for building and scaling applications",
    useCase: "Used for deploying and managing cloud infrastructure",
    category: "Cloud",
  },
  {
    name: "Figma",
    icon: <Figma className="h-16 w-16" />,
    description: "Collaborative interface design tool",
    useCase: "Used for creating and prototyping UI designs",
    category: "Design",
  },
  {
    name: "Docker",
    icon: <Server className="h-16 w-16" />,
    description: "Platform for developing and deploying applications",
    useCase: "Used for containerizing applications and ensuring consistent environments",
    category: "DevOps",
  },
  {
    name: "Neo4j",
    icon: <Database className="h-16 w-16" />,
    description: "Graph database management system",
    useCase: "Used for handling complex connected data structures",
    category: "Database",
  },
  {
    name: "GSAP",
    icon: <Laptop className="h-16 w-16" />,
    description: "Professional-grade animation library",
    useCase: "Used for creating smooth and complex animations",
    category: "Animation",
  },
  {
    name: "Vercel",
    icon: <Rocket className="h-16 w-16" />,
    description: "Platform for deploying and hosting web applications",
    useCase: "Used for seamless deployment and hosting of projects",
    category: "DevOps",
  },
];

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

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
          className="relative overflow-hidden py-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex gap-8 transition-transform duration-300 ${
              isHovered ? "pause-animation" : "animate-marquee"
            }`}
            style={{
              width: "fit-content",
              animation: isHovered ? "none" : "marquee 20s linear infinite",
            }}
          >
            <TooltipProvider>
              {[...skills, ...skills].map((skill, index) => (
                <Tooltip key={`${skill.name}-${index}`}>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2 min-w-[120px]"
                    >
                      <div className="p-4 rounded-lg bg-card hover:shadow-lg transition-all duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
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

      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-gradient" />
      </div>
    </section>
  );
};

export default Skills;