const path = require("path");

const resolvePath = (...urls) => path.resolve(__dirname, ...urls);

module.exports = {
  input: resolvePath("./src/index.js"),
  output: [
    {
      file: resolvePath("./dist/index.es.js"),
      format: "esm"
    },
    {
      file: resolvePath("./dist/index.cjs.js"),
      format: "cjs"
    },
    {
      file: resolvePath("./dist/index.iife.js"),
      format: "iife",
      name: "CommonAdd"
    }
  ]
}