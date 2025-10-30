/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/AvyenSoft',      // 👈 repo name (important)
  assetPrefix: '/AvyenSoft/',
};

export default nextConfig;
