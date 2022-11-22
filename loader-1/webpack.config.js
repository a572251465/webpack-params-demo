const path = require("path");

const resolvePath = (...urls) => path.resolve(__dirname, ...urls)

module.exports = {
  mode: "development",
  devtool: false,
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  resolveLoader: {
    modules: [
      resolvePath("./loaders")
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["loader1", "loader2", "loader3"]
      }
    ]
  }
}