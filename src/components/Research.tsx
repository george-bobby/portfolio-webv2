import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Calendar, Building2, Users, ExternalLink } from "lucide-react";
import { cn } from "@/utils/tw-merge";
import { motion as m, useReducedMotion, useInView } from "framer-motion";
import papers from "@/data/papers";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useIsMobile } from "@/utils/use-mobile";

const Research = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // GSAP animation for heading
  useEffect(() => {
    if (!headingRef.current) return;

    const ctx = gsap.context(() => {
      if (!isMobile) {
        const titleText = new SplitType(headingRef.current, {
          types: "chars",
          tagName: "span",
        });
        if (titleText.chars) {
          gsap.from(titleText.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.02,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.2,
          });
          titleText.chars.forEach((char) => {
            char.addEventListener("mouseenter", () => {
              gsap.to(char, {
                scale: 1.2,
                color: "#9333EA",
                duration: 0.2,
                ease: "power2.out",
              });
            });
            char.addEventListener("mouseleave", () => {
              gsap.to(char, {
                scale: 1,
                color: "inherit",
                duration: 0.2,
                ease: "power2.in",
              });
            });
          });
        }
      } else {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="min-h-screen py-24 px-6 bg-background">
      <m.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container max-w-7xl mx-auto"
      >
        <m.div
          variants={titleVariants}
          className="mb-16"
        >
          <h2 ref={headingRef} className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Research Papers
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-2xl">
            Exploring the intersection of AI, NLP, and knowledge graphs through academic research.
          </p> */}
        </m.div>

        <m.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {papers.map((paper) => (
            <m.div
              key={paper.slug}
              variants={cardVariants}
              whileHover={{ y: -5 }}
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
                    <m.div
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1, scale: 1.05 }}
                      className="bg-primary/20 backdrop-blur-sm p-2 rounded-full"
                    >
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </m.div>
                  </div>
                </div>

                <CardContent className="p-8 grid gap-6">
                  {/* Publication Badge */}
                  <div className="flex justify-between items-start">
                    <m.span
                      whileHover={{ y: -2, x: 2 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium transition-colors duration-300 hover:bg-primary/20"
                    >
                      <Building2 className="w-4 h-4" />
                      {paper.publication}
                    </m.span>
                    <m.span
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <Calendar className="w-4 h-4" />
                      {paper.publishedDate}
                    </m.span>
                  </div>

                  {/* Title Section */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 group">
                      <m.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Book className="w-5 h-5 mt-1 text-primary shrink-0 transition-colors duration-300 group-hover:text-primary/80" />
                      </m.div>
                      <h3 className="text-lg font-heading font-bold group-hover:text-primary transition-colors duration-300">
                        {paper.title}
                      </h3>
                    </div>
                  </div>

                  {/* Authors */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground group hover:text-foreground transition-colors duration-300">
                    <m.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Users className="w-4 h-4 text-primary shrink-0 group-hover:text-primary/80 transition-colors duration-300" />
                    </m.div>
                    <span>{paper.authors.join(", ")}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <m.span
                        key={tag}
                        initial={{ opacity: 0.9 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="text-sm bg-secondary/30 hover:bg-primary/10 hover:text-primary px-3 py-1 rounded-full transition-colors duration-300"
                      >
                        {tag}
                      </m.span>
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
                        <m.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </m.div>
                      </span>
                      <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </m.div>
          ))}
        </m.div>
      </m.div>
    </section>
  );
};

export default Research;