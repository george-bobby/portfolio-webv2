import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-4xl font-heading font-bold mb-8">Post not found</h1>
                <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-background">
            <div className="container py-20">
                <Button
                    variant="ghost"
                    className="mb-8"
                    onClick={() => navigate("/blog")}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Button>

                <div className="max-w-4xl mx-auto">
                    <div className="aspect-video overflow-hidden rounded-lg mb-8">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="space-y-4 mb-8">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                            <span>{new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}</span>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                            <span>•</span>
                            <span>By {post.author}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg leading-relaxed">
                            {post.description}
                        </p>
                        <div className="mt-8">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>First important point about {post.tags[0]}</li>
                                <li>Second key concept related to the topic</li>
                                <li>Third major takeaway from this article</li>
                            </ul>
                            <p className="mt-6">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;