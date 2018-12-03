module.exports = input => {
  matchedIds = []
  indexOfFirst = 0
  sameLetters = ""

  for (var line of input) {
    indexOfSecond = 0

    for (var line2 of input) {
      differences = 0

      for (var i = 0; i < line.length; i++) {
        if (line[i] != line2[i]) {
          differences += 1
        }
      }

      if (differences == 1 ) {
        matchedIds = [line, line2]
        break;
      }
    }
  }


  for (var i = 0; i < matchedIds[0].length; i++) {
    if (matchedIds[0][i] == matchedIds[1][i]) {
      sameLetters += matchedIds[0][i]
    }
  }

  return sameLetters
}
