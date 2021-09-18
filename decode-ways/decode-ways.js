/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0' || s.length === 0) {
        return 0;
    }
    const memo = new Array(s.length + 2).fill(0);
    memo[0] = 1;
    memo[1] = 1;
    for (let i = 2; i <= s.length; i++) {
        let a = Number(s[i-1]);
        if (a > 0 && a < 10) {
            memo[i] += memo[i-1];
        }
        let b = Number(s.slice(i-2, i));
        if (b >= 10 && b <= 26) {
            memo[i] += memo[i-2];
        }
    }
    return memo[s.length];
};