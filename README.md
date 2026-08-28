# Gelian Fashion

Marketing website for **Gelian Fashion** — a browser-based CAD & AI platform for apparel manufacturing (pattern design, marker making, nesting, PLM and roll management).

The site is a **static, no-build website**. Pages are authored in Claude Design's `.dc.html` canvas format and render in the browser via a small client-side runtime (`support.js`), which loads React 18 from a CDN at runtime. There is no bundler or compile step — edit the files and refresh.

## Requirements

- [Node.js](https://nodejs.org/) 18+ (only for the local dev server)
- An internet connection at runtime (React is loaded from the unpkg CDN by `support.js`)

## Run locally

```bash
npm run dev
```

Then open <http://localhost:5178/>. Change the port with `PORT=8080 npm run dev`.

> The pages **must be served over HTTP** — opening the `.dc.html` files directly via `file://` will not work, because the runtime fetches sibling pages and assets.

## Project structure

```
.
├── index.html            # Redirects / to the home page (for static hosts)
├── Gelian.dc.html        # Home
├── Products.dc.html      # Products
├── Company.dc.html       # Company
├── Contact.dc.html       # Contact
├── support.js            # Claude Design runtime — renders <x-dc>, loads React
├── image-slot.js         # <image-slot> component runtime
├── assets/               # Page hero images
├── _ds/                  # Design system (tokens, styles.css, bundle) — do not rename
├── server.js             # Zero-dependency local static server
├── package.json
└── github.md             # Claude Design sync notes
```

## Editing

- Each page is a standalone `.dc.html` file. The visible markup lives inside the `<x-dc>` element; shared `<head>` content (fonts, the design-system stylesheet, scripts) lives in the `<helmet>` block.
- Global colors, fonts and spacing are design tokens (CSS variables like `--color-accent`, `--font-heading`) defined in `_ds/…/styles.css`. Prefer these tokens over hard-coded values so the pages stay consistent.
- Images use the `<image-slot>` element with a `src` pointing into `assets/`.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3). Just publish the repository root.

- **GitHub Pages:** the included `.nojekyll` file is required — without it, Jekyll drops the `_ds/` folder (leading underscore) and the site loses all its styles.

## License

Proprietary — © 2026 Gelian (Pvt) Ltd. All rights reserved.
