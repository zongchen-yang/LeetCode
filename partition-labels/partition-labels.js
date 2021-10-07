/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = [];
        map[s[i]].push(i);
    }
    let res = [];
    let start = 0, end = 0;
    for (const key in map) {
        let arr = map[key];
        let first = arr[0];
        let last = arr[arr.length - 1];
        if (first > end) {
            res.push(end - start + 1);
            start = first;
        }
        if (last > end) end = last;
    }
    res.push(end - start + 1);
    return res;
};