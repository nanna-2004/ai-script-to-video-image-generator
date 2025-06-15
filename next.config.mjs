/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      "lh3.googleusercontent.com", // For Google profile images
    ],
     unoptimized: true,
  },
  // Remove the headers() block entirely!
};

export default nextConfig;
