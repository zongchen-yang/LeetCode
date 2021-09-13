/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    let prev = intervals[0];
    let res = [prev];
    for (const arr of intervals) {
        if (arr[0] > prev[1]) {
            res.push(arr);
            prev = arr;
        } else {
            prev[1] = Math.max(prev[1], arr[1]);
        }
    }
    return res;
};