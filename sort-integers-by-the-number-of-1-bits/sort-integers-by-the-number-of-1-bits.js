/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const bit = (n) => {
        let sum = 0;
        while (n) {
            sum += n & 1;
            n = n >> 1;
        }
        return sum;
    }
    return arr.sort((a, b) => bit(a) - bit(b) || a - b);
};