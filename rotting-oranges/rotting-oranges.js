/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0;
    const spread = (x, y) => {
        let res = [];
        if (x+1 < grid.length && grid[x+1][y] === 1) {
            grid[x+1][y] = 2;
            fresh--;
            res.push([x+1, y]);
        }
        if (x-1 >= 0 && grid[x-1][y] === 1) {
            grid[x-1][y] = 2;
            fresh--;
            res.push([x-1, y]);
        }
        if (grid[x][y+1] === 1) {
            grid[x][y+1] = 2;
            fresh--;
            res.push([x, y+1]);
        }
        if (grid[x][y-1] === 1) {
            grid[x][y-1] = 2;
            fresh--;
            res.push([x, y-1]);
        }
        return res;
    }
    const queue = [];
    let step = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            }
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    while (queue.length && fresh) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let [x, y] = queue.shift();
            queue.push(...spread(x, y));
        }
        step++;
    }
    return fresh === 0 ? step : -1;
};