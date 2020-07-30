// var lastStoneWeight = function(stones) {
//   stones = stones.sort((a, b) => parseInt(a) > parseInt(b))
//   while(stones.length > 1){
//     let x = stones.pop()
//     let y = stones.pop()
//     if(x !== y) {
//       stones.push(Math.abs(x - y))
//       stones = stones.sort((a, b) => parseInt(a) > parseInt(b))
//     }
//   }
//   return stones[0] || 0
// }


var lastStoneWeight = function(stones) {
  let heap = []
  stones.forEach(element => insert(element, heap))
  while(heap.length > 1){
    let x = remove(heap)
    let y = remove(heap)
    if(x !== y) {
      insert(x - y, heap)
    }
    console.log(heap);
    
  }
  return heap[0] || 0
}

var insert = function(element, heap) {
  let n = heap.length
  let p = Math.floor(n/2)
  heap.push(element)
  while(heap[n] > heap[p]) {
    let temp = heap[p]
    heap[p] = heap[n]
    heap[n] = temp
    n = Math.floor(n/2)
    p = Math.floor(n/2)
  }
}

var remove = function (heap) {
  let element = heap[0]
  if(heap.length <= 1) return heap.pop()
  let n = 0
  heap[n] = heap.pop()
  while(heap[n] < heap[(2*n) + 1] || heap[n] < heap[(2*n) + 2]) {
    let c = !heap[(2*n) + 2] ? (2*n) + 1 : (heap[(2*n) + 1] > heap[(2*n) + 2]) ? (2*n) + 1 : (2*n) + 2
    if(!heap[c]) break
    let temp = heap[n]
    heap[n] = heap[c]
    heap[c] = temp
    n = c
  }
  return element
}

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))      //1
// console.log(lastStoneWeight([8, 1]))                  //7
// console.log(lastStoneWeight([1, 1]))                  //0
// console.log(lastStoneWeight([8, 10, 4]))              //2
// console.log(lastStoneWeight([]))                      //0
// console.log(lastStoneWeight([10,4,2,10]))             //2
console.log(lastStoneWeight([316,157,73,106,771,828,46,212,926,604,600,992,71,51,477,869,425,405,859,924,45,187,283,590,303,66,508,982,464,398]))             //0







