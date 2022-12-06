const path = require("path");

const resolvePath = (...urls) => path.resolve(__dirname, ...urls);

module.exports = {
  mode: "development",
  entry: resolvePath("./src/index.js"),
  output: {
    path: resolvePath("dist"),
    filename: "[name].js"
  },
  module: {
    rules: [

      // 配置识别静态文件 图片
      {
        test: /\.(png|jpg|gif|bmp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: "images/[hash][ext]"
        }
      }
    ]
  }
}