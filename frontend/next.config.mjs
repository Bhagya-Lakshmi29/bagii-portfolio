/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external image domains if needed in the future
    remotePatterns: [],
  },
  // Ensure trailing slashes are consistent
  trailingSlash: false,
  // Strict mode for better React practices
  reactStrictMode: true,
};

export default nextConfig;
