const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: "./src/index.js",
    search: "./src/search.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]_[chunkhash:8].js",
  },
  mode: "production",
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.less$/, use: [MiniCssExtractPlugin.loader, "css-loader","less-loader"] },
      { test: /\.(png|jpg|jpeg|gif)$/, use: [{ loader:"file-loader",options: {name: '[name]_[hash:8].[ext]'} }],},
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    })
  ]
};
