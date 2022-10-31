const path = require('path');
const cracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');
const NpmImportPlugin = require('less-plugin-npm-import');
const BUILD_PATH = path.resolve(__dirname, './build');

const removeCssHashPlugin = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths },
  }) => {
    const plugins = webpackConfig.plugins;
    plugins.forEach(plugin => {
      const options = plugin.options;

      if (!options) {
        return;
      }

      if (options.filename && options.filename.endsWith('.css')) {
        options.filename = 'static/css/[name].css';
        options.chunkFilename = 'static/css/[name].chunk.css';
      }
    });
    return webpackConfig;
  },
};

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      cracoAlias,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#018a9e' },
          },
        },
        baseUrl: './src',
        source: 'jsconfig',
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
