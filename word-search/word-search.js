/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const records = [];
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const go = (x, y, k) => {
        if (board[x][y] !== word[k]) return false;
        if (k === word.length - 1) return true;

        board[x][y] = '*'; // mark as visited
        for (const [dx, dy] of dirs) {
          const i = x + dx;
          const j = y + dy;
          if (i >= 0 && i < board.length && j >= 0 && j < board[0].length) {
            if (go(i, j, k + 1)) return true;
          }
        }
        board[x][y] = word[k]; // reset
        return false;
      };
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word[0] === board[i][j]) {
                if (go(i, j, 0)) return true;
            }
        }
    }
    return false;
};