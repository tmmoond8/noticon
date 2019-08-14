const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@zeit/next-typescript/babel'), require.resolve('next/babel')],
        },
      }
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};