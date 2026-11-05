import type { MetadataRoute } from "next";
import { SITE_URL, nav } from "@/lib/site";

// Fixed date: a static value keeps the route prerenderable with Cache Components.
const LAST_UPDATED = "2026-11-05";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
