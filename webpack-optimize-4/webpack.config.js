const path = require("path");

const resolvePath = (...urls) => path.resolve(__dirname, ...urls);

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  mode: "development",
  devtool: false,
  output: {
    path: resolvePath("dist"),
    filename: "[name].js",
    library: "tools",
    libraryTarget: "var",
    clean: true
  }
}