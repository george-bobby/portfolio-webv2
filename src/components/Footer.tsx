import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Phone, Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "563e657c-2024-43e0-aef1-585384939075");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col items-center w-full px-6"
          >
            <h2 className="text-2xl font-bold text-center">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="bg-background/80 rounded-lg px-4 py-3 border focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  className="bg-background/80 rounded-lg px-4 py-3 border focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  disabled={isSubmitting}
                  className="min-h-[100px] bg-background/80 rounded-lg px-4 py-3 border focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center gap-3 bg-primary text-white px-5 py-3 rounded-lg transition-all hover:bg-gray-800 hover:text-white"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>

              </motion.div>
            </form>
          </motion.div>

          {/* Social Links & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 flex flex-col items-center w-full px-6"
          >
            {/* Social Links */}
            <div className="space-y-4 w-full max-w-md text-center">
              <h3 className="text-2xl font-semibold">Connect With Me</h3>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg transition-all hover:bg-gray-800 hover:text-white"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 w-full max-w-md text-center">
              <h3 className="text-2xl font-semibold">Contact Info</h3>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  navigator.clipboard.writeText("george.bobby@example.com");
                  toast({ description: "Email copied!" });
                }}
                className="flex justify-center items-center gap-3 bg-primary text-white w-full px-5 py-3 rounded-lg transition-all hover:bg-gray-800 hover:text-white"
              >
                <Mail className="w-6 h-6 text-white" />
                <span className="text-lg">george.bobby@example.com</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+1234567890"
                className="flex justify-center items-center gap-3 bg-primary text-white w-full px-5 py-3 rounded-lg transition-all hover:bg-gray-800 hover:text-white"
              >
                <Phone className="w-6 h-6 text-white" />
                <span className="text-lg">+1 (234) 567-890</span>
              </motion.a>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center pt-8 mt-12 border-t"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} George Bobby. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;