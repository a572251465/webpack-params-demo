const path = require("path");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve")

const resolvePath = (...urls) => path.resolve(__dirname, ...urls);

module.exports = {
  input: resolvePath("./src/index.js"),
  output: {
    file: resolvePath("./dist/index.iife.js"),
    format: "iife",
    name: "Tools",
    globals: {
      lodash: "_",
      jquery: "$"
    }
  },
  external: ["lodash", "jquery"],
  plugins: [
    commonjs(),
    nodeResolve()
  ]
}