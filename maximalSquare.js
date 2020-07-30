var maximalSquare = function(matrix) {
  if(matrix.length === 0 || matrix[0].length === 0) return 0
  let row = []
  let max = 0

  for(let i = matrix.length - 1; i >= 0; i--) {
  let newRow = []
    for(let j = matrix[i].length - 1; j >= 0; j--) {
      newRow[j] = parseInt(matrix[i][j])
      if(newRow[j] !== 0) {
        let right = newRow[j + 1] || 0
        let down = row[j] || 0
        let diagonal = row[j + 1] || 0
        newRow[j] += Math.min(right, down, diagonal)
      }
    }
    row = newRow
    max = Math.max(...row, max)
  }
  return max * max
};

console.log(maximalSquare([[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]));
console.log(maximalSquare([[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,1,1,1]]));
console.log(maximalSquare([[0,0,0],[0,0,0],[0,0,0],[0,0,0]]));
console.log(maximalSquare([["0","0","0","1"],["1","1","0","1"],["1","1","1","1"],["0","1","1","1"],["0","1","1","1"]]));
console.log(maximalSquare([["1","1","0","1"],["1","1","0","1"],["1","1","1","1"]]));


