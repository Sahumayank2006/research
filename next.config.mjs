/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 requires every quality used by <Image> to be allowlisted here.
    // 88 is the hero photograph; 75 is the framework default used everywhere else.
    qualities: [75, 88],
  },
};

export default nextConfig;
