/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/company",
  images: {
    domains: ["aapaam.net"],
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

module.exports = nextConfig;
