var isNumber = function(s) {
  s = s.trim()
  // Only integers
  // Integers and decimal point
  // 

  return parseInt(s) !== NaN
};


isNumber("0")
isNumber(" 0.1 ")
isNumber("abc")
isNumber("1 a")
isNumber("2e10")
isNumber(" -90e3   ")
isNumber(" 1e")
isNumber("e3")
isNumber(" 6e-1")
isNumber(" 99e2.5 ")
isNumber("53.5e93")
isNumber(" --6 ")
isNumber("-+3")
isNumber("95a54e53")

// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
// " -90e3   " => true
// " 1e" => false
// "e3" => false
// " 6e-1" => true
// " 99e2.5 " => false
// "53.5e93" => true
// " --6 " => false
// "-+3" => false
// "95a54e53" => false