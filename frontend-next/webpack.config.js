const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const plugins = [
  new HtmlWebPackPlugin({
    inject: true,
    template: path.join(process.cwd(), 'src/index.html'),
  }),
];

module.exports = options => ({
  mode: options.mode,
  entry: [path.join(process.cwd(), 'src/index.jsx')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: options.devServer,
  plugins: options.plugins.concat(plugins),
});
