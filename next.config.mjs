/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disables persistent disk pack cache on Windows to eliminate PackFileCacheStrategy ENOENT crashes
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
