/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]) {
        return 0;
    }
    let matrix = new Array(obstacleGrid.length).fill().map(() => new Array(obstacleGrid[0].length).fill(0));
    matrix[0][0] = 1;
    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[0].length; j++) {
            
            let up = i - 1 >= 0 && obstacleGrid[i - 1][j] !== 1 ? matrix[i - 1][j] : 0;
            let left = j - 1 >= 0 && obstacleGrid[i][j - 1] !== 1 ? matrix[i][j - 1] : 0;
            matrix[i][j] += +up + left;
        }
    }
    return matrix[obstacleGrid.length-1][obstacleGrid[0].length-1]
};