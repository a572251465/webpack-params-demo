import allInputPlugin from "./plugins/allInputPlugin.js";

export default {
  input: "./src/index.js",
  output: {
    dir: "dist"
  },
  plugins: [
    allInputPlugin()
  ]
}