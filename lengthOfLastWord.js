var lengthOfLastWord = function(s) {
  s = s.trim()
  let spaceIndex = s.lastIndexOf(' ')
  let wordLength = s.length - spaceIndex - 1
  if(spaceIndex === -1) { return s.length > 0 ? s.length : 0 }
  return wordLength
};

// console.log(lengthOfLastWord("Hello World"));   //5
// console.log(lengthOfLastWord(""));              //0
// console.log(lengthOfLastWord("a"));             //1
// console.log(lengthOfLastWord("a "));            //1
// console.log(lengthOfLastWord(" "));             //0
// console.log(lengthOfLastWord("     "));         //0
console.log(lengthOfLastWord("     day"));      //3

