
import React from "react";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
// Note: Using deprecated icons as they're still available in the current version

const SocialLinks = () => {
  const socialPlatforms = [
    {
      icon: Github,
      href: "https://github.com/george-bobby",
      label: "GitHub",
      description: "Check out my code repositories and projects"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/george-bobby",
      label: "LinkedIn",
      description: "Connect with me professionally"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/georgebobby_",
      label: "Twitter",
      description: "Follow me for updates and thoughts"
    }
  ];

  return (
    <div className="space-y-6 w-full max-w-md">
      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-4">Connect With Me</h3>

      <div className="space-y-4">
        {socialPlatforms.map(({ icon: Icon, href, label, description }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden bg-secondary/10 rounded-xl p-4 border border-secondary/20 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-medium">{label}</h4>
            </div>

            <p className="text-sm text-muted-foreground mb-3 pl-11">{description}</p>

            <div className="flex justify-end">
              <div className="group/btn bg-primary/20 hover:bg-primary text-primary-foreground transition-all duration-300 py-1.5 px-3 rounded-md text-sm font-medium inline-flex items-center gap-1">
                <span>Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
