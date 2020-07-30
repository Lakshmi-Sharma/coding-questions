var recoverFromPreorder = function(S) {
  var nodes = []
  var currValue = ''
  var currDepth = 0

  for(var i = 0; i < S.length; i++) {
    if(S[i] === '-') { currDepth++ }
    else {
      currValue += S[i]
      if(i + 1 === S.length || S[i + 1] === '-') {
        for(var j = 0; j < S[currDepth].length; j++) {

        }

        !nodes[currDepth] ? nodes[currDepth] = [currValue] : nodes[currDepth].push(currValue)
        
        currDepth = 0
        currValue = ''
      }
    }
  }

  console.log(nodes);
};

console.log(recoverFromPreorder('1-2--3--4-5--6--7'))
console.log(recoverFromPreorder('1-2--3---4-5--6---7'))
console.log(recoverFromPreorder('1-401--349---90--88'))
