const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css',
  disable: process.env.NODE_ENV === 'development'
});

var config = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    disableHostCheck: true,
    port: 8080,
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    openPage: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 'es2015' ]
            }
          },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /(\.scss|\.css)$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    extractSass,
    new CleanWebpackPlugin('dist'),
    new CopyWebpackPlugin([
      { from: 'src/index.html' },
      { from: 'src/assets', to: 'assets' }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash'
    })
  ]
};

// Add production plugins
if(process.env.NODE_ENV === 'production') {

  // UglifyJS
  config.plugins.push(new UglifyJSPlugin());
}


module.exports = config;
