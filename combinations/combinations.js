/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (k === 1 && n === 1) return [[1]];
    let output = [];
    const recurse = (start, buffer) => {
        if (buffer.length === k) {
            output.push(buffer.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            buffer.push(i);
            recurse(i + 1, buffer);
            buffer.pop();
        }
    }
    recurse(1, []);
    return output;
};