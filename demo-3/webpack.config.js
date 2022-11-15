const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {DefinePlugin} = require("webpack")

const resolvePath = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: resolvePath("./src/index.html")}),
    new DefinePlugin({
      allArr: JSON.stringify(["arr", "test"]),
      allA: JSON.stringify("12"),
      allB: 12,
      allC: [1,2,3]
    })
  ]
}