function importPolyfillPlugin() {
  return {
    name: "importPolyfillPlugin",
    async transform(code, id) {
      console.log("transform ---------------")
      return {
        code: `function polyfillImport() {};\n${code}`,
        moduleSideEffects: "no-treeshake"
      }
    },

    renderDynamicImport(options) {
      console.log("importPolyfillPlugin ------------------")
      return {
        left: "polyfillImport(",
        right: ")"
      }
    }
  }
}

export default importPolyfillPlugin