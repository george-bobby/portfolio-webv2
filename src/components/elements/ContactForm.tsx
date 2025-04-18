
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

      <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20 hover:border-primary/30 transition-all duration-300 h-[calc(100%-4rem)]">
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-primary/10 rounded-md">
                <User className="w-4 h-4 text-primary" />
              </div>
              <label htmlFor="name" className="text-sm font-medium">Your Name</label>
            </div>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              disabled={isSubmitting}
              className="bg-secondary/5 rounded-md px-4 py-2 border-0 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-primary/10 rounded-md">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <label htmlFor="email" className="text-sm font-medium">Your Email</label>
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              disabled={isSubmitting}
              className="bg-secondary/5 rounded-md px-4 py-2 border-0 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-primary/10 rounded-md">
                <MessageSquare className="w-4 h-4 text-primary" />
              </div>
              <label htmlFor="message" className="text-sm font-medium">Your Message</label>
            </div>
            <Textarea
              id="message"
              name="message"
              placeholder="What would you like to discuss?"
              required
              disabled={isSubmitting}
              className="min-h-[100px] bg-secondary/5 rounded-md px-4 py-2 border-0 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative overflow-hidden transition-all duration-300 bg-primary/20 hover:bg-primary text-primary-foreground rounded-md"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
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
