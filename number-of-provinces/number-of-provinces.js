/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let count = 0;
    const map = {};
    const dfs = (arr) => {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 1 && !map[j]) {
                map[j] = true;
                dfs(isConnected[j]);
            }
        }
    }
    for (let i = 0; i < isConnected.length; i++) {
        if (!map[i]) {
            dfs(isConnected[i]);
            count++;
        }
    }
    return count;
};