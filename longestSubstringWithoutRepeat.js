/** 3
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const map = {};
  let start = 0;
  let longest = 0;
  let curr;
  for (let i = 0; i < s.length; i++) {
      curr = s[i];
      if (map[curr] >= start) {
          start = map[curr] + 1;
      }
      map[curr] = i;
      if (i - start + 1 > longest) {
          longest = i - start + 1;
      }
  }
  return longest;
};