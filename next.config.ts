import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable Turbopack for build (use webpack for static export)
  // Turbopack doesn't support static export yet
};

export default nextConfig;
