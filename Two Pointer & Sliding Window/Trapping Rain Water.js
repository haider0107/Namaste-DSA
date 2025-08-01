/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;

  let maxR = new Array(n);
  maxR[n - 1] = height.at(-1);

  let maxL = [height[0]];

  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(height[i], maxL[i - 1]);
    maxR[n - 1 - i] = Math.max(height[n - 1 - i], maxR[n - i]);
  }

  // console.log(maxL)
  // console.log(maxR)

  let total = 0;
  for (let i = 0; i < n; i++) {
    let water = Math.min(maxL[i], maxR[i]) - height[i];
    total += Math.max(0, water);
  }

  return total;
};
