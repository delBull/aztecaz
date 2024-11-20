// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Deshabilitar el generador de fuentes
  optimizeFonts: false,

  // Configuración de webpack optimizada
  webpack: (config, { dev, isServer }) => {
    // Reglas para archivos multimedia
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    // Optimizaciones para desarrollo
    if (dev) {
      // Deshabilitar la caché en desarrollo
      config.cache = false;
      
      // Configuración específica para cliente
      if (!isServer) {
        config.optimization = {
          ...config.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              default: false,
              vendors: false,
            }
          },
          runtimeChunk: {
            name: 'runtime',
          },
        };
      }
    }

    return config;
  },

  // Configuración de desarrollo
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
};

module.exports = nextConfig;


