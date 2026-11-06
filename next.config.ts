import type { NextConfig } from "next";

// Static export for shared hosting (o2switch / Apache).
// `npm run build` writes a plain HTML/CSS/JS site to ./out
// Security headers live in public/.htaccess (next.config headers are not
// available in a static export).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  // FR and EN have separate root layouts (correct <html lang>), so the 404 page
  // needs the global-not-found file.
  experimental: {
    globalNotFound: true,
  },
  images: {
    // o2switch has no Next.js image server: Unsplash's CDN resizes and
    // converts each image (AVIF/WebP). See lib/unsplash-loader.ts
    loader: "custom",
    loaderFile: "./lib/unsplash-loader.ts",
    qualities: [70],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
