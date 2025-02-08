
import { BsGraphUp, BsBuilding, BsWindow } from 'react-icons/bs';
import { Certification } from '@/types/certification';

export const businessCertifications: Certification[] = [
  {
    id: "microsoft-ai-2024",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "July 2024",
    description:
      "Certification covering NLP, Generative AI, and Artificial Intelligence.",
    skills: ["NLP", "Generative AI", "Artificial Intelligence"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: BsWindow,
  },
  {
    id: "snovio-sales-2024",
    title: "From Lead Generation to Closing Deals",
    issuer: "Snov.io",
    date: "June 2024",
    description: "Certification in lead generation and product marketing.",
    skills: ["Social Media Marketing", "Product Marketing", "Market Research"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: BsGraphUp,
  },
  {
    id: "nestle-entrepreneurship-2024",
    title: "Idea Generation & Successful Entrepreneurship",
    issuer: "Nestlé",
    date: "April 2024",
    description:
      "Certification covering entrepreneurship, communication, and project management.",
    skills: ["Entrepreneurship", "Project Management", "Public Speaking"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: BsBuilding,
  },
];
