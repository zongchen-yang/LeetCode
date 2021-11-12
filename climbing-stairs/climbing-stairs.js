/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev = 0, curr = 1, temp;
    for (let i = 0; i < n; i++) {
        [prev, curr] = [curr, curr+prev];
    }
    return curr;
};