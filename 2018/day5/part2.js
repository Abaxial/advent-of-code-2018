module.exports = input => {
  var initialInput = input

  var output = ""
  bestResult = ['', 99999999999999999]

  for (var letter = 65; letter < 91; letter++) {
    toStripCap   = String.fromCharCode(letter)
    toStripRegex = new RegExp(toStripCap, 'gi');
    input        = initialInput
    input        = input.replace(toStripRegex, "")
    inputLength  = input.length
    loop         = true

    while (loop == true) {
      for (var i = 0; i < input.length; i++) {
        inputLength = input.length

        if (input[i+1] && input[i].charCodeAt(0) < 91) {
          if (input[i].toLowerCase() == input[i+1]) {
            i+=1
          } else {
            output += input[i]
          }
        } else if (input[i+1] && input[i].charCodeAt(0) > 90) {
          if (input[i].toUpperCase() == input[i+1]) {
            i+=1
          } else {
            output += input[i]
          }
        } else if (input[i+1] == null) {
          output += input[i]
          input = output
          output = ""
        }
      }

      if (input.length == inputLength) {
        loop = false

        console.log(toStripCap)
        console.log(input.length)

        if (bestResult[1] > input.length) {
          bestResult[1] = input.length
          bestResult[0] = toStripCap
        }
      }
    }
  }

  return bestResult
}
