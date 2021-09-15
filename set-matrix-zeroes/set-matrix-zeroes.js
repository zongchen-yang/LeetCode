/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let record = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                record.push([i, j]);
            }
        }
    }
    for (const [x, y] of record) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][y] = 0;
        }
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[x][j] = 0;
        }
    }
    return matrix;
};