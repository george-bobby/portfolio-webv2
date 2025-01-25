import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, Figma, Server } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: string;
};

const skills: Skill[] = [
  {
    name: "Next.js",
    icon: <Code2 className="h-8 w-8" />,
    description: "React framework for production-grade applications",
    category: "Frameworks",
  },
  {
    name: "Tailwind CSS",
    icon: <Code2 className="h-8 w-8" />,
    description: "Utility-first CSS framework for rapid UI development",
    category: "Frameworks",
  },
  {
    name: "Python",
    icon: <Code2 className="h-8 w-8" />,
    description: "General-purpose programming language for web and data science",
    category: "Languages",
  },
  {
    name: "PostgreSQL",
    icon: <Database className="h-8 w-8" />,
    description: "Open-source relational database",
    category: "Data",
  },
  {
    name: "AWS",
    icon: <Cloud className="h-8 w-8" />,
    description: "Cloud computing services platform",
    category: "Cloud",
  },
  {
    name: "Figma",
    icon: <Figma className="h-8 w-8" />,
    description: "Collaborative interface design tool",
    category: "Design",
  },
  {
    name: "Docker",
    icon: <Server className="h-8 w-8" />,
    description: "Platform for developing and deploying applications",
    category: "DevOps",
  },
];

const categories = Array.from(new Set(skills.map((skill) => skill.category)));

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [counter, setCounter] = useState(0);

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

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
          A collection of tools, frameworks, and technologies powering my projects
        </motion.p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="animate-fade-up opacity-0 [animation-delay:200ms]"
          >
            All
          </Button>
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`animate-fade-up opacity-0 [animation-delay:${
                (index + 2) * 100
              }ms]`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-semibold">
            {skills.length}+ Tools and Technologies
          </p>
        </motion.div>

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
            Let's Work Together
          </Button>
        </motion.div>
      </div>

      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-gradient" />
      </div>
    </section>
  );
};

export default Skills;