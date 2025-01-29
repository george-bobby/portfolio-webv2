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
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Navigation /> */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <WorkApproach />
      <WorkExperience />
      <Certifications />
      <BlogSection />
      <Research />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;