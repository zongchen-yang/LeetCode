/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    };
    let red = 0, white = 0, blue = nums.length - 1;
    while (white <= blue) {
        let n = nums[white];
        if (n === 0) {
            swap(red, white);
            red ++;
        } else if (n === 2) {
            swap(white, blue);
            blue--;
            white--;
        }
        white++;
    }
    return nums;
};