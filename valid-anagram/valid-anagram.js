/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = 1;
        else map[s[i]]++;
    }
    for (let j = 0; j < t.length; j++) {
        if (!map[t[j]]) return false;
        map[t[j]]--;
    }
    return Object.values(map).reduce((acc, each) => acc + each) === 0;
};