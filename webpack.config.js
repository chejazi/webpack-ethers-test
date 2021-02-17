const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    entry: ['./index.js'],
    mode: process.env.NODE_ENV == 'prod' ? 'production' : 'development',
    plugins: [],
    resolve: { extensions: ['.js'] },
    output: {
      path: path.resolve(__dirname, 'public/build'),
      filename: process.env.NODE_ENV == 'prod' ? 'bundle.min.js' : 'bundle.js',
      chunkFilename: '[name].[contenthash].bundle.js',
      publicPath: '/build/'
    },
    module: {
      rules: []
    },
    devServer: {
      disableHostCheck: true,
      port: '8080',
      host: '0.0.0.0',
      open: true,
      contentBase: path.resolve(__dirname, 'public')
    }
  }
}
