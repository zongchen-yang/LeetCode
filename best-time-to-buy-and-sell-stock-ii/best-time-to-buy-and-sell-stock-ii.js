/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let output = 0;
    for (let i = 1; i < prices.length; i++) {
        let curr = prices[i];
        let prev = prices[i-1];
        if (prev < curr) {
            output += curr - prev;
        }
    }
    return output;
};