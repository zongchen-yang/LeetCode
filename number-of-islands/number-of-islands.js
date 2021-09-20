/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const findIsland = (x, y) => {
        if (grid[x][y] === '0') {
            return;
        }
        if (grid[x][y] === '1') {
            grid[x][y] = '0';
        }
        if (x > 0) {
            findIsland(x-1, y);
        }
        if (y > 0) {
            findIsland(x, y-1);
        }
        if (x < grid.length - 1) {
            findIsland(x+1, y);
        }
        if (y < grid[0].length - 1) {
            findIsland(x, y+1);
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                findIsland(i, j);
            }
        }
    }
    return count;
};