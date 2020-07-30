// var rotate = function(nums, k) {
//   if(nums.length === k || k === 0 || nums.length === 0) return nums

//   let coveredIndices = 0
//   for(let i = 0; i < k; i++) {
//     let index = i
//     let nextVal = null
//     while(nums[index] !== null) {
//       let tempVal = nums[index]
//       nums[index] = nextVal
//       nextVal = tempVal
//       index = (index + k) % (nums.length)
//       coveredIndices++
//     } 
//     nums[index] = nextVal
//     if(coveredIndices === nums.length) { break }
//   }
//   console.log(coveredIndices);
  
//   return nums
// };

var rotate = function(nums, k) {
  if(nums.length === k || k === 0 || nums.length === 0) return nums

  let coveredIndices = 0
  for(let i = 0; coveredIndices < nums.length; i++) {
    let index = i
    let nextVal = null
    do {
      let tempVal = nums[index]
      nums[index] = nextVal
      nextVal = tempVal
      index = (index + k) % (nums.length)
      coveredIndices++
    } while(index !== i)
    nums[index] = nextVal
  }
  
  return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3));      //[5, 6, 7, 1, 2, 3, 4]
console.log(rotate([-1, -100, 3, 99], 2));    //[3,99,-1,-100]
console.log(rotate([], 2));                   //[]
console.log(rotate([1,2,3,4,5,6,7], 0));      //[1, 2, 3, 4, 5, 6, 7]
console.log(rotate([1,2,3,4,5,6,7], 10));     //[5, 6, 7, 1, 2, 3, 4]
