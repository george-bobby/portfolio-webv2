import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ResearchPaper = () => {
  const { slug } = useParams();
  const heroRef = useRef<HTMLDivElement>(null);

  // Demo content - in a real app, this would be fetched based on the slug
  const paper = {
    title: "Exploring AI in Education: A Comparative Study",
    abstract: "This paper explores the potential of AI in question paper generation using models like LSA, Word2Vec, and Seq2Seq to achieve better accuracy and automation. The study compares different approaches and presents a comprehensive analysis of their effectiveness in educational contexts.",
    authors: ["John Doe", "Jane Smith"],
    publishedDate: "March 2024",
    publication: "Springer",
    technologies: ["AI", "NLP", "LSA", "Word2Vec", "Seq2Seq", "Python", "TensorFlow"],
    sections: {
      problem: "Traditional question paper generation is time-consuming and may not cover all learning objectives effectively.",
      methodology: "We implemented and compared three different approaches: LSA, Word2Vec, and Seq2Seq models.",
      results: "The Seq2Seq model showed a 15% improvement in question relevance compared to traditional methods.",
      conclusion: "AI-powered question generation shows promising results for automating and improving educational assessment.",
    },
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.fromTo(
      hero.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div
        ref={heroRef}
        className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/20 mb-12"
      >
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{paper.title}</h1>
          <p className="text-muted-foreground mb-4">
            By {paper.authors.join(", ")} • Published in {paper.publication}, {paper.publishedDate}
          </p>
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            <Download className="w-4 h-4 mr-2" />
            Download Paper
          </Button>
        </div>
      </div>

      <main className="container max-w-4xl mx-auto px-4 pb-20">
        <section className="prose prose-invert mx-auto">
          <h2>Abstract</h2>
          <p>{paper.abstract}</p>

          <div className="flex flex-wrap gap-2 my-8">
            {paper.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary/50 rounded-full text-sm hover:bg-secondary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2>Problem Statement</h2>
          <p>{paper.sections.problem}</p>

          <h2>Methodology</h2>
          <p>{paper.sections.methodology}</p>

          <h2>Results and Analysis</h2>
          <p>{paper.sections.results}</p>

          <h2>Conclusion</h2>
          <p>{paper.sections.conclusion}</p>
        </section>
      </main>
    </div>
  );
};

export default ResearchPaper;