
// 此对象表示模块的方法 每个导出的文件都是一个模块
var __webpack_modules__ = {
  "./src/main.js": (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {

      // 此方法很重要 每次获取shell/ default的属性的时候 都能获取到最新的数据
      default: () => __WEBPACK_DEFAULT_EXPORT__,
      shell: () => shell,
    });
    const test = "test";
    const shell = true;
    const __WEBPACK_DEFAULT_EXPORT__ = test;
  },
};

// 表示模块缓存
var __webpack_module_cache__ = {};

// 模拟require方法 进行导入
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];
  // 如果有缓存 直接返回
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });

  // 执行模块中的方法
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}

// 给exports 上定义属性
__webpack_require__.d = (exports, definition) => {
  for (var key in definition) {
    if (
      __webpack_require__.o(definition, key) &&
      !__webpack_require__.o(exports, key)
    ) {
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key],
      });
    }
  }
};

// 属性判断
__webpack_require__.o = (obj, prop) =>
  Object.prototype.hasOwnProperty.call(obj, prop);

// 表示定义es module 模块
__webpack_require__.r = exports => {
  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {
      value: "Module",
    });
  }
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
};

var __webpack_exports__ = {};
// 表示模块入口
const info = __webpack_require__("./src/main.js");
console.log(info.shell);
console.log(info.default);