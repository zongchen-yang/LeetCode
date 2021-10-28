/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    const checkMoves = () => {
        let x = 0;
        let o = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === 'X') x++;
                if (board[i][j] === 'O') o++;
            }
        }
        return x - o === 1 || x - o === 0;
    }
    const checkBoard = () => {
        let rows = new Array(3).fill(0);
        let cols = new Array(3).fill(0);
        let dia = 0;
        let antidia = 0;
        let winner;
        let sum = 0;
        
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === ' ') continue;
                let score = board[i][j] === 'X' ? 1 : -1
                sum += score;
                rows[i] += score;
                cols[j] += score;
                if (i === j) dia += score;
                if (i === 2 - j) antidia += score;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (Math.abs(rows[i]) === 3) {
                if (checkWinner(winner, rows[i])) return false;
                winner = rows[i];
            }
            if (Math.abs(cols[i]) === 3) {
                if (checkWinner(winner, cols[i])) return false;
                winner = cols[i];
            }
        }
        if (Math.abs(dia) === 3) {
            if (checkWinner(winner, dia)) return false;
            winner = dia;
        }
        if (Math.abs(antidia) === 3) {
            if (checkWinner(winner, antidia)) return false;
            winner = antidia;
        }
        if (winner === 3 && sum === 0) return false;
        if (winner === -3 && sum === 1) return false;
        return true;
    }
    const checkWinner = (winner, contestant) => {
        return winner && winner !== contestant;
    }
    return checkMoves() && checkBoard();
};