/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let res = false;

  let m = board.length;
  let n = board[0].length;

  function backtrack(pos, i, j) {
    if (pos === word.length) {
      res = true;
      return;
    }

    let original = board[i][j];
    board[i][j] = "#";
    if (i > 0 && board[i - 1][j] === word[pos]) {
      backtrack(pos + 1, i - 1, j);
    }
    if (i < m - 1 && board[i + 1][j] === word[pos]) {
      backtrack(pos + 1, i + 1, j);
    }
    if (j > 0 && board[i][j - 1] === word[pos]) {
      backtrack(pos + 1, i, j - 1);
    }
    if (j < n - 1 && board[i][j + 1] === word[pos]) {
      backtrack(pos + 1, i, j + 1);
    }
    board[i][j] = original;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word[0] === board[i][j]) {
        backtrack(1, i, j);
      }
    }
  }

  return res;
};



