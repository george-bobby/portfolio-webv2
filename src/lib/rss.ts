import { XMLParser } from "fast-xml-parser";

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories?: string[];
  "content:encoded"?: string;
  guid: string;
}

export interface RSSFeed {
  rss: {
    channel: {
      item: BlogPost[];
    };
  };
}

const FALLBACK_POSTS: BlogPost[] = [
  {
    title: "Getting Started with Web Development",
    link: "https://blog.eamonncottrell.com/getting-started",
    pubDate: new Date().toISOString(),
    description: "A beginner's guide to web development fundamentals",
    categories: ["Web Development", "Beginners"],
    guid: "1"
  },
  {
    title: "Understanding React Hooks",
    link: "https://blog.eamonncottrell.com/react-hooks",
    pubDate: new Date().toISOString(),
    description: "Deep dive into React Hooks and their use cases",
    categories: ["React", "JavaScript"],
    guid: "2"
  }
];

export const fetchRSSFeed = async (): Promise<BlogPost[]> => {
  try {
    console.log("Fetching RSS feed...");
    const response = await fetch("https://news.un.org/feed/subscribe/en/news/topic/health/feed/rss.xml", {
      mode: 'cors',
      headers: {
        'Accept': 'application/rss+xml, application/xml'
      }
    });
    
    if (!response.ok) {
      console.log("RSS feed fetch failed, using fallback data");
      return FALLBACK_POSTS;
    }
    
    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
    });
    
    const feed = parser.parse(xmlData) as RSSFeed;
    console.log("RSS feed fetched successfully");
    
    return feed.rss.channel.item;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return FALLBACK_POSTS;
  }
};