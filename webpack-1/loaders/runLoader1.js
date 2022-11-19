function runLoader1(source) {
  return `
    ${source}
    console.log(a)
  `
}

module.exports = runLoader1;
