/** @type {import('next').NextConfig} */
const nextConfig = {
  // Builds a static site into the "out" folder, so GitHub Pages can host it for free.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
