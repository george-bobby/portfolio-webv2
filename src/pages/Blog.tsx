import { useEffect, useState, useCallback } from "react";
import { BlogPost, fetchRSSFeed } from "@/lib/rss";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [allTags, setAllTags] = useState<string[]>([]);

  const loadPosts = async () => {
    try {
      console.log("Loading blog posts...");
      const fetchedPosts = await fetchRSSFeed();
      setPosts(fetchedPosts);

      // Extract unique tags
      const tags = Array.from(
        new Set(
          fetchedPosts.flatMap((post) => post.categories || []).filter(Boolean)
        )
      );
      setAllTags(tags);
      console.log("Blog posts loaded successfully");
    } catch (error) {
      console.error("Error loading blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const postTitle = post.title?.toLowerCase() || "";
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch = postTitle.includes(searchTermLower);
    const matchesTag = selectedTag === "all" || post.categories?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  useEffect(() => {
    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="container py-20">
        <div className="space-y-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-heading font-bold mb-12">Blog Posts</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="w-full sm:w-48">
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All tags</SelectItem>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.guid} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground">
            No posts found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blog;