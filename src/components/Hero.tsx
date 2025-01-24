import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-up opacity-0 [animation-delay:200ms]">
            Creative Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up opacity-0 [animation-delay:400ms]">
            I build exceptional digital experiences that inspire and innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 [animation-delay:600ms]">
            <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View My Work
            </Button>
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;