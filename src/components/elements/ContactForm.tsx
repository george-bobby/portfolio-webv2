
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Send, Mail, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
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
    <div className="w-full px-6">
      <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-6">Get in Touch</h2>

      <div className="bg-secondary/10 rounded-xl p-8 border border-secondary/20 hover:border-primary/30 transition-all duration-300 h-[calc(100%-4rem)]">
        <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-md mx-auto">
          <div>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary z-10">
                <User className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              </div>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
                className="bg-secondary/5 rounded-md pl-11 pr-4 py-3 border border-transparent hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 hover:bg-secondary/10"
              />
            </div>
          </div>

          <div>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary z-10">
                <Mail className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email Address"
                required
                disabled={isSubmitting}
                className="bg-secondary/5 rounded-md pl-11 pr-4 py-3 border border-transparent hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 hover:bg-secondary/10"
              />
            </div>
          </div>

          <div>
            <div className="relative group">
              <div className="absolute left-3 top-4 text-primary z-10">
                <MessageSquare className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              </div>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                disabled={isSubmitting}
                className="min-h-[140px] bg-secondary/5 rounded-md pl-11 pr-4 py-3 border border-transparent hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 hover:bg-secondary/10"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative overflow-hidden transition-all duration-300 bg-primary/20 hover:bg-primary hover:shadow-md hover:shadow-primary/10 text-primary-foreground rounded-md py-3"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <>
                  <span className="font-medium">Send Message</span>
                  <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
