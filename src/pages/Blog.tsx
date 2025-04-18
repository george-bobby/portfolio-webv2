import { useMemo, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { blogPosts } from "@/data/posts";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
    const navigate = useNavigate();
    const prefersReducedMotion = useReducedMotion();

    const handleNavigateHome = useCallback(() => {
        navigate('/');
    }, [navigate]);

    // Simplified animations for better performance
    const fadeIn = {
        initial: prefersReducedMotion ? {} : { opacity: 0 },
        whileInView: prefersReducedMotion ? {} : { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.3 }
    };

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4">
                <div className="flex items-center mb-12">
                    <Button
                        onClick={handleNavigateHome}
                        variant="ghost"
                        className="group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back Home
                    </Button>
                </div>

                <motion.h1
                    {...fadeIn}
                    className="text-4xl md:text-5xl font-heading font-bold mb-12"
                >
                    Blog Posts
                </motion.h1>

                <motion.div
                    {...fadeIn}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {useMemo(() =>
                        blogPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                            />
                        )),
                        [])}
                </motion.div>
            </div>
        </div>
    );
};

export default Blog;