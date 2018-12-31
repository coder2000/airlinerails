const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const plugins = [new CompressionPlugin()];

module.exports = require('./webpack.config')({
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          extractComments: 'all',
        },
      }),
    ],
  },
  plugins,
});
