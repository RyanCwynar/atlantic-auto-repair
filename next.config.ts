import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/atlantic-auto-repair",
  assetPrefix: "/atlantic-auto-repair/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
