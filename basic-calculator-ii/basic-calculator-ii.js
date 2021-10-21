/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let num = '';
    let sign;
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === ' ') continue;
        if (!isNaN(s[i])) {
            num += s[i];
        }
        if (isNaN(s[i])) {
            let number = Number(num);
            if (!sign) stack.push(number);
            if (sign === '+') stack.push(number);
            if (sign === '-') stack.push(-number);
            if (sign === '*') stack.push(stack.pop() * number);
            if (sign === '/') stack.push(parseInt(stack.pop() / number));
            sign = s[i];
            num = '';
        }
    }
    return stack.reduce((a, b) => a + b, 0);
};