/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/components/app.jsx',
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loaders: 'babel-loader',
        query: {
            presets: ["es2015", "react"]
        },
        exclude: /node_modules/ 
      },
      { test: /\.jsx$/, 
        loaders: 'babel-loader', 
        query: {
            presets: ["es2015", "react"]
        },
        exclude: /node_modules/ 
      }
    ]
  }
}
