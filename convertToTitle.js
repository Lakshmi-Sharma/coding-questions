var convertToTitle = function(n) {
  let response = ""
  do{
    let alpha = n % 26 || 26
    response = String.fromCharCode(64 + alpha) + response
    n = (n - alpha) / 26
  } while(n >= 1) 
  return response
};


console.log(convertToTitle(1))
console.log(convertToTitle(2))
console.log(convertToTitle(26))
console.log(convertToTitle(27))
console.log(convertToTitle(701))

