import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Static HTML export for Hostinger / shared hosting (uploads the `out/` folder).
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  turbopack: {
    root: projectRoot,
  },
  // Note: next.config redirects are not supported with `output: "export"`.
  // Apache redirects for Hostinger live in `public/.htaccess` (copied into `out/`).
};

export default nextConfig;
