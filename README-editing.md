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
| Phone and tablet layout (all pages) | `shared/tf-mobile.css` | One file, one section per page (scoped by the class on `<body>`, e.g. `pg-home`). It loads last, so it wins over the page styles, and every rule sits in a max-width query, so desktop is never affected |
| Section text and order | `index.html` | Each section is marked with a comment banner |
| "Business need" cards and the "Data out. Nothing back in." diagram | `index.html` | Section `id="how-it-works"`. The diagram is ordinary text in boxes, not a picture, so every label can be edited in place |
| The FPGA illustration | `index.html` | Section `id="why"`. It is drawn in SVG, so it stays sharp at any size and follows the brand colours |
| About us page text and order | `about.html` | Each section is marked with a comment banner |
| Leadership team (names, titles, bios, LinkedIn, photos) | `about.html` | The `TF.TEAM` block near the bottom of the file. Four entries; add or remove entries freely. Portraits go in `assets/team/` (WebP or JPG, about 640px wide) |
| Which links open real pages while the site is a prototype | `shared/tf-site.js` | `TF.REAL_PAGES`. Add a line when a page is built |
| Insights articles (title, category, date, reading time, tags) | `index.html` | Section `id="insights"`. Copied from the live terafence.us Knowledge Vault; they do not update themselves, so refresh them when the blog changes |
| Sector photographs in Solutions | `assets/sectors/` | Replace a file with the same name (`energy.webp`, `oil-gas.webp`, `water.webp`, `defense.webp`, `transport.webp`, `manufacturing.webp`, `industrial.webp`), saved as WebP about 800px wide (the older `.jpg` copies are not used). Any 16:10 photo works; the indigo tint and the colour-on-hover effect are applied in CSS, so no code changes are needed |
| Browser tab icon and phone home-screen icon | `assets/icons/` | `favicon-32.png`, `icon-192.png`, `apple-touch-icon.png` (the logo mark on white) |
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
