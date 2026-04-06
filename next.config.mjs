/** @type {import('next').NextConfig} */
const nextConfig = {
 // output:"export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "uoamojdqdfznxcmulbqi.supabase.co",
      },
    ],
  },
};

export default nextConfig;
