# Gelian Fashion — Website

Premium marketing site for **Gelian (Pvt) Ltd** — browser-native CAD & AI for the apparel industry, built for the world's fashion houses and the production partners who make for them.

Hand-built **static site**: plain HTML, CSS and JavaScript. No build step, no framework, no dependencies.

## Run locally

```bash
npm run dev
```

Then open <http://localhost:5178/>. Override the port with `PORT=8080 npm run dev`.

(The pages are plain HTML, so you can also just open `index.html` directly in a browser.)

## Structure

```
.
├── index.html          # Home
├── products.html       # The 6-product Seamline family + workflow
├── company.html        # Vision, mission, approach
├── contact.html        # Demo request form + details
├── css/styles.css      # Design system (tokens, type, components, responsive)
├── js/main.js          # Nav state, mobile menu, scroll-reveal, count-up
├── assets/             # favicon + imagery
└── server.js           # Zero-dependency local dev server
```

## Design — "Precision Atelier"

Editorial luxury fused with CAD precision. **Fraunces** display serif + **Inter** body + **IBM Plex Mono** labels; warm bone & ink with a refined bronze accent and dramatic obsidian sections; hairline rules, measurement ticks, and an animated marker-nesting motif.

## Notes

- **Imagery** is temporary — curated free Unsplash photos with a duotone treatment. Drop real logo / product screenshots / photography into `assets/` and update the `<img src>` references.
- **Contact form** is front-end only. Wire a backend (Formspree, Netlify Forms, or your own endpoint) to actually send submissions.

## Deploy

Any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Publish the repository root. `.nojekyll` is included for GitHub Pages.

## License

Proprietary — © 2026 Gelian (Pvt) Ltd. All rights reserved.
