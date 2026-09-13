import Image from "next/image";
import { Download, ArrowRight, FileText } from "lucide-react";
import RichText from "./rich-text";
import { sectionAnchor, type ArticleContent } from "@/lib/blog";
import type { BlogPost } from "@/app/data/blog/article";

type Props = {
  post: BlogPost;
  content: ArticleContent;
};

/**
 * Server component on purpose: the body is the page's reason to exist, so it
 * ships as HTML with no client JS and no scroll-triggered opacity animations
 * that hide text from crawlers and slow readers down.
 */
export default function ArticleContent({ post, content }: Props) {
  const caption = (index?: number | null) =>
    typeof index === "number" ? content.imageCaptions?.[index - 1] : undefined;

  return (
    <div className="article-body text-lg leading-[1.75]">
      {content.keyTakeaways && content.keyTakeaways.length > 0 && (
        <aside
          id="key-takeaways"
          aria-labelledby="key-takeaways-title"
          className="mb-12 rounded-xl border border-[var(--v-line)] bg-[var(--v-mist)]/60 p-6 sm:p-7"
        >
          <h2 id="key-takeaways-title" className="mb-4 text-base font-semibold text-[var(--v-ink)]">
            The short version
          </h2>
          <ul className="space-y-3 text-base">
            {content.keyTakeaways.map((point, index) => (
              <li key={index} className="flex gap-3 text-[var(--v-slate)]">
                <span
                  aria-hidden
                  className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--v-blue)]"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {content.sections?.map((section, index) => {
        const anchor = sectionAnchor(section);
        const imageCaption = caption(section.imageIndex);

        return (
          <section key={anchor} className="mb-14 scroll-mt-28" id={anchor}>
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-[var(--v-ink)] lg:text-[1.7rem]">
              <a
                href={`#${anchor}`}
                className="group inline-flex items-baseline gap-2 no-underline"
              >
                {section.title}
                <span
                  aria-hidden
                  className="text-blue-400 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  #
                </span>
              </a>
            </h2>

            <RichText text={section.content} className={index === 0 ? "lead-section" : undefined} />

            {section.hasImage && section.imageIndex && (
              <figure className="mt-8">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[var(--v-mist)]">
                  <Image
                    src={`/images/blog/${post.id}/${section.imageIndex}.png`}
                    alt={imageCaption ?? section.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 1024px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
                {imageCaption && (
                  <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">
                    {imageCaption}
                  </figcaption>
                )}
              </figure>
            )}
          </section>
        );
      })}

      {content.comparisonTable && (
        <section id="comparison" className="mb-14 scroll-mt-28">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[var(--v-ink)] lg:text-[1.75rem]">
            {content.comparisonTable.title}
          </h2>
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[36rem] border-collapse text-left text-base">
              <thead>
                <tr className="border-b-2 border-slate-900">
                  {content.comparisonTable.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-3 text-sm font-semibold text-[var(--v-ink)]"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparisonTable.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-[var(--v-line)] align-top">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-4 py-4 ${
                          cellIndex === 0 ? "font-medium text-[var(--v-ink)]" : "text-[var(--v-slate)]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {content.faq && content.faq.length > 0 && (
        <section id="faq" className="mb-14 scroll-mt-28">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[var(--v-ink)] lg:text-[1.75rem]">
            Common questions
          </h2>
          <div className="divide-y divide-slate-200 border-y border-[var(--v-line)]">
            {content.faq.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[var(--v-ink)] marker:hidden">
                  {item.question}
                  <span
                    aria-hidden
                    className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--v-line)] text-slate-500 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pt-3 text-base text-[var(--v-slate)]">
                  <RichText text={item.answer} />
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {content.resources && content.resources.length > 0 && (
        <section id="resources" className="mb-14 scroll-mt-28">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[var(--v-ink)] lg:text-[1.75rem]">
            Take it further
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {content.resources.map((resource) => (
              <li key={resource.url}>
                <a
                  href={resource.url}
                  className="flex h-full items-start gap-3 rounded-xl border border-[var(--v-line)] p-4 transition-colors hover:border-[var(--v-blue)] hover:bg-[var(--v-mist)]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-blue)]"
                >
                  <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[var(--v-mist)] text-[var(--v-slate)]">
                    {resource.type === "download" ? (
                      <Download className="h-4 w-4" aria-hidden />
                    ) : (
                      <FileText className="h-4 w-4" aria-hidden />
                    )}
                  </span>
                  <span className="text-base font-medium leading-snug text-[var(--v-ink)]">
                    {resource.title}
                    <span className="mt-1 block text-sm font-normal capitalize text-slate-500">
                      {resource.type === "download" ? "PDF download" : resource.type}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {content.ctaButtons && content.ctaButtons.length > 0 && (
        <section className="mb-4 rounded-2xl bg-[var(--v-ink)] px-6 py-8 sm:px-8">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Want this reviewed against your own network?
          </h2>
          <p className="mt-2 max-w-xl text-base text-slate-300">
            Our engineers will map what has to leave your plant and what a one-way path would
            look like in your topology.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {content.ctaButtons.map((cta) => (
              <a
                key={cta.url}
                href={cta.url}
                className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-peri)] ${
                  cta.type === "primary"
                    ? "bg-[var(--v-blue)] text-white hover:bg-[var(--v-peri)]"
                    : "border border-white/25 text-white hover:bg-white/10"
                }`}
              >
                {cta.title}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

