/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!i && !j) continue;
            let up = i ? grid[i-1][j] : grid[i][j-1] + 1;
            let left = j ? grid[i][j-1] : grid[i-1][j] + 1;
            grid[i][j] = Math.min(grid[i][j] + up, grid[i][j] + left);
        }
    }
    return grid[m-1][n-1];
};