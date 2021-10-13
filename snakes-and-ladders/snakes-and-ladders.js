/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    board = board.reverse();
    const map = {'1':0};
    const queue = [1];
    const N = board.length; 
    const findLocation = (num) => {
        let row = Math.floor((num-1) / N);
        let column = (num-1) % N;
        column = row % 2 === 0 ? column : N - column - 1;
        return [row, column];
    }
    while (queue.length) {
        console.log(map)
        let curr = queue.shift();
        if (map[N*N]) return map[N*N];
        let step = map[curr] + 1;
        for (let i = curr+1; i <= Math.min(curr+6, N*N); i++) {
            let [x, y] = findLocation(i);
            let next = board[x][y] === -1 ? i : board[x][y];
            if (!map[next]) {
                map[next] = step;
                queue.push(next);
            } 
        }
    }
    return -1;
};