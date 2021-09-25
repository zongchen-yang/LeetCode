/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = {};
    let max = 0;
    for (const num of nums) {
        if (map[num]) continue;
        let left = map[num-1] || 0;
        let right = map[num+1] || 0;
        let len = left + 1 + right;
        map[num] = len;
        map[num-left] = len;
        map[num+right] = len;
        max = Math.max(max, len);
    }
    return max;
};