import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold mb-12 animate-fade-up opacity-0">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-secondary/50 backdrop-blur-sm animate-fade-up opacity-0 [animation-delay:200ms]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground">
                I'm a passionate developer with a keen eye for design and a love for creating
                seamless user experiences. With expertise in modern web technologies, I bring
                ideas to life through clean code and creative solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/50 backdrop-blur-sm animate-fade-up opacity-0 [animation-delay:400ms]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-bold mb-4">What I Do</h3>
              <p className="text-muted-foreground">
                I specialize in building modern web applications using cutting-edge
                technologies. From responsive designs to complex web applications, I focus on
                creating efficient and scalable solutions that meet business needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;