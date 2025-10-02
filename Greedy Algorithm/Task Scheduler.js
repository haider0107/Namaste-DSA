/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let maxFreq = 0;
  let map = {};

  let ans = 0;

  for (let i = 0; i < tasks.length; i++) {
    let t = tasks[i];

    if (map[t]) map[t]++;
    else map[t] = 1;

    maxFreq = Math.max(maxFreq, map[t]);
  }

  let maxFreqletters = 0;

  for (let ele in map) {
    if (map[ele] === maxFreq) maxFreqletters++;
  }

  let cycle = (n + 1) * (maxFreq - 1) + maxFreqletters;

  return Math.max(tasks.length, cycle);
};
