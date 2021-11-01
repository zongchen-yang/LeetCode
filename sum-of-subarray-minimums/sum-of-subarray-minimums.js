/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for (let j = i; j < arr.length; j++) {
            min = Math.min(arr[j], min);
            sum += min;
        }
    }
    return sum % (10**9 + 7);
};