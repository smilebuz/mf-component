const { ModuleFederationPlugin } = require('webpack').container;
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const override = config => {
  config.plugins.push(new CopyWebpackPlugin({
    patterns: [
      { from: "src/.well-known", to: "static/css/.well-known" },
      { from: "src/well-known", to: "static/css/well-known" },
    ],
  }));
  config.plugins.push(new ModuleFederationPlugin(require('../../modulefederation.config.js')));

  config.output.publicPath = 'auto';

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = env => override(webpackConfig(env));

module.exports = require(webpackConfigPath);