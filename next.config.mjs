/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.builder.io", "b.io", "www.freepik.com"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
