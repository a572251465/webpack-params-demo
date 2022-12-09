const path = require("path");
const terser = require("@rollup/plugin-terser")

const resolvePath = (...urls) => path.resolve(__dirname, ...urls);

module.exports = {
  input: resolvePath("./src/index.js"),
  output: {
    file: resolvePath("./dist/index.esm.js"),
    format: "esm"
  },
  plugins: [
    terser()
  ]
}