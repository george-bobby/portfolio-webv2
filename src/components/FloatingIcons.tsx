import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, PenTool, Figma, Code, Cpu, Layers, Server, Terminal, Globe, Cloud } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = [Database, PenTool, Figma, Code, Cpu, Layers, Server, Terminal, Globe, Cloud];

// Generate random color within a pleasing range
const getRandomColor = () => {
    const hue = Math.random() * 360;
    return `hsla(${hue}, 80%, 60%, 0.2)`;
};

const FloatingIcons = () => {
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [iconPositions, setIconPositions] = useState(
        Array.from({ length: icons.length }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 100,
            color: getRandomColor(),
        }))
    );

    useEffect(() => {
        iconRefs.current.forEach((icon, index) => {
            if (icon) {
                // Create more organic floating movement
                gsap.to(icon, {
                    y: "random(-120, 120)",
                    x: "random(-120, 120)",
                    rotation: "random(-15, 15)",
                    duration: "random(6, 8)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.2,
                });

                // Add subtle continuous rotation
                gsap.to(icon, {
                    rotation: "random(-20, 20)",
                    duration: "random(4, 6)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.1,
                });

                // Parallax effect
                gsap.to(icon, {
                    y: (index % 2 === 0 ? 1 : -1) * 150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: icon,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            }
        });
    }, []);

    const handleHoverStart = (index: number) => {
        const icon = iconRefs.current[index];
        if (!icon) return;

        gsap.killTweensOf(icon);

        // Create a more dramatic hover effect
        gsap.to(icon, {
            scale: 1.5,
            rotation: "random(-30, 30)",
            duration: 0.4,
            ease: "elastic.out(1, 0.3)",
        });

        // Add multiple layered effects
        icon.style.filter = `
            drop-shadow(0 0 20px rgba(var(--color-primary), 0.4))
            drop-shadow(0 0 40px rgba(var(--color-primary), 0.2))
            brightness(1.2)
        `;

        const iconElement = icon.querySelector('svg');
        if (iconElement) {
            gsap.to(iconElement, {
                stroke: "var(--color-primary)",
                fill: "rgba(var(--color-primary), 0.15)",
                duration: 0.3,
            });

            // Add pulsing animation
            gsap.to(iconElement, {
                scale: 1.1,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }

        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'absolute inset-0 rounded-full';
        ripple.style.border = '2px solid var(--color-primary)';
        ripple.style.opacity = '0';
        icon.appendChild(ripple);

        gsap.to(ripple, {
            scale: 1.5,
            opacity: 0,
            duration: 1,
            ease: "power1.out",
            onComplete: () => ripple.remove(),
        });
    };

    const handleHoverEnd = (index: number) => {
        const icon = iconRefs.current[index];
        if (!icon) return;

        // Smooth transition back
        gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
            clearProps: "filter",
            onComplete: () => {
                // Resume original animations
                gsap.to(icon, {
                    y: "random(-120, 120)",
                    x: "random(-120, 120)",
                    rotation: "random(-15, 15)",
                    duration: "random(6, 8)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }
        });

        const iconElement = icon.querySelector('svg');
        if (iconElement) {
            gsap.killTweensOf(iconElement);
            gsap.to(iconElement, {
                stroke: "currentColor",
                fill: "none",
                scale: 1,
                duration: 0.3,
            });
        }
    };

    return (
        <div className="absolute inset-0">
            {iconPositions.map((position, index) => {
                const IconComponent = icons[index % icons.length];

                return (
                    <div
                        key={index}
                        ref={(el) => (iconRefs.current[index] = el)}
                        className="absolute text-primary opacity-40 transition-all duration-300 cursor-pointer"
                        style={{
                            top: `${position.top}%`,
                            left: `${position.left}%`,
                            width: `${position.size}px`,
                            height: `${position.size}px`,
                            transform: "translate(-50%, -50%)",
                            background: `radial-gradient(circle at center, ${position.color}, transparent 70%)`,
                        }}
                        onMouseEnter={() => handleHoverStart(index)}
                        onMouseLeave={() => handleHoverEnd(index)}
                    >
                        <IconComponent
                            size="100%"
                            strokeWidth={1}
                            className="transition-all duration-300"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default FloatingIcons;