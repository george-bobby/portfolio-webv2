import { BlogPost } from "@/lib/rss";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface BlogCardProps {
    post: BlogPost;
    featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const timeline = gsap.timeline({ paused: true });
        timeline
            .to(card.querySelector(".blog-content"), {
                y: -10,
                duration: 0.3,
                ease: "power2.out",
            })
            .to(
                card.querySelector(".read-more"),
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out",
                },
                "-=0.2"
            );

        card.addEventListener("mouseenter", () => timeline.play());
        card.addEventListener("mouseleave", () => timeline.reverse());

        return () => {
            timeline.kill();
        };
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const slug = post.link.split("/").pop() || "";

    return (
        <Card
            ref={cardRef}
            className={`group overflow-hidden transition-all duration-300 hover:scale-[1.02] ${featured ? "col-span-2 row-span-2" : ""
                }`}
        >
            <CardContent className="p-6">
                <div className="blog-content space-y-4">
                    <div className="aspect-video overflow-hidden rounded-lg bg-secondary/50">
                        <img
                            src={`https://source.unsplash.com/800x600/?technology,${post.title}`}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                            {formatDate(post.pubDate)}
                        </p>
                        <h3 className="font-heading text-2xl font-bold tracking-tight">
                            {post.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                            {post.description.replace(/<[^>]*>/g, "")}
                        </p>
                    </div>
                    {post.categories && (
                        <div className="flex flex-wrap gap-2">
                            {post.categories.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Button
                    variant="ghost"
                    className="read-more w-full opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                    onClick={() => navigate(`/blog/${slug}`)}
                >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;