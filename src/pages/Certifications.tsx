import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheckIcon, CalendarIcon, DownloadIcon, ExternalLinkIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Certifications = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My Certifications
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of my professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                {cert.image && (
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgeCheckIcon className="w-5 h-5 text-primary" />
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" asChild>
                          <a href={cert.downloadUrl} download>
                            <DownloadIcon className="w-4 h-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Download Certificate</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" asChild>
                          <a href={cert.detailsUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="w-4 h-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Details</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;