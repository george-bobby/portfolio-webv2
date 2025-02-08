export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  downloadUrl: string;
  detailsUrl: string;
  image?: string;
};

export const certifications: Certification[] = [
  {
    id: "oracle-2024",
    title: "Oracle Academy 2024",
    issuer: "Oracle",
    date: "2024",
    description: "Java Programming certification from Oracle Academy",
    skills: ["Java", "OOP", "Database"],
    downloadUrl: "#",
    detailsUrl: "#",
    image: "/placeholder.svg"
  },
  {
    id: "product-mgmt",
    title: "Product Management Academy",
    issuer: "Product School",
    date: "2024",
    description: "Comprehensive product management certification",
    skills: ["Product Strategy", "Agile", "User Research"],
    downloadUrl: "#",
    detailsUrl: "#",
    image: "/placeholder.svg"
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Cloud computing and AWS services certification",
    skills: ["AWS", "Cloud Architecture", "DevOps"],
    downloadUrl: "#",
    detailsUrl: "#",
    image: "/placeholder.svg"
  }
];