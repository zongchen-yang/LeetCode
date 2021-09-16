/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    let row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        let curr = matrix[row][col];
        if (curr === target) {
            return true;
        }
        if (curr > target) {
            col --;
        } else {
            row ++;
        }
    }
    return false;
    
};