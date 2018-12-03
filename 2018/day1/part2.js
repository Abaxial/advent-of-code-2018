module.exports = input => {
    input.forEach
    var returnVal = 0
    var frequencySet = new Set()
    var frequency = 0

    while (true) {
      for (var drift of input) {
        returnVal += eval(drift)

        frequency = returnVal

        if (frequencySet.has(frequency)) {
          return returnVal
        } else {
          frequencySet.add(frequency)
        }
      }
    }

    return false
}
