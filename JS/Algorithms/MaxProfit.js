/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let bestDayToBuy = prices[0];
    let actualMaxProfit = 0;

    for(let i=1; i<prices.length; i++){
        let profit = prices[i] - bestDayToBuy;
        actualMaxProfit = Math.max(actualMaxProfit, profit) // We see the if the new profit it's greater than the actualMaxProfit
        bestDayToBuy = Math.min(bestDayToBuy, prices[i])    // We see if the actual price it's the best for buying, in that case we update it
    }
    return actualMaxProfit
};
console.info(maxProfit([2,1,4])) 


