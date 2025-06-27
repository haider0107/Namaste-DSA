/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let small = new ListNode();
  let greater = new ListNode();

  let sCopy = small;
  let gCopy = greater;

  while (head) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      greater.next = head;
      greater = greater.next;
    }
    head = head.next;
  }

  small.next = gCopy.next;
  greater.next = null;

  return sCopy.next;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
