# Terafence US home page: how to make changes

Upload the whole folder to the test server and open `index.html`.
This folder contains Option B only. There is no option chooser, and the header
logo stays on the page instead of going back to one.

| To change | Edit this file | Where |
|---|---|---|
| Menu items and drop-down links | `shared/tf-site.js` | `TF.NAV` |
| Rotating hero messages | `shared/tf-site.js` | `TF.HERO_MESSAGES` |
| Hero message timing | `shared/tf-site.js` | `TF.HERO_INTERVAL_MS` |
| Footer links | `shared/tf-site.js` | `TF.FOOTER`, `TF.LEGAL` |
| Top-right buttons ("Plan a pilot", "Contact") | `shared/tf-site.js` | `TF.CTA` |
| Where the header logo points | `shared/tf-site.js` | `TF.LOGO_HREF` (currently `#top`; set it to `/` on the live site) |
| Brand colours and fonts (whole site) | `shared/tf-base.css` | `:root` block at the top |
| Phone and tablet layout (all pages) | `shared/tf-mobile.css` | One file, one section per page (scoped by the class on `<body>`, e.g. `pg-home`). A new page links it last in its `<head>` (the list of page classes is at the top of the file; `shared/tf-site.js` adds the link if a page, such as a regenerated Insights page, is missing it). It loads last, so it wins over the page styles, and every rule sits in a max-width query, so desktop is never affected |
| Section text and order | `index.html` | Each section is marked with a comment banner |
| "Business need" cards and the "Data out. Nothing back in." diagram | `index.html` | Section `id="how-it-works"`. The diagram is ordinary text in boxes, not a picture, so every label can be edited in place |
| The FPGA illustration | `index.html` | Section `id="why"`. It is drawn in SVG, so it stays sharp at any size and follows the brand colours |
| About us page text and order | `about.html` | Each section is marked with a comment banner |
| Leadership team (names, titles, bios, LinkedIn, photos) | `about.html` | The `TF.TEAM` block near the bottom of the file. Four entries; add or remove entries freely. Portraits go in `assets/team/` (WebP or JPG, about 640px wide) |
| Which links open real pages while the site is a prototype | `shared/tf-site.js` | `TF.REAL_PAGES`. Add a line when a page is built |
| Insights articles, topics, featured article | `build-scripts/insights/articles.json` (outside this folder) | See "Terafence Insights" below. The `insights/` folder and the home cards are generated; do not edit them by hand |
| Sector photographs in Solutions | `assets/sectors/` | Replace a file with the same name (`energy.webp`, `oil-gas.webp`, `water.webp`, `defense.webp`, `transport.webp`, `manufacturing.webp`, `industrial.webp`), saved as WebP about 800px wide (the older `.jpg` copies are not used). Any 16:10 photo works; the indigo tint and the colour-on-hover effect are applied in CSS, so no code changes are needed |
| Browser tab and phone home-screen icons | `favicon.ico`, `assets/favicon/` | `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`, made from `source-terafence-us-icon.png` |
| Enquiry form titles, button text, per-topic description | `shared/tf-form.js` | `TF.FORM_TOPICS` |
| Where form submissions are sent | `shared/tf-form.js` | `TF.FORM_ENDPOINT` (null = demo mode, nothing is sent) |
| Product photos and logo | `assets/` | The pages use the compressed WebP files: `tfg-121.webp`, `tfg-1urp-rear.webp`, `tfg121-bf.webp`, `tfg121-bsg.webp` and the logo `tf-logo-dark-bg.webp`; the home page product section uses the studio shots in `assets/studio/` (with small tab thumbnails in `assets/studio/thumbs/`). The original PNG and JPG files are kept as masters but are not loaded. To change a picture, export a WebP with the same name. `tf-logo.png` is the official Terafence USA logo (from the client's brand package) for light backgrounds. `tf-logo-dark-bg.png` is the same artwork with the black wordmark made white, for the dark header and footer. A vector (SVG) logo would be sharper; the previous logos are kept in `assets/_previous-logos/` |

Planned pages (products, industries, etc.) are not built yet. Clicking them shows a short notice instead of a broken page. When the real pages exist, set `TF.PLACEHOLDER_LINKS = false` in `shared/tf-site.js`.

## Before launch

- The enquiry form is in demo mode. It shows the thank-you message and sends nothing until `TF.FORM_ENDPOINT` is set, and the captcha is a dummy that needs replacing with a real one.
- Sector photographs are placeholders (see below).
- The hero photograph is low resolution and needs a licensed replacement.
- The About page leadership cards show stand-in portraits (`assets/team/leader-1.webp` to `leader-4.webp`), placeholder names, sample bios and no LinkedIn addresses until the four real names, titles, bios, LinkedIn addresses and portraits are supplied. Photo portraits automatically get the indigo tint and colour-on-hover treatment.
- Per-model product photographs are needed; the product explorer currently reuses the same rack images.

## Sources

Terafence Introduction deck (L0 V10) for company, product and case-study facts; logo from terafence.us; the Insights section links to the live terafence.us Knowledge Vault. Certifications are worded "Designed to support" only.

Sector photographs in `assets/sectors/` are cropped from the photographs already used in the Terafence Introduction deck, so no new licence is involved. Each crop stays inside the photograph itself, so no customer logo or slide graphic is carried over. They are low resolution by web standards and are placeholders for properly licensed photography before launch.

## Button rule (all pages)

Buttons are styled in one place only: `shared/tf-base.css` (search for "BUTTON RULE").

| Button | Normal | On hover |
|---|---|---|
| Red, solid (`tf-btn--primary`), e.g. "Request a quote" | Red fill, white text | White fill, blue text, blue edge |
| Blue, solid (`tf-btn--indigo`) | Blue fill, white text | White fill, blue text, blue edge |
| Outline on a light background (`tf-btn--ghost-dark`), e.g. "Compare" | Blue edge, blue text | Solid blue fill, white text |
| Outline on a dark background (`tf-btn--ghost`), e.g. "Plan a pilot" | Light edge, white text | Solid white fill, blue text |

Do not add hover styles for these buttons inside a page. Change the shared file so every page stays the same.

## Terafence Insights (blog)

Everything under `insights/` and the file `sitemap-insights.xml` are generated by
`build-scripts/build_insights.py` (in `Terafence-US/build-scripts/`, next to this folder). Edit the data, then rebuild.

**Add an article**
1. Add an entry to `build-scripts/insights/articles.json`: `slug` (becomes `/insights/<slug>/`), `title`, `meta_title`, `excerpt`,
   `meta_description`, `category` (a topic slug), `content_type`, `tags`, `date_published` (YYYY-MM-DD, or YYYY-MM if the source gives no day),
   optional `date_modified`, `author` / `reviewer` (leave empty unless real names and credentials are supplied), `related` (slugs to show first),
   `hero` (diagram caption and alt text) and `next_step` (the closing call to action).
2. Put the body in `build-scripts/insights/bodies/<slug>.html`. Use `<section class="ia-sec" data-num="01" data-kicker="Section one">` with one `<h2>` per
   section (each H2 becomes a table-of-contents entry), and the ready-made blocks listed at the top of the CCTV body file (lede, quote, figures row, callout, bullet list).
3. Optional diagram: `build-scripts/insights/<slug>.diagram.svg` (inline SVG; labels are editable text).
4. Run `python build_insights.py --png` (the `--png` flag also makes the share image from the diagram), then `python qa_insights.py`.

**Topics**: add a topic to `categories` in the same file (name, slug, a real one-line introduction). A topic page is only created once it has at least one article.
The home page no longer has an Insights section (removed 11 Nov 2026 at Robin's request); Insights is reached from the menu, the footer and the "CCTV and video export" use-case tile.
**Featured article**: set `"featured"` to an article slug. **Latest** lists are always newest first; **Related** comes from explicit `related` links, then same topic, then shared tags.
**Search** covers titles, summaries, topics, tags and content type (`insights/search-index.js`, rebuilt automatically).

**Analytics**: events are pushed to `window.dataLayer` now (`insights_click`, `insights_cta_click`, `insights_contextual_link`, `insights_search`,
`insights_search_no_results`, `insights_scroll`). To send them to GA4, set `TF.GA4_ID` at the top of `shared/tf-insights.js` to the Measurement ID.

**Before launch**: set the real domain in `articles.json` (`"site"`, currently https://www.terafence.us) so canonicals, structured data and the sitemap are right;
reference `sitemap-insights.xml` from the main sitemap or robots.txt; the server must serve `/insights/<slug>/` from `insights/<slug>/index.html` (any standard host does).


## Claims corrections, 13 November 2026

The client claims workbook (items 4.1 to 4.15) now governs public wording. Home and About use its recommended six-tile statistics strip. Assessment documentation is an informational selection in Compare, not evidence of certification or a product eligibility filter.

The existing November datasheet PDFs require corrected client versions. Their public download links have been replaced with email requests to info@terafence.us. Restore downloads only after the client supplies corrected PDFs. The enquiry form remains in demo mode.

The upstream Insights generator and articles.json are absent from this checkout and the supplied project files. Claims corrections were applied consistently to the exported article pages, listings, metadata and search-index.js. Carry the same corrections into the upstream article data and bodies before regenerating Insights, to prevent the old claims returning.
