import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import paper from "@/data/papers";

const Research = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
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
        <Card
          ref={cardRef}
          className={cn(
            "w-full max-w-2xl mx-auto bg-secondary/30 backdrop-blur-lg border-secondary/50 hover:bg-secondary/40 transition-all duration-300 hover:scale-[1.02] group"
          )}
        >
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
      </div>
    </section>
  );
};

export default Research;