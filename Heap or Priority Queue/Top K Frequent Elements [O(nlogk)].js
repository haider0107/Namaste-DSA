/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]]++;
    else map[nums[i]] = 1;
  }

  let pq = new MinPriorityQueue((x) => x.freq);

  for (let key in map) {
    pq.enqueue({ val: key, freq: map[key] });
    if (pq.size() > k) pq.dequeue();
  }

  return pq.toArray().map((ele) => Number(ele.val));
};
