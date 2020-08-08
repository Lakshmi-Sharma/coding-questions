// Leetcode 473. Matchsticks to Square
// Status

var makesquare = function(nums) {
  if(nums.length === 0) return false
  let side_length = nums.reduce((sum, num) => sum + num) / 4
  let stick_counts = {}
  let sides = 0
  nums.forEach(element => stick_counts[element] = (stick_counts[element] || 0) + 1)
  let unique_sticks = Object.keys(stick_counts).sort()
  let flag = true

  if(side_length < unique_sticks[unique_sticks.length]) return false

  for (let stick = unique_sticks.length - 1; stick >= 0; stick--) {
    const len = parseInt(Math.max(unique_sticks[stick]))

    while(stick_counts[len])
    {
      if(len !== side_length) {
        if(stick_counts[side_length - len] > 0) {
          stick_counts[side_length - len]--
        }
        else {
          flag = false
          break
        }
      }
      stick_counts[len]--
      sides++
    }
    if(!flag) break
  }
  return flag && sides === 4
};

console.log(makesquare([1,1,2,2,2]));
console.log(makesquare([3,3,3,3,4]));
console.log(makesquare([5,5,5,5,4,4,4,4,3,3,3,3]));

