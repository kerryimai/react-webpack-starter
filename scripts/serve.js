const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  hot: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  publicPath: '/static/',
});
server.listen(3000);
