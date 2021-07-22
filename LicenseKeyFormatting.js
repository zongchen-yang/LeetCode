/** 482
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
  const arr = s.replace(/-/g, '').toUpperCase().split('');
  for (let i = arr.length - 1 - k; i >= 0; i -= k) {
      arr[i] += '-';
  }
  return arr.join('');
};