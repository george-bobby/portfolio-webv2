import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Lightbulb, Laptop, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    icon: MessageSquare,
    title: "Contact",
    description: "Let's connect and discuss your vision. This step ensures we're aligned on expectations and project goals.",
  },
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "Together, we brainstorm ideas, develop wireframes, and finalize designs for the best user experience.",
  },
  {
    icon: Laptop,
    title: "Development",
    description: "With designs approved, I begin coding, integrating features, and thoroughly testing for quality.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Finally, your project goes live! I also provide support and ensure it's ready for the future.",
  },
];

const WorkApproach = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    if (!section || !timeline) return;

    // Animate title and subtitle
    gsap.fromTo(
      ".work-title",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top center+=100",
        },
      }
    );

    // Animate phases with stagger
    gsap.fromTo(
      ".phase-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: timeline,
          start: "top center+=100",
        },
      }
    );

    // Animate timeline connector
    gsap.fromTo(
      ".timeline-connector",
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top center+=100",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" id="work-approach">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="work-title text-4xl font-heading font-bold mb-4 opacity-0">
            My Work Approach
          </h2>
          <p className="work-title text-muted-foreground text-lg opacity-0">
            From concept to creation, here's how I bring ideas to life.
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline connector */}
          <div className="timeline-connector absolute left-[50%] top-8 bottom-8 w-px bg-primary/20 origin-top" />

          {/* Phases */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className={`phase-card flex items-center gap-8 opacity-0 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <h3 className="text-2xl font-heading font-semibold mb-2">
                    Phase {index + 1}: {phase.title}
                  </h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group hover:bg-primary/20 transition-colors">
                    <phase.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="animate-bounce hover:animate-none hover:scale-105 transition-transform"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Collaborate
            <Rocket className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
    </section>
  );
};

export default WorkApproach;