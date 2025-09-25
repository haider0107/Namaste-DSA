/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let ans = 0;

  costs.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  let n = costs.length;

  for (let i = 0; i < n / 2; i++) {
    ans += costs[i][0];
  }
  for (let i = n / 2; i < n; i++) {
    ans += costs[i][1];
  }

  return ans;
};
