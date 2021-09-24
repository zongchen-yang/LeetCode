/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    let row = 1;
    let last = [];
    while (row <= numRows) {
        let buffer = [1];
        for (let i = 1; i < row; i++) {
            buffer[i] = last[i] + last[i-1] || 1
        }
        res.push(buffer);
        last = res[row-1];
        row ++;
    }
    return res;
};