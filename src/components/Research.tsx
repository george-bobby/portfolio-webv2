import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import papers from "@/data/papers";

const Research = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card.children,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {papers.map((paper) => (
            <Card
              key={paper.slug}
              ref={cardRef}
              className={cn(
                "bg-secondary/30 backdrop-blur-lg border-secondary/50 hover:bg-secondary/40 transition-all duration-300 hover:scale-[1.02] group"
              )}
            >
              <div className="h-40 bg-gray-300 rounded-t-lg flex items-center justify-center">
                <span className="text-gray-600 text-sm">Placeholder Image</span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">{paper.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{paper.abstract}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-primary/20 text-primary-foreground px-3 py-1 rounded-full hover:bg-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={`/research/${paper.slug}`}>
                    Read Paper
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
