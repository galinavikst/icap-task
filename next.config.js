/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn2.thecatapi.com"],
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
};

module.exports = nextConfig;
