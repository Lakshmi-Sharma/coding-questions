// Leetcode 980. Unique Paths III - Hard
// Status: DONE!

var uniquePathsIII = function(grid) {
  var uniquePaths = 0
  var start = searchForStart(grid)
  searchForEnd(start)

  function searchForEnd(start) {
    var right =  (start[1] + 1 < grid[0].length && (grid[start[0]][start[1] + 1] === 0 || grid[start[0]][start[1] + 1] === 2)) ? [start[0], start[1] + 1] : null
    var left =   (start[1] - 1 >= 0 && (grid[start[0]][start[1] - 1] === 0 || grid[start[0]][start[1] - 1] === 2)) ? [start[0], start[1] - 1] : null
    var bottom = (start[0] + 1 < grid.length && (grid[start[0] + 1][start[1]] === 0 || grid[start[0] + 1][start[1]] === 2)) ? [start[0] + 1, start[1]] : null
    var top =    (start[0] - 1 >= 0 && (grid[start[0] - 1][start[1]] === 0 || grid[start[0] - 1][start[1]] === 2)) ? [start[0] - 1 ,start[1]] : null
  
    var directions = [right, left, bottom, top]  
    for(var i = 0; i < directions.length; i++) {
      var select = directions[i]
      
      if(select) {
        if(grid[select[0]][select[1]] === 2) { 
          if(checkGridForAllLocationCoverage(grid)) {
            uniquePaths++
          }
        }
        else {
          grid[select[0]][select[1]] = -1
          searchForEnd(select)
          grid[select[0]][select[1]] = 0
        }
      }
    }
  }
  return uniquePaths
}

function searchForStart(grid) {
  for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === 1) return [i, j]
    }
  }
}

function checkGridForAllLocationCoverage(grid) {
  for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === 0) return false
    }
  }
  return true
}

console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]]))
console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]]))
console.log(uniquePathsIII([[0,1],[2,0]]))