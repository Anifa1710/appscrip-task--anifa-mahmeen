/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com'],
    unoptimized: true
  },
  async generateBuildId() {
    return 'appscrip-task-v1';
  }
}

module.exports = nextConfig