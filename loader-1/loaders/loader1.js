function loader1(source) {
  console.log("-- loader1")
  return [source, "loader1"].join(",")
}

loader1.pitch = function () {
  console.log("-- loader1 pitch")
}

module.exports = loader1