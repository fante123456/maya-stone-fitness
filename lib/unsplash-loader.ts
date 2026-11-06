// next/image loader for the static export (o2switch has no Next.js image server).
// Unsplash's CDN resizes and converts images itself, so every srcset entry
// still gets a correctly sized AVIF/WebP image.
export default function unsplashLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 70));
  return url.toString();
}
