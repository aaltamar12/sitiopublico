/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
    serverActions: false,
  },
  reactStrictMode: true,
  distDir: "out",
  env: {
    BACKEND_URL: "http://localhost:3001",
  },
};

module.exports = nextConfig;
