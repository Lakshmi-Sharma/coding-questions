var canPlaceFlowers = function(flowerbed, n) {
  let newPlaces = 0
  for(let place = 0; place < flowerbed.length; place++) {
    if(!flowerbed[place] && !flowerbed[place - 1] && !flowerbed[place + 1]) {
      flowerbed[place] = 1
      newPlaces++
    }
    if(newPlaces >= n) { break; }
  }
  return newPlaces >= n ? true : false
};

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));  //true
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));  //false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));  //false
