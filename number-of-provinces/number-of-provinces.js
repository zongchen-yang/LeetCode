/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let count = 0;
    const map = {};
    const dfs = (con) => {
        for (let i = 0; i < con.length; i++) {
            if (con[i] === 1 && !map[i]) {
                map[i] = true;
                dfs(isConnected[i])
            }
        }
    }
    for (let i = 0; i < isConnected.length; i++) {
        if (!map[i]) {
            count++;
            dfs(isConnected[i]);
        }
    }
    return count;
};