/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        let start = 0;
        let end = matrix[0].length - 1;
        while (start < end) {
            [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]];
            start ++;
            end --;
        }
    }
};