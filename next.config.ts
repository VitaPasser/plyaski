import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_SERVER_URL?? 'error').hostname],
  },
};

export default nextConfig;
