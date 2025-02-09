import { BlogPost } from './types';

export const gsapAnimations: BlogPost = {
  id: "4",
  slug: "gsap-animations-guide",
  title: "Creating Stunning Animations with GSAP",
  description: "Master the art of web animations using GSAP (GreenSock Animation Platform) with practical examples and tips.",
  date: "2024-02-28",
  author: "Alex Turner",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
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
};
