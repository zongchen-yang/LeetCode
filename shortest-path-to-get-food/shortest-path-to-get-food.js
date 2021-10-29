/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function(grid) {
    const q = [];
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '*') {
                q.push([i, j]);
            }
        }
    }
    while (q.length) {
        let len = q.length;
        count ++;
        for (let i = 0; i < len; i++) {
            let [x, y] = q.shift();
            for (const [dx, dy] of dirs) {
                let tempX = x + dx;
                let tempY = y + dy;
                if (grid[tempX] && grid[tempX][tempY] === '#') return count;
                if (tempX >= 0 && tempY >= 0 && tempX < grid.length && tempY < grid[0].length && grid[tempX][tempY] === 'O') {
                    grid[tempX][tempY] = 'X';
                    q.push([tempX, tempY]);
                }
            }
        }
    }
    return -1;
};