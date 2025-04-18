import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import BlogSection from "@/components/Blogs";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const Index = () => {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="research">
        <Research />
      </section>

      <section id="blog">
        <BlogSection />
      </section>
    </div>
  );
};

export default Index;