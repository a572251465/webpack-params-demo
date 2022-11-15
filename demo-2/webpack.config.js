const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const resolvePath = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  mode: "development",
  devtool: false,
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // 此插件 将打包好的js 插入到html中
    new HtmlWebpackPlugin({template: resolvePath("./src/index.html")})
  ]
}