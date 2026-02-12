import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "replicate.delivery" },
      { protocol: "https", hostname: "pbxt.replicate.delivery" },
      { protocol: "https", hostname: "public.blob.vercel-storage.com" },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
