import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogPost as BlogPostType, fetchRSSFeed } from "@/lib/rss";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPost = async () => {
            const posts = await fetchRSSFeed();
            const foundPost = posts.find((p) => p.link.includes(slug));
            setPost(foundPost || null);
            setLoading(false);
        };

        loadPost();
    }, [slug]);

    const handleShare = async () => {
        try {
            await navigator.share({
                title: post?.title,
                url: window.location.href,
            });
        } catch (error) {
            console.log("Error sharing:", error);
        }
    };

    if (loading) {
        return (
            <div className="container py-20">
                <Skeleton className="h-8 w-32 mb-8" />
                <Skeleton className="aspect-video w-full mb-8" />
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-6 w-48 mb-8" />
                <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-4xl font-heading font-bold mb-8">Post not found</h1>
                <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
            </div>
        );
    }

    return (
        <article className="container py-20">
            <Button
                variant="ghost"
                className="mb-8"
                onClick={() => navigate("/blog")}
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
            </Button>

            <div className="aspect-video overflow-hidden rounded-lg mb-8 bg-secondary/50">
                <img
                    src={`https://source.unsplash.com/1600x900/?technology,${post.title}`}
                    alt={post.title}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-4xl font-heading font-bold mb-4">{post.title}</h1>
                        <p className="text-muted-foreground">
                            {new Date(post.pubDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleShare}>
                        <Share2 className="h-4 w-4" />
                    </Button>
                </div>

                {post.categories && (
                    <div className="flex flex-wrap gap-2 mb-8">
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

                <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: post["content:encoded"] || post.description,
                    }}
                />
            </div>
        </article>
    );
};

export default BlogPost;