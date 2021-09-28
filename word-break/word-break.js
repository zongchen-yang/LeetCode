/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    wordDict = new Set(wordDict);
    let res = new Array(s.length + 1).fill(false);
    res[0] = true;
    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            let str = s.slice(start, end);
            if (res[start] && wordDict.has(str)) {
                res[end] = true;
                break;
            }
        }
    }
    return res[s.length];
};