/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    const res = [prev];
    for (let [start, end] of intervals) {
        if (start <= prev[1]) {
            prev[1] = Math.max(end, prev[1]);
        } else {
            prev = [start, end];
            res.push(prev);
        }
    }
    return res;
};