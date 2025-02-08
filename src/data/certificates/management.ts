
import { 
  SiAtlassian, 
  SiClickup 
} from 'react-icons/si';
import { 
  BsFillKanbanFill,
  BsBook,
  BsAward 
} from 'react-icons/bs';
import { Certification } from '@/types/certification';

export const managementCertifications: Certification[] = [
  {
    id: "aha-product-mgmt-2024",
    title: "Aha! Product Management Certification",
    issuer: "Aha!",
    date: "September 2024",
    description:
      "Product management certification covering product strategies and development.",
    skills: ["Product Strategies", "Product Management", "Product Development"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: BsFillKanbanFill,
  },
  {
    id: "atlassian-agile-2024",
    title: "Atlassian Agile Project Management Certification",
    issuer: "Atlassian",
    date: "September 2024",
    description:
      "Certification in Agile methodologies, Jira, and project management.",
    skills: ["Project Management", "Jira", "Product Development"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: SiAtlassian,
  },
  {
    id: "clickup-expert-2024",
    title: "ClickUp Expert Certification",
    issuer: "ClickUp",
    date: "September 2024",
    description: "Certification in ClickUp product management strategies.",
    skills: ["Product Strategies", "ClickUp", "Product Management"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: SiClickup,
  },
  {
    id: "iiba-product-mgmt-2024",
    title: "Product Management First Steps",
    issuer: "IIBA Mumbai Chapter",
    date: "May 2024",
    description:
      "Introductory certification in product management and marketing.",
    skills: ["Product Strategies", "Project Management", "Product Management"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: BsBook,
  },
  {
    id: "nptel-project-mgmt-2024",
    title: "Project Management Certification",
    issuer: "NPTEL",
    date: "April 2024",
    description: "Certification covering project management fundamentals.",
    skills: ["Project Management"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: BsAward,
  },
];
