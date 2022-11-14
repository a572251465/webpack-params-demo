const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolvePath = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  mode: "development",
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  devServer: {
    hot: true,
    port: 9000,
    static: {
      directory: resolvePath("dist")
    }
  },
  module: {
    rules: [
      {
        test: /\.ico$/,
        type: "asset/inline"
      },
      {
        test: /\.jpg$/,
        type: "asset/resource"
      },
      {
        test: /\.text$/,
        type: "asset/source"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: resolvePath("./src/index.html")})
  ]

}