// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,

  // Simplificamos la configuración experimental
  experimental: {
    optimizeCss: true
  },

  // Configuración de webpack para manejar CSS y Swiper
  webpack: (config) => {
    // Modificamos la regla existente para CSS
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (moduleLoader.loader?.includes('css-loader') && !moduleLoader.loader?.includes('postcss-loader')) {
          moduleLoader.options.modules = {
            ...moduleLoader.options.modules,
            auto: true
          };
        }
      });
    });

    return config;
  },

  // Configuración de desarrollo simplificada
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },

  // Configuración de imágenes
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;


