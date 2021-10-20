/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    const hash = {};
    hash[0] = 1;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (hash[sum-k]) count += hash[sum-k];
        if (hash[sum]) hash[sum] ++;
        else hash[sum] = 1;
    }
    return count;
};