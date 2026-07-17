import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** Set STATIC_EXPORT=1 for Hostinger (`npm run build:static`). Default = Vercel/Node. */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  images: {
    ...(isStaticExport ? { unoptimized: true } : {}),
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  turbopack: {
    root: projectRoot,
  },
  ...(!isStaticExport
    ? {
        async redirects() {
          return [
            {
              source: "/routes/dubai-to-abu-dhabi",
              destination: "/dubai-to-abu-dhabi-car-lift",
              permanent: true,
            },
            {
              source: "/routes/abu-dhabi-to-dubai",
              destination: "/abu-dhabi-to-dubai-car-lift",
              permanent: true,
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
