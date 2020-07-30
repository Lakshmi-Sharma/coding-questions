var basicCalculatorIV = function(expression, evalvars, evalints) {
  return getexpressionArray(expression, evalvars, evalints)
};

var getexpressionArray = function(expression, evalvars, evalints) {
  let expressionArray = []
  let varMap = {}
  let currExpression = ''

  for(let j = 0; j < evalvars.length; j++) {
    varMap[evalvars[j]] = evalints[j]
  }

  for(let i = 0; i < expression.length; i++) {
    let char = expression[i]
    if(char.match(/[0-9]/i) || char.match(/[a-z]/i)) {
      currExpression += char
      continue
    }
    if(char === ' ') {
      if(currExpression !== '') {
        let val =  varMap[currExpression]  || parseInt(currExpression) || currExpression
        expressionArray.push(val)
      }
    }
    else {
      expressionArray.push(char) 
    }
    currExpression = ''
  }
  if(currExpression !== '') expressionArray.push(varMap[currExpression]  || parseInt(currExpression) || currExpression)
    
  return expressionArray
}

// TODO: This is incomplete
var evaluator = function(expressionArray) {
  let expressionStack = []
  for(let i = 0; i < expressionArray.length; i++) {
    let val = expressionArray[i]
    if(parseInt(val) !== Nan ) { 
      expressionStack.push(val)
    }
    
  }
}

var getSimplifiedExpession = function(simplifiedExpression) {
  return simplifiedExpression
}

console.log(basicCalculatorIV("e + 8 - a + 5", ["e"], [1]));
console.log(basicCalculatorIV("(e + 8) * (e - 8)", [], []));
console.log(basicCalculatorIV("e - 8 + temperature - pressure", ["e", "temperature"], [1, 12] ));
console.log( basicCalculatorIV("((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))", [], []));
