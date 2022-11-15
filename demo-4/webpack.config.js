const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolvePath = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  mode: "development",
  devtool: false,
  // 配置开发环境
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: resolvePath("./src/index.html")})
  ]
}