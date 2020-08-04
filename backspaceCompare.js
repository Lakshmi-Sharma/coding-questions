// Leetcode 844. Backspace String Compare - Easy (15 mins base solution - 15 mins overthinking a better solution)
// Status DONE!

var backspaceCompare = function(S, T) {
  let buildStack = function(S) {
    let SStack = []
    for(let i = 0; i < S.length; i++) {
      S[i] === '#' ? SStack.pop() : SStack.push(S[i])
    }
    return SStack
  }
  
  return buildStack(S).toString() === buildStack(T).toString()
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a#c", "b"));

