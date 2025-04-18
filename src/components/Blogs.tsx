import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts, BlogPost } from "@/data/posts";
import { useMemo, memo } from "react";

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

interface PostProps {
    post: BlogPost;
    onClick: () => void;
}

const FeaturedPost = memo(({ post, onClick }: PostProps) => (
    <div
        className="group relative h-full overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
        onClick={onClick}
    >
        <div className="aspect-[16/14] overflow-hidden">
            <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 via-background/80 to-transparent">
            <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold tracking-tight text-white">
                    {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                    {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
));

const GridPost = memo(({ post, onClick }: PostProps) => (
    <div
        className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
        onClick={onClick}
    >
        <div className="aspect-video overflow-hidden">
            <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
        </div>
        <div className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
            </div>
            <h3 className="text-lg font-heading font-bold tracking-tight line-clamp-2">
                {post.title}
            </h3>
            <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag: string) => (
                    <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
));

const BlogSection = () => {
    const navigate = useNavigate();
    const featuredPost = useMemo(() => blogPosts[0], []);
    const gridPosts = useMemo(() => blogPosts.slice(1, 5), []);

    // Simplified animation variants
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    }), []);

    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-heading font-bold mb-12"
                >
                    Latest Blog Posts
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col lg:flex-row gap-8 mb-12"
                >
                    {/* Featured Post */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:w-2/5"
                    >
                        <FeaturedPost
                            post={featuredPost}
                            onClick={() => navigate(`/blog/${featuredPost.slug}`)}
                        />
                    </motion.div>

                    {/* Grid Posts */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {gridPosts.map((post) => (
                            <GridPost
                                key={post.id}
                                post={post}
                                onClick={() => navigate(`/blog/${post.slug}`)}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        onClick={() => navigate("/blog")}
                        className="group"
                    >
                        View All Posts
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;