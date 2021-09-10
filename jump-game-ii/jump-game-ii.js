/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0;
    let curr = -1;
    let next = 0;
    for (let i = 0; next < nums.length - 1; i++) {
        if (curr < i) {
            curr = next;
            steps ++;
        }
        next = Math.max(next, nums[i] + i);
    }
    return steps;
};