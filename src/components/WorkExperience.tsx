import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const experiences = [
  {
    title: "Product Development Intern",
    company: "Talisma Corporation Pvt. Ltd.",
    duration: "April 2024 - March 2024",
    location: "Bangalore, India",
    achievements: [
      "Enhanced CRM solutions, boosting team productivity by 15%",
      "Developed a MERN stack dashboard, reducing manual reporting time by 50%"
    ],
    tools: ["React", "Node.js", "MongoDB"]
  }
];

const WorkExperience = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground">A glimpse into my professional journey.</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-primary/20 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 top-6" />

              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BriefcaseIcon className="w-5 h-5 text-primary" />
                    {exp.title}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex flex-col gap-2 mt-2">
                      <span className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;