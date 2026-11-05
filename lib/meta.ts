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
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image.url] },
  };
}
