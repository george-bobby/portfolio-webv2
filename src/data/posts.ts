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
    title: "Mastering Tailwind CSS: Best Practices for Modern Web",
    description:
      "Learn the essential best practices for building responsive and maintainable websites using Tailwind CSS, including tips for optimization and component organization.",
    date: "2024-03-15",
    author: "Sarah Johnson",
    image: `https://placehold.co/600x400?text=${encodeURIComponent(
      "Mastering Tailwind CSS"
    )}`,
    readingTime: "5 min read",
    content: `# Mastering Tailwind CSS: Best Practices for Modern Web Development

In recent years, Tailwind CSS has revolutionized the way we approach web design and development. This utility-first CSS framework has gained massive popularity due to its flexibility and developer-friendly approach. Let's dive into some essential best practices that will help you make the most of Tailwind CSS.

## 1. Organizing Your Components

One of the key aspects of maintaining a clean Tailwind CSS project is proper component organization. Here's how you can structure your components effectively:

- Create a consistent naming convention for your components
- Group related utilities using @apply directives
- Maintain a clear separation between layout and styling utilities

## 2. Optimizing for Production

Performance is crucial for modern web applications. Here are some optimization techniques:

- Use PurgeCSS to remove unused styles
- Implement JIT (Just-In-Time) mode for faster development
- Leverage code splitting for better load times

## 3. Custom Configuration

Tailwind's configuration file is powerful and flexible. Some best practices include:

- Define your color palette
- Set up custom breakpoints
- Create reusable component classes

## 4. Responsive Design

Tailwind makes responsive design straightforward:

- Use mobile-first approach
- Implement fluid typography
- Create responsive layouts with grid and flexbox

Remember to always consider accessibility and performance while building your components. Happy coding!`,
    tags: ["Tailwind CSS", "Web Development", "CSS"],
  },
  {
    id: "2",
    slug: "nextjs-13-features",
    title: "Next.js 13: A Deep Dive into New Features",
    description:
      "Explore the latest features in Next.js 13, including the new App Router, Server Components, and improved data fetching patterns.",
    date: "2024-03-10",
    author: "Michael Chen",
    image: `https://placehold.co/600x400?text=${encodeURIComponent(
      "Next.js 13 Features"
    )}`,
    readingTime: "7 min read",
    content: `# Next.js 13: A Deep Dive into New Features

Next.js 13 brings revolutionary changes to the React framework ecosystem. Let's explore the major features and improvements that make it a game-changer for web development.

## App Router: The New Standard

The App Router represents a paradigm shift in how we structure Next.js applications:

- File-system based routing
- Nested layouts
- Loading and error states
- Route groups and parallel routes

## Server Components

React Server Components are now the default in Next.js 13:

- Improved initial page loads
- Reduced client-side JavaScript
- Better SEO capabilities
- Simplified data fetching

## Enhanced Data Fetching

Data fetching has been completely reimagined:

\`\`\`javascript
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}
\`\`\`

## Streaming and Suspense

Next.js 13 introduces streaming capabilities:

- Progressive rendering
- Instant loading states
- Improved user experience
- Better performance metrics

## Turbopack (Beta)

The new Rust-based bundler offers:

- Faster development experience
- Improved hot module replacement
- Better memory usage
- Future-proof architecture

These features represent just the beginning of what's possible with Next.js 13. Stay tuned for more updates and improvements!`,
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: "3",
    slug: "nextjs-performance-optimization",
    title: "Performance Optimization Techniques in Next.js",
    description:
      "Learn advanced techniques for optimizing your Next.js applications, including code splitting, lazy loading, and image optimization.",
    date: "2024-03-05",
    author: "Emma Davis",
    image: `https://placehold.co/600x400?text=${encodeURIComponent(
      "Next.js Performance Optimization"
    )}`,
    readingTime: "6 min read",
    content: `# Performance Optimization Techniques in Next.js

Optimizing performance in Next.js applications is crucial for providing the best user experience. Let's explore various techniques to enhance your app's performance.

## Image Optimization

Next.js provides built-in image optimization:

\`\`\`jsx
import Image from 'next/image'

function MyImage() {
  return (
    <Image
      src="/my-image.jpg"
      alt="Description"
      width={500}
      height={300}
      priority
    />
  )
}
\`\`\`

## Code Splitting

Implement effective code splitting:

- Dynamic imports
- Route-based splitting
- Component-level splitting

## Lazy Loading

Use lazy loading for better initial load times:

\`\`\`jsx
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/Heavy'))
\`\`\`

## Caching Strategies

Implement proper caching:

- Static page generation
- Incremental Static Regeneration
- Stale-While-Revalidate

## Performance Monitoring

Always monitor your application's performance:

- Core Web Vitals
- Lighthouse scores
- Real user metrics

Remember, performance optimization is an ongoing process. Regularly audit your application and make necessary improvements.`,
    tags: ["Next.js", "Performance", "Web Development"],
  },
  {
    id: "4",
    slug: "gsap-animations-guide",
    title: "Creating Stunning Animations with GSAP",
    description:
      "Master the art of web animations using GSAP (GreenSock Animation Platform) with practical examples and tips.",
    date: "2024-02-28",
    author: "Alex Turner",
    image: `https://placehold.co/600x400?text=${encodeURIComponent(
      "GSAP Animations Guide"
    )}`,
    readingTime: "8 min read",
    content: `# Creating Stunning Animations with GSAP

GSAP (GreenSock Animation Platform) is one of the most powerful animation libraries for the web. Let's explore how to create engaging animations with GSAP.

## Getting Started

Basic GSAP animation:

\`\`\`javascript
gsap.to(".my-element", {
  duration: 1,
  x: 100,
  y: 100,
  rotation: 360,
  ease: "power2.out"
});
\`\`\`

## Timeline Animations

Creating complex sequences:

\`\`\`javascript
const tl = gsap.timeline();
tl.to(".first", {duration: 1, x: 100})
  .to(".second", {duration: 1, y: 50})
  .to(".third", {duration: 1, rotation: 360});
\`\`\`

## ScrollTrigger

Implement scroll-based animations:

\`\`\`javascript
gsap.to(".animate-on-scroll", {
  scrollTrigger: {
    trigger: ".animate-on-scroll",
    start: "top center",
    end: "bottom center",
    scrub: true
  },
  y: 100,
  opacity: 0
});
\`\`\`

## Performance Tips

- Use transforms instead of positions
- Implement will-change when needed
- Avoid animating layout properties
- Use requestAnimationFrame

## Advanced Techniques

- Morphing SVG paths
- 3D transformations
- Custom easing functions
- Stagger animations

Remember to always test your animations on various devices and optimize for performance.`,
    tags: ["GSAP", "Animation", "JavaScript"],
  },
  {
    id: "5",
    slug: "tailwind-css-dark-mode",
    title: "Implementing Dark Mode with Tailwind CSS",
    description:
      "A comprehensive guide to implementing dark mode in your web applications using Tailwind CSS and best practices.",
    date: "2024-02-20",
    author: "Lisa Wang",
    image: `https://placehold.co/600x400?text=${encodeURIComponent(
      "Tailwind CSS Dark Mode"
    )}`,
    readingTime: "4 min read",
    content: `# Implementing Dark Mode with Tailwind CSS

Dark mode has become a standard feature in modern web applications. Let's explore how to implement it effectively using Tailwind CSS.

## Basic Setup

First, configure your tailwind.config.js:

\`\`\`javascript
module.exports = {
  darkMode: 'class',
  // ... rest of the config
}
\`\`\`

## Implementation

Basic dark mode toggle:

\`\`\`jsx
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Toggle Dark Mode
    </button>
  )
}
\`\`\`

## Best Practices

When implementing dark mode:

- Use semantic color names
- Consider system preferences
- Implement smooth transitions
- Test contrast ratios

## Color Strategy

Define your color palette:

\`\`\`css
:root {
  --primary: #2563eb;
  --background: #ffffff;
}

[data-theme='dark'] {
  --primary: #3b82f6;
  --background: #1a1a1a;
}
\`\`\`

Remember to maintain accessibility standards and provide a seamless user experience in both modes.`,
    tags: ["Tailwind CSS", "Dark Mode", "Web Development"],
  },
  {
    id: "6",
    slug: "custom-hover-effects",
    title: "Creating Custom Hover Effects with CSS and JavaScript",
    description:
      "Learn how to create engaging and interactive hover effects using modern CSS techniques and JavaScript.",
    date: "2024-02-15",
    author: "David Smith",
    image: `https://placehold.co/600x400?text=${encodeURIComponent(
      "Custom Hover Effects"
    )}`,
    readingTime: "5 min read",
    content: `# Creating Custom Hover Effects with CSS and JavaScript

Hover effects can significantly enhance user experience and add personality to your website. Let's explore some creative techniques for implementing custom hover effects.

## CSS-only Hover Effects

Basic hover transitions:

\`\`\`css
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.1);
}
\`\`\`

## Advanced Effects

Using pseudo-elements:

\`\`\`css
.hover-reveal {
  position: relative;
  overflow: hidden;
}

.hover-reveal::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.hover-reveal:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
\`\`\`

## JavaScript Enhancements

Adding interactive elements:

\`\`\`javascript
const element = document.querySelector('.interactive-hover');

element.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = element.getBoundingClientRect();
  const x = (e.clientX - left) / width;
  const y = (e.clientY - top) / height;
  
  element.style.setProperty('--x', x);
  element.style.setProperty('--y', y);
});
\`\`\`

## Performance Considerations

- Use GPU-accelerated properties
- Avoid layout changes
- Implement debouncing
- Test on mobile devices

Remember to keep accessibility in mind and ensure your hover effects don't interfere with usability.`,
    tags: ["CSS", "JavaScript", "Web Development"],
  },
];
