const path = require("path");

const input = path.resolve(__dirname, "./main.js");
const output = path.resolve(__dirname, "./dist/index.js");
const rollup = require("./rollup")

rollup(input, output)