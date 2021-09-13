/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    while (matrix.length) {
        res.push(...matrix.shift());
        for (const arr of matrix) {
            let p = arr.pop()
            if (p) {
                res.push(p);
            }
            arr.reverse();
        }
        matrix.reverse();
    }
    return res;
};