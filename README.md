# Maya Stone Fitness

A five-page personal brand website for **Maya Stone Fitness**, a fictional personal trainer and online coaching service in Manchester. Built for MX AI Academy **Challenge 3**.

> Stronger body, clearer mind, better lifestyle

- **Live site (o2switch):** https://maya-stone.ammar-rajabi.com
- **Vercel:** https://maya-stone-fitness-eight.vercel.app

Maya Stone, the prices and the testimonials are fictional. Testimonials are labelled as demo content on the site.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, coach intro, programme preview, why train with Maya, demo testimonials, call to action |
| `/about` | Coach story, training philosophy, personal approach, values |
| `/programmes` | Comparison table and four programmes with the same card structure |
| `/results` | Client goals, consistency, lifestyle habits, progress tracking, demo testimonials (no before-and-after photos) |
| `/contact` | Studio location, phone, email, working hours, validated booking form |

## Design

- **Palette:** Matte Black `#101010`, Electric Lime `#B6FF3B`, Soft White `#F8F8F8`, Graphite Grey `#2C2C2C`, Fresh Blue `#3ABEFF`
- **Type:** Big Shoulders (condensed display) and Manrope (body), self-hosted with `next/font`
- **Signature detail:** a lime marker stroke under one key word per section
- **Motion:** CSS-only scroll reveals, switched off for `prefers-reduced-motion`
- **Accessibility:** WCAG AA contrast, skip link, visible focus, labelled form fields with inline errors

## Tech

- Next.js 16 (App Router, TypeScript) as a static export for Apache hosting
- Tailwind CSS v4 and lucide-react icons
- `next/image` with a custom loader: Unsplash's CDN serves each size as AVIF/WebP
- Per-page metadata, Open Graph image, `sitemap.xml`, `robots.txt`, favicon
- Security headers, HTTPS redirect, caching and gzip in `public/.htaccess`

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build
npm run preview
```

`npm run build` creates a static site in `out/`. `npm run preview` serves it at http://127.0.0.1:3000 with gzip and the same headers as the server.

## Deploy to o2switch (shared hosting)

1. Set the live address in `lib/site.ts` (`SITE_URL`, no trailing slash), then run `npm run build`.
2. Upload everything inside `out/` (including the hidden `.htaccess`) to the domain or subdomain folder in cPanel File Manager.
3. `.htaccess` forces HTTPS, sets the security and cache headers, enables gzip and serves `404.html` for missing pages.

The site is built for the root of a domain or subdomain. For a subfolder, add `basePath` in `next.config.ts` and change `ErrorDocument` in `public/.htaccess`.

## Project structure

```
app/          routes, metadata files, global styles
components/   header, footer, cards, form, shared UI
lib/          brand details, programmes, photos, metadata helper
```

## Contact form

The form validates in the browser and shows a confirmation. It is a demo, so nothing is sent or stored.

## Photo credits

All photos are from [Unsplash](https://unsplash.com) under the Unsplash License, by Brian Lawson, Jonathan Borba, Vitaly Gariev, Sven Mieke, Marvin Cors, Jeremy Stewart, SALAH PICTURES, Samuel Girven, Ella Olsson, Christina Moroz and Ambitious Studio / Rick Barrett. Each photographer is also credited in the site footer.
