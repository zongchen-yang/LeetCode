/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    let res = 0;
    const parents = new Array(n).fill(0).map((e, i) => i);
    connections.sort((a, b) => a[2] - b[2]);
    const find = (i) => {
        if (parents[i] === i) return i;
        return parents[i] = find(parents[i]);
    }
    const union = (x, y) => {
        let p1 = find(x);
        let p2 = find(y);
        if (p1 !== p2) {
            parents[p1] = p2;
            n--;
        }
    }
    for (const [x, y, cost] of connections) {
        if (find(x) !== find(y)) {
            res += cost;
            union(x, y);
        }
    }
    return n === 1 ? res : -1;
};