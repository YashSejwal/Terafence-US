#!/usr/bin/env node
/**
 * Turns a markdown file into a blog article, from the terminal.
 *
 *   node scripts/new-article.mjs drafts/my-piece.md \
 *     --category "OT Security" --tags "Syslog,OT Security" --id 14
 *
 * Writes src/app/data/blog/article-content/<slug>.ts and prints the
 * blogPosts entry to paste into src/app/data/blog/article.ts.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const args = process.argv.slice(2);
const file = args[0];
if (!file) {
  console.error("usage: node scripts/new-article.mjs <file.md> [--category X] [--tags a,b] [--id N] [--pdf /path.pdf]");
  process.exit(1);
}

const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};

const slugify = (s) =>
  s.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);

const raw = readFileSync(file, "utf8").replace(/\r\n/g, "\n");
const lines = raw.split("\n");

let title = "";
const sections = [];
let current = null;
const push = () => {
  if (!current) return;
  sections.push({
    id: slugify(current.title),
    title: current.title,
    content: current.body.join("\n").replace(/\n{3,}/g, "\n\n").trim(),
  });
};

for (const line of lines) {
  const h1 = line.match(/^#\s+(.*)/);
  const h2 = line.match(/^##\s+(.*)/);
  if (h1 && !title) { title = h1[1].trim(); continue; }
  if (h2 || (h1 && title)) { push(); current = { title: (h2 ? h2[1] : h1[1]).trim(), body: [] }; continue; }
  if (current) current.body.push(line);
}
push();

if (!title || sections.length === 0) {
  console.error("Could not find a '# Title' and at least one '## Section' heading.");
  process.exit(1);
}

const slug = slugify(title);
const words = raw.trim().split(/\s+/).length;
const readTime = `${Math.max(1, Math.round(words / 225))} min read`;
const excerpt = sections[0].content.replace(/\s+/g, " ").slice(0, 190).trim();
const today = new Date().toISOString().slice(0, 10);
const imageCount = Number(flag("images", 0));
const pdf = flag("pdf", "");

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const body = sections
  .map((s, i) => {
    const hasImage = imageCount > 1 && i > 0 && i <= imageCount - 1;
    return `    {
      id: ${JSON.stringify(s.id)},
      title: ${JSON.stringify(s.title)},
      content: \`${esc(s.content)}\`,
      hasImage: ${hasImage},
      imageIndex: ${hasImage ? i + 1 : "null"},
    },`;
  })
  .join("\n");

const out = `export const articleContent = {
  title: ${JSON.stringify(title)},
  author: "Terafence",
  publishDate: ${JSON.stringify(today)},
  standfirst: ${JSON.stringify(excerpt)},

  sections: [
${body}
  ],
};
`;

const dest = join("src", "app", "data", "blog", "article-content", `${slug}.ts`);
if (existsSync(dest) && !args.includes("--force")) {
  console.error(`${dest} already exists. Pass --force to overwrite.`);
  process.exit(1);
}
mkdirSync(dirname(dest), { recursive: true });
writeFileSync(dest, out, "utf8");

console.log(`\nWrote ${dest}  (${sections.length} sections, ${words} words, ${readTime})\n`);
console.log("Paste this at the top of blogPosts in src/app/data/blog/article.ts:\n");
console.log(`  {
    id: ${flag("id", 14)},
    title: ${JSON.stringify(title)},
    excerpt: ${JSON.stringify(excerpt)},
    category: ${JSON.stringify(flag("category", "OT Security"))},
    readTime: ${JSON.stringify(readTime)},
    publishDate: ${JSON.stringify(today)},
    views: "0",
    featured: false,
    tags: ${JSON.stringify(flag("tags", "").split(",").map((t) => t.trim()).filter(Boolean))},
    slug: ${JSON.stringify(slug)},
    imageCount: ${imageCount},
    level: ${JSON.stringify(flag("level", "Technical"))},${pdf ? `
    pdf: { url: ${JSON.stringify(pdf)}, pages: ${flag("pdf-pages", 2)}, size: ${JSON.stringify(flag("pdf-size", "1.5 MB"))} },` : ""}
  },`);
console.log(`\nImages go in public/images/blog/${flag("id", 14)}/1.png upward, plus public/images/blog/${flag("id", 14)}.png as the card thumbnail.\n`);

