import { BlogPost } from './types';

export const hoverEffects: BlogPost = {
  id: "6",
  slug: "custom-hover-effects",
  title: "Creating Custom Hover Effects with CSS and JavaScript",
  description: "Learn how to create engaging and interactive hover effects using modern CSS techniques and JavaScript.",
  date: "2024-02-15",
  author: "David Smith",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
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
};
