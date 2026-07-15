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
  // Keep production checks enabled; broken types must fail the build.
  reactStrictMode: true,
};

export default nextConfig;
