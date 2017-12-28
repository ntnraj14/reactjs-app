var path = require('path');

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
            loaders: ['style', 'css'],
            include: __dirname + '/src'
          }
        ],
      }
  };