/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let output = [];
    let buffer = [];
    const trySum = (target, pos) => {
        if (target === 0) {
            output.push(buffer.slice());
            return;
        }
        if (target < 0) {
            return;
        }
        if (pos === candidates.length) {
            return;
        }
        buffer.push(candidates[pos]);
        trySum(target - candidates[pos], pos);
        buffer.pop();
        trySum(target, pos + 1);
    }
    trySum(target, 0);
    return output;
};