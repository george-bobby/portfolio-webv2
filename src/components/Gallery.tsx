import { Component } from "./ui/circular-gallery";

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
    return (
        <div className="flex w-full h-screen justify-center items-center bg-black">
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
    );
};

export default Gallery;