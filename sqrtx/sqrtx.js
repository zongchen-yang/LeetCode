/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x;
    let mid = 0;
    while (left < right) {
        mid = Math.ceil((left + right) / 2);
        let prod = mid * mid;
        if (prod <= x && (mid + 1) * (mid + 1) > x) {
            return mid;
        }
        if (prod > x) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return mid;
};