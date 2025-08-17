import { motion } from "framer-motion";
import { certifications } from "@/data/certificates";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BadgeCheckIcon, CalendarIcon, BuildingIcon } from "lucide-react";



const Certifications = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            My Certifications
          </h1>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional certifications showcasing my skills and expertise
          </p> */}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <a
                href={cert.detailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full cursor-pointer"
              >
                <Card className="group h-full flex flex-col bg-secondary/5 backdrop-blur-sm border border-secondary/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="p-6 flex-1">
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/30 shadow-inner mb-2 sm:mb-0">
                        <cert.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold flex items-center gap-2 mb-1">
                          <BadgeCheckIcon className="w-5 h-5 text-primary" />
                          {cert.title}
                        </CardTitle>
                        <div className="flex flex-col space-y-1">
                          <p className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BuildingIcon className="w-3.5 h-3.5" /> {cert.issuer}
                          </p>
                          <p className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarIcon className="w-3.5 h-3.5" /> {cert.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-0">
                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium transition-colors duration-300 hover:bg-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
