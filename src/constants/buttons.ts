import { ArrowRight, ArrowLeft, ExternalLink, Github, Linkedin, Twitter, Download, Mail, Phone } from "lucide-react";

export const BUTTON_ICONS = {
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  externalLink: ExternalLink,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  download: Download,
  mail: Mail,
  phone: Phone,
} as const;

export const BUTTON_VARIANTS = {
  primary: "default",
  secondary: "secondary",
  outline: "outline",
  ghost: "ghost",
} as const;