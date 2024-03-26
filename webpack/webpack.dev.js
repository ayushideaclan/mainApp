const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Development'),
    }),
  ],
};