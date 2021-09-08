/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let output = [];
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let k = j + 1, l = nums.length - 1;
            while (k < l) {
                
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    output.push([nums[i], nums[j], nums[k], nums[l]]);
                    
                    while (nums[k] === nums[k + 1]) {
                        k ++;
                    }
                    while (nums[l] === nums[l - 1]) {
                        l --;
                    }
                    k ++;
                    l --;
                } else if (sum < target) {
                    k ++;
                } else {
                    l --;
                }
            }
            while (nums[j] === nums[j + 1]) {
                j ++;
            }
        }
        while (nums[i] === nums[i + 1]) {
            i ++;
        }
    }
    return output;
};