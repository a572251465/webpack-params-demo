const path = require("path")
const RunPlugin = require("./plugins/RunPlugin")
const DonePlugin = require("./plugins/DonePlugin");
const AfterEmitPlugin = require("./plugins/AfterEmitPlugin")

const resolvePath = (...urls) => path.resolve(__dirname, ...urls)

module.exports = {
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  mode: "development",
  devtool: false,
  plugins: [
    new RunPlugin(),
    new AfterEmitPlugin(),
    new DonePlugin()
  ]
}