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
  // Disable server-only features for static export
  experimental: {
    // Remove any experimental features that require a server
  },
  // Ensure trailing slashes for better static hosting compatibility
  trailingSlash: true,
  basePath: "BernardMora.github.io",
};

module.exports = nextConfig;
