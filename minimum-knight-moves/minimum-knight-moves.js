/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(a, b) {
    let count = 0;
    let dirs = [[-2, -1], [-2, +1], //up
               [-1, -2], [+1, -2], //left
               [+2, -1], [+2, +1], //down
               [-1, +2], [+1, +2]];
    let queue = [[0, 0]];
    const memo = {};
    while (queue.length) {
        let next = [];
        while (queue.length) {
            let [x, y] = queue.shift();
            if (x === a && y === b) return count;
            for (const [dx, dy] of dirs) {
                let futureX = x + dx, futureY = y + dy;
                if (!memo[`${futureX},${futureY}`]) {
                    next.push([futureX, futureY]);
                    memo[`${futureX},${futureY}`] = count;
                }
            }
        }
        queue = next;
        count ++;
    }
};