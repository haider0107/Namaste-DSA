/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temp) {
  let stack = [];
  let ans = new Array(temp.length).fill(0);

  stack.push(temp.length - 1);

  for (let i = temp.length - 2; i >= 0; i--) {
    while (stack.length) {
      if (temp[stack.at(-1)] > temp[i]) {
        ans[i] = stack.at(-1) - i;
        break;
      }
      stack.pop();
    }

    stack.push(i);
  }

  return ans;
};
