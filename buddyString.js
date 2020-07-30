var buddyStrings = function(A, B) {
  if(A.length !== B.length || A === '' || B === '') return false
  let charSet = {}
  let repeatCharExists = false
  let unmatchedCharsA = []
  let unmatchedCharsB = []
  
  if(A === B) {
    for(var i = 0; i < A.length; i++) {    
      if(charSet[A[i]]) { 
        repeatCharExists = true;
        break;
      }
      else charSet[A[i]] = 1
    }
  }
  else {
    for(var i = 0; i < A.length; i++) { 
      if(A[i] !== B[i]) { 
        unmatchedCharsA.push(A[i])
        unmatchedCharsB.push(B[i]) 
      }
      if(unmatchedCharsA.length > 2) { break; }
    }
  }
  if( (unmatchedCharsA.length === 2 && unmatchedCharsA[0] === unmatchedCharsB[1] && unmatchedCharsA[1] === unmatchedCharsB[0]) || 
      (unmatchedCharsA.length === 0 && repeatCharExists)) return true
  return false
};

console.log(buddyStrings('ab', 'ba')) // true
console.log(buddyStrings('ab', 'ab')) // false
console.log(buddyStrings('aa', 'aa')) // true
console.log(buddyStrings('aaaaaabc', 'aaaaaacb')) // true
console.log(buddyStrings('', 'aa')) // false
console.log(buddyStrings("abcaa", "abcbb")) //false

