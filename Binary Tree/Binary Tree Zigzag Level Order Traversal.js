/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let q = [root];
  let level = 0;

  let res = [];

  while (q.length) {
    let len = q.length;
    let val = [];
    for (let i = 0; i < len; i++) {
      let ele = q.shift();

      if (ele.left) q.push(ele.left);
      if (ele.right) q.push(ele.right);

      if (level % 2 === 1) val.unshift(ele.val);
      else val.push(ele.val);
    }
    res.push(val);
    level++;
  }

  return res;
};
