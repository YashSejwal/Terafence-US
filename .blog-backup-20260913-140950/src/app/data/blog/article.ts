export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  views: string;
  featured: boolean;
  tags: string[];
  slug: string;
  imageCount: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 11,
    title: "What is a Data Diode?",
    excerpt: "A Data Diode is a hardware-based security device that enforces one-way data flow between two networks, ensuring no reverse communication.",
    category: "Data Diode",
    readTime: "10 min read",
    publishDate: "2024-01-10",
    views: "45.3K",
    featured: true,
    tags: ["Core Technology", "Working Principle"],
    slug: "what-is-a-data-diode",
    imageCount: 7
  },
  {
    id: 2,
    title: "Securing Syslog Transfer from OT to IT",
    excerpt: "Best practices for secure syslog data transfer between operational technology and information technology networks while maintaining data integrity and compliance.",
    category: "OT Security",
    readTime: "6 min read",
    publishDate: "2025-01-12",
    views: "21.8K",
    featured: true,
    tags: ["Syslog", "OT Security", "Data Transfer"],
    slug: "securing-syslog-transfer-ot-it",
    imageCount: 5
  },
  {
    id: 1,
    title: "Securing RDP using TFG – BSG",
    excerpt: "Comprehensive guide to securing RDP connections in enterprise environments using advanced bidirectional security gateways and industry best practices for maximum protection.",
    category: "Network Security",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    views: "12.4K",
    featured: true,
    tags: ["RDP", "Network Security", "TFG-BSG"],
    slug: "securing-rdp-access-tfg-bsg",
    imageCount: 6
  },
  {
    id: 3,
    title: "Cybersecurity Challenges in Supply Chain Management",
    excerpt: "Exploring critical cybersecurity vulnerabilities in modern supply chains and implementing robust defense strategies to protect against sophisticated attacks.",
    category: "Supply Chain",
    readTime: "10 min read",
    publishDate: "2024-01-10",
    views: "33.2K",
    featured: false,
    tags: ["Supply Chain", "Risk Management"],
    slug: "cybersecurity-challenges-supply-chain",
    imageCount: 7
  },
  {
    id: 4,
    title: "Cybersecurity Challenges in Water Treatment Plants and How Terafence Solves Them",
    excerpt: "Critical infrastructure protection for water treatment facilities using advanced cybersecurity solutions and comprehensive monitoring systems for operational security.",
    category: "Critical Infrastructure",
    readTime: "12 min read",
    publishDate: "2024-01-08",
    views: "22.1K",
    featured: false,
    tags: ["Water Treatment", "Critical Infrastructure"],
    slug: "cybersecurity-water-treatment-plants",
    imageCount: 6
  },
  {
    id: 5,
    title: "Cybersecurity Challenges in the Pharmaceutical Industry and How Terafence Solves Them",
    excerpt: "Protecting sensitive pharmaceutical data and manufacturing processes from sophisticated cyber threats while ensuring regulatory compliance and data protection.",
    category: "Pharmaceutical",
    readTime: "9 min read",
    publishDate: "2024-01-05",
    views: "31.9K",
    featured: false,
    tags: ["Pharmaceutical", "IEC 62443-3-2, SL-2 Compliance"],
    slug: "cybersecurity-pharmaceutical-industry",
    imageCount: 5
  },
  {
    id: 6,
    title: "Cybersecurity Challenges in the Integrated Transportation Sector",
    excerpt: "Securing modern transportation systems against cyber threats while maintaining operational efficiency and passenger safety in connected infrastructure environments.",
    category: "Transportation",
    readTime: "11 min read",
    publishDate: "2024-01-03",
    views: "22.7K",
    featured: false,
    tags: ["Transportation", "ITS Security"],
    slug: "cybersecurity-transportation-sector",
    imageCount: 6
  },
  {
    id: 7,
    title: "Challenges to OT Cybersecurity",
    excerpt: "Understanding and addressing the unique cybersecurity challenges facing operational technology environments in industrial settings and critical infrastructure systems.",
    category: "OT Security",
    readTime: "7 min read",
    publishDate: "2024-01-01",
    views: "32.5K",
    featured: false,
    tags: ["OT Security", "Industrial Control"],
    slug: "challenges-ot-cybersecurity",
    imageCount: 5
  },
  {
    id: 8,
    title: "Reinforcing CCTV Security in the Era of Hyperconnected Infrastructure",
    excerpt: "Strengthening surveillance system security against sophisticated attacks in interconnected smart infrastructure environments and IoT-enabled monitoring systems.",
    category: "Surveillance Security",
    readTime: "8 min read",
    publishDate: "2023-12-28",
    views: "11.6K",
    featured: false,
    tags: ["CCTV Security", "Video Surveillance"],
    slug: "reinforcing-cctv-security-hyperconnected",
    imageCount: 6
  },
  {
    id: 9,
    title: "Bridging the Divide, Securely: Transferring Large Files Between Secure and Unsecure Networks",
    excerpt: "Secure methods for transferring large files across network boundaries while maintaining data integrity and confidentiality in air-gapped and segmented environments.",
    category: "Data Transfer",
    readTime: "9 min read",
    publishDate: "2023-12-25",
    views: "22.8K",
    featured: false,
    tags: ["File Transfer", "Network Security"],
    slug: "secure-large-file-transfer-networks",
    imageCount: 6
  },
  {
    id: 10,
    title: "Securing the Patch and Software Distribution for Air-Gapped Networks",
    excerpt: "Best practices for maintaining software updates and security patches in isolated network environments while ensuring system integrity and operational continuity.",
    category: "Air-Gap Security",
    readTime: "10 min read",
    publishDate: "2023-12-22",
    views: "22.0K",
    featured: false,
    tags: ["Air-Gapped Networks", "Patch Management"],
    slug: "securing-patch-distribution-air-gapped",
    imageCount: 6
  },
  {
    id: 12,
    title: "Marine Cyber Security : Why It's Time to Deploy Data Diode at the Network Edge",
    excerpt: "Marine Cybersecurity safeguards ships and ports from cyber threats that disrupt navigation, cargo, and communications.",
    category: "Maritime Cybersecurity",
    readTime: "10 min read",
    publishDate: "2023-12-22",
    views: "12.0K",
    featured: false,
    tags: ["Maritime Cybersecurity", "Data Integrity"],
    slug: "maritime-cybersecurity",
    imageCount: 6
  }
];

export const categories = [
  "All",
  "Data Diode",
  "Network Security", 
  "OT Security",
  "Critical Infrastructure",
  "Supply Chain",
  "Transportation",
  "Pharmaceutical",
  "Surveillance Security",
  "Data Transfer",
  "Air-Gap Security"
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];
  
  // Get posts from same category first, then others
  const sameCategoryPosts = blogPosts.filter(post => 
    post.slug !== currentSlug && post.category === currentPost.category
  );
  
  const otherPosts = blogPosts.filter(post => 
    post.slug !== currentSlug && post.category !== currentPost.category
  );
  
  return [...sameCategoryPosts, ...otherPosts].slice(0, limit);
}