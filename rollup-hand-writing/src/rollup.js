const Bundle = require("./bundle")

function rollup(input, output) {
  // 通过入口文件 构建bundle
  const bundle = new Bundle({entry: input})

  // 通过编译 将结果输出到出口文件中
  bundle.build(output)
}

module.exports = rollup