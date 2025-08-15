/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  // if(!root) return root

  // let q = [root]

  // while (q.length) {
  //     let len = q.length

  //     let prev = q[0]
  //     for (let i = 0; i < len; i++) {
  //         let ele = q.shift()

  //         if(ele.right) q.push(ele.right)
  //         if(ele.left) q.push(ele.left)

  //         if (i !== 0) {
  //             ele.next = prev
  //             prev = ele
  //         }
  //     }
  // }

  // return root

  // Recursive

  if (!root) return root;

  function traversal(node) {
    if (!node.right) return;

    node.left.next = node.right;

    if (node.next) node.right.next = node.next.left;

    traversal(node.right);
    traversal(node.left);
  }

  traversal(root);

  return root;
};
