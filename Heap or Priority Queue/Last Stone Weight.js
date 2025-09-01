/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let pq = new MaxPriorityQueue();

  for (let i = 0; i < stones.length; i++) {
    pq.enqueue(stones[i]);
  }

  while (pq.size() >= 2) {
    let x = pq.dequeue();
    let y = pq.dequeue();

    let temp;
    if (x === y) continue;
    else if (x > y) temp = x - y;
    else temp = y - x;

    pq.enqueue(temp);
  }

  if (pq.size() > 0) return pq.front();
  else return 0;
};
