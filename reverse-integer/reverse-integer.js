/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let output = 0;
    let sign = x >= 0 ? 1 : -1;
    for (let i = Math.abs(x); i > 0; i = Math.floor(i/10)) {
        output = output * 10 + i % 10;
    }
    return (output <= 2 ** 31 - 1 && output >= (-2) ** 31 ) ? output * sign : 0;
};