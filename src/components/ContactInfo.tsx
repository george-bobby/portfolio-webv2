
import React from "react";
import { Mail, Phone, Copy, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

// Note: Using deprecated icons as they're still available in the current version

const ContactInfo = () => {
  const { toast } = useToast();

  const socialPlatforms = [
    {
      icon: Github,
      href: "https://github.com/george-bobby",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/george-bobby",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/georgebobby_",
      label: "Twitter"
    }
  ];

  return (
    <div className="w-full px-6">
      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-6">Contact Info</h3>

      <div className="bg-secondary/10 rounded-xl p-8 border border-secondary/20 hover:border-primary/30 transition-all duration-300 h-[calc(100%-4rem)]">
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium">Email</h4>
                </div>
                <p className="text-base text-muted-foreground pl-11">hello@georgebobby.me</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium">Phone</h4>
                </div>
                <p className="text-base text-muted-foreground pl-11">+919746095420</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h4 className="text-base font-medium mb-4">Connect With Me</h4>
              <div className="flex items-center gap-3">
                {socialPlatforms.map(({ icon: Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary/10 hover:bg-primary/30 rounded-lg transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <Button
              onClick={() => {
                navigator.clipboard.writeText("hello@georgebobby.me");
                toast({ description: "Email copied to clipboard!" });
              }}
              size="sm"
              className="group/btn bg-primary/60 hover:bg-primary text-primary-foreground transition-all duration-300 w-full flex items-center justify-center gap-2 py-2.5"
            >
              <span>Copy Email</span>
              <Copy className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>

            {/* <a
              href="tel:+919746095420"
              className="group/btn bg-primary/60 hover:bg-primary text-primary-foreground transition-all duration-300 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium"
            >
              <span>Call Now</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
