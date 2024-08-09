/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.builder.io", "b.io", "www.freepik.com", "img.freepik.com"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
      {
        protocol: "https",
        hostname: "b.io",
      },
      {
        protocol: "https",
        hostname: "www.freepik.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
