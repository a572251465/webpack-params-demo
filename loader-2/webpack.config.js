const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const resolvePath = (...urls) => path.resolve(__dirname, ...urls)

module.exports = {
  devtool: false,
  mode: "development",
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  resolveLoader: {
    modules: [resolvePath("./loaders")]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("./src/index.html")
    })
  ]
}