/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        
        if (height[left] < leftMax) res += leftMax - height[left];
        if (height[right] < rightMax) res += rightMax - height[right];
        
        height[left] < height[right] ? left ++ : right--;
    }
    return res;
};