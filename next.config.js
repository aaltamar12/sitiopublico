/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
    serverActions: false,
  },
  reactStrictMode: true,
  distDir: "out",
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    IV_KEY: process.env.IV_KEY,
  },
};

module.exports = nextConfig;
