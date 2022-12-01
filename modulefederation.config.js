const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  exposes: {
    './Hello': './src/Hello',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};