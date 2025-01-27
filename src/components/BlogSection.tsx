import { useEffect, useState } from "react";
import { BlogPost, fetchRSSFeed } from "@/lib/rss";
import BlogCard from "./BlogCard";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "./ui/skeleton";

const BlogSection = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const loadPosts = async () => {
            try {
                console.log("Loading blog posts...");
                const fetchedPosts = await fetchRSSFeed();
                setPosts(fetchedPosts.slice(0, 3));
                console.log("Blog posts loaded successfully");
            } catch (error) {
                console.error("Error loading blog posts:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    if (loading) {
        return (
            <section className="py-20">
                <div className="container">
                    <h2 className="mb-12 text-4xl font-heading font-bold">Latest Posts</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="space-y-4">
                                <Skeleton className="aspect-video w-full" />
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-20 w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20">
            <div className="container">
                <h2 className="mb-12 text-4xl font-heading font-bold">Latest Posts</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {posts.map((post, index) => (
                        <BlogCard key={post.guid} post={post} featured={index === 0} />
                    ))}
                </div>
                <div className="mt-12 text-center">
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