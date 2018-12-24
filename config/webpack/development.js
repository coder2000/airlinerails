process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const environment = require('./environment');

environment.loaders.insert(
  'worker',
  {
    test: /\.worker\.js$/,
    use: 'worker-loader',
  },
  { after: 'babel' },
);

environment.config.set('output.globalObject', 'this');

module.exports = environment.toWebpackConfig();
