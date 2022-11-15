// 表示头部自执行函数
(() => {

  // 此对象中包裹着每个文件的代码块
  var __webpack_modules__ = {
    "./src/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      const { test } = __webpack_require__("./src/main.js");
      module.exports = {
        title: "title",
        test,
      };
    },
    "./src/main.js": module => {
      const test = "test";
      module.exports = {
        test,
      };
    },
  };

  // 用于缓存的对象
  var __webpack_module_cache__ = {};

  // 此方法模拟require 方法
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }

  // 表示入口文件
  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
