function loader3(source) {
  console.log("-- loader3")
  return [source, "loader3"].join(",")
}

loader3.pitch = function () {
  console.log("-- loader3 pitch")
}

module.exports = loader3