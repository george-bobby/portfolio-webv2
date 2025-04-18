import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/posts/types";

// Format date once when component is created
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

type BlogCardProps = {
  post: BlogPost;
};

const BlogCard = ({ post }: BlogCardProps) => {
  const navigate = useNavigate();
  const formattedDate = formatDate(post.date);
  
  const handleReadMore = useCallback(() => {
    navigate(`/blog/${post.slug}`);
  }, [navigate, post.slug]);

  return (
    <div
      className="group relative bg-secondary/20 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-secondary/30 transition-colors duration-300"
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width={400}
          height={225}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        
        <h2 className="text-2xl font-heading font-bold tracking-tight group-hover:text-primary transition-colors">
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
              className="px-3 py-1 text-sm bg-primary/20 text-primary-foreground rounded-full transition-colors duration-300 hover:bg-primary/40"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button
          onClick={handleReadMore}
          className="group relative bg-primary/20 hover:bg-primary text-primary-foreground transition-colors duration-300 w-full"
        >
          <span className="relative z-10 flex items-center justify-center">
            Read More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default memo(BlogCard);
