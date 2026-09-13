import type { Metadata } from "next";
import ArticleBuilder from "./article-builder";

export const metadata: Metadata = {
  title: "Article builder",
  // Internal build tool: never index it, never follow it.
  robots: { index: false, follow: false, nocache: true },
};

export default function NewArticlePage() {
  return <ArticleBuilder />;
}

