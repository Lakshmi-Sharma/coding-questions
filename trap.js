// Leetcode 42: Trapping Rain Water
// Done

var trap = function(height) {
  let leftMax = -Infinity
  let rightMax = -Infinity
  let maxHeight = -Infinity
  let maxRightPos = 0
  let fill = 0
  for(let i = 0; i < height.length; i++) {
    let val = height[i]

    // Get right max
    if(maxRightPos > i + 1) { rightMax = height[maxRightPos] }
    else {
      maxRightPos = i + 1
      for(pos = i + 1; pos < height.length; pos++) {
        if(height[pos] > height[maxRightPos]) { maxRightPos = pos }
      }
      rightMax = height[maxRightPos]
    }

    // Fill
    if(leftMax > val && rightMax > val) {
      fill += Math.min(leftMax, rightMax) - val
    }

    // Get left max
    if(leftMax < val) {
      leftMax = Math.max(maxHeight, val)
    }
  }
  return fill
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));