//121. Best Time to Buy and Sell Stock

let maxProfit = function (prices) {
  let maxProfit = 0;
  let b = 0;
  let s = 1;

  while (s < prices.length) {
    if (prices[b] > prices[s]) {
      b = s;
    }
    if (maxProfit < prices[s] - prices[b]) {
      maxProfit = prices[s] - prices[b];
    }
    s++;
  }
  return maxProfit;
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));

//* data:
//input : array
//each item of array is a price
// each index is a day
//output: one number -> subtract (max price - min price)

//* edge cases :
//if no profit return 0
