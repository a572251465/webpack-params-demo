const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const resolvePath = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  devtool: false,
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({template: resolvePath("./src/index.html")})
  ]
}