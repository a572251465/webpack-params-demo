function runLoader2(source) {
  return `const a = ${JSON.stringify(source)}`
}

module.exports = runLoader2;
