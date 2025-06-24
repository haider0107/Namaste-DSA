/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let pre = new ListNode();
  pre.next = head;

  let preCopy = pre;

  let curr = head;
  let next = head.next;

  while (curr && next) {
    pre.next = next;
    curr.next = next.next;
    next.next = curr;

    pre = curr;
    curr = curr ? curr.next : null;
    next = curr ? curr.next : null;
  }

  return preCopy.next;
};
