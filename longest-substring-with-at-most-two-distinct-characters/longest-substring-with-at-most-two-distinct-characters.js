/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    const map = new Map();
    let left = 0, right = 0;
    let max = 0;
    while (right < s.length) {
        let curr = s[right];
        map.set(curr, right);
        if (map.size > 2) {
            let minIndex = Math.min(...map.values());
            map.delete(s[minIndex]);
            left = minIndex + 1;
        }
        max = Math.max(max, right - left + 1);
        right ++;
    }
    return max;
};