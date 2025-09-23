/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];

  let board = [];

  for (let i = 0; i < n; i++) {
    board[i] = [];
    for (let j = 0; j < n; j++) {
      board[i][j] = ".";
    }
  }

  function bt(row, setCol, setDig, setAntidig) {
    if (row === n) {
      res.push(transform(board));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (setCol.has(i) || setDig.has(row - i) || setAntidig.has(row + i)) {
        continue;
      }

      board[row][i] = "Q";
      setCol.add(i);
      setDig.add(row - i);
      setAntidig.add(row + i);

      bt(row + 1, setCol, setDig, setAntidig);

      board[row][i] = ".";
      setCol.delete(i);
      setDig.delete(row - i);
      setAntidig.delete(row + i);
    }
  }

  bt(0, new Set(), new Set(), new Set());

  return res;
};

function transform(board) {
  let newBoard = [];

  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(""));
  }

  return newBoard;
}
