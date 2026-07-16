import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  turbopack: {
    root: process.cwd(),
  },
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
};

export default nextConfig;
