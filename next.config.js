// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   webpack(config) {
//     return config;
//   },
// });

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// const nextConfig = withBundleAnalyzer({
//   reactStrictMode: true,
//   swcMinify: true, // Включение SWC для минимизации JavaScript
//   images: {
//     formats: ["image/avif", "image/webp"], // Использование современных форматов изображений
//     domains: ["example.com"], // Добавьте сюда домены для внешних изображений
//   },
//   experimental: {
//     scrollRestoration: true, // Если это доступно, улучшает поведение навигации браузера
//   },
//   webpack(config) {
//     return config; // Вы можете добавить сюда свои плагины Webpack
//   },
// });

// module.exports = nextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  webpack(config) {
    return config;
  },
});

module.exports = nextConfig;
