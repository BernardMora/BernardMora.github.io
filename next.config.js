/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static exports
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  // Configure for GitHub Pages
  // The basePath should match your repository name
  // For example, if your repo is "username.github.io/portfolio", use "/portfolio"
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  // Ensure CSS is properly processed
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
