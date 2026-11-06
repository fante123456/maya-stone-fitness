import type { MetadataRoute } from "next";
import { SITE_URL, nav } from "@/lib/site";

export const dynamic = "force-static";

const LAST_UPDATED = "2026-11-05";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    // Trailing slash matches how the static export serves each page.
    url: `${SITE_URL}${item.href === "/" ? "/" : `${item.href}/`}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
