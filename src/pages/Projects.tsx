import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    description: "A revolutionary healthcare platform that leverages artificial intelligence for early disease detection and personalized treatment recommendations. Built with advanced machine learning algorithms and real-time data processing capabilities.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tools: ["React", "TensorFlow", "Python", "AWS"],
    slug: "ai-healthcare"
  },
  {
    id: 2,
    title: "Smart Home Automation System",
    description: "An IoT-based home automation system that provides intelligent control over household devices with advanced energy management. Features include voice control, scheduling, and energy usage analytics.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tools: ["React Native", "Node.js", "MongoDB", "IoT"],
    slug: "smart-home"
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "A comprehensive e-learning platform featuring interactive courses, real-time collaboration, and AI-powered personalized learning paths. Includes video conferencing and progress tracking.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tools: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC"],
    slug: "e-learning"
  },
  {
    id: 4,
    title: "Blockchain Supply Chain",
    description: "A blockchain-based supply chain management system ensuring transparency and traceability across the entire supply chain network. Features smart contracts and real-time tracking.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tools: ["Solidity", "React", "Node.js", "Ethereum"],
    slug: "blockchain-supply"
  },
  {
    id: 5,
    title: "Social Media Analytics Dashboard",
    description: "A comprehensive analytics dashboard for social media managers to track engagement, reach, and campaign performance across multiple platforms in real-time.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tools: ["Vue.js", "Python", "D3.js", "Firebase"],
    slug: "social-analytics"
  },
  {
    id: 6,
    title: "Virtual Reality Fitness App",
    description: "An immersive VR fitness application that combines gaming elements with workout routines. Features multiplayer support and performance tracking.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    tools: ["Unity", "C#", "WebXR", "Firebase"],
    slug: "vr-fitness"
  },
  {
    id: 7,
    title: "Sustainable Energy Monitor",
    description: "A real-time monitoring system for renewable energy sources, helping users track and optimize their energy consumption patterns.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    tools: ["React", "Node.js", "InfluxDB", "Docker"],
    slug: "energy-monitor"
  },
  {
    id: 8,
    title: "AI Content Generator",
    description: "An AI-powered platform that generates high-quality content for various purposes, including blog posts, social media, and marketing materials.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    tools: ["Python", "TensorFlow", "FastAPI", "Redis"],
    slug: "ai-content"
  },
  {
    id: 9,
    title: "Augmented Reality Shopping",
    description: "An AR-enabled shopping application that allows users to visualize products in their space before making a purchase decision.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    tools: ["React Native", "ARKit", "Node.js", "AWS"],
    slug: "ar-shopping"
  },
  {
    id: 10,
    title: "Cryptocurrency Trading Bot",
    description: "An automated trading bot that uses machine learning algorithms to analyze market trends and execute profitable cryptocurrency trades.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tools: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    slug: "crypto-bot"
  }
];

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost"
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back Home
          </Button>
        </div>

        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
          Our Projects
        </h1>
        
        <p className="text-muted-foreground max-w-2xl mb-16">
          Explore our portfolio of innovative projects spanning various technologies and industries. 
          Each project showcases our commitment to excellence and cutting-edge solutions.
        </p>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
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

                <Button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="group relative bg-primary/20 hover:bg-primary text-primary-foreground transition-all duration-500 overflow-hidden w-full"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;