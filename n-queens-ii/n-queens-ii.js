/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;
    const findCount = (board, row) => {
        if (row === n) {
            count ++;
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!board.some((c, ind) => c === i || c === i + row - ind || c === i - row + ind)) {
                board.push(i);
                findCount(board, row + 1)
                board.pop();
            }
        }
        
    }
    findCount([], 0);
    return count;
};