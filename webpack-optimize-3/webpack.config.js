const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")

// 通过此插件 来计算耗时
const smw = new SpeedMeasureWebpackPlugin();

const resolvePath = (...urls) => path.resolve(__dirname, ...urls);

const config = ({
  entry: resolvePath("./src/index.js"),
  output: {
    clean: true,
    path: resolvePath("dist"),
    filename: "[name].js"
  },
  mode: "development",
  devtool:false,
  devServer: {
    static: {
      directory: resolvePath("dist")
    },
    port: 9001,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("./public/index.html")
    }),
    // 表示提取共同的css
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin()
  ]
})

module.exports = config