import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/commercial", destination: "/commercial-films", permanent: true },
      {
        source: "/commercial-window-film",
        destination: "/commercial-films",
        permanent: true,
      },
      {
        source: "/commercial-window-tinting",
        destination: "/commercial-films",
        permanent: true,
      },
      {
        source: "/residential-window-tinting",
        destination: "/windowfilm",
        permanent: true,
      },
      {
        source: "/residential-window-film",
        destination: "/windowfilm",
        permanent: true,
      },
      { source: "/window-film", destination: "/windowfilm", permanent: true },
      { source: "/gallery", destination: "/image-gallery", permanent: true },
      {
        source: "/tuffskin-gallery",
        destination: "/tuffskin-image-gallery",
        permanent: true,
      },
      { source: "/tuff-skin", destination: "/tuffskin", permanent: true },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
    qualities: [75, 85],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
  },

  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/video/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
