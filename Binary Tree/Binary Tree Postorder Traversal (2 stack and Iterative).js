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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // let ans = [];

  // function traversal(node) {
  //     if (node === null) return;

  //     traversal(node.left);
  //     traversal(node.right);
  //     ans.push(node.val);
  // }

  // traversal(root);

  // return ans;

  if (!root) return [];

  let s1 = [root];
  let s2 = [];

  while (s1.length) {
    let curr = s1.pop();

    s2.push(curr);

    if (curr.left) s1.push(curr.left);
    if (curr.right) s1.push(curr.right);
  }

  let ans = [];

  while (s2.length) {
    ans.push(s2.pop().val);
  }

  return ans;
};
