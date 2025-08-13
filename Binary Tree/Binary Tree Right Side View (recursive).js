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
var rightSideView = function (root) {
  if (!root) return [];

  // let q = [root]

  let rightNode = [];

  // while (q.length) {
  //     let len = q.length

  //     for (let i = 0; i < len - 1; i++) {
  //         let ele = q.shift()

  //         if (ele.left) q.push(ele.left)
  //         if (ele.right) q.push(ele.right)
  //     }
  //     let ele = q.shift()
  //     rightNode.push(ele.val)

  //     if (ele.left) q.push(ele.left)
  //     if (ele.right) q.push(ele.right)
  // }

  // return rightNode

  let levelNodes = [];

  function traversal(node, i) {
    if (!node) return;

    if (levelNodes[i]) levelNodes[i].push(node.val);
    else levelNodes[i] = [node.val];

    traversal(node.left, i + 1);
    traversal(node.right, i + 1);
  }

  traversal(root, 0);

  for (let i = 0; i < levelNodes.length; i++) {
    rightNode.push(levelNodes[i].at(-1));
  }

  return rightNode;
};
