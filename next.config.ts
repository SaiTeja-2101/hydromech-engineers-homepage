import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires non-default quality values to be allowlisted.
    qualities: [75, 90],
  },
};

export default nextConfig;
