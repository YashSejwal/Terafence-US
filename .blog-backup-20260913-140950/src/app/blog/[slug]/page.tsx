import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import BlogArticle from "../components/blog-article";
import { getBlogPost, getRelatedPosts } from "@/app/data/blog/article"; // This is CORRECT based on your structure

interface ArticleContent {
  title: string;
  author: string;
  publishDate: string;
  sections: Array<{
    id: string;
    title: string;
    content: string;
    hasImage: boolean;
    imageIndex?: number;
  }>;
  resources?: Array<{
    title: string;
    type: string;
    url: string;
  }>;
  ctaButtons?: Array<{
    title: string;
    type: 'primary' | 'secondary';
    url: string;
  }>;
  comparisonTable?: {
    title: string;
    columns: string[];
    rows: string[][];
  };
}

// Import article content dynamically - AUTOMATIC based on slug
async function getArticleContent(slug: string): Promise<ArticleContent | null> {
  try {
    // Direct mapping - no special cases, just use the slug as-is
    const content = await import(`@/app/data/blog/article-content/${slug}`);
    return content.articleContent;
  } catch (error) {
    console.error(`Failed to load content for ${slug}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found | Terafence Knowledge Vault',
      description: 'The requested article could not be found.',
    };
  }

  const publishedTime = new Date(post.publishDate).toISOString();
  const modifiedTime = new Date().toISOString();

  return {
    title: `${post.title} | Terafence Knowledge Vault`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: 'Terafence Private Limited' }],
    creator: 'Terafence Private Limited',
    publisher: 'Terafence Private Limited',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://terafence.in/blog/${post.slug}`,
      siteName: 'Terafence',
      images: [
        {
          url: `/images/blog/${post.id}/1.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime,
      modifiedTime,
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`/images/blog/${post.id}/1.png`],
      creator: '@terafence',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://terafence.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const content = await getArticleContent(slug);
  const relatedPosts = getRelatedPosts(slug);

  if (!content) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <BlogArticle post={post} content={content} relatedPosts={relatedPosts} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const { blogPosts } = await import("@/app/data/blog/article"); // This is CORRECT
  
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}