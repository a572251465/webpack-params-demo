function loader2(source) {
  console.log("-- loader2")
  return [source, "loader2"].join(",")
}

loader2.pitch = function () {
  console.log("-- loader2 pitch")
}

module.exports = loader2