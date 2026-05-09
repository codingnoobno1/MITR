import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/departments/:slug*',
        destination: '/divisions/:slug*',
        permanent: true,
      },
      {
        source: '/ecosystem/:slug*',
        destination: '/divisions/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
