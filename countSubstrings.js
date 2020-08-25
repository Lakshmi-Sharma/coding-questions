var countSubstrings = function(s) {
  let longestPalindromeAt = []
  let S = '#'
  s.split('').forEach((c) => {S += (c + '#')})
  for(let i = 0; i < S.length; i++) {
    let len = 0, left = i - 1, right = i + 1
    while(left >= 0 && right < S.length && S[left] === S[right]) { len++; left--; right++ }
    longestPalindromeAt[i] = len
  }
  return s.length + longestPalindromeAt.reduce((sum, v, i) => sum += parseInt(v/2))
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
console.log(countSubstrings("aaaa"));
console.log(countSubstrings("acbcacb"));
