/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let leftMultiplier = 1;
    let rightMultiplier = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = rightMultiplier;
        rightMultiplier *= nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        res[i] *= leftMultiplier;
        leftMultiplier *= nums[i];
    }
    return res;
};