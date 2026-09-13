import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import BlogIndex from "./components/blog-index";
import { blogPosts, type BlogPost } from "@/app/data/blog/article";
import { estimateReadTime, type ArticleContent } from "@/lib/blog";

const SITE_URL = "https://terafence.us";

export const metadata: Metadata = {
  title: "Knowledge Vault | Terafence",
  description:
    "Field notes on OT security, data diodes and one-way data transfer for critical infrastructure — written by the engineers who build the hardware.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Knowledge Vault | Terafence",
    description:
      "Field notes on OT security, data diodes and one-way data transfer for critical infrastructure.",
    url: `${SITE_URL}/blog`,
    siteName: "Terafence",
    type: "website",
  },
};

/**
 * Read time and publish date are computed from the article files at build time,
 * so the index can never drift from what the article actually says.
 */
async function getEnrichedPosts(): Promise<BlogPost[]> {
  return Promise.all(
    blogPosts.map(async (post) => {
      try {
        const mod = await import(`@/app/data/blog/article-content/${post.slug}`);
        const content = mod.articleContent as ArticleContent;
        return {
          ...post,
          readTime: estimateReadTime(content),
          publishDate: content.publishDate ?? post.publishDate,
        };
      } catch {
        return post;
      }
    })
  );
}

export default async function BlogPage() {
  const posts = await getEnrichedPosts();

  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <BlogIndex posts={posts} />
      </Suspense>
      <Footer />
    </>
  );
}
