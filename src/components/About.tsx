import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, GraduationCap, Briefcase } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Demo data
  const educationData = [
    {
      school: "Stanford University",
      degree: "Master of Science in Computer Science",
      year: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning"
    },
    {
      school: "MIT",
      degree: "Bachelor of Science in Software Engineering",
      year: "2016 - 2020",
      description: "Dean's List, Computer Science Excellence Award"
    }
  ];

  const workData = [
    {
      company: "Google",
      position: "Senior Software Engineer",
      year: "2022 - Present",
      description: "Leading development of cloud-based solutions"
    },
    {
      company: "Microsoft",
      position: "Software Engineer",
      year: "2020 - 2022",
      description: "Developed enterprise-scale applications"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro cards animation
      gsap.from(".intro-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Timeline animations
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top center+=100",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Contact buttons animation
      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top center+=100",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 min-h-screen bg-background" id="about">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <h2 className="text-4xl font-heading font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="intro-card bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer with a keen eye for design and a love for creating
                seamless user experiences. With expertise in modern web technologies, I bring
                ideas to life through clean code and creative solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="intro-card bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building modern web applications using cutting-edge
                technologies. From responsive designs to complex web applications, I focus on
                creating efficient and scalable solutions that meet business needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Education Timeline */}
        <div className="timeline-section mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="text-primary" />
            Education
          </h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className="timeline-item bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-primary mb-1">{edu.school}</h3>
                    <p className="text-lg font-medium mb-1">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="timeline-section mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
            <Briefcase className="text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {workData.map((work, index) => (
              <Card
                key={index}
                className="timeline-item bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-primary mb-1">{work.company}</h3>
                    <p className="text-lg font-medium mb-1">{work.position}</p>
                    <p className="text-sm text-muted-foreground mb-2">{work.year}</p>
                    <p className="text-muted-foreground">{work.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section text-center">
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="contact-item group hover:border-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.location.href = "mailto:your.email@example.com"}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:text-primary" />
              Email Me
            </Button>
            <Button
              variant="outline"
              className="contact-item group hover:border-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:text-primary" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;