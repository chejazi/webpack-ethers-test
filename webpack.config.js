const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  if (process.env.NODE_ENV == 'prod') {
    outputFile = 'bundle.min.js';
  }
  else {
    outputFile = 'bundle.js';
  }

  return {
    entry: ['./index.js'],
    mode: (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'qa') ? 'production' : 'development',
    plugins: [],
    resolve: { extensions: ['.js'] },
    output: {
      path: path.resolve(__dirname, 'public/build'),
      filename: outputFile,
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
