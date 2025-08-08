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
var levelOrder = function (root) {
  // if(!root) return []

  // let ans = []
  // let queue = [root]

  // while (queue.length) {
  //     let l = queue.length
  //     let level = []
  //     for (let i = 0; i < l; i++) {
  //         let ele = queue.shift()

  //         if(ele.left) queue.push(ele.left)
  //         if(ele.right) queue.push(ele.right)

  //         level.push(ele.val)
  //     }

  //     ans.push(level)
  // }

  // return ans
  if (!root) return [];

  let ans = [];

  function traversal(node, i) {
    if (!node) return;

    if (ans[i]) ans[i].push(node.val);
    else ans[i] = [node.val];

    traversal(node.left, i + 1);
    traversal(node.right, i + 1);
  }

  traversal(root, 0);

  return ans;
};
