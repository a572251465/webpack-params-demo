class DonePlugin {
  apply(compiler) {
    // 订阅插件
    compiler.hooks.done.tap('done-plugin', (stats) => {
      console.log("done-plugin")
    })
  }
}

module.exports = DonePlugin