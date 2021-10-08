/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const isPalindrome = (str) => {
        return str === str.split('').reverse().join('');
    }
    const cut = (i) => s.slice(0, i) + s.slice(i + 1);
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] === s[right]) left ++, right--;
        else return isPalindrome(cut(left)) || isPalindrome(cut(right))
    }
    return true;
};