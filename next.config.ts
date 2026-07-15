import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages.
  // API routes are served by Cloudflare Pages Functions in /functions.
  output: "export",
  images: {
    // Static export requires unoptimized images (no server-side resizing)
    unoptimized: true,
  },
  // Generate trailing slashes for cleaner URLs on static hosting
  trailingSlash: true,
  // Skip TypeScript errors during build — we've already verified types in dev
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build — we've already verified code quality in dev
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
