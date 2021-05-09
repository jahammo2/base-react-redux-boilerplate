const path = require('path');
const webpack = require('webpack');

const srcDir = path.resolve(__dirname, './src');

const base = {
  mode: 'development',
  entry: './src/index.jsx',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'fast-sass-loader',
          {
            loader  : 'sass-resources-loader',
            options : {
              resources: 'src/styles/globallyAvailable.scss',
            },
          },
        ]
      },
      {
        test: /\.js|\.jsx$/,
        include: srcDir,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      src : srcDir,
    },
    extensions: ['*', '.js', '.jsx', '.scss'],
  },
  target: 'web',
};

module.exports = base;
