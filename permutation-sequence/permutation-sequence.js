/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let output = '';
    let count = 0;
    const arr = new Array(n);
    const recurse = (num, str) => {
        if (num === n) {
            count ++;
            if (count === k) {
                output = str.slice();
            }
        }
        for (let i = 1; i <= n; i++) {
            if (!arr[i]) {
                arr[i] = true;
                recurse(num + 1, str + i);
                arr[i] = false;
            }
        }
    }
    recurse(0, '');
    return output;
};