/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let output = [];
    let buffer = [];
    let used = new Array(nums.length).fill(false);
    const recurse = () => {
        if (buffer.length === nums.length) {
            output.push(buffer.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            buffer.push(nums[i]);
            used[i] = true;
            recurse();
            buffer.pop();
            used[i] = false;
        }
    }
    recurse();
    return output;
};