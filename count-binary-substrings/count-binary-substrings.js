/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let res = 0;
    let prev = 0;
    let curr = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            curr++;
        } else {
            res += Math.min(prev, curr);
            [prev, curr] = [curr, 1];
        }
    }
    return res + Math.min(prev, curr);
};