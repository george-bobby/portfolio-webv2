import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const ProjectsToProducts = () => {
    const projectsRef = useRef<HTMLSpanElement>(null);
    const productsRef = useRef<HTMLSpanElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const arrowHeadRef = useRef<SVGPolygonElement>(null);

    const [coords, setCoords] = useState<{
        startX: number;
        startY: number;
        endX: number;
        endY: number;
    } | null>(null);

    useEffect(() => {
        const updatePositions = () => {
            if (projectsRef.current && productsRef.current && svgRef.current) {
                const startRect = projectsRef.current.getBoundingClientRect();
                const endRect = productsRef.current.getBoundingClientRect();
                const svgRect = svgRef.current.getBoundingClientRect();

                const margin = 10; // Add spacing between text and arrow

                const startX = startRect.left - svgRect.left + margin;
                const startY = startRect.top - svgRect.top + startRect.height / 2;

                const endX = endRect.left - svgRect.left - margin + endRect.width;
                const endY = endRect.top - svgRect.top + endRect.height / 2;

                setCoords({ startX, startY, endX, endY });
            }
        };

        updatePositions();
        window.addEventListener("resize", updatePositions);
        return () => window.removeEventListener("resize", updatePositions);
    }, []);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            pathRef.current.style.strokeDasharray = `${length}`;
            pathRef.current.style.strokeDashoffset = `${length}`;
        }
    }, [coords]);

    const showArrow = () => {
        if (pathRef.current) {
            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                duration: 0.8,
                ease: "power2.out",
                onUpdate: () => updateArrowhead(),
            });
        }
    };

    const hideArrow = () => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            gsap.to(pathRef.current, {
                strokeDashoffset: length,
                duration: 0.5,
                ease: "power2.in",
            });
        }
    };

    const updateArrowhead = () => {
        if (!pathRef.current || !arrowHeadRef.current) return;

        const length = pathRef.current.getTotalLength();
        const p1 = pathRef.current.getPointAtLength(length - 10);
        const p2 = pathRef.current.getPointAtLength(length);

        const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);

        const size = 8;

        const points = `
      ${p2.x - size},${p2.y - size / 2}
      ${p2.x},${p2.y}
      ${p2.x - size},${p2.y + size / 2}
    `;

        arrowHeadRef.current.setAttribute("points", points);
        arrowHeadRef.current.setAttribute("transform", `rotate(${angle}, ${p2.x}, ${p2.y})`);
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-40 text-xl md:text-2xl font-semibold">
            <div className="relative z-10">
                Turning{" "}
                <span
                    ref={projectsRef}
                    className="text-purple-600 cursor-pointer relative z-20"
                    onMouseEnter={showArrow}
                    onMouseLeave={hideArrow}
                >
                    Projects
                </span>{" "}
                Into{" "}
                <span
                    ref={productsRef}
                    className="text-purple-600 font-bold relative z-20"
                >
                    Products
                </span>
            </div>

            {/* SVG arrow overlay */}
            <svg
                ref={svgRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            >
                {coords && (
                    <>
                        <path
                            ref={pathRef}
                            d={`M ${coords.startX} ${coords.startY} Q ${(coords.startX + coords.endX) / 2} ${coords.startY - 60
                                }, ${coords.endX} ${coords.endY}`}
                            stroke="#9333EA"
                            strokeWidth="2"
                            fill="none"
                        />
                        <polygon
                            ref={arrowHeadRef}
                            fill="#9333EA"
                            stroke="none"
                        />
                    </>
                )}
            </svg>
        </div>
    );
};

export default ProjectsToProducts;
