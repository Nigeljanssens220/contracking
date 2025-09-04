const config = {
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "recharts",
      "date-fns",
    ],
  },
  eslint: {
    // Disable ESLint during builds to avoid apostrophe issues in content
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-domain.com",
      },
    ],
  },
  // Static export disabled temporarily due to favicon route issue
  // output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default config;

