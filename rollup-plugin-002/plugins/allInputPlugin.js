function allInputPlugin() {
  return {
    name: "allInputPlugin",
    async options(inputOptions) {
      console.log("options -------------------");
      console.log(inputOptions)
    },

    /**
     * 1. 此钩子可以获取最全的配置参数
     * 2. 可以通过此钩子来修改用户传递的参数
     * @param inputOptions
     * @returns {Promise<void>}
     */
    async buildStart(inputOptions) {
      console.log("inputOptions -----------------");
      console.log(inputOptions)
    },

    /**
     * 1. 解析每次的import xx from xx
     * 2. source 表示引入的xx
     * 3. options 中 isEntry 来判断是否是入口文件
     * @param source
     * @param importer
     * @param options
     */
    resolveId(source, importer, options) {
      console.log("resolveId --------------------");
      console.log(source);
      console.log(importer);
      console.log(options);
      console.log("resolveId --------------------");
    },

    /**
     * 1. load的参数id  是一个绝对路径。表示此路径已经被resolve了
     * 2.
     * @param id
     */
    load(id) {
      console.log("load --------------------");
      console.log(id)
    },

    /**
     * 1. code 传递的解析的源代码
     * 2. id 需要transform 的路径id
     * @param code
     * @param id
     */
    transform(code, id) {
      console.log("transform --------------------");
      console.log(code)
      console.log(id)
    },

    /**
     * 1. 模块解析 其中具有ast语法解析树  以及源代码
     * @param moduleInfo
     */
    moduleParsed(moduleInfo) {
      console.log("moduleInfo ---------------------");
      console.log(moduleInfo)
    },

    /**
     * 1. 【specifier】 表示动态导入的文件
     * 2. 【importer】 表示依赖于哪个文件
     * @param specifier
     * @param importer
     * @returns {Promise<void>}
     */
    async resolveDynamicImport(specifier, importer) {
      console.log("resolveDynamicImport ---------------------")
      console.log(specifier, importer)
    },

    /**
     * 编译结束
     */
    buildEnd() {
      console.log("buildEnd --------------------")
    }
  }
}

export default allInputPlugin