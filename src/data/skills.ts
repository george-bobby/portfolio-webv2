export type Skill = {
  name: string;
  icon: string;
  description: string;
  useCase: string;
  category: string;
  level: number;
  projects: number;
};

export const skills: Skill[] = [
  {
    name: "Next.js",
    icon: "Code",
    description: "React framework for building server-rendered and static web applications",
    useCase: "Creating scalable, SEO-friendly web apps",
    category: "Frameworks",
    level: 90,
    projects: 15
  },
  {
    name: "Tailwind CSS",
    icon: "Terminal",
    description: "Utility-first CSS framework for rapid UI development",
    useCase: "Styling with consistent design system",
    category: "Frameworks",
    level: 95,
    projects: 20
  },
  {
    name: "Google Cloud",
    icon: "Cloud",
    description: "Suite of cloud computing services",
    useCase: "Deploying cloud infrastructure",
    category: "Cloud",
    level: 85,
    projects: 10
  },
  {
    name: "Figma",
    icon: "PenTool",
    description: "Collaborative interface design tool",
    useCase: "Prototyping UI designs",
    category: "Design",
    level: 80,
    projects: 8
  },
  {
    name: "Docker",
    icon: "Server",
    description: "Platform for developing and deploying applications",
    useCase: "Containerizing applications",
    category: "DevOps",
    level: 75,
    projects: 5
  },
  {
    name: "Neo4j",
    icon: "Database",
    description: "Graph database management system",
    useCase: "Handling complex connected data",
    category: "Database",
    level: 70,
    projects: 3
  },
  {
    name: "GSAP",
    icon: "Laptop",
    description: "Professional-grade animation library",
    useCase: "Creating smooth animations",
    category: "Animation",
    level: 90,
    projects: 12
  },
  {
    name: "Vercel",
    icon: "Rocket",
    description: "Platform for deploying web applications",
    useCase: "Seamless project hosting",
    category: "DevOps",
    level: 85,
    projects: 7
  },
  {
    name: "Git",
    icon: "GitBranch",
    description: "Distributed version control system",
    useCase: "Tracking code changes and collaboration",
    category: "DevOps",
    level: 95,
    projects: 20
  },
  {
    name: "Kubernetes",
    icon: "Layers",
    description: "Container orchestration platform",
    useCase: "Scaling and managing containerized apps",
    category: "Cloud",
    level: 70,
    projects: 4
  },
  {
    name: "React",
    icon: "FrameIcon",
    description: "JavaScript library for building UIs",
    useCase: "Creating interactive web applications",
    category: "Frameworks",
    level: 90,
    projects: 15
  },
  {
    name: "TypeScript",
    icon: "Type",
    description: "Typed superset of JavaScript",
    useCase: "Adding type safety to web projects",
    category: "Languages",
    level: 85,
    projects: 10
  },
];
