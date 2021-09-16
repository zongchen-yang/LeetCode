/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output = [];
    const recurse = (buffer, index) => {
        output.push(buffer.slice());
        for (let i = index; i < nums.length; i++) {
            buffer.push(nums[i]);
            recurse(buffer, i + 1);
            buffer.pop();
        }
    }
    recurse([], 0)
    return output;
};