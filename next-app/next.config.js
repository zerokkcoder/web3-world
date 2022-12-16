/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placedog.net',
      },
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
