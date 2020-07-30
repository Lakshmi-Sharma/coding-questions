var checkPossibility = function(nums) {
  if(nums.length <= 2) return true
  let anomaly = 0
  for(let i = 0; i < nums.length - 1; i++){
    if(nums[i] > nums[i + 1]) {
      anomaly++
      if(i !== 0 && i !== nums.length - 1 && nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) { anomaly++ }
    }
    if(anomaly > 1) break
  }
  return anomaly < 2 
}

// console.log(nums[i-1], nums[i+1], nums[i - 1] > nums[i + 1], nums[i], nums[i+2], nums[i] > nums[i + 2])

console.log(checkPossibility([4, 2, 3]))
console.log(checkPossibility([3, 4, 2, 3]))
console.log(checkPossibility([2, 3, 3, 2, 4]))
console.log(checkPossibility([-1,4,2,3]))
console.log(checkPossibility([-4, -2, -6, -1, 4, 2, 3]))
console.log(checkPossibility([1,5,4,6,7,8,9]))

