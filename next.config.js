const { withPlugins, optional } = require("next-compose-plugins");
const images = require("next-images");

// next.js configuration
const nextConfig = {
  useFileSystemPublicRoutes: false,
  distDir: "build",
};

module.exports = withPlugins(
  [
    [
      {
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: "[local]___[hash:base64:5]",
        },
      },
    ],
    images,
  ],
  nextConfig
);
