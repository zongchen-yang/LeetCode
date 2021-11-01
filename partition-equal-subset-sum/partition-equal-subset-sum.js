/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((sum, each) => sum + each, 0);
    if (sum % 2) return false;
    let dp = new Array(sum + 1);
    let target = sum / 2;
    dp[0] = true;
    for (let i = 0; i < nums.length; i++) {
        for (let rem = target; rem >= nums[i]; rem--) {
            dp[rem] = dp[rem] || dp[rem - nums[i]];
        }
    }
    return dp[target] || false;
};