/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    return points.sort(([xa, xb], [ya, yb]) => (xa**2 + xb**2) - (ya**2 + yb**2)).slice(0, k);
};