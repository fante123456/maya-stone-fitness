// Local preview of the static export: `npm run build`, then `npm run preview`
// and open http://127.0.0.1:3000. No extra packages needed.
// Tiny static server that mimics the o2switch .htaccess for local testing:
// gzip for text, folder index.html, trailing-slash redirect, 404.html,
// PNG type for extension-less images, same security and cache headers.
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { createGzip } from "node:zlib";

const root = resolve(process.argv[2] ?? "out");
const port = Number(process.argv[3] ?? 3016);
const types = {
  ".html": "text/html; charset=utf-8", ".js": "application/javascript", ".css": "text/css",
  ".txt": "text/plain; charset=utf-8", ".xml": "text/xml", ".json": "application/json",
  ".svg": "image/svg+xml", ".woff2": "font/woff2", ".png": "image/png", ".ico": "image/x-icon",
};
const security = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Content-Security-Policy": "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
};

createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  let path = normalize(join(root, decodeURIComponent(url.pathname)));
  if (!path.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (existsSync(path) && statSync(path).isDirectory()) {
    if (!url.pathname.endsWith("/")) { res.writeHead(301, { Location: url.pathname + "/" + url.search }); return res.end(); }
    path = join(path, "index.html");
  }
  let status = 200;
  if (!existsSync(path) || statSync(path).isDirectory()) { status = 404; path = join(root, "404.html"); }
  const base = path.split(/[\\/]/).pop();
  const type = /^(opengraph-image|apple-icon)$/.test(base) ? "image/png" : types[extname(path)] ?? "application/octet-stream";
  const cache = /\.(js|css|woff2)$/.test(path) ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate";
  const gzip = /text|javascript|json|xml|svg/.test(type) && /gzip/.test(req.headers["accept-encoding"] ?? "");
  res.writeHead(status, { ...security, "Content-Type": type, "Cache-Control": cache, ...(gzip ? { "Content-Encoding": "gzip", Vary: "Accept-Encoding" } : {}) });
  const stream = createReadStream(path);
  (gzip ? stream.pipe(createGzip()) : stream).pipe(res);
}).listen(port, "127.0.0.1", () => console.log(`apache-like server on http://127.0.0.1:${port} serving ${root}`));
