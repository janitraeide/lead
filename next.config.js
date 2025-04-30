/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lead',
  images: {
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
