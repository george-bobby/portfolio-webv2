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
import { debounce } from "lodash";

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("all");
    const [allTags, setAllTags] = useState<string[]>([]);

    const loadPosts = async () => {
        const fetchedPosts = await fetchRSSFeed();
        setPosts(fetchedPosts);
        setLoading(false);

        // Extract unique tags
        const tags = new Set<string>();
        fetchedPosts.forEach((post) => {
            post.categories?.forEach((tag) => tags.add(tag));
        });
        setAllTags(Array.from(tags));
    };

    useEffect(() => {
        loadPosts();
    }, []);

    const filteredPosts = posts.filter((post) => {
        const matchesSearch = post.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesTag = selectedTag === "all" || post.categories?.includes(selectedTag);
        return matchesSearch && matchesTag;
    });

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            setSearchTerm(value);
        }, 300),
        []
    );

    if (loading) {
        return (
            <div className="container py-20">
                <div className="mb-8 space-y-4">
                    <Skeleton className="h-12 w-full max-w-sm" />
                    <Skeleton className="h-10 w-full max-w-xs" />
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="space-y-4">
                            <Skeleton className="aspect-video w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-8 w-full" />
                            <Skeleton className="h-20 w-full" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container py-20">
            {/* <div className="mb-8 space-y-4">
                <h1 className="text-4xl font-heading font-bold">Blog Posts</h1>
                <div className="flex gap-4 flex-wrap">
                    <Input
                        placeholder="Search posts..."
                        className="max-w-sm"
                        onChange={(e) => debouncedSearch(e.target.value)}
                    />
                    <Select value={selectedTag} onValueChange={setSelectedTag}>
                        <SelectTrigger className="w-[180px]">
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
            </div> */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                    <BlogCard key={post.guid} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Blog;