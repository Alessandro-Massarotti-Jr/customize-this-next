/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL,
  }
}

module.exports = nextConfig
