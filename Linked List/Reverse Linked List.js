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
var reverseList = function (head) {
  // if(head === null) return null

  // let curr = head
  // let future = head.next

  // curr.next = null

  // while(future){
  //     let temp = future

  //     future = temp.next

  //     temp.next = curr

  //     curr = temp
  // }

  // return curr

  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
