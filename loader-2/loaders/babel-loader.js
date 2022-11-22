const path = require("path");
const core = require("@babel/core")

const babelLoader= function(source) {
  console.log(this)
  const filename = this.resourcePath.split(path.sep).pop();
  const options = this.getOptions();
  const loaderOptions = {
    ...options,
    sourceMaps: true,
    filename
  }

  let { code, map, ast } = core.transformSync(source, loaderOptions);
  this.callback(null, code, map, ast);
}

module.exports = babelLoader