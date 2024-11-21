// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Deshabilitar el generador de fuentes
  optimizeFonts: false,

  // Configuración específica para CSS
  experimental: {
    optimizeCss: true,
    cssLoaderOptions: {
      debug: true,
      importLoaders: 1,
    },
  },

  // Configuración de webpack optimizada
  webpack: (config, { dev, isServer }) => {
    // Reglas para archivos multimedia
    config.module.rules.push({
      test: /\.(mpwebm)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    // Reglas específicas para CSS
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
            },
          },
        },
        'postcss-loader',
      ],
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
              styles: {
                name: 'styles',
                test: /\.(css|scss)$/,
                chunks: 'all',
                enforce: true,
              },
            }
          },
          runtimeChunk: {
            name: 'runtime',
          },
        };
      }
    }

    // Optimizaciones para producción
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
          ...config.optimization.minimizer || [],
        ],
      };
    }

    return config;
  },

  // Configuración de desarrollo
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },

  // Configuración de imágenes y medios
  images: {
    domains: [], // Agrega aquí los dominios permitidos para imágenes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;


