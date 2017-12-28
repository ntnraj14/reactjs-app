var path = require('path');
var ExtractTextPlugin = require('ExtractTextPlugin');

module.exports = {
    entry: './src',
    output: {
      path: path.join(__dirname, "build"),
      filename: 'bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.js/,
            loader: 'babel',
            include: __dirname + '/src',
           },
           {
            test: /\.css/,
            loader: ExtractTextPlugin.extract("css")
          }
        ],
      },
      plugins: [
        new ExtractTextPlugin("styles.css")
      ]
  };