// 表示导入的模块
var __webpack_modules__ = {
  "./src/main.js": (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
      default: () => __WEBPACK_DEFAULT_EXPORT__,
      xx: () => xx,
    });
    const test = "test";
    const xx = false;
    const __WEBPACK_DEFAULT_EXPORT__ = test;
  },
};

// 用来缓存数据的变量
var __webpack_module_cache__ = {};

// 模拟require方法 读取方法
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

// 定义变量方法
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

// 判断属性的方法
__webpack_require__.o = (obj, prop) =>
  Object.prototype.hasOwnProperty.call(obj, prop);

// 定义标识  表示是一个es module
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

// 入口文件

// 表示导入就是一个es module
__webpack_require__.r(__webpack_exports__);

// 解析入口文件
var _main__WEBPACK_IMPORTED_MODULE_0__ =
  __webpack_require__("./src/main.js");

console.log(
  _main__WEBPACK_IMPORTED_MODULE_0__["default"],
  _main__WEBPACK_IMPORTED_MODULE_0__.xx
);