/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    let res = 0;
    connections = connections.sort((a, b) => a[2] - b[2]);
    let parents = [...new Array(n).keys()];
    const find = (i) => {
        while (parents[i] !== i) i = parents[i];
        return i;
    }
    for (let [x, y, cost] of connections) {
        let foundX = find(x);
        let foundY = find(y);
        if (foundX !== foundY) {
            n--;
            parents[foundX] = foundY;
            res += cost;
        }
    }
    
    return n === 1 ? res : -1;
};