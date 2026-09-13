import { parseViews } from "@/lib/blog";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  /** Fallback only — the article page computes read time from the real text. */
  readTime: string;
  publishDate: string;
  views: string;
  featured: boolean;
  tags: string[];
  slug: string;
  imageCount: number;
  /** Optional: helps readers pick the right depth before they click. */
  level?: "Primer" | "Technical" | "Deep dive";
}

export const blogPosts: BlogPost[] = [
  {
    id: 11,
    title: "What is a Data Diode?",
    excerpt:
      "A Data Diode is a hardware-based security device that enforces one-way data flow between two networks, ensuring no reverse communication.",
    category: "Data Diode",
    readTime: "10 min read",
    publishDate: "2024-01-11",
    views: "45.3K",
    featured: true,
    tags: ["Core Technology", "Working Principle"],
    slug: "what-is-a-data-diode",
    imageCount: 7,
    level: "Primer",
  },
  {
    id: 2,
    title: "Securing Syslog Transfer from OT to IT",
    excerpt:
      "Best practices for secure syslog data transfer between operational technology and information technology networks while maintaining data integrity and compliance.",
    category: "OT Security",
    readTime: "6 min read",
    publishDate: "2025-06-28",
    views: "21.8K",
    featured: true,
    tags: ["Syslog", "OT Security", "Data Transfer"],
    slug: "securing-syslog-transfer-ot-it",
    imageCount: 5,
    level: "Technical",
  },
  {
    id: 1,
    title: "Securing RDP using TFG – BSG",
    excerpt:
      "Comprehensive guide to securing RDP connections in enterprise environments using advanced bidirectional security gateways and industry best practices for maximum protection.",
    category: "Network Security",
    readTime: "8 min read",
    publishDate: "2025-07-10",
    views: "12.4K",
    featured: true,
    tags: ["RDP", "Network Security", "TFG-BSG"],
    slug: "securing-rdp-access-tfg-bsg",
    imageCount: 6,
    level: "Technical",
  },
  {
    id: 3,
    title: "Cybersecurity Challenges in Supply Chain Management",
    excerpt:
      "Exploring critical cybersecurity vulnerabilities in modern supply chains and implementing robust defense strategies to protect against sophisticated attacks.",
    category: "Supply Chain",
    readTime: "10 min read",
    publishDate: "2025-06-19",
    views: "33.2K",
    featured: false,
    tags: ["Supply Chain", "Risk Management"],
    slug: "cybersecurity-challenges-supply-chain",
    imageCount: 7,
    level: "Deep dive",
  },
  {
    id: 4,
    title: "Cybersecurity Challenges in Water Treatment Plants and How Terafence Solves Them",
    excerpt:
      "Critical infrastructure protection for water treatment facilities using advanced cybersecurity solutions and comprehensive monitoring systems for operational security.",
    category: "Critical Infrastructure",
    readTime: "12 min read",
    publishDate: "2025-06-13",
    views: "22.1K",
    featured: false,
    tags: ["Water Treatment", "Critical Infrastructure"],
    slug: "cybersecurity-water-treatment-plants",
    imageCount: 6,
    level: "Deep dive",
  },
  {
    id: 5,
    title: "Cybersecurity Challenges in the Pharmaceutical Industry and How Terafence Solves Them",
    excerpt:
      "Protecting sensitive pharmaceutical data and manufacturing processes from sophisticated cyber threats while ensuring regulatory compliance and data protection.",
    category: "Pharmaceutical",
    readTime: "9 min read",
    publishDate: "2025-06-05",
    views: "31.9K",
    featured: false,
    tags: ["Pharmaceutical", "IEC 62443-3-2", "SL-2 Compliance"],
    slug: "cybersecurity-pharmaceutical-industry",
    imageCount: 5,
    level: "Deep dive",
  },
  {
    id: 6,
    title: "Cybersecurity Challenges in the Integrated Transportation Sector",
    excerpt:
      "Securing modern transportation systems against cyber threats while maintaining operational efficiency and passenger safety in connected infrastructure environments.",
    category: "Transportation",
    readTime: "11 min read",
    publishDate: "2025-05-29",
    views: "22.7K",
    featured: false,
    tags: ["Transportation", "ITS Security"],
    slug: "cybersecurity-transportation-sector",
    imageCount: 6,
    level: "Deep dive",
  },
  {
    id: 7,
    title: "Challenges to OT Cybersecurity",
    excerpt:
      "Understanding and addressing the unique cybersecurity challenges facing operational technology environments in industrial settings and critical infrastructure systems.",
    category: "OT Security",
    readTime: "7 min read",
    publishDate: "2025-05-21",
    views: "32.5K",
    featured: false,
    tags: ["OT Security", "Industrial Control"],
    slug: "challenges-ot-cybersecurity",
    imageCount: 5,
    level: "Primer",
  },
  {
    id: 8,
    title: "Reinforcing CCTV Security in the Era of Hyperconnected Infrastructure",
    excerpt:
      "Strengthening surveillance system security against sophisticated attacks in interconnected smart infrastructure environments and IoT-enabled monitoring systems.",
    category: "Surveillance Security",
    readTime: "8 min read",
    publishDate: "2025-05-07",
    views: "11.6K",
    featured: false,
    tags: ["CCTV Security", "Video Surveillance"],
    slug: "reinforcing-cctv-security-hyperconnected",
    imageCount: 6,
    level: "Technical",
  },
  {
    id: 9,
    title:
      "Bridging the Divide, Securely: Transferring Large Files Between Secure and Unsecure Networks",
    excerpt:
      "Secure methods for transferring large files across network boundaries while maintaining data integrity and confidentiality in air-gapped and segmented environments.",
    category: "Data Transfer",
    readTime: "9 min read",
    publishDate: "2025-04-30",
    views: "22.8K",
    featured: false,
    tags: ["File Transfer", "Network Security"],
    slug: "secure-large-file-transfer-networks",
    imageCount: 6,
    level: "Technical",
  },
  {
    id: 10,
    title: "Securing the Patch and Software Distribution for Air-Gapped Networks",
    excerpt:
      "Best practices for maintaining software updates and security patches in isolated network environments while ensuring system integrity and operational continuity.",
    category: "Air-Gap Security",
    readTime: "10 min read",
    publishDate: "2023-12-22",
    views: "22.0K",
    featured: false,
    tags: ["Air-Gapped Networks", "Patch Management"],
    slug: "securing-patch-distribution-air-gapped",
    imageCount: 6,
    level: "Technical",
  },
  {
    id: 12,
    title: "Marine Cyber Security: Why It's Time to Deploy Data Diode at the Network Edge",
    excerpt:
      "Marine Cybersecurity safeguards ships and ports from cyber threats that disrupt navigation, cargo, and communications.",
    category: "Maritime Cybersecurity",
    readTime: "10 min read",
    publishDate: "2025-07-22",
    views: "12.0K",
    featured: false,
    tags: ["Maritime Cybersecurity", "Data Integrity"],
    slug: "maritime-cybersecurity",
    imageCount: 6,
    level: "Deep dive",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))).sort(),
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Newest first. Used everywhere a default order is needed. */
export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getFeaturedPost(): BlogPost | undefined {
  return getSortedPosts().find((post) => post.featured) ?? getSortedPosts()[0];
}

/**
 * Related posts scored by shared tags, then category, then recency —
 * instead of "same category, then whatever came next in the array".
 */
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(currentSlug);
  if (!current) return [];

  const currentTags = new Set(current.tags.map((tag) => tag.toLowerCase()));

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) => currentTags.has(tag.toLowerCase())).length;
      const categoryMatch = post.category === current.category ? 1 : 0;
      return { post, score: sharedTags * 2 + categoryMatch };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.publishDate).getTime() - new Date(a.post.publishDate).getTime();
    })
    .slice(0, limit)
    .map((entry) => entry.post);
}

/** Previous/next in publication order, for continuous reading. */
export function getAdjacentPosts(slug: string): {
  previous: BlogPost | null;
  next: BlogPost | null;
} {
  const sorted = getSortedPosts();
  const index = sorted.findIndex((post) => post.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: sorted[index + 1] ?? null, // older
    next: sorted[index - 1] ?? null, // newer
  };
}

export function getCategoryCounts(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of blogPosts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return [
    { name: "All", count: blogPosts.length },
    ...Array.from(counts, ([name, count]) => ({ name, count })).sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  ];
}

export function getAllTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap((post) => post.tags))).sort();
}

/** Simple, predictable relevance: title hits beat tag hits beat excerpt hits. */
export function searchPosts(posts: BlogPost[], query: string): BlogPost[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return posts;

  return posts
    .map((post) => {
      const title = post.title.toLowerCase();
      const excerpt = post.excerpt.toLowerCase();
      const tags = post.tags.join(" ").toLowerCase();
      const category = post.category.toLowerCase();

      let score = 0;
      for (const term of terms) {
        if (title.includes(term)) score += 5;
        if (tags.includes(term)) score += 3;
        if (category.includes(term)) score += 2;
        if (excerpt.includes(term)) score += 1;
      }
      return { post, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.post);
}

export function sortPosts(posts: BlogPost[], sort: "newest" | "oldest" | "popular"): BlogPost[] {
  const copy = [...posts];
  if (sort === "popular") return copy.sort((a, b) => parseViews(b.views) - parseViews(a.views));
  return copy.sort((a, b) => {
    const diff = new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
    return sort === "oldest" ? diff : -diff;
  });
}
