import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Project";
import Research from "@/components/Research";
import Skills from "@/components/Skill";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import BlogSection from "@/components/BlogSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <BlogSection />
      <Research />
      <Contact />
    </div>
  );
};

export default Index;