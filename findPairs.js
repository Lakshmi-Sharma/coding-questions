var findPairs = function(nums, k) {
  let pairs = 0
  let map = {}
  if(k < 0) return 0
  for(let i = 0; i < nums.length; i++) {
    num = nums[i]
    if(k === 0) {
      map[num] = map[num] + 1 || 1
      if(map[num] === 2) { pairs++ }
    }
    else if(!map[num]) {
      if(map[num - k]) { pairs++ }
      if(map[num + k]) { pairs++ }
      map[num] = map[num] + 1 || 1
    }
  }
  return pairs
};

console.log(findPairs([3, 1, 4, 1, 5], 2));  //2
console.log(findPairs([1, 2, 3, 4, 5], 1));  //4
console.log(findPairs([1, 3, 1, 5, 4], 0));  //1
console.log(findPairs([1, 3, 1, 5, 4], 2));  //2
console.log(findPairs([1, 1, 1, 1, 1], 0));  //1

// Works
