const path = require('path');
const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');
const BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      CracoAlias,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#018a9e' },
          },
        },
        baseUrl: './',
        source: 'tsconfig',
      },
    },
  ],
  webpack: {
    configure: {
      output: {
        path: BUILD_PATH,
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
      },
    },
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
};
