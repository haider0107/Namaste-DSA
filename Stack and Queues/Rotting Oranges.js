/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [];
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) queue.push([i, j, 0]);
    }
  }

  let maxlevel = 0;

  while (queue.length) {
    let [i, j, level] = queue.shift();

    if (i > 0 && grid[i - 1][j] == 1) {
      grid[i - 1][j] = 2;
      queue.push([i - 1, j, level + 1]);
    }

    if (i < m - 1 && grid[i + 1][j] == 1) {
      grid[i + 1][j] = 2;
      queue.push([i + 1, j, level + 1]);
    }

    if (j > 0 && grid[i][j - 1] == 1) {
      grid[i][j - 1] = 2;
      queue.push([i, j - 1, level + 1]);
    }

    if (j < n - 1 && grid[i][j + 1] == 1) {
      grid[i][j + 1] = 2;
      queue.push([i, j + 1, level + 1]);
    }
    // console.log(`${i} ${j} ${level}`)
    maxlevel = Math.max(level, maxlevel);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return maxlevel;
};
