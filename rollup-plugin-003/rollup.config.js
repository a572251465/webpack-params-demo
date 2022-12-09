import ImportPolyfillPlugin from './plugins/importPolyfillPlugin.js'

export default {
  input: "./src/index.js",
  output: {
    dir: "dist"
  },
  plugins: [
    ImportPolyfillPlugin()
  ]
}