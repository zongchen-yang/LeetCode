/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.n = n;
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diag = 0;
    this.antidia = 0;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    let move = player === 1 ? 1 : -1;
    this.rows[row] += move;
    this.cols[col] += move;
    if (row === col) this.diag += move;
    if (this.n - 1 - col === row) this.antidia += move;
    
    if (
      Math.abs(this.rows[row]) === this.n ||
      Math.abs(this.cols[col]) === this.n ||
      Math.abs(this.diag) === this.n ||
      Math.abs(this.antidia) === this.n
    ) return player;
    
    return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */