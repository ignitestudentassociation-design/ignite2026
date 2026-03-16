/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ignitecore-three.vercel.app',
        pathname: '/**',
      },
      // Add any other image domains here
    ],
  },
}

module.exports = nextConfig