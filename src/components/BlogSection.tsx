import { useEffect, useRef } from "react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

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
                    trigger: sectionRef.current,
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
        <section ref={sectionRef} className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <h2 className="text-4xl font-heading font-bold mb-12">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    {blogPosts.slice(0, 4).map((post, index) => (
                        <div
                            key={post.id}
                            ref={(el) => el && (cardsRef.current[index] = el)}
                            className="group relative overflow-hidden rounded-lg bg-card transition-all duration-300 hover:scale-[1.02]"
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
                                <h3 className="text-2xl font-heading font-bold tracking-tight">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground line-clamp-2">
                                    {post.description}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">By {post.author}</span>
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
                <div className="text-center">
                    <Button
                        size="lg"
                        onClick={() => navigate("/blog")}
                        className="group"
                    >
                        View All Posts
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;