import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/myWeb-v2",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
