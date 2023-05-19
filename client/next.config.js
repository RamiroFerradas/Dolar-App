/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ...,
    reactStictMode: true,
    path: `/_next/image`,
    swcMinfy: true,
    experimental: {
      appDir: true,
      turbotrace: true,
    },
  },
};

module.exports = nextConfig;
