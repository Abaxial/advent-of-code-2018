module.exports = input => {
  const objectify = require('moment')
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
    // return input
    const parsedInput = input.map(coord => coord.split(", ").map(num => parseInt(num)))
    console.log(parsedInput)

    leftMost   = parsedInput[0]
    topMost    = parsedInput[0]
    rightMost  = parsedInput[0]
    bottomMost = parsedInput[0]
    var pointHash = {}
    let corners = new Set()
    let inners  = new Set()

    const checkAndAssignForCorners = (coord1) => {
      if (leftMost[0] > coord1[0]) {
        leftMost = coord1
      }

      if (rightMost[0] < coord1[0]) {
        rightMost = coord1
      }

      if (topMost[1] > coord1[1]) {
        topMost = coord1
      }

      if (bottomMost[1] < coord1[1]) {
        bottomMost = coord1
      }
    }

    const assignForCorners = (coord1) => {
      if (leftMost[0] >= coord1[0]) {
        corners.add(coord1)
      } else if (rightMost[0] <= coord1[0]) {
        corners.add(coord1)
      } else if (topMost[1] >= coord1[1]) {
        corners.add(coord1)
      } else if (bottomMost[1] <= coord1[1]) {
        corners.add(coord1)
      } else {
        inners.add(coord1)
      }
    }

    for (var coords of parsedInput) {
      checkAndAssignForCorners(coords)
    }

    for (var coords of parsedInput) {
      assignForCorners(coords)
      pointHash[coords] = 0
    }


    for (var x = 0, x <= rightMost[0], x++) {
      for (var y = 0, y <= bottomMost[1], y++ ) {
        closestPoint = parsedInput[0]
        distance = 1000000000

        for (var coords of parsedInput) {
          if (calcedDistance < distance) {
            distance = calcedDistance
            closestPoint = coords
          }
        }
      }
    }

    /*
      1. Corners will always be infinite, diagonal lines out from corners will always be closest to a given corner.
      2. Edges, if they are beyond any corner axis, will also be infinite, as it's essentially a new corner.
      3. Internal edge points, values within corners, are not infinite.

      I'm worried that I'll have to loop within a loop here to effectively find corners.
      Hmm, well, there's a way to extract the four outermost points on the axis by finding:

      1) The point with the lowest manhattan distance. (Upper right.)
      2) The point with the highest manhattan distance. (Bottom left.)
      3) The point with the highest (or second highest x coordinate in case where point 2 is further along)
      4) The point with the highest (or second highest y coordinate in case where point 2 is further along)

      Hmm.  How about we just get our initial four corners by taking furthest left, top, right, and bottom?  Easier to parse in initial loop.
    */

    return corners
}
