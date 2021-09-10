/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let output = [];
    let buffer = [];
    let map = [];
    let set = new Set(nums)
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 0;
        }
        map[nums[i]] ++;
    }
    const recurse = () => {
        if (buffer.length === nums.length) {
            output.push(buffer.slice());
            return;
        }
        for (let num of set) {
            if (!map[num]) {
                continue;
            }
            buffer.push(num);
            map[num]--;
            recurse();
            buffer.pop();
            map[num]++;
        }
    }
    recurse();
    return output;
};