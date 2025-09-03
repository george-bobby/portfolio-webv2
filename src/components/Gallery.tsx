import { Component } from "./ui/circular-gallery";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useIsMobile } from "@/utils/use-mobile";

const items = [
    {
        image: `https://picsum.photos/seed/1/800/600`,
        text: "Bridge",
        description: "Demonstrates how architectural elements look in the curved gallery layout, showing depth perception as the bridge spans across the grayscale composition."
    },
    {
        image: `https://picsum.photos/seed/2/800/600`,
        text: "Desk Setup",
        description: "Perfect for showcasing detailed workspace photography - notice how the wave distortion effect subtly animates the desk items during scroll interactions."
    },
    {
        image: `https://picsum.photos/seed/3/800/600`,
        text: "Waterfall",
        description: "Natural flowing elements like waterfalls create beautiful motion blur effects when combined with the shader's time-based wave animations."
    },
    {
        image: `https://picsum.photos/seed/4/800/600`,
        text: "Strawberries",
        description: "Close-up food photography demonstrates the rounded corner SDF shader effect - organic shapes contrast nicely with geometric borders."
    },
    {
        image: `https://picsum.photos/seed/5/800/600`,
        text: "Deep Diving",
        description: "Underwater scenes showcase the gallery's ability to handle high-contrast images while maintaining smooth circular arc positioning."
    },
    {
        image: `https://picsum.photos/seed/16/800/600`,
        text: "Train Track",
        description: "Linear perspective elements like train tracks emphasize the 3D bending effect - straight lines curve naturally with the gallery's arc."
    },
    {
        image: `https://picsum.photos/seed/17/800/600`,
        text: "Santorini",
        description: "Architectural landscapes test the aspect ratio fitting algorithm - white buildings against sky show how the fragment shader handles different compositions."
    },
    {
        image: `https://picsum.photos/seed/8/800/600`,
        text: "Blurry Lights",
        description: "Bokeh and light effects create stunning visuals when combined with the vertex shader's sine wave distortions during rapid scrolling."
    },
    {
        image: `https://picsum.photos/seed/9/800/600`,
        text: "New York",
        description: "Urban skylines demonstrate how vertical elements interact with the gallery's rotation calculations - skyscrapers tilt realistically along the curve."
    },
    {
        image: `https://picsum.photos/seed/10/800/600`,
        text: "Good Boy",
        description: "Portrait subjects (like pets) show how the circular positioning affects focal points - the subject remains centered while the background curves."
    },
    {
        image: `https://picsum.photos/seed/21/800/600`,
        text: "Coastline",
        description: "Natural horizon lines create interesting visual effects as they bend with the gallery curve - demonstrates the seamless infinite scroll loop."
    },
    {
        image: `https://picsum.photos/seed/12/800/600`,
        text: "Palm Trees",
        description: "Tropical scenes with strong vertical elements showcase the gallery's drag sensitivity and snap-to-item physics - smooth easing between positions."
    },
];

const Gallery = () => {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const isMobile = useIsMobile();

    // GSAP animation for heading
    useEffect(() => {
        if (!headingRef.current) return;

        const ctx = gsap.context(() => {
            if (!isMobile) {
                const titleText = new SplitType(headingRef.current, {
                    types: "chars",
                    tagName: "span",
                });
                if (titleText.chars) {
                    gsap.from(titleText.chars, {
                        opacity: 0,
                        y: 20,
                        stagger: 0.02,
                        duration: 0.6,
                        ease: "back.out(1.7)",
                        delay: 0.2,
                    });
                    titleText.chars.forEach((char) => {
                        char.addEventListener("mouseenter", () => {
                            gsap.to(char, {
                                scale: 1.2,
                                color: "#9333EA",
                                duration: 0.2,
                                ease: "power2.out",
                            });
                        });
                        char.addEventListener("mouseleave", () => {
                            gsap.to(char, {
                                scale: 1,
                                color: "inherit",
                                duration: 0.2,
                                ease: "power2.in",
                            });
                        });
                    });
                }
            } else {
                gsap.from(headingRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    ease: "power2.out",
                });
            }
        });

        return () => ctx.revert();
    }, [isMobile]);

    return (
        <section id="workshops" className="py-20 relative overflow-hidden bg-black">
            <div className="container mx-auto px-4 mb-16">
                <h2
                    ref={headingRef}
                    className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white"
                >
                    Workshops and Hackathons
                </h2>
            </div>
            <div className="flex w-full h-screen justify-center items-center">
                <div
                    className="w-full max-w-screen-xl mx-auto h-[80vh] overflow-hidden relative bg-black border-none shadow-none"
                >
                    <Component
                        items={items}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;