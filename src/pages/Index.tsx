import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import WorkApproach from "@/components/WorkApproach";
import WorkExperience from "@/components/WorkExperience";
import Certifications from "@/components/Certifications";
import BlogSection from "@/components/BlogSection";
import Bookings from "@/components/Bookings";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <WorkApproach />
      <WorkExperience />
      <Certifications />
      <BlogSection />
      <Research />
      <Bookings />
      <Contact />
    </div>
  );
};

export default Index;