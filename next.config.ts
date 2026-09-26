import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/portfolio" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    // next/image with unoptimized does not always apply basePath on static export
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
