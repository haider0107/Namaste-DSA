/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // find the middle
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the LL

  let reverse = null;

  while (slow) {
    let temp = slow.next;
    slow.next = reverse;
    reverse = slow;
    slow = temp;
  }

  // compare reverse and head

  while (reverse) {
    if (reverse.val != head.val) return false;

    reverse = reverse.next;
    head = head.next;
  }

  return true;
};
