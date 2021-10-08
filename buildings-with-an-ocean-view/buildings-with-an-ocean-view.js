/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let max = 0;
    const res = [];
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > max) res.unshift(i);
        max = Math.max(max, heights[i]);
    }
    return res;
};