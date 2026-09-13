"use client";

import { useMemo, useState } from "react";
import { Upload, FileDown, Copy, Check, AlertCircle } from "lucide-react";
import RichText from "@/app/blog/components/rich-text";

/**
 * Article builder.
 *
 * Paste or drop a document, and this parses it into the section structure the
 * blog already uses, computes read time, previews it in the real article
 * styling, and generates the two files to commit. It does not write to the
 * server — publishing is still a commit and a deploy, which keeps the site
 * fully static and means no CMS, database or admin credentials to defend.
 */

type Section = { id: string; title: string; content: string; hasImage: boolean; imageIndex: number | null };

const CATEGORIES = [
  "Data Diode",
  "OT Security",
  "Network Security",
  "Critical Infrastructure",
  "Supply Chain",
  "Transportation",
  "Pharmaceutical",
  "Surveillance Security",
  "Data Transfer",
  "Air-Gap Security",
  "Maritime Cybersecurity",
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

/** Splits raw text on "# " / "## " headings, or on blank-line groups as a fallback. */
function parseSections(raw: string): { title: string; sections: Section[] } {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const sections: Section[] = [];
  let title = "";
  let current: { title: string; body: string[] } | null = null;

  for (const line of lines) {
    const h1 = line.match(/^#\s+(.*)/);
    const h2 = line.match(/^##\s+(.*)/);

    if (h1 && !title) {
      title = h1[1].trim();
      continue;
    }
    if (h2 || (h1 && title)) {
      if (current) sections.push(toSection(current));
      current = { title: (h2 ? h2[1] : h1![1]).trim(), body: [] };
      continue;
    }
    if (current) current.body.push(line);
    else if (line.trim() && !title) title = line.trim();
  }
  if (current) sections.push(toSection(current));

  // No headings at all: make one section per paragraph cluster so it still fits.
  if (sections.length === 0 && raw.trim()) {
    raw
      .split(/\n{3,}/)
      .filter((chunk) => chunk.trim())
      .forEach((chunk, index) => {
        const firstLine = chunk.trim().split("\n")[0].slice(0, 70);
        sections.push({
          id: slugify(firstLine) || `section-${index + 1}`,
          title: firstLine,
          content: chunk.trim(),
          hasImage: false,
          imageIndex: null,
        });
      });
  }

  return { title, sections };
}

function toSection(entry: { title: string; body: string[] }): Section {
  return {
    id: slugify(entry.title),
    title: entry.title,
    content: entry.body.join("\n").replace(/\n{3,}/g, "\n\n").trim(),
    hasImage: false,
    imageIndex: null,
  };
}

export default function ArticleBuilder() {
  const [raw, setRaw] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [tags, setTags] = useState("");
  const [level, setLevel] = useState<"Primer" | "Technical" | "Deep dive">("Technical");
  const [postId, setPostId] = useState(14);
  const [imageCount, setImageCount] = useState(0);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfPages, setPdfPages] = useState(2);
  const [pdfSize, setPdfSize] = useState("1.5 MB");
  const [copied, setCopied] = useState<"content" | "entry" | null>(null);

  const parsed = useMemo(() => parseSections(raw), [raw]);
  const title = parsed.title || "Untitled article";
  const slug = slugify(title);
  const words = raw.trim() ? raw.trim().split(/\s+/).length : 0;
  const readTime = `${Math.max(1, Math.round(words / 225))} min read`;
  const excerpt = (parsed.sections[0]?.content ?? "").replace(/\s+/g, " ").slice(0, 190).trim();
  const tagList = tags.split(",").map((tag) => tag.trim()).filter(Boolean);

  // Spread the available images evenly across sections.
  const sections = useMemo(() => {
    if (imageCount <= 1 || parsed.sections.length === 0) return parsed.sections;
    const step = Math.max(1, Math.floor(parsed.sections.length / (imageCount - 1)));
    let nextImage = 2;
    return parsed.sections.map((section, index) => {
      if (index > 0 && index % step === 0 && nextImage <= imageCount) {
        return { ...section, hasImage: true, imageIndex: nextImage++ };
      }
      return section;
    });
  }, [parsed.sections, imageCount]);

  const contentFile = useMemo(() => {
    const q = (value: string) => JSON.stringify(value);
    const body = sections
      .map(
        (section) => `    {
      id: ${q(section.id)},
      title: ${q(section.title)},
      content: \`${section.content.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\`,
      hasImage: ${section.hasImage},
      imageIndex: ${section.imageIndex ?? "null"},
    },`
      )
      .join("\n");

    return `export const articleContent = {
  title: ${q(title)},
  author: "Terafence",
  publishDate: ${q(new Date().toISOString().slice(0, 10))},
  standfirst: ${q(excerpt)},

  sections: [
${body}
  ],
};
`;
  }, [sections, title, excerpt]);

  const indexEntry = useMemo(
    () => `  {
    id: ${postId},
    title: ${JSON.stringify(title)},
    excerpt: ${JSON.stringify(excerpt)},
    category: ${JSON.stringify(category)},
    readTime: ${JSON.stringify(readTime)},
    publishDate: ${JSON.stringify(new Date().toISOString().slice(0, 10))},
    views: "0",
    featured: false,
    tags: ${JSON.stringify(tagList)},
    slug: ${JSON.stringify(slug)},
    imageCount: ${imageCount},
    level: ${JSON.stringify(level)},${
      pdfUrl
        ? `
    pdf: { url: ${JSON.stringify(pdfUrl)}, pages: ${pdfPages}, size: ${JSON.stringify(pdfSize)} },`
        : ""
    }
  },`,
    [postId, title, excerpt, category, readTime, tagList, slug, imageCount, level, pdfUrl, pdfPages, pdfSize]
  );

  const copy = async (text: string, which: "content" | "entry") => {
    await navigator.clipboard.writeText(text);
    setCopied(which);
    window.setTimeout(() => setCopied(null), 2000);
  };

  const download = () => {
    const blob = new Blob([contentFile], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${slug}.ts`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const onFile = async (file: File) => {
    const text = await file.text();
    setRaw(text);
  };

  const field =
    "w-full rounded-lg border border-[var(--v-line)] px-3 py-2.5 text-sm text-[var(--v-ink)] focus:border-[var(--v-blue)] focus:outline-none";
  const label = "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500";

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[var(--v-ink)] py-10 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl font-bold tracking-tight">Article builder</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            Drop in a document. This structures it, previews it exactly as it will publish, and
            writes the two files to commit.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-2">
        {/* ---------- input ---------- */}
        <div>
          <label className={label} htmlFor="source">
            1. Content
          </label>
          <label className="mb-3 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-[var(--v-line)] px-4 py-3 text-sm text-[var(--v-slate)] hover:border-[var(--v-blue)]">
            <Upload className="h-4 w-4" aria-hidden />
            Upload .md, .txt or .html
            <input
              type="file"
              accept=".md,.markdown,.txt,.html"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void onFile(file);
              }}
            />
          </label>
          <textarea
            id="source"
            value={raw}
            onChange={(event) => setRaw(event.target.value)}
            rows={16}
            placeholder={`# Article title\n\n## First section\n\nParagraphs, blank line separated.\n\n- bullets work\n> callouts work\n**bold** and \`code\` work.`}
            className={`${field} font-mono text-[13px] leading-relaxed`}
          />

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <label className={label} htmlFor="category">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className={field}
              >
                {CATEGORIES.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor="level">
                Depth
              </label>
              <select
                id="level"
                value={level}
                onChange={(event) => setLevel(event.target.value as typeof level)}
                className={field}
              >
                <option>Primer</option>
                <option>Technical</option>
                <option>Deep dive</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className={label} htmlFor="tags">
                Tags, comma separated
              </label>
              <input
                id="tags"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                placeholder="Syslog, OT Security"
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="postId">
                Post id (next free number)
              </label>
              <input
                id="postId"
                type="number"
                value={postId}
                onChange={(event) => setPostId(Number(event.target.value))}
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="imageCount">
                Images in /images/blog/{postId}/
              </label>
              <input
                id="imageCount"
                type="number"
                min={0}
                value={imageCount}
                onChange={(event) => setImageCount(Number(event.target.value))}
                className={field}
              />
            </div>
            <div className="col-span-2">
              <label className={label} htmlFor="pdfUrl">
                Downloadable PDF path (optional — blank falls back to save-as-PDF)
              </label>
              <input
                id="pdfUrl"
                value={pdfUrl}
                onChange={(event) => setPdfUrl(event.target.value)}
                placeholder="/downloads/whitepaper/example.pdf"
                className={field}
              />
            </div>
            {pdfUrl && (
              <>
                <div>
                  <label className={label} htmlFor="pdfPages">
                    Pages
                  </label>
                  <input
                    id="pdfPages"
                    type="number"
                    value={pdfPages}
                    onChange={(event) => setPdfPages(Number(event.target.value))}
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="pdfSize">
                    File size
                  </label>
                  <input
                    id="pdfSize"
                    value={pdfSize}
                    onChange={(event) => setPdfSize(event.target.value)}
                    className={field}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* ---------- output ---------- */}
        <div>
          <div className="mb-6 rounded-xl border border-[var(--v-line)] p-5">
            <p className={label}>2. Parsed</p>
            <dl className="grid grid-cols-2 gap-y-2 text-sm">
              <dt className="text-slate-500">Title</dt>
              <dd className="font-medium text-[var(--v-ink)]">{title}</dd>
              <dt className="text-slate-500">Slug</dt>
              <dd className="font-mono text-[12px] text-[var(--v-ink)]">{slug || "—"}</dd>
              <dt className="text-slate-500">Sections</dt>
              <dd className="text-[var(--v-ink)]">{sections.length}</dd>
              <dt className="text-slate-500">Words</dt>
              <dd className="text-[var(--v-ink)]">
                {words} · {readTime}
              </dd>
            </dl>

            {sections.length === 0 && raw.trim() === "" && (
              <p className="mt-4 flex gap-2 text-sm text-slate-500">
                <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
                Paste content to see the preview and generated files.
              </p>
            )}
          </div>

          {sections.length > 0 && (
            <>
              <div className="mb-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={download}
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--v-ink)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--v-blue)]"
                >
                  <FileDown className="h-4 w-4" aria-hidden />
                  Download {slug}.ts
                </button>
                <button
                  type="button"
                  onClick={() => copy(contentFile, "content")}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--v-line)] px-4 py-2.5 text-sm font-medium text-[var(--v-ink)] hover:border-[var(--v-ink)]"
                >
                  {copied === "content" ? (
                    <Check className="h-4 w-4 text-emerald-600" aria-hidden />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden />
                  )}
                  Copy content file
                </button>
                <button
                  type="button"
                  onClick={() => copy(indexEntry, "entry")}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--v-line)] px-4 py-2.5 text-sm font-medium text-[var(--v-ink)] hover:border-[var(--v-ink)]"
                >
                  {copied === "entry" ? (
                    <Check className="h-4 w-4 text-emerald-600" aria-hidden />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden />
                  )}
                  Copy index entry
                </button>
              </div>

              <ol className="mb-6 space-y-2 rounded-xl bg-[var(--v-mist)]/60 p-5 text-sm">
                <li className="text-slate-600">
                  Save the file to{" "}
                  <code className="font-mono text-[12px] text-[var(--v-ink)]">
                    src/app/data/blog/article-content/{slug}.ts
                  </code>
                </li>
                <li className="text-slate-600">
                  Paste the index entry at the top of{" "}
                  <code className="font-mono text-[12px] text-[var(--v-ink)]">blogPosts</code> in{" "}
                  <code className="font-mono text-[12px] text-[var(--v-ink)]">
                    src/app/data/blog/article.ts
                  </code>
                </li>
                <li className="text-slate-600">
                  Put {imageCount || "any"} image{imageCount === 1 ? "" : "s"} in{" "}
                  <code className="font-mono text-[12px] text-[var(--v-ink)]">
                    public/images/blog/{postId}/
                  </code>{" "}
                  named 1.png upward, plus{" "}
                  <code className="font-mono text-[12px] text-[var(--v-ink)]">{postId}.png</code> as
                  the card thumbnail
                </li>
                <li className="text-slate-600">Commit, then run deploy.sh</li>
              </ol>

              <p className={label}>3. Preview</p>
              <div className="rounded-xl border border-[var(--v-line)] p-6 text-lg leading-[1.75]">
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--v-ink)]">
                  {title}
                </h2>
                {sections.map((section) => (
                  <section key={section.id} className="mb-10">
                    <h3 className="mb-4 text-xl font-bold tracking-tight text-[var(--v-ink)]">
                      {section.title}
                    </h3>
                    <RichText text={section.content} />
                    {section.hasImage && (
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                        [image {section.imageIndex}]
                      </p>
                    )}
                  </section>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

