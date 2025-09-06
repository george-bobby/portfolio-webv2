import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Calendar, Building2, Users, ExternalLink } from "lucide-react";
import { cn } from "@/utils/tw-merge";
import { motion, useReducedMotion, useInView } from "framer-motion";
import papers from "@/data/papers";
import { useRef } from "react";

const Research = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Simplified animation variants
  const containerVariants = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen py-24 px-6 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container max-w-7xl mx-auto"
      >
        <motion.div
          variants={titleVariants}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 hover:text-primary transition-colors duration-300">
            Research Papers
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {papers.map((paper) => (
            <motion.div
              key={paper.slug}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className={cn(
                "group overflow-hidden border-secondary/20 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full"
              )}>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width="600"
                    height="300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 grid gap-6">
                  {/* Publication Badge */}
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium transition-colors duration-300 hover:bg-primary/20">
                      <Building2 className="w-4 h-4" />
                      {paper.publication}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Calendar className="w-4 h-4" />
                      {paper.publishedDate}
                    </span>
                  </div>

                  {/* Title Section */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Book className="w-5 h-5 mt-1 text-primary shrink-0 transition-colors duration-300 group-hover:text-primary/80" />
                      <h3 className="text-lg font-heading font-bold group-hover:text-primary transition-colors duration-300">
                        {paper.title}
                      </h3>
                    </div>
                  </div>

                  {/* Authors */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground group hover:text-foreground transition-colors duration-300">
                    <Users className="w-4 h-4 text-primary shrink-0 group-hover:text-primary/80 transition-colors duration-300" />
                    <span>{paper.authors.join(", ")}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-secondary/30 hover:bg-primary/10 hover:text-primary px-3 py-1 rounded-full transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <Button
                    variant="default"
                    className="w-full bg-primary/90 hover:bg-primary text-primary-foreground group overflow-hidden relative"
                    asChild
                  >
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Read Paper
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Research;