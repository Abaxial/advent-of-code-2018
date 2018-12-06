module.exports = input => {
  var output = ""
  var loop = true
  var inputLength = input.length

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
    }
  }
  console.log(input)
  return input.length
}
