var numberToWords = function(num) {
  let SingleDigitNumbers = {
    0: "", 
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
  }
  let DoubleDigitT20Numbers = {
    10: "Ten", 
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen"
  }
  let DoubleDightTensNumbers = {
    0: "",
    2: "Twenty ",
    3: "Thirty ",
    4: "Forty ",
    5: "Fifty ",
    6: "Sixty ",
    7: "Seventy ",
    8: "Eighty ",
    9: "Ninety "
  }
  let ThousandsNumbers = {
    1: "Thousand",
    2: "Million",
    3: "Billion"
  }

  if(num === 0) return "Zero"
  let splitNum = []
  while(num > 0) {
    splitNum.push(num % 1000)
    num = parseInt(num / 1000)
  }

  let splitRes = []
  splitNum.forEach((partialNum) => {
    let pnum = partialNum
    let resString = ""
    if(pnum <= 9) resString = SingleDigitNumbers[pnum]
    if(pnum <= 19 && pnum > 9) resString = DoubleDigitT20Numbers[pnum]
    console.log(resString);
    if(pnum > 19 && pnum <= 99) {
      let firstDigit = pnum % 10
      let secondDigit = parseInt(pnum / 10) % 10
      resString = DoubleDightTensNumbers[secondDigit] + SingleDigitNumbers[firstDigit]
    }
    if(pnum > 99) {
      let firstDigit = pnum % 10
      let secondDigit = parseInt(pnum / 10) % 10
      let thirdDigit = parseInt(pnum / 100) % 10
      resString = SingleDigitNumbers[thirdDigit] + " Hundred " + DoubleDightTensNumbers[secondDigit] + SingleDigitNumbers[firstDigit]

    }
    splitRes.push(resString.trim())
  })

  splitRes.forEach((numberS, i) => {
    if( i === 3 ) splitRes[i] += " Billion"
    if( i === 2 ) splitRes[i] += " Million"
    if( i === 1 ) splitRes[i] += " Thousand"
  })

  return splitRes.reverse().join(' ')
};

console.log(numberToWords(110));
console.log(numberToWords(101));
console.log(numberToWords(21));
console.log(numberToWords(9));
console.log(numberToWords(12));
console.log(numberToWords(1234567891));