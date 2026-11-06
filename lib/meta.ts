import type { Metadata } from "next";
import { site } from "./site";
import { localHref, type Lang } from "./i18n";

/** Per-page title, description, canonical URL, FR/EN alternates and Open Graph tags. */
export function pageMetadata({
  lang,
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  lang: Lang;
  title: string;
  description: string;
  /** French path of the page, e.g. "/about". */
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  // The static export serves every page as a folder (/about/), so URLs end with a slash.
  const slash = (p: string) => (p.endsWith("/") ? p : `${p}/`);
  const fr = slash(localHref("fr", path));
  const en = slash(localHref("en", path));
  const url = lang === "fr" ? fr : en;
  // Page-level openGraph replaces the parent's, so the share image is set on every page.
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt:
      lang === "fr"
        ? "Accro Temple : coaching sportif avec Hassane Yahya à Saint-Lô"
        : "Accro Temple: fitness coaching with Hassane Yahya in Saint-Lô",
  };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: { fr, en, "x-default": fr } },
    openGraph: {
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_GB",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image.url] },
  };
}
