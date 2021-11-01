/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i<= s.length; i++) {
        for (let start = 0; start < i; start++) {
            if (!dp[start]) continue;
            let str = s.slice(start, i);
            if (set.has(str)) {
                dp[i] = true;
            }
        }
    }
    return dp[s.length];
};