/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stackS = [];
    const stackT = [];
    const longerString = Math.max(s.length, t.length);
    for (let i = 0; i < longerString; i++) {
        if (s[i] === '#') {
            stackS.pop();
        } else {
            stackS.push(s[i]);
        }
        if (t[i] === '#') {
            stackT.pop();
        } else {
            stackT.push(t[i]);
        }
    }
    
    return stackS.join('') === stackT.join('');
};