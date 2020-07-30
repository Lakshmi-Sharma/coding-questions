var findRadius = function(houses, heaters) {
  if(houses.length === 0) return 0
  if(heaters.length === 0) return Infinity
  houses = houses.sort((a, b) => parseInt(a) > parseInt(b))
  heaters = heaters.sort((a, b) => parseInt(a) > parseInt(b))
  let minRadius = 0
  let j = 0
  let prevHeaterPos = null
  for(let i = 0; i < houses.length; i++) {
    let thisRadius = null
    while(heaters[j] < houses[i] && j < heaters.length - 1) { j++ }
    if(houses[i] === heaters[j]) { continue }
    if(j === 0) { 
      thisRadius = Math.abs(heaters[j] - houses[i]) 
    }
    else { 
      let leftDist = Math.abs(heaters[j - 1] - houses[i])
      let rightDist = Math.abs(heaters[j] - houses[i])
      thisRadius = Math.min(leftDist, rightDist)
    }
    
    minRadius = Math.max(minRadius, thisRadius)
    // console.log(i, houses[i], j, heaters[j], minRadius)
  }
  return minRadius
};

// console.log(findRadius([1, 2, 3], [2]))           //1
// console.log(findRadius([1, 2, 3, 4], [1, 4]))     //1
// console.log(findRadius([], [2]))                  //0
// console.log(findRadius([1, 2, 3], []))            //Infinity
// console.log(findRadius([1, 2, 3], [1, 2, 3]))     //0
// console.log(findRadius([1, 2, 4], [1, 2, 4]))     //0
// console.log(findRadius([1, 4, 5], [1, 3, 6, 7]))  //1
// console.log(findRadius([1, 5], [2]))              //3
console.log(findRadius([282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923],
  [823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612]));  //161834419





// No heater or no houses => 0
// 1 heater => max of distance from first and last
// Assuming positions are increasing

