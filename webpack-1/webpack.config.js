const path = require("path");

const resolvePath = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js",
  },
  devtool: false,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.text$/,
        use: [
          {loader: path.resolve("./loaders/runLoader1.js")},
          {loader: path.resolve("./loaders/runLoader2.js")},
        ]
      }
    ]
  }
}