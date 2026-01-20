import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    localPatterns: [
      {
        pathname: "/api/preview",
        search: "t=*",
      },
    ],
  },
};

export default nextConfig;
