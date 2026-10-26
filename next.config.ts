import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Docker-এ সঠিকভাবে বিল্ড এবং রান করার জন্য এটি আবশ্যক
  output: 'standalone', 

  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;