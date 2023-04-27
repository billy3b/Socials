/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname:"scontent-bom1-1.xx.fbcdn.net",
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],   
  },
}
module.exports = nextConfig;
