const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const resolvePath = (...urls) => path.resolve(__dirname, ...urls)

module.exports = {
  // 表示模式
  mode: "development",
  // 表示source map
  devtool: false,
  // 入口
  entry: resolvePath("./src/index.js"),
  // 出口
  output: {
    path: resolvePath("dist"),
    filename: "[name].js",
    // 每次打包 都进行清除
    clean: true
  },

  // 解析模块
  resolve: {
    // 表示配置解析后缀
    extensions: [".js"],
    // 配置解析别名
    alias: {
      '@': resolvePath("./src")
    },

    // 可以配置 非node_modules 下的目录
    modules: [resolvePath("./modules")],

    // 导入模块的时候 默认是查找package.json 中 【main】字段。但是可以配置，查询解析别的字段
    mainFields: ["main"],
    // 如果模块下没有文件package.json的时候  可以配置查询别的模块
    mainFiles: ["index"]
  },

  // 解析loader
  resolveLoader: {

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("./public/index.html")
    })
  ]
}