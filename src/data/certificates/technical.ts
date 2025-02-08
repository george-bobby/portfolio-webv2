
import { 
  SiNeo4J, 
  SiSelenium, 
  SiPagerduty,
  SiOracle,
  SiPython,
  SiWordpress,
  SiCisco,
  SiOpenjdk 
} from 'react-icons/si';
import { Certification } from '@/types/certification';

export const technicalCertifications: Certification[] = [
  {
    id: "neo4j-2024",
    title: "Neo4j Database Certified Professional",
    issuer: "Neo4j",
    date: "December 2024",
    description: "Certification in Graph Databases, RAG, and Data Analysis.",
    skills: [
      "Data Analysis",
      "Graph Databases",
      "Retrieval-Augmented Generation (RAG)",
    ],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: SiNeo4J,
  },
  {
    id: "lambdatest-automation-2024",
    title: "LambdaTest Test Automation Certification",
    issuer: "LambdaTest",
    date: "September 2024",
    description: "Certification in test automation using Selenium.",
    skills: ["Selenium", "Test Automation", "Software Testing"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: SiSelenium,
  },
  {
    id: "pagerduty-devops-2024",
    title: "PagerDuty DevOps Professional Certification",
    issuer: "PagerDuty",
    date: "September 2024",
    description:
      "Certification in CI/CD, Infrastructure as Code, and DevOps practices.",
    skills: ["CI/CD", "Infrastructure as Code", "DevOps"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: SiPagerduty,
  },
  {
    id: "oracle-java-2024",
    title: "Java Programming Oracle Academy",
    issuer: "Oracle",
    date: "April 2024",
    description: "Java Programming certification from Oracle Academy.",
    skills: ["Java"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: SiOpenjdk,
  },
  {
    id: "lt-data-analytics-2023",
    title: "Programming For Data Analytics",
    issuer: "L&T Technology Services",
    date: "November 2023",
    description: "Certification in Python, Pandas, and data analytics.",
    skills: ["Python", "NumPy", "Data Analysis", "Pandas"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: SiPython,
  },
  {
    id: "udemy-wordpress-2023",
    title: "Complete WordPress Website Developer Course",
    issuer: "Udemy",
    date: "October 2023",
    description: "Certification in WordPress development and SEO strategies.",
    skills: ["WordPress", "Web Development", "SEO Audits"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: SiWordpress,
  },
  {
    id: "cisco-networking-2023",
    title: "Cisco Networking Basics",
    issuer: "Cisco",
    date: "September 2023",
    description:
      "Certification in networking fundamentals and Cisco Packet Tracer.",
    skills: ["Packet Tracer", "Cloud Computing", "Cisco Networking"],
    detailsUrl:
      "https://www.linkedin.com/in/george-bobby/details/certifications/",
    icon: SiCisco,
  },
];
