const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const PORT = 3000;

module.exports = {
  entry: [
    './src/index',
  ].concat(
    isProduction
      ? []
      : [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:' + PORT,
      ]
  ),

  output: {
    filename: 'bundle.js',
    path: __dirname + '/static',
    publicPath: '/static/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel',
        ],
      },
    ],
  },

  plugins: isProduction
    ? []
    : [new webpack.HotModuleReplacementPlugin()]
};
