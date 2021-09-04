/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let output = Infinity;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            let diff = Math.abs(sum - target);
            if (diff < Math.abs(output - target)) {
                output = sum;
            } 
            if (sum < target) {
                left ++;
            } else {
                right --;
            }
        }
    }
    return output;
};