// Leetcode 136. Single Number
// Staus: DONE

// var singleNumber = function(nums) {
//   let frequency = {}
//   nums.forEach(num => frequency[num] ? delete frequency[num] : frequency[num] = 1)
//   return Object.keys(frequency)[0]
// }

var singleNumber = function(nums) {
return nums.reduce((prev, cur) => prev ^ cur, 0)
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
