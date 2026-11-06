// Fictional brand details from the MX AI Academy Challenge 3 brief. Do not change.
// The live address, used for canonical URLs, the sitemap and share links.
// Placeholder until the o2switch address is known: change the fallback below
// (or set NEXT_PUBLIC_SITE_URL) and run `npm run build` again. No trailing slash.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maya-stone.ammar-rajabi.com";

export const site = {
  name: "Maya Stone Fitness",
  tagline: "Stronger body, clearer mind, better lifestyle",
  phoneDisplay: "0161 555 7402",
  phoneHref: "tel:+441615557402",
  email: "train@mayastonefitness.co.uk",
  address: {
    street: "Studio 4, 72 Bridge Street",
    city: "Manchester",
    postcode: "M3 2RJ",
    country: "United Kingdom",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=72+Bridge+Street+Manchester+M3+2RJ",
  hours: [
    { days: "Monday to Friday", time: "6:30 to 20:00" },
    { days: "Saturday", time: "8:00 to 13:00" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
] as const;
