/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let extra = 1;
    let digit = digits.length - 1;
    while (extra && digit > -1) {
        let sum = digits[digit] + extra;
        digits[digit] = sum % 10;
        extra = Math.floor (sum / 10);
        digit--;
    }
    if (extra) {
        digits.unshift(extra);
    }
    return digits;
};