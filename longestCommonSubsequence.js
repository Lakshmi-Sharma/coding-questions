var longestCommonSubsequence = function(text1, text2) {
  let positions = {}
  text1.split('').forEach((element, index) => {
    if(!positions[element] || !positions[element][0]) {positions[element] = [[], []]}
    positions[element][0].push(index)
  })
  text2.split('').forEach((element, index) => {
    if(!positions[element] || !positions[element][1]) {positions[element] = [[], []]}
    positions[element][1].push(index)
  })

  console.log(positions);

  let arrToTraverse = (text1.length <= text2.length ? text1 : text2).split('')
  let res = []
  
  for(let index = arrToTraverse.length - 1; index >= 0; index--) {
    let element = arrToTraverse[index]
    
    let t1Index = positions[element][0].pop()
    let t2Index = positions[element][1].pop()

    if(t1Index === undefined || t2Index === undefined) { continue }
    else {
      let parent = null
      for(let j = res.length -1; j >= 0; j--) {
        let lastEntry = res[j]
        console.log(res[j]);
        
        if((lastEntry[0] > t1Index && lastEntry[1] > t2Index)) { parent = lastEntry; break; }
      }
      if(parent) { res.push([t1Index, t2Index, parent[2] + 1])}
      else { res.push([t1Index, t2Index, 1]) }
    }
  }

  console.log(res);
  

  let final = 0
  if(res.length !== 0) {
    final = res.reduce(function(prev, curr) { return prev[2] > curr[2] ? prev : curr })[2]
  }
  return final
};

// console.log(longestCommonSubsequence("abcde", "ace"))     // 3 'ace'
// console.log(longestCommonSubsequence("abc", "abc"))       // 3 'abc'
// console.log(longestCommonSubsequence("abc", "def"))       // 0 ''
// console.log(longestCommonSubsequence("traced", "rated"))  // 4'raed'
// console.log(longestCommonSubsequence("aaabb", "aabbbb"))  // 4'aabb'
// console.log(longestCommonSubsequence("", "aa"))           // 0''
// console.log(longestCommonSubsequence("", ""))             // 0''
console.log(longestCommonSubsequence("ylqpejqbalahwr", "yrkzavgdmdgtqpg"))             // 3'yqp'


// Does not work :\