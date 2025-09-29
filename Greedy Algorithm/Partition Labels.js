/*
My code

var partitionLabels = function (s) {
    let map = {}

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]][1] = i + 1
        } else {
            map[s[i]] = [i + 1]
        }
    }

    let intervals = []

    for (let i in map) {
        intervals.push(map[i])
    }

    // console.log(intervals)

    let ans = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].length === 1) {
            if (ans.at(-1).length > 1 && ans.at(-1)[1] >= intervals[i]) continue
            else ans.push(intervals[i])
        }
        else if (ans.at(-1).length > 1 && intervals[i][0] <= ans.at(-1)[1]) {
            ans.at(-1)[1] = Math.max(ans.at(-1)[1], intervals[i][1])
        } else {
            ans.push(intervals[i])
        }
    }

    console.log(ans)

    return ans.map((ele) => {
        if (ele.length === 1) return 1
        else return ele[1] - ele[0] + 1
    })
};
*/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let last = {};
  let ans = [];

  for (let i = 0; i < s.length; i++) {
    last[s[i]] = i;
  }

  let start = (end = 0);

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]]);

    if (end === i) {
      ans.push(end - start + 1);
      start = i + 1;
    }
  }

  return ans;
};
