/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  /*
    
    let store = new Set()

    while(headA){
        store.add(headA)
        headA = headA.next
    }

    while(headB){
        if(store.has(headB)) return headB

        headB = headB.next
    }

    return null
    */

  // Approach 2
  /* 
    let lenA = 0
    let lenB = 0

    let curr = headA

    while (curr) {
        lenA++
        curr = curr.next
    }
    curr = headB
    while (curr) {
        lenB++
        curr = curr.next
    }

    if (lenA > lenB) {
        let diff = lenA - lenB
        for (let i = 0; i < diff; i++) {
            headA = headA.next
        }
    } else {
        let diff = lenB - lenA
        for (let i = 0; i < diff; i++) {
            headB = headB.next
        }
    }

    while (headA) {
        if (headA === headB) return headA
        headA = headA.next
        headB = headB.next
    }

    return null
    */

  let pA = headA;
  let pB = headB;

  while (pA != pB) {
    pA = pA == null ? headB : pA.next;
    pB = pB == null ? headA : pB.next;
  }

  return pA;
};
