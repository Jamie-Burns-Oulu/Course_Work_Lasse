const HtmlWebPackPlugin = require("html-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
         test: /\.css$/,
         use: ['style-loader', 'css-loader'],
       },
    ]
  },
  plugins: [
    new ServiceWorkerWebpackPlugin({
      entry: './dist/sw.js'
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};