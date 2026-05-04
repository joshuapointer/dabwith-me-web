# dabwith.me — web

Next.js shell wrapping the static landing page (`public/landing.html`) and the dab session flow app (`public/app.html`).

## Routes

- `/` → `public/landing.html` (rewritten in `next.config.ts`)
- `/app` → `public/app.html` (the session flow)

Both are pure self-contained HTML with inline CSS/JS — no build step transforms them. Next.js is here purely as a deploy/runtime shell that handles the rewrites and serves `public/` with proper caching headers.

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Docker

The included `Dockerfile` produces a `standalone` Next.js image. Build:

```bash
docker build -t dabwith-me-web .
docker run --rm -p 3000:3000 dabwith-me-web
```

## Asset layout

- `public/landing.html` — marketing landing page
- `public/app.html`     — the dab session flow (orb, banger/concentrate carousels, heat/cool curves)
- `public/tiles/`       — 25 banger and concentrate thumbnails referenced by `/app`
- `public/brand-kit/`   — logos, favicons, OG card, app icons

## Editing the pages

Edit the HTML files directly. They are intentionally standalone so they can be previewed in any browser without the Next.js stack — open `public/app.html` in a file:// URL and it works.

When changing tile or brand-kit asset references, keep paths absolute (e.g. `/tiles/x.png`, not `tiles/x.png` or `./tiles/x.png`) so they resolve under both `/` and `/app`.
