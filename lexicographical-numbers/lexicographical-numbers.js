/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let output = [];
    const recurse = (start, end) => {
        while (start <= end && start <= n) {
            output.push(start);
            recurse(start * 10, start * 10 + 9)
            start++
        }
    }
    recurse(1, 9);
    return output;
};