import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: Do NOT set output:"standalone" on Vercel — Vercel handles this automatically
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Compress responses
  compress: true,
  // Power headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
