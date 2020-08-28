var mostCommonWord = function(paragraph, banned) {
  let wordFreq = {}
  let words = paragraph.toLowerCase().split(/\W+/)
  let maxWord = null

  banned.forEach((word) => wordFreq[word] = -1)
  words.forEach((word) => {
    if(wordFreq[word] !== -1) {
      wordFreq[word] = wordFreq[word] ? wordFreq[word] + 1 : 1
    }
    maxWord = !maxWord || wordFreq[word] > wordFreq[maxWord] ? word : maxWord
  })
  return maxWord
}

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]) );
console.log(mostCommonWord("a.", ["hit"]) );
