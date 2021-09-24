/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            let left = triangle[i-1][j-1] !== undefined ? triangle[i-1][j-1] : Infinity;
            let right = triangle[i-1][j] !== undefined ? triangle[i-1][j] : Infinity;
            triangle[i][j] += Math.min(left, right)
        }
    }
    return Math.min(...triangle[triangle.length - 1])
};