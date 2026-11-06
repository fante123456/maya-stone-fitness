// Real public facts about Accro Temple (Hassane Yahya), checked on 6 Nov 2026.
// Practice demo only: do not add anything that is not in the public sources.
// The live address, used for canonical URLs, the sitemap and share links.
// Placeholder until the o2switch address is known: change the fallback below
// (or set NEXT_PUBLIC_SITE_URL) and run `npm run build` again. No trailing slash.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maya-stone.ammar-rajabi.com";

export const site = {
  name: "Accro Temple",
  coach: "Hassane Yahya",
  city: "Saint-Lô",
  postcode: "50000",
  phoneDisplay: "07 86 91 99 39",
  phoneHref: "tel:+33786919939",
  mapsUrl: "https://maps.google.com/?cid=16537510334274491872",
  instagram: "https://www.instagram.com/accrotemplecoaching/",
  facebook: "https://www.facebook.com/accrotemplecoaching",
  rating: { fr: "5,0", en: "5.0", count: 31 },
} as const;

/** French paths (the default language). The sitemap uses this list. */
export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/programmes", label: "Coaching" },
  { href: "/results", label: "Avis" },
  { href: "/contact", label: "Contact" },
] as const;
