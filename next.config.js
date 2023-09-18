/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  distDir: "out",
};

module.exports = nextConfig;
