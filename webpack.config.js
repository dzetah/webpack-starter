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
        test: /\.scss$/,
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
        test: /\.css$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
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
    ])
  ]
};

// Add production plugins
if(process.env.NODE_ENV === 'production') {

  // UglifyJS
  config.plugins.push(new UglifyJSPlugin());
}


module.exports = config;
