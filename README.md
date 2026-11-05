# Maya Stone Fitness

A five-page personal brand website for **Maya Stone Fitness**, a fictional personal trainer and online coaching service in Manchester. Built for MX AI Academy **Challenge 3**.

> Stronger body, clearer mind, better lifestyle

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

- Next.js 16 (App Router, TypeScript, Cache Components), all pages prerendered as static
- Tailwind CSS v4 and lucide-react icons
- `next/image` with AVIF/WebP and an Unsplash-only `remotePatterns` rule
- Per-page metadata, Open Graph image, `sitemap.xml`, `robots.txt`, favicon
- Basic security headers in `next.config.ts`

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build
npm run start
```

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
