/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname:"scontent.fbom57-1.fna.fbcdn.net",
      },
      {
        protocol:'https',
        hostname:"scontent.fbom19-1.fna.fbcdn.net",
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],   
  },
}
module.exports = nextConfig;
