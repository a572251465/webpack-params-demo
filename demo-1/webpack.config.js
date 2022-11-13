const path = require("path")

const resolvePath = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  // 表示模式
  mode: "development",
  devtool: false,
  // 表示入口
  entry: resolvePath("./src/index.js"),
  // 表示出口
  output: {
    path: resolvePath("dist"),
    filename: "main.js"
  },
  // 表示打包的模块
  module: {
    // 以及模块的规则
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}