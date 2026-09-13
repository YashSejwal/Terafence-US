import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import BlogArticle from "../components/blog-article";
import StructuredData from "../components/structured-data";
import {
  getBlogPost,
  getRelatedPosts,
  getAdjacentPosts,
  blogPosts,
} from "@/app/data/blog/article";
import { estimateReadTime, toIsoDate, type ArticleContent } from "@/lib/blog";

const SITE_URL = "https://terafence.us";

async function getArticleContent(slug: string): Promise<ArticleContent | null> {
  try {
    const mod = await import(`@/app/data/blog/article-content/${slug}`);
    return mod.articleContent as ArticleContent;
  } catch (error) {
    console.error(`Failed to load content for ${slug}:`, error);
    return null;
  }
}

/**
 * The index and the content file each carry a publishDate and they disagree on
 * most articles. The content file is the one the author edits, so it wins.
 */
function resolvePublishDate(
  content: ArticleContent | null,
  fallback: string
): string {
  return content?.publishDate ?? fallback;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article not found | Terafence Knowledge Vault",
      description: "The requested article could not be found.",
    };
  }

  const content = await getArticleContent(slug);
  const publishedAt = resolvePublishDate(content, post.publishDate);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | Terafence Knowledge Vault`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: content?.author ?? "Terafence" }],
    creator: content?.author ?? "Terafence",
    publisher: "Terafence",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Terafence",
      images: [
        {
          url: `${SITE_URL}/images/blog/${post.id}/1.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: toIsoDate(publishedAt),
      modifiedTime: toIsoDate(content?.updatedDate ?? publishedAt),
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}/images/blog/${post.id}/1.png`],
      creator: "@terafence",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: { canonical: url },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const content = await getArticleContent(slug);
  if (!content) notFound();

  const relatedPosts = getRelatedPosts(slug);
  const { previous, next } = getAdjacentPosts(slug);
  const publishedAt = resolvePublishDate(content, post.publishDate);
  const readTime = estimateReadTime(content);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <Navbar />
      <StructuredData
        post={post}
        content={content}
        url={url}
        siteUrl={SITE_URL}
        publishedAt={publishedAt}
      />
      <BlogArticle
        post={post}
        content={content}
        relatedPosts={relatedPosts}
        previousPost={previous}
        nextPost={next}
        readTime={readTime}
        publishedAt={publishedAt}
        url={url}
      />
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

