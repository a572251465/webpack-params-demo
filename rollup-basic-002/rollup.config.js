const path = require("path");
const babel = require("@rollup/plugin-babel")

const resolvePath = (...urls) => path.resolve(__dirname, ...urls);

module.exports = {
  input: resolvePath("./src/index.js"),
  output: {
    file: resolvePath("./dist/index.esm.js"),
    format: "esm"
  },
  plugins: [
    babel({babelHelpers: "bundled"})
  ]
}