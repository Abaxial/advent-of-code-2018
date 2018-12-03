module.exports = input => {
    result = 1
    twos   = 0
    threes = 0

    for (var id of input) {      
      countingHash = new Object()
      for (var character of id) {
        if (countingHash[character]) {
          countingHash[character] += 1
        } else {
          countingHash[character] = 1
        }
      }

      console.log(countingHash)

      if (Object.values(countingHash).includes(2)) {
        twos += 1
      }

      if (Object.values(countingHash).includes(3)) {
        threes += 1
      }
    }

    return (twos * threes)
}
