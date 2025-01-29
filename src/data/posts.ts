interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  readingTime: string;
  content: string;
  tags: string[];
}
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "mastering-tailwind-css-best-practices",
    title: "Mastering Tailwind CSS: Best Practices for Modern Web Development",
    description: "Learn the essential best practices for building responsive and maintainable websites using Tailwind CSS, including tips for optimization and component organization.",
    date: "2024-03-15",
    author: "Sarah Johnson",
    // image: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
    image: `https://placehold.co/600x400?text=${encodeURIComponent("Mastering Tailwind CSS")}`,
    readingTime: "5 min read",
    content: "Full blog post content here...",
    tags: ["Tailwind CSS", "Web Development", "CSS"]
  },
  {
    id: "2",
    slug: "nextjs-13-features",
    title: "Next.js 13: A Deep Dive into New Features",
    description: "Explore the latest features in Next.js 13, including the new App Router, Server Components, and improved data fetching patterns.",
    date: "2024-03-10",
    author: "Michael Chen",
    image: `https://placehold.co/600x400?text=${encodeURIComponent("Next.js 13 Features")}`,
    readingTime: "7 min read",
    content: "Full blog post content here...",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    id: "3",
    slug: "nextjs-performance-optimization",
    title: "Performance Optimization Techniques in Next.js",
    description: "Learn advanced techniques for optimizing your Next.js applications, including code splitting, lazy loading, and image optimization.",
    date: "2024-03-05",
    author: "Emma Davis",
    image: `https://placehold.co/600x400?text=${encodeURIComponent("Next.js Performance Optimization")}`,
    readingTime: "6 min read",
    content: "Full blog post content here...",
    tags: ["Next.js", "Performance", "Web Development"]
  },
  {
    id: "4",
    slug: "gsap-animations-guide",
    title: "Creating Stunning Animations with GSAP",
    description: "Master the art of web animations using GSAP (GreenSock Animation Platform) with practical examples and tips.",
    date: "2024-02-28",
    author: "Alex Turner",
    image: `https://placehold.co/600x400?text=${encodeURIComponent("GSAP Animations Guide")}`,
    readingTime: "8 min read",
    content: "Full blog post content here...",
    tags: ["GSAP", "Animation", "JavaScript"]
  },
  {
    id: "5",
    slug: "tailwind-css-dark-mode",
    title: "Implementing Dark Mode with Tailwind CSS",
    description: "A comprehensive guide to implementing dark mode in your web applications using Tailwind CSS and best practices.",
    date: "2024-02-20",
    author: "Lisa Wang",
    image: `https://placehold.co/600x400?text=${encodeURIComponent("Tailwind CSS Dark Mode")}`,
    readingTime: "4 min read",
    content: "Full blog post content here...",
    tags: ["Tailwind CSS", "Dark Mode", "Web Development"]
  },
  {
    id: "6",
    slug: "custom-hover-effects",
    title: "Creating Custom Hover Effects with CSS and JavaScript",
    description: "Learn how to create engaging and interactive hover effects using modern CSS techniques and JavaScript.",
    date: "2024-02-15",
    author: "David Smith",
    image: `https://placehold.co/600x400?text=${encodeURIComponent("Custom Hover Effects")}`,
    readingTime: "5 min read",
    content: "Full blog post content here...",
    tags: ["CSS", "JavaScript", "Web Development"]
  }
];