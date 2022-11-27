const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")


const resolvePath = (...urls) => path.resolve(__dirname, ...urls);

module.exports = {
  entry: resolvePath("./src/index.js"),
  output: {
    clean: true,
    path: resolvePath("dist"),
    filename: "[name].js"
  },
  mode: "development",
  devtool: false,
  module: {
    // 因为不可能依赖第三方模块 所以无需解析 因为jQuery 以及lodash 不可能依赖第三方模块
    noParse: content => /jquery|lodash/.test(content)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("./public/index.html")
    }),

    // 忽略特定的模块
    new webpack.IgnorePlugin({
      contextRegExp: /moment$/,
      resourceRegExp: /^\.\/locale/
    })
  ]
}