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
  entry: path.join(process.cwd(), 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(process.cwd(), 'src'),
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
  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },
  devServer: options.devServer,
  plugins: options.plugins.concat(plugins),
});
