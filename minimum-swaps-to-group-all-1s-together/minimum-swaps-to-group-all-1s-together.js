/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    let ones = data.reduce((acc, num) => acc + num, 0);
    let res = Infinity;
    let sum = 0;
    let left = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
        if (i+1 > ones) {
            sum -= data[left++];
        }
        if (i+1 >= ones) {
            res = Math.min(res, ones - sum);
        }
    }
    return res;
};