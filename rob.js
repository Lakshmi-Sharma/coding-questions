// Leetcode 198. House Robber - Easy (30 mins with hint)
// Status: DONE!

var rob = function(nums) {
  if(nums.length === 0) return null
  if(nums.length === 1) return nums[0]
  let valM = nums[0]
  let prev = nums[1]
  for(let i = 2; i < nums.length; i++) {
    let current_value = valM + nums[i]
    valM = Math.max(valM, prev)
    prev = current_value
  }
  return Math.max(valM, prev)
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1, 0, 0, 0, 0, 0, 2, 3]));

