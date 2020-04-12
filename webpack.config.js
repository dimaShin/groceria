const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/index.ts',
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CopyPlugin([
      { from: path.join(__dirname, '.config/netlify') }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: process.env.PORT || 8080,
    historyApiFallback: true,
  }
};