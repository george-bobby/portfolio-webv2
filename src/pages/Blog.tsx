import { useEffect, useRef } from "react";
import { blogPosts } from "@/data/blogPosts";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const cards = cardsRef.current;
        
        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center+=100",
                    toggleActions: "play none none reverse",
                }
            }
        );
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <div ref={containerRef} className="container py-20">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12">
                    Blog Posts
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={post.id}
                            ref={(el) => el && (cardsRef.current[index] = el)}
                            className="group relative overflow-hidden rounded-lg bg-card transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                            onClick={() => navigate(`/blog/${post.slug}`)}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>{formatDate(post.date)}</span>
                                    <span>•</span>
                                    <span>{post.readingTime}</span>
                                </div>
                                <h2 className="text-2xl font-heading font-bold tracking-tight">
                                    {post.title}
                                </h2>
                                <p className="text-muted-foreground line-clamp-2">
                                    {post.description}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">
                                        By {post.author}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;