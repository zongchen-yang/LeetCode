/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let output = [];
    const recurse = (leftCount, rightCount, str) => {
        if (leftCount > rightCount) {
            return;
        }
        if (str.length === 2 * n) {
            output.push(str);
            
        }
        if (leftCount) {
            recurse(leftCount-1, rightCount, str+'(')
        }
        if (rightCount) {
            recurse(leftCount, rightCount-1, str+')')
        }
    }
    recurse(n, n, '');
    return output;
};