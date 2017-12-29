var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src',
    output: {
      path: path.join(__dirname, "build"),
      filename: 'bundle.js',
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
          {
            test: /\.js/,
            loader: 'babel-loader',
            include: __dirname + '/src',
            exclude:path.resolve(__dirname, "node_modules")
           },
           {
            test: /\.css/,
            exclude:path.resolve(__dirname, "node_modules"),
            loader: ExtractTextPlugin.extract("css-loader")
          },
        ],
      },
      plugins: [
        new ExtractTextPlugin("styles.css")
      ]
  };
