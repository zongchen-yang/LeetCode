/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const map = {};
    for (let e of arr) {
        if (!map[e]) map[e] = 1;
        else map[e]++;
    }
    let nums = Object.values(map).sort((a, b) => a - b);
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (k >= nums[i]) {
            k -= nums[i];
            res--;
        } else {
            return res;
        }
    }
    return res;
};