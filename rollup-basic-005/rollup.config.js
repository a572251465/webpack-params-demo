const path = require("path");
const ts = require("@rollup/plugin-typescript")

const resolvePath = (...urls) => path.resolve(__dirname, ...urls);

module.exports = {
  input: resolvePath("./src/index.ts"),
  output: {
    file: resolvePath("./dist/index.esm.js"),
    format: "esm"
  },
  plugins: [
    ts()
  ]
}