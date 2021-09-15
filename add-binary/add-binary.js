/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let extra = 0;
    let m = a.length - 1;
    let n = b.length - 1;
    let output = '';
    while (m >= 0 || n >= 0 || extra > 0 ) {
        let sum = (Number(a[m]) || 0) + (Number(b[n]) || 0) + extra;
        if (sum > 1) {
            sum %= 2;
            extra = 1;
        } else {
            extra = 0;
        }
        output = `${sum}${output}`;
        m--, n--;
    }
    return output;
};