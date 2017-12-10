const path = require('path');
const srcPath = path.resolve('./src');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'public/bundle.js'
  },
  devtool: 'cheap-inline-module-source-map',
  devServer: {
     contentBase: __dirname,
     historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jade$/,
        use: 'pug-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.jade'],
    modules: [
      'node_modules',
      srcPath
    ],
  },

};
