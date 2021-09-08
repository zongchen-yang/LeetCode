/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const output = [];
    if (nums.length < 3) {
        return output;
    }
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                output.push([nums[i], nums[j], nums[k]]);
                while (nums[j + 1] === nums[j]) {
                    j++;
                }
                while (nums[k - 1] === nums[k]) {
                    k--;
                }
                j++;
                k--;
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return output;
};