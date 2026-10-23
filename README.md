# Portfolio

My personal site: two case studies from my work at Elephant Skin, my experience and skills, and how to reach me, in English and Brazilian Portuguese. The hero has an interactive 360° wireframe, a nod to the 150-frame spins I build for real estate presentations.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. Every page is generated at build time.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000. The Portuguese version is at http://localhost:3000/pt.

| Command             | What it does                    |
| ------------------- | ------------------------------- |
| `npm run dev`       | Development server              |
| `npm run build`     | Production build                |
| `npm start`         | Serves the production build     |
| `npm run lint`      | ESLint                          |
| `npm run typecheck` | Generates route types, then TypeScript |

## Project structure

```
src/
  app/
    [lang]/                 Every page, rendered once per language
      page.tsx              Home
      work/[slug]/          Case studies
      opengraph-image.tsx   Link preview images
      not-found.tsx         Translated 404 page
    fonts.ts                Geist and Geist Mono
    sitemap.ts, robots.ts, icon.svg, apple-icon.tsx
  components/               Header, footer, page sections and the spin demo
  content/                  All the text, one file per language
  lib/                      Language helpers, metadata, site details, house geometry
  proxy.ts                  Language routing
public/                     Résumé PDF
```

## Editing the text

All copy lives in `src/content/en.ts` and `src/content/pt.ts`. Both follow the `Dictionary` type in `src/content/types.ts`, so TypeScript points out anything missing in one of the languages. Case study slugs must be the same in both files.

Email, social links and the résumé path are in `src/lib/site.ts`.

## Case study media

The case studies show placeholders for now. Put the files in `public/work/` and replace the `media` field of each case in both content files:

```ts
media: {
  type: "video",
  src: "/work/360-homes.mp4",
  poster: "/work/360-homes.jpg",
  label: "Masterplan, 360° spin and comparison",
},

// or

media: {
  type: "image",
  src: "/work/proposals.png",
  alt: "Proposal builder, buyer view and activity history",
},
```

## Languages

English is served at the root (`/`, `/work/360-homes`) and Portuguese under `/pt`. On a first visit, browsers set to Portuguese go to `/pt`. After that, the language switch saves the visitor's choice in a cookie. The logic is in `src/proxy.ts`.

## Deploying

Import the repository on Vercel and deploy with the default settings.

After adding a custom domain, set `NEXT_PUBLIC_SITE_URL` (for example `https://example.com`) so canonical links, the sitemap and link previews use it. Until then, the Vercel production URL is used.

## Fonts

Geist and Geist Mono by Vercel, licensed under the SIL Open Font License (`src/assets/fonts/OFL.txt`).
