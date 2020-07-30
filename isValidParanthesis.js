var isValid = function(s) {
  let valid = true
  let stack = []
  for(let i = 0; i < s.length; i++) {
    let cur = s[i]
    if(cur === '(' || cur === '{' || cur === '[') {
      stack.push(cur)
    }
    else {
      let last = stack.pop()
      if(!((cur === ')' && last === '(') || (cur === ']' && last === '[') || (cur === '}' && last === '{'))){
        valid = false
        break
      }
    }
  }
  return !(stack.length === 0) ? false : valid
};

console.log(isValid(""))            //true
console.log(isValid("()"))          //true
console.log(isValid("{}{}()"))      //true
console.log(isValid("[])"))         //false
console.log(isValid("[)"))          //false
console.log(isValid("[[[[[[[[)"))   //false

