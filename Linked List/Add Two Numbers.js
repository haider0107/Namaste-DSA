/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // let newNode = new ListNode()

  // let curr = newNode
  // let carry = 0

  // while (l1 && l2) {
  //     let sum = l1.val + l2.val + carry

  //     carry = 0

  //     if (sum > 9) {
  //         carry = 1
  //         curr.val = sum % 10
  //     } else {
  //         curr.val = sum
  //     }
  //     if (l1.next || l2.next) {
  //         curr.next = new ListNode()
  //         curr = curr.next
  //     }

  //     l1 = l1.next
  //     l2 = l2.next
  // }

  // while (l1) {
  //     let sum = l1.val + carry

  //     carry = 0
  //     if (sum > 9) {
  //         carry = 1
  //         curr.val = sum % 10
  //     } else {
  //         curr.val = sum
  //     }
  //     if (l1.next) {
  //         curr.next = new ListNode()
  //         curr = curr.next
  //     }

  //     l1 = l1.next

  // }

  // while (l2) {
  //     let sum = l2.val + carry

  //     carry = 0
  //     if (sum > 9) {
  //         carry = 1
  //         curr.val = sum % 10
  //     } else {
  //         curr.val = sum
  //     }
  //     if (l2.next) {
  //         curr.next = new ListNode()
  //         curr = curr.next
  //     }
  //     l2 = l2.next
  // }

  // if(carry === 1){
  //     curr.next = new ListNode()
  //     curr.next.val = 1
  // }

  // return newNode
  let ans = new ListNode();
  let ansCopy = ans;

  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = sum > 9 ? 1 : 0;
    let newNode = new ListNode();
    newNode.val = sum % 10;

    ans.next = newNode;
    ans = ans.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return ansCopy.next;
};
