const path = require('path');
const HtmlWepbackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.ts'],
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'App.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        use: 'ts-loader',
        exclude: /(node_modules|bower_components)/,
        // loaders: 'babel-loader',
        // options: { presets: ['env'] },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
        }],
      },

    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js','.jsx' ]
  },
  plugins: [
    new HtmlWepbackPlugin({
      template: './src/index.html',

    }),
  ],
};
