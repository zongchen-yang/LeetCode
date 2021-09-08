/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const reverse = (index) => {
        let start = index;
        let end = nums.length - 1;
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start ++;
            end --;
        }
    }
    
    const nextLarge = (index) => {
        for (let i = nums.length - 1; i > index; i--) {
            if (nums[i] > nums[index]) {
                return i;
            }
        }
    }
    
    for (let i = nums.length - 1; i >= 0; i--)  {
        if (nums[i] > nums[i - 1]) {
            [nums[nextLarge(i - 1)], nums[i - 1]] = [nums[i - 1], nums[nextLarge(i - 1)]];
            reverse(i);
            return;
        }
    }
    nums.reverse();
};
    
