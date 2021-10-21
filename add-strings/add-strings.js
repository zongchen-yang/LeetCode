/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry = 0;
    let a = num1.length - 1;
    let b = num2.length - 1;
    let res = '';
    while (a >= 0 || b >= 0) {
        let digita = a < 0 ? 0: Number(num1[a]);
        let digitb = b < 0 ? 0: Number(num2[b]);
        let digitSum = digita + digitb + carry;
        carry = Math.floor(digitSum / 10);
        digitSum = digitSum % 10;
        res = `${digitSum}` + res;
        a--, b--;
    }
    return carry ? carry+res : res;
};