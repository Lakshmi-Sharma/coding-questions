// Leetcode 121. Best Time to Buy and Sell Stock
// Done

var maxProfit = function(prices) {
  let minPrice = prices[0]
  let maxProfit = 0
  for(let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    // if(price < minPrice) {
    //   minPrice = price
    // }
    // else if(price - minPrice > maxProfit){
    //   maxProfit = price - minPrice
    // }
  }
  return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 5, 3, 2, 1]));
console.log(maxProfit([7, 1, 8, 0, 6, 4]));
