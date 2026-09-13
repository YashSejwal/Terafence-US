/**
 * Shared, dependency-free helpers for the Knowledge Vault.
 * Safe to import from both server and client components.
 */

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  hasImage: boolean;
  imageIndex?: number | null;
}

export interface Resource {
  title: string;
  type: string;
  url: string;
}

export interface CtaButton {
  title: string;
  type: "primary" | "secondary";
  url: string;
}

export interface ComparisonTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * The shape every file in `data/blog/article-content/*.ts` exports.
 * Everything beyond `title`/`sections` is optional, so the existing
 * twelve files keep working untouched.
 */
export interface ArticleContent {
  title: string;
  author?: string;
  publishDate?: string;
  updatedDate?: string;
  /** One-line summary rendered under the title. Falls back to post.excerpt. */
  standfirst?: string;
  /** Pulled out into a highlighted box above the body. Great for skimmers. */
  keyTakeaways?: string[];
  imageCaptions?: string[];
  sections: ContentSection[];
  comparisonTable?: ComparisonTable;
  /** Rendered as an accordion and emitted as FAQPage structured data. */
  faq?: FaqItem[];
  resources?: Resource[];
  ctaButtons?: CtaButton[];
}

const WORDS_PER_MINUTE = 225;

export function countWords(text: string): number {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

/** Word count across every section of an article. */
export function articleWordCount(content: Pick<ArticleContent, "sections">): number {
  return (content.sections ?? []).reduce(
    (total, section) => total + countWords(section.title) + countWords(section.content),
    0
  );
}

/** Read time derived from the actual text, so it can never drift. */
export function estimateReadTime(content: Pick<ArticleContent, "sections">): string {
  const minutes = Math.max(1, Math.round(articleWordCount(content) / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

export function formatDate(
  date: string,
  style: "long" | "short" = "long"
): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: style === "long" ? "long" : "short",
    day: "numeric",
    year: "numeric",
  });
}

export function toIsoDate(date: string): string {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

/** Stable anchor id for a section. Uses the authored id when present. */
export function sectionAnchor(section: Pick<ContentSection, "id" | "title">): string {
  const base = section.id?.trim() || section.title;
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Plain-text preview of an article, used for meta descriptions. */
export function contentPreview(content: ArticleContent, maxLength = 160): string {
  const first = content.sections?.[0]?.content ?? "";
  const flat = first.replace(/\s+/g, " ").trim();
  if (flat.length <= maxLength) return flat;
  return `${flat.slice(0, flat.lastIndexOf(" ", maxLength))}…`;
}

/**
 * Turns "12.4K" into a number so posts can be sorted by popularity.
 * Returns 0 for anything unparseable rather than throwing.
 */
export function parseViews(views?: string): number {
  if (!views) return 0;
  const match = views.trim().match(/^([\d.]+)\s*([KMB])?$/i);
  if (!match) return 0;
  const value = Number.parseFloat(match[1]);
  if (Number.isNaN(value)) return 0;
  const multiplier = { k: 1_000, m: 1_000_000, b: 1_000_000_000 }[
    (match[2] ?? "").toLowerCase() as "k" | "m" | "b"
  ];
  return Math.round(value * (multiplier ?? 1));
}

export function compactNumber(value: number): string {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(
    value
  );
}

