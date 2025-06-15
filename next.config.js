require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  distDir: '_next',
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.module.rules = config.module.rules || [];
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      },
    ];
    return config;
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};
