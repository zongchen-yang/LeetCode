/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map = {};
        const transform = (n) => {
            let sum = 0;
            while (n) {
                sum += Math.pow(n % 10, 2);
                n = Math.floor(n / 10);
            }
            if (sum === 1) {
                return true;
            } else if (map[sum]) {
                return false;
            } else {
                map[sum] = true;
                return transform(sum);
            }
        }
        return transform(n);
};