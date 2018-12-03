module.exports = input => {
    input.forEach
    var returnVal = 0

    for (var drift of input) {
      returnVal += eval(drift)
    }

    return returnVal
}
