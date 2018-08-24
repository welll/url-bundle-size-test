const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const distPath = path.join(__dirname, './dist');

module.exports = {
  entry: {
    js: './src/index.js'
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js',
  },
  /*node: {
    url: `empty`
  },*/ // <--- remove the comment 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ]
}
