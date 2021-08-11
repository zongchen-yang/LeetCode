/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const output = [];
    nums = [lower - 1, ...nums, upper + 1];
    for (let i = 0; i < nums.length; i++) {
        let diff = nums[i] - nums[i-1];
        if (diff === 2) {
            output.push(`${nums[i] - 1}`);
        } else if (diff > 2) {
            output.push(`${nums[i-1] + 1}->${nums[i] - 1}`)
        }
    }
    return output;
};