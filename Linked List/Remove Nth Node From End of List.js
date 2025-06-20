/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /** 
    let fast = head
    let curr = head

    for(let i=1;i<n;i++){
        fast = fast.next
    }

    if(fast.next === null){
        // curr.next = curr.next===null ? null : curr.next.next

        return head.next
    }

    while(fast.next.next){
        curr = curr.next
        fast = fast.next
    }

    curr.next = curr.next.next

    return head

    */

  // with sentinal node

  let sentinal = new ListNode();
  sentinal.next = head;

  let fast = head;
  for (let i = 1; i < n; i++) fast = fast.next;

  let prev = sentinal;

  while (fast.next) {
    fast = fast.next;
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return sentinal.next;
};
