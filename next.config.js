/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/company",
  images: {
    domains: ["aapaam.net"],
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
  async redirects() {
    return [
      { source: "/", destination: "/company", permanent: false, basePath: false },
    ];
  },
};

module.exports = nextConfig;
