//Leetcode 849. Hand of Straights

var isNStraightHand = function(hand, W) {
  if(W * W !== hand.length) return false

  hand = hand.sort()
  let straightHands = 0
  let straightHandNotFound = false
  
  let prevVal = null
  let handLength = 0
  let last_unused_index = null

  for(let i = 0; i < hand.length; i++) {
    if(prevVal === null || hand[i] === prevVal + 1) {
      handLength++
      prevVal = hand[i]
      if(handLength === W) {
        straightHands++
        prevVal = null
        handLength = 0
        i = last_unused_index - 1
      }
      hand[i] = null
    }
    else{
      if(!last_unused_index) { last_unused_index = i}
    }
    console.log(hand, i, prevVal, hand[i]);

  }
  return straightHands
};

console.log(isNStraightHand( [1,2,3,6,2,3,4,7,8], 3));
// console.log(isNStraightHand([1,2,3,4,5], 4));

// console.log(isNStraightHand());
// console.log(isNStraightHand());
