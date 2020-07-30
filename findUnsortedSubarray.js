// Does not work

var findUnsortedSubarray = function(nums) {
  let startStack = []
  let endStack = []
  let l = nums.length, r = 0

  for(i = 0; i < nums.length; i++) {
    if(!startStack[startStack.length - 1] || nums[startStack[startStack.length - 1]] <= nums[i]) {
      startStack.push(i)
    }
    else {
      while(nums[startStack[startStack.length - 1]] > nums[i]) { startStack.pop() }
      l = startStack[startStack.length - 1]
      startStack.push(i)
    }    
  }

  for(i = nums.length - 1; i >= 0; i--) {
    if(!endStack[endStack.length - 1] || nums[endStack[endStack.length - 1]] >= nums[i]) {
      endStack.push(i)
    }
    else {
      while(nums[endStack[endStack.length - 1]] < nums[i]) { endStack.pop() }
      r = endStack[endStack.length - 1]
      endStack.push(i)
    }
  }
  console.log(startStack, endStack, l, r);
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); //5
console.log(findUnsortedSubarray([1, 2, 3, 3, 3]));         //0
console.log(findUnsortedSubarray([1, 3, 2, 3, 3]));         //2
console.log(findUnsortedSubarray([2, 3, 3, 2, 4]));         //3
console.log(findUnsortedSubarray([2, 1]));                  //2
console.log(findUnsortedSubarray([1, 2, 3, 4]));            //0
