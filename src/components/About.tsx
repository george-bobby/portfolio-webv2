import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  GraduationCap,
  Briefcase,
  CalendarIcon,
  Building,
  Award,
  BookOpen,
  Star,
  Trophy,
  MapPin,
  Timer
} from "lucide-react";
import educationData from "@/data/education";
import workData from "@/data/experience";

const About = () => {

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        {/* About Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate developer with a keen eye for design and a love for creating
                  seamless user experiences. With expertise in modern web technologies, I bring
                  ideas to life through clean code and creative solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300">
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
        </motion.div>

        {/* Timelines Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="text-primary w-8 h-8" />
              Education
            </h2>
            {/* Timeline line */}
            <div className="relative">
              <div className="absolute left-0 w-0.5 h-full bg-primary/20" />
              <div className="space-y-8 pl-6">
                {educationData.map((edu, index) => (
                  <Card
                    key={index}
                    className="relative bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-4 h-4 bg-primary rounded-full transform -translate-x-[34px] top-6" />

                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        {edu.school}
                      </CardTitle>
                      <CardDescription>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4" />
                            {edu.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            GPA: {edu.gpa}
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium mb-4">{edu.degree}</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <Star className="w-4 h-4 text-primary" />
                            Key Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-primary" />
                            Achievements
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-primary w-8 h-8" />
              Work Experience
            </h2>
            {/* Timeline line */}
            <div className="relative">
              <div className="absolute left-0 w-0.5 h-full bg-primary/20" />
              <div className="space-y-8 pl-6">
                {workData.map((work, index) => (
                  <Card
                    key={index}
                    className="relative bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-4 h-4 bg-primary rounded-full transform -translate-x-[34px] top-6" />

                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        {work.company}
                      </CardTitle>
                      <CardDescription>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4" />
                            {work.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {work.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Timer className="w-4 h-4" />
                            {work.position}
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{work.description}</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <Star className="w-4 h-4 text-primary" />
                            Key Responsibilities
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {work.responsibilities.map((responsibility, i) => (
                              <li key={i}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-primary" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {work.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;