class AfterEmitPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('after-emit', () => {
      console.log('after-emit')
    })
  }
}

module.exports = AfterEmitPlugin