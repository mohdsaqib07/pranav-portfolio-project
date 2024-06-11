/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.builder.io", "b.io", "www.freepik.com", "img.freepik.com"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
