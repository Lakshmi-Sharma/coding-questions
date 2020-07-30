var thirdMax = function(nums) {
  let distinctNums = {}
  if(nums.length < 3) return Math.max(...nums)
  let tempMax = [-Infinity, -Infinity, -Infinity].sort()
  for(var i = 0; i < nums.length; i++) {
    if(!distinctNums[nums[i]]) { 
      distinctNums[nums[i]] = 1
      if(nums[i] > tempMax[0]) {
        tempMax[2] = tempMax[1]
        tempMax[1] = tempMax[0]
        tempMax[0] = nums[i]
      }
      else if(nums[i] > tempMax[1]) {
        tempMax[2] = tempMax[1]
        tempMax[1] = nums[i]
      }
      else if(nums[i] > tempMax[2]) {
        tempMax[2] = nums[i]
      }
    }
  }
  
  if(tempMax[0] === -Infinity || tempMax[1] === -Infinity || tempMax[2] === -Infinity) return Math.max(...tempMax)
  return tempMax[2]
};

console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2]))
console.log(thirdMax([2, 2, 3, 1]))
console.log(thirdMax([1, 1, 2]))
console.log(thirdMax([1,2,-2147483648]))
