class RunPlugin {
  apply(compiler) {
    compiler.hooks.run.tap('run-plugin', () => {
      console.log("run-plugin")
    })
  }
}

module.exports = RunPlugin