/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './client/components/app.jsx',
    './client/components/chat.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ["es2015", "react"]
        }
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ["es2015", "react"]
        }
      }
    ]
  }
}
