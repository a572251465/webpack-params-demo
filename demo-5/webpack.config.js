const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const resolvePath = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  mode: 'development',
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  devServer: {
    port: 9000,
    hot: true,
    static: {
      directory: resolvePath("dist")
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: resolvePath("./src/index.html")})
  ]
}