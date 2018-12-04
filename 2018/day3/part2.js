module.exports = input => {
    // Annoying that objects are not iterable by default in javascript.
    // That's okay, this snippet makes all objects iterable.  Probalby want to adjust eventually.
    Object.defineProperty(Object.prototype, Symbol.iterator, {
        enumerable: false,
        value: function * (){
            for(let key in this){
                if(this.hasOwnProperty(key)){
                    yield [key, this[key]];
                }
            }
        }
    });

    rectangles = []
    fabricHash = new Object()
    overlap    = 0
    winnerID   = 1

    for (var rect of input) {
      rectInfo = rect.match(/(\d*),(\d*): (\d*).(\d*)/)

      startLeft     = rectInfo[1]
      startTop      = rectInfo[2]
      iterateAcross = rectInfo[3]
      iterateDown   = rectInfo[4]
      returnWinnerID = winnerID


      for (var x = startLeft, ix = 0; ix < iterateAcross; ix++, x++) {

        if (fabricHash[x] == null) {
          fabricHash[x] = new Object()
        }
        for (var y = startTop, iy = 0; iy < iterateDown; iy++, y++) {
          if (fabricHash[x][y]) {
            fabricHash[x][y] += 1
            returnWinnerID = 0
          } else {
            fabricHash[x][y] = {}
            fabricHash[x][y] = 1
          }
        }
      }
    }

    for (var rect of input) {
      rectInfo = rect.match(/(\d*),(\d*): (\d*).(\d*)/)

      startLeft     = rectInfo[1]
      startTop      = rectInfo[2]
      iterateAcross = rectInfo[3]
      iterateDown   = rectInfo[4]
      returnWinnerID = winnerID

      for (var x = startLeft, ix = 0; ix < iterateAcross; ix++, x++) {

        for (var y = startTop, iy = 0; iy < iterateDown; iy++, y++) {
          if (fabricHash[x][y] > 1) {
            returnWinnerID = 0
          }
        }
      }
      winnerID += 1
      if (returnWinnerID != 0) {
        return returnWinnerID
      }
    }
}
