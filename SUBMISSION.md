# MX AI Academy · Challenge 3 · Maya Stone Fitness

Personal fitness coach website built with Next.js (5 pages, fictional brand).

## Links

| Item | Link |
| --- | --- |
| GitHub repository | Not used: the project is delivered as a zip for o2switch hosting instead of GitHub |
| Live website | https://maya-stone.ammar-rajabi.com |
| Upload package | `maya-stone-fitness-o2switch.zip` (static site, 73 files, 673 KB) |

## Screenshots

- Home, desktop (1440px): `screenshots/submission/home-desktop.png` (full page: `home-desktop-full.png`)
- Home, mobile (390px): `screenshots/submission/home-mobile.png` (full page: `home-mobile-full.png`)

## Design explanation

1. A matte black base with Electric Lime as the only strong accent gives Maya a bold, sporty brand that is clearly different from a generic gym template.
2. Tall condensed headings (Big Shoulders) with a clean body font (Manrope) make the big, confident type readable even on a 320px phone.
3. One signature detail, a lime marker stroke under one key word per section, carries the energy without extra effects or clutter.
4. The Programmes page puts four identical cards side by side, each with "who it is for", session length, sessions per week, price and a booking button, so they are easy to compare.
5. Honest content: real-looking training photos instead of before-and-after images, no weight-loss guarantees, and every testimonial labelled as demo.

## Hardest part

1. Finding free photos that show one consistent coach, without bodybuilding or transformation images, took several contact-sheet rounds.
2. Next.js 16 needed changes to run on o2switch shared hosting: a static export, an Unsplash image loader and security headers moved into `.htaccess`.
3. Keeping Lighthouse mobile above 90 while using big type, many photos and scroll animations meant CSS-only motion and careful image sizes.

## Results

| Check | Result |
| --- | --- |
| Pages | Home, About, Programmes, Results, Contact, with working navigation |
| Responsive | Checked at 320, 375, 768 and 1440px: no horizontal scroll |
| Lighthouse mobile | Performance 94 to 97, Accessibility 100, Best Practices 100, SEO 100 |
| Lighthouse desktop | 100 in all four categories |
| SEO | Unique title and description per page, one H1, Open Graph image, sitemap, robots, favicon |
| Contact form | Validated, accessible errors, demo only (nothing is sent) |
