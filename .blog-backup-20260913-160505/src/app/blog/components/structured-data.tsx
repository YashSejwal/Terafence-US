import type { BlogPost } from "@/app/data/blog/article";
import { articleWordCount, toIsoDate, type ArticleContent } from "@/lib/blog";

type Props = {
  post: BlogPost;
  content: ArticleContent;
  url: string;
  siteUrl: string;
  publishedAt: string;
};

/**
 * Emits Article + BreadcrumbList (+ FAQPage when the article has questions).
 * Google uses these for article rich results and breadcrumb trails.
 */
export default function StructuredData({ post, content, url, siteUrl, publishedAt }: Props) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "TechArticle",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.excerpt,
      image: [`${siteUrl}/images/blog/${post.id}/1.png`],
      datePublished: toIsoDate(publishedAt),
      dateModified: toIsoDate(content.updatedDate ?? publishedAt),
      wordCount: articleWordCount(content),
      articleSection: post.category,
      keywords: post.tags.join(", "),
      inLanguage: "en",
      author: {
        "@type": "Organization",
        name: content.author ?? "Terafence",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Terafence",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/terafence.png`,
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Knowledge Vault", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (content.faq && content.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: content.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
