/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < board.length; i++) {
        let row = new Set();
        let col = new Set();
        let box = new Set();
        for (let j = 0; j < board[0].length; j++) {
            let _row = board[i][j];
            let _col = board[j][i];
            let _box = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + j%3];
            if (_row !== '.') {
                if (row.has(_row)) return false;
                row.add(_row);
            }
            if (_col !== '.') {
                if (col.has(_col)) return false;
                col.add(_col);
            }
            if (_box !== '.') {
                if (box.has(_box)) return false;
                box.add(_box);
            }
        }
    }
    return true;
};