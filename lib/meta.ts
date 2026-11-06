import type { Metadata } from "next";
import { site } from "./site";

/** Per-page title, description, canonical URL and Open Graph tags. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  // The static export serves every page as a folder (/about/), so URLs end with a slash.
  const url = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  // Page-level openGraph replaces the parent's, so the share image is set on every page.
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Maya Stone Fitness: Stronger body, clearer mind, better lifestyle. Personal trainer in Manchester.",
  };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image.url] },
  };
}
