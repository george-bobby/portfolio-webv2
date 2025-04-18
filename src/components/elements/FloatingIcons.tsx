import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
    Database,
    PenTool,
    Palette,
    Code,
    Cpu,
    Layers,
    Server,
    Terminal,
    Globe,
    Cloud,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const iconNames = [
    "Database",
    "Design",
    "UI/UX",
    "Code",
    "AI/ML",
    "Architecture",
    "Backend",
    "DevOps",
    "Web",
    "Cloud"
];

const FloatingIcons = () => {
    const iconsContainerRef = useRef<HTMLDivElement>(null);

    const iconPositions = Array.from({ length: 10 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 30 + 25, // Slightly larger icons
        opacity: Math.random() * 0.2 + 0.2, // Increased base opacity for better visibility
    }));

    useEffect(() => {
        if (!iconsContainerRef.current) return;

        const floatingIcons = gsap.utils.toArray<HTMLElement>(".floating-icon");
        if (floatingIcons.length > 0) {
            floatingIcons.forEach((icon, index) => {
                // Create a more complex animation
                gsap.to(icon, {
                    y: "-=25",
                    x: Math.random() > 0.5 ? "+=10" : "-=10", // Add slight horizontal movement
                    duration: 2.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.15,
                });

                // Add a subtle rotation
                gsap.to(icon, {
                    rotation: Math.random() > 0.5 ? 5 : -5,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.1,
                });
            });
        }

        return () => {
            // Clean up all animations
            gsap.killTweensOf(".floating-icon");
            floatingIcons.forEach(icon => {
                gsap.killTweensOf(icon);
            });
        };
    }, []);

    return (
        <TooltipProvider>
            <div ref={iconsContainerRef} className="absolute inset-0">
                {iconPositions.map((position, index) => {
                    const Icon = [
                        Database,
                        PenTool,
                        Palette,
                        Code,
                        Cpu,
                        Layers,
                        Server,
                        Terminal,
                        Globe,
                        Cloud,
                    ][index % 10];

                    const iconName = iconNames[index % 10];

                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <div
                                    className="floating-icon absolute pointer-events-auto"
                                    style={{
                                        top: `${position.top}%`,
                                        left: `${position.left}%`,
                                        transform: `translate(-50%, -50%)`,
                                    }}
                                >
                                    <Icon
                                        className="text-primary transition-all duration-300 hover:scale-125 hover:opacity-100 hover:filter hover:drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.7)] cursor-pointer"
                                        style={{
                                            width: `${position.size}px`,
                                            height: `${position.size}px`,
                                            opacity: position.opacity,
                                        }}
                                    />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="bg-primary/90 text-primary-foreground border-primary/20">
                                <p>{iconName}</p>
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
            </div>
        </TooltipProvider>
    );
};

export default FloatingIcons;