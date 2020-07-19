// Leetcode 1402. Reducing Dishes - Hard
// Status: DONE!

var maxSatisfaction = function(satisfaction) {
  var satisfactionSum = 0
  var maxCoeffSum = 0
  satisfaction.sort((a, b) => { return a > b })
  
  for(var i = satisfaction.length - 1; i >= 0 ; i--) {
    satisfactionSum += satisfaction[i]
    maxCoeffSum = Math.max(maxCoeffSum , maxCoeffSum + satisfactionSum)
  }
  return maxCoeffSum
};

console.log(maxSatisfaction([-1, -8, 0, 5, -9]))
console.log(maxSatisfaction([4, 3, 2]))
console.log(maxSatisfaction([-1, -4, -5]))
console.log(maxSatisfaction([-2 , 5, -1, 0, 3, -3]))
console.log(maxSatisfaction([-1, -8, 0, 5, -7]));





