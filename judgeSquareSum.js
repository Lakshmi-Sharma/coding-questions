var judgeSquareSum = function(c) {
  for(i = 0; i * i <= c; i++) {
    let b = Math.sqrt(c - (i * i))
    if(Number.isInteger(b)) { return true }
  }
  return false
};


console.log(judgeSquareSum(5))    //true
console.log(judgeSquareSum(3))    //false
console.log(judgeSquareSum(1))    //true
console.log(judgeSquareSum(8))    //true
console.log(judgeSquareSum(234))  //true
