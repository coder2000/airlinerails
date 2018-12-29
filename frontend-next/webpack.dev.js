const webpack = require('webpack');

const plugins = [new webpack.HotModuleReplacementPlugin()];

module.exports = require('./webpack.config')({
  mode: 'development',
  devServer: {
    hot: true,
    port: 3000,
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins,
});
