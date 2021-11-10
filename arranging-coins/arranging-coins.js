/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let curr = 1;
    let res = 0;
    while (n >= curr) {
        n -= curr;
        curr ++;
        res ++;
    }
    return res;
};