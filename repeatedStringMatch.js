var repeatedStringMatch = function(A, B) {
  let repeat = Math.ceil(B.length / A.length)
  return A.repeat(repeat).includes(B) ? repeat : A.repeat(repeat + 1).includes(B) ? repeat + 1 : -1 
}

console.log(repeatedStringMatch('abcd', 'cdabcdab'));               //3
console.log(repeatedStringMatch('abcdabcdabcdabcd', 'cdabcdab'));   //1
console.log(repeatedStringMatch('a', 'aa'));                        //2
console.log(repeatedStringMatch('aaaaaaaaab', 'ba'));               //1

