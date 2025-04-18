import { useEffect, useRef, useState, useMemo } from "react";
import { useIsMobile } from "@/utils/use-mobile";
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
    const isMobile = useIsMobile();

    // Adjust number of icons and size based on screen size
    const [iconCount, setIconCount] = useState(isMobile ? 6 : 10);
    const [sizeMultiplier, setSizeMultiplier] = useState(isMobile ? 0.7 : 1);

    useEffect(() => {
        // Responsive adjustments - with throttling
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) { // Small mobile
                setIconCount(4); // Reduced for better performance
                setSizeMultiplier(0.7);
            } else if (width < 768) { // Mobile
                setIconCount(6); // Reduced for better performance
                setSizeMultiplier(0.8);
            } else if (width < 1024) { // Tablet
                setIconCount(8); // Reduced for better performance
                setSizeMultiplier(0.9);
            } else { // Desktop
                setIconCount(10);
                setSizeMultiplier(1);
            }
        };

        // Throttle resize handler
        let resizeTimer: number | null = null;
        const throttledResize = () => {
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(handleResize, 200);
        };

        handleResize(); // Initial call
        window.addEventListener('resize', throttledResize);
        return () => window.removeEventListener('resize', throttledResize);
    }, []);

    const iconPositions = useMemo(() => Array.from({ length: iconCount }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: (Math.random() * 30 + 25) * sizeMultiplier, // Responsive size
        opacity: Math.random() * 0.2 + 0.2, // Increased base opacity for better visibility
    })), [iconCount, sizeMultiplier]);

    useEffect(() => {
        if (!iconsContainerRef.current) return;

        // Skip complex animations on mobile for better performance
        const floatingIcons = gsap.utils.toArray<HTMLElement>(".floating-icon");
        if (floatingIcons.length > 0) {
            // Create a single timeline for better performance
            const tl = gsap.timeline();

            floatingIcons.forEach((icon, index) => {
                // Simpler animations with fewer properties
                if (isMobile) {
                    // Very simple animation for mobile
                    gsap.to(icon, {
                        y: "-=15",
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: index * 0.1,
                    });
                } else {
                    // More complex animation for desktop
                    gsap.to(icon, {
                        y: "-=25",
                        x: Math.random() > 0.5 ? "+=10" : "-=10", // Add slight horizontal movement
                        duration: 2.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: index * 0.15,
                    });

                    // Add a subtle rotation only on desktop
                    gsap.to(icon, {
                        rotation: Math.random() > 0.5 ? 5 : -5,
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: index * 0.1,
                    });
                }
            });
        }

        return () => {
            // Clean up all animations
            gsap.killTweensOf(".floating-icon");
            floatingIcons.forEach(icon => {
                gsap.killTweensOf(icon);
            });
        };
    }, [isMobile]);

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
                                        className={`text-primary transition-all duration-300 ${!isMobile ? 'hover:scale-125 hover:opacity-100 hover:filter hover:drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.7)]' : ''} cursor-pointer touch-action-manipulation`}
                                        style={{
                                            width: `${position.size}px`,
                                            height: `${position.size}px`,
                                            opacity: position.opacity,
                                        }}
                                    />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" sideOffset={5} className="bg-primary/90 text-primary-foreground border-primary/20 z-50">
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